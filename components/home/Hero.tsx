import Link from "next/link";
import SolarStudy from "@/components/three/SolarStudy";

export default function Hero() {
  return (
    <section className="container-wide grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="flex flex-col justify-center gap-7">
        <p className="text-[13.5px] text-bronze font-medium">
          Solstice Studio
        </p>
        <h1 className="text-[38px] sm:text-[46px] lg:text-[56px] leading-[1.04] text-ink max-w-[11ch]">
          Residential architecture shaped by light.
        </h1>
        <p className="text-[17px] leading-relaxed text-umber max-w-[38ch]">
          We design for the hours you&apos;ll actually live in. Every plan
          starts as a solar study, not a floor plan — where the sun falls at
          7am in January matters more to us than a rendering at golden hour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center px-5 py-3 bg-ink text-paper text-[14.5px] hover:bg-bronze transition-colors"
          >
            View the practice
          </Link>
          <Link
            href="/studio"
            className="inline-flex w-fit items-center px-5 py-3 border border-line-strong text-[14.5px] text-umber hover:text-ink hover:border-ink transition-colors"
          >
            Our process
          </Link>
        </div>

        <dl className="flex gap-8 pt-6 mt-2 border-t border-line text-[13px] text-slate">
          <div className="flex flex-col gap-1">
            <dt className="sr-only">Homes completed</dt>
            <dd className="text-ink text-[14.5px] font-medium">14</dd>
            <dt>homes completed</dt>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="sr-only">Primary region</dt>
            <dd className="text-ink text-[14.5px] font-medium">
              Pacific Northwest
            </dd>
            <dt>primary region</dt>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="sr-only">Founded</dt>
            <dd className="text-ink text-[14.5px] font-medium">
              2016, Portland
            </dd>
            <dt>studio founded</dt>
          </div>
        </dl>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-[13px] text-umber mb-3">
          A light study, drag the time slider
        </p>
        <SolarStudy />
      </div>
    </section>
  );
}
