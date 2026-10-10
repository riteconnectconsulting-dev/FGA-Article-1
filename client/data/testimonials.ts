export interface Testimonial {
  id: string;
  /** TODO: real client names are pending from FGA; shown as the story label. */
  name: string;
  video: string;
  poster: string;
  /** WebVTT captions. Omitted when the captions are already burned into the video. */
  captions?: string;
}

export const testimonials: Testimonial[] = [
  { id: "video-1", name: "Joel Polanco", video: "/testimonials/web/video-1.mp4", poster: "/testimonials/web/video-1.jpg" },
  { id: "video-2", name: "FGA client", video: "/testimonials/web/video-2.mp4", poster: "/testimonials/web/video-2.jpg", captions: "/testimonials/web/video-2.vtt" },
  { id: "video-3", name: "Ted Sun", video: "/testimonials/web/video-3.mp4", poster: "/testimonials/web/video-3.jpg", captions: "/testimonials/web/video-3.vtt" },
  { id: "video-4", name: "FGA client", video: "/testimonials/web/video-4.mp4", poster: "/testimonials/web/video-4.jpg", captions: "/testimonials/web/video-4.vtt" },
];
