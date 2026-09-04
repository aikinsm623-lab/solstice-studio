import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected residential projects from Solstice Studio, each built around a specific solar and site condition.",
};

export default function ProjectsPage() {
  return (
    <section className="container-wide py-16 lg:py-24">
      <div className="max-w-[52ch] mb-14">
        <p className="text-[13.5px] text-bronze font-medium mb-4">Projects</p>
        <h1 className="text-[34px] lg:text-[44px] leading-[1.06] text-ink mb-5">
          Every house here started as a light study.
        </h1>
        <p className="text-[16px] leading-relaxed text-umber">
          Fourteen homes across the Pacific Northwest, each shaped by its
          site&apos;s specific solar path, slope, and tree line. The four
          below represent the range of conditions we design for most often.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-line">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border-b border-r border-line p-8 lg:p-10 flex flex-col gap-5 hover:bg-paper transition-colors"
          >
            <div
              className="w-full aspect-[4/3]"
              style={{ background: project.swatch }}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-[21px] text-ink group-hover:text-bronze transition-colors">
                  {project.name}
                </h2>
                <span className="text-[12.5px] text-slate whitespace-nowrap">
                  {project.category}
                </span>
              </div>
              <p className="text-[13.5px] text-bronze">
                {project.location} — {project.year} — {project.size}
              </p>
              <p className="text-[14px] text-slate leading-relaxed mt-1">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
