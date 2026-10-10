import { useCallback, useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX, X } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StoryViewer({ start, onClose }: { start: number; onClose: () => void }) {
  const [index, setIndex] = useState(start);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const story = testimonials[index];

  const go = useCallback(
    (next: number) => {
      if (next < 0) {
        // first story: restart it instead of leaving the viewer
        if (videoRef.current) videoRef.current.currentTime = 0;
        setProgress(0);
        return;
      }
      if (next >= testimonials.length) return onClose();
      setIndex(next);
      setProgress(0);
      setPaused(false);
    },
    [onClose],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  // Autoplay with sound is allowed right after the click that opened the viewer;
  // fall back to muted if the browser still refuses.
  const handleLoaded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      v.play().catch(() => setPaused(true));
    });
  };

  const togglePause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPaused(false)).catch(() => {});
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" />
      <Dialog.Content
        aria-describedby={undefined}
        className="fixed inset-0 z-50 flex items-center justify-center p-0 outline-none sm:p-4"
      >
        <Dialog.Title className="sr-only">
          Client testimonial {index + 1} of {testimonials.length}
        </Dialog.Title>

        <div className="relative h-full w-full overflow-hidden bg-black sm:aspect-[9/16] sm:h-[min(92vh,820px)] sm:w-auto sm:rounded-2xl">
          {/* blurred poster fills the bars around landscape videos */}
          <img
            src={story.poster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl"
          />
          <video
            key={story.id}
            ref={videoRef}
            src={story.video}
            poster={story.poster}
            muted={muted}
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-contain"
            onLoadedData={handleLoaded}
            onTimeUpdate={(e) => {
              const v = e.currentTarget;
              if (v.duration) setProgress(v.currentTime / v.duration);
            }}
            onEnded={() => go(index + 1)}
            onPlay={() => setPaused(false)}
          >
            {story.captions && <track kind="captions" src={story.captions} srcLang="en" label="English" default />}
          </video>

          {/* tap zones: left = previous, centre = pause, right = next */}
          <div className="absolute inset-x-0 bottom-0 top-20 flex">
            <button aria-label="Previous video" className="h-full w-1/4" onClick={() => go(index - 1)} />
            <button aria-label={paused ? "Play" : "Pause"} className="h-full flex-1" onClick={togglePause} />
            <button aria-label="Next video" className="h-full w-1/4" onClick={() => go(index + 1)} />
          </div>

          {paused && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-black/50 p-5 text-white">
                <Play className="h-8 w-8 fill-current" />
              </span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-3 pb-10 pt-3">
            <div className="flex gap-1">
              {testimonials.map((t, i) => (
                <div key={t.id} className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                  <div
                    className="h-full bg-white"
                    style={{ width: `${i < index ? 100 : i === index ? progress * 100 : 0}%` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-white">{story.name}</p>
          </div>

          <div className="absolute right-3 top-8 flex gap-2">
            <button
              aria-label={muted ? "Unmute" : "Mute"}
              onClick={() => setMuted((m) => !m)}
              className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            <Dialog.Close aria-label="Close" className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
        </div>

        {/* desktop arrows outside the frame */}
        <button
          aria-label="Previous video"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="absolute left-[max(1rem,calc(50%-18rem))] hidden rounded-full bg-white/15 p-3 text-white hover:bg-white/25 disabled:opacity-30 md:block"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next video"
          onClick={() => go(index + 1)}
          className="absolute right-[max(1rem,calc(50%-18rem))] hidden rounded-full bg-white/15 p-3 text-white hover:bg-white/25 md:block"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function TestimonialStories() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className="flex gap-4 overflow-x-auto pb-4 pt-1 [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <li key={t.id} className="shrink-0">
            <button
              onClick={() => setOpen(i)}
              aria-label={`Watch testimonial ${i + 1}: ${t.name}`}
              className="group flex w-32 flex-col items-center text-center sm:w-40"
            >
              <span className="rounded-2xl bg-gradient-to-tr from-red-600 via-red-500 to-blue-700 p-[3px] transition-transform group-hover:scale-[1.03]">
                <span className="relative block aspect-[9/14] w-[7.5rem] overflow-hidden rounded-[13px] border-2 border-white bg-navy sm:w-[9.5rem]">
                  <img src={t.poster} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                    <span className="rounded-full bg-white/90 p-3 text-red-600 shadow">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  </span>
                </span>
              </span>
              <span className="mt-3 text-sm font-bold text-navy">{t.name}</span>
              <span className="text-xs text-slate-500">Watch story</span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        {open !== null && <StoryViewer start={open} onClose={() => setOpen(null)} />}
      </Dialog.Root>
    </>
  );
}
