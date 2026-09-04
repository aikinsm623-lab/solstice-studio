import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="container-wide py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-display text-[18px] text-ink">
            Solstice Studio
          </span>
          <p className="text-[14px] text-slate max-w-[34ch] leading-relaxed">
            Residential architecture practice based in Portland, Oregon,
            working primarily across the Pacific Northwest.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-[14px]">
          <span className="text-umber mb-1">Studio</span>
          <Link href="/projects" className="text-slate hover:text-ink">
            Projects
          </Link>
          <Link href="/studio" className="text-slate hover:text-ink">
            Studio &amp; Process
          </Link>
          <Link href="/contact" className="text-slate hover:text-ink">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-2.5 text-[14px]">
          <span className="text-umber mb-1">Direct</span>
          <a
            href="mailto:studio@solsticestudio.example"
            className="text-slate hover:text-ink"
          >
            studio@solsticestudio.example
          </a>
          <span className="text-slate">503 555 0148</span>
          <span className="text-slate">Portland, Oregon</span>
        </div>
      </div>

      <div className="container-wide py-6 border-t border-line text-[12.5px] text-slate flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Solstice Studio</span>
        <span>A residential architecture practice, est. 2016</span>
      </div>
    </footer>
  );
}
