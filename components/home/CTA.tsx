import Link from "next/link";

export default function CTA() {
  return (
    <section className="container-wide py-20 lg:py-28 border-t border-line">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h2 className="text-[30px] lg:text-[40px] leading-[1.08] text-ink max-w-[18ch]">
          Bring us a site, and we&apos;ll bring you the hours it&apos;s good
          for.
        </h2>
        <Link
          href="/contact"
          className="inline-flex w-fit items-center px-6 py-3.5 bg-ink text-paper text-[15px] hover:bg-bronze transition-colors whitespace-nowrap"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
