import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/FadeIn";
import {
  ArrowRight, CheckCircle2, FileSearch, Quote, Search,
  FileText, ShieldCheck, ClipboardList, Compass, BadgeCheck, ClipboardCheck,
  Users, Rocket, Target, PenLine, Send, Trophy,
} from "lucide-react";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F6d9a87deca784f62bd00462b023bb1a9%2F7a794daf8d624b55848638ad5083f0cf?format=webp&width=800&height=1200";

const timeline = [
  ["01", "Get started", "Christopher Fernando began working with FGA to pursue government contracting opportunities.", Rocket],
  ["02", "Identify opportunities", "FGA helped identify and evaluate opportunities aligned with the client’s objectives.", Target],
  ["03", "Review requirements", "Solicitation requirements, documentation, compliance considerations, and submission requirements were reviewed.", FileSearch],
  ["04", "Develop the proposal", "FGA provided proposal development support and helped organize the submission materials.", PenLine],
  ["05", "Submit", "The client and FGA worked through the required submission process and deadlines.", Send],
  ["06", "Contract award", "Approximately three months after beginning the process, Christopher received a government contract award.", Trophy],
] as const;

const services = [
  [Search, "Opportunity Sourcing", "Identify opportunities and review solicitations."],
  [FileText, "Proposal Development", "Develop and organize professional proposals."],
  [ShieldCheck, "Compliance Guidance", "Address solicitation requirements with confidence."],
  [ClipboardList, "Capability Statements", "Create a strong introduction to your business."],
  [Compass, "Contracting Strategy", "Strategic guidance for government opportunities."],
  [BadgeCheck, "Registration & Certification", "Navigate government registration processes."],
  [ClipboardCheck, "Bid Development", "Dedicated support throughout the bid process."],
  [Users, "Administrative Support", "Organize documentation, deadlines, and submissions."],
] as const;

export default function Index() {
  const videoRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-[#f7f9fc] text-charcoal">
      <div className="h-1 bg-red-600" />
      <main>
        <section className="border-b border-blue-100 bg-white">
          <div className="container grid gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                  <span className="h-px w-10 bg-red-600" /> Client success story
                </div>
                <p className="mt-7 text-sm font-semibold text-blue-700">FGA | Federal Government Advisors</p>
                <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[4.25rem]">
                  From first steps to a government contract award in approximately <span className="text-red-600">90 days.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                  Federal Government Advisors is proud to share how client Christopher Fernando pursued an opportunity with practical strategy, proposal development, and hands-on support.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="bg-red-600 font-semibold text-white hover:bg-red-700">
                    <a href="#client-success">Read the story <ArrowRight className="h-4 w-4" /></a>
                  </Button>
                  <a href="#services" className="text-sm font-bold text-navy underline decoration-red-600 decoration-2 underline-offset-4">Explore FGA services</a>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-blue-100 pt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> Real client</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> Real opportunity</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> Real award</span>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/10">
                <div className="absolute left-0 top-0 h-2 w-full bg-red-600" />
                <img src={logoUrl} alt="Federal Government Advisors logo" className="mx-auto mt-2 h-52 w-full object-contain sm:h-64" />
                <div className="mt-4 border-t border-blue-100 pt-5 text-center">
                  <p className="text-6xl font-extrabold tracking-tight text-navy">~90</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-red-600">days to contract award</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">A client success milestone worth sharing.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <article id="client-success" className="scroll-mt-20">
          <div className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
            <div className="max-w-3xl">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <span>Client spotlight</span><span className="text-red-600">•</span><span>Federal contracting</span><span className="text-red-600">•</span><span>FGA editorial</span>
                </div>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Christopher Fernando’s FGA success story</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">The path to a government contract begins with preparation. This is the story of a real FGA client, the work behind the submission, and a contract award reached approximately three months after the process began.</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div ref={videoRef} className="mt-10 overflow-hidden rounded-xl bg-navy shadow-xl shadow-blue-900/15">
                  <div className="relative aspect-video"><iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/TEaNq2qthjQ" title="Christopher Fernando's FGA Success Story" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
                </div>
                <p className="mt-3 text-xs text-slate-500">Watch Christopher Fernando share his experience working with Federal Government Advisors.</p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="prose prose-slate mt-12 max-w-none">
                  <p className="text-lg leading-relaxed">Christopher began working with FGA with the objective of pursuing government contracting opportunities. Together, the client and FGA reviewed the opportunity, organized the requirements, developed the proposal materials, and worked through the submission process.</p>
                  <p className="text-lg leading-relaxed">Approximately three months after beginning the process with FGA, Christopher received a government contract award. The award was made by the applicable government agency—not by FGA—and represents the result of preparation, participation, and a focused submission.</p>
                </div>
              </FadeIn>
            </div>
            <aside className="lg:pt-10">
              <FadeIn delay={0.2}>
                <div className="sticky top-28 border-t-4 border-red-600 bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">At a glance</p>
                  <div className="mt-6 space-y-5">
                    <div><p className="text-4xl font-extrabold text-navy">~90</p><p className="text-sm text-slate-500">days from starting with FGA to award</p></div>
                    <div className="border-t border-blue-100 pt-5"><p className="text-4xl font-extrabold text-navy">1</p><p className="text-sm text-slate-500">government contract award</p></div>
                    <div className="border-t border-blue-100 pt-5"><p className="text-sm font-bold text-navy">Christopher Fernando</p><p className="text-sm text-slate-500">FGA client</p></div>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </article>

        <section className="border-y border-blue-100 bg-white py-16 md:py-20">
          <div className="container">
            <FadeIn className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">The process</p><h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">How the opportunity came together</h2><p className="mt-4 text-slate-600">A clear view of the work and decisions that supported this client milestone.</p></FadeIn>
            <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {timeline.map(([number, title, text, Icon], i) => <FadeIn key={number} delay={i * 0.06}><div className="border-t-2 border-blue-100 pt-5"><div className="flex items-center justify-between"><span className="text-sm font-extrabold text-red-600">{number}</span><Icon className="h-5 w-5 text-blue-700" /></div><h3 className="mt-4 text-lg font-bold capitalize text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div></FadeIn>)}
            </div>
          </div>
        </section>

        <section id="about" className="container scroll-mt-20 py-16 md:py-24">
          <FadeIn className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">The FGA approach</p><h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Government contracting support built around the opportunity</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Federal Government Advisors is a government contracting consulting and proposal development company that assists businesses pursuing opportunities with government agencies.</p></FadeIn>
          <div id="services" className="mt-12 grid scroll-mt-24 gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(([Icon, title, text], i) => <FadeIn key={title} delay={(i % 4) * 0.05}><div className="h-full border border-blue-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"><Icon className="h-6 w-6 text-red-600" /><h3 className="mt-5 font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div></FadeIn>)}</div>
        </section>

        <section className="bg-navy py-16 text-white md:py-20"><div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"><FadeIn><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Why this story matters</p><h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">More than a contract award.</h2></FadeIn><FadeIn delay={0.12}><div className="border-l-4 border-red-500 pl-6"><Quote className="h-7 w-7 text-red-300" /><p className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">“Real clients. Real opportunities. Real contract awards.”</p><p className="mt-5 leading-relaxed text-white/70">Every opportunity is different. FGA’s objective is to give businesses the professional infrastructure, guidance, and support they need to compete effectively.</p></div></FadeIn></div></section>

        <section id="contact" className="scroll-mt-20 bg-red-600 py-16 text-white md:py-20"><div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><FadeIn><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Take the next step</p><h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">Ready to pursue government contracting opportunities?</h2><p className="mt-4 max-w-xl text-white/80">FGA helps businesses navigate opportunity sourcing, solicitation review, proposal development, compliance guidance, and hands-on support.</p></FadeIn><FadeIn delay={0.1}><Button size="lg" className="shrink-0 bg-white font-bold text-red-600 hover:bg-blue-50" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Talk With FGA <ArrowRight className="h-4 w-4" /></Button></FadeIn></div></section>

        <section className="bg-white py-10"><div className="container max-w-4xl text-center"><p className="text-xs font-bold uppercase tracking-[0.15em] text-navy">Important notice</p><p className="mt-3 text-xs leading-relaxed text-slate-500">Government contracts are awarded solely at the discretion of the applicable government agency. Results vary by client, opportunity, qualifications, pricing, competition, and other factors. Past client results do not guarantee future contract awards.</p><p className="mt-2 text-xs leading-relaxed text-slate-500">FGA does not make government contract award decisions. Government agencies independently evaluate proposals and determine contract awards.</p></div></section>
      </main>
    </div>
  );
}
