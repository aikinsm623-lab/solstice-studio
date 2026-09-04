import Link from "next/link";
import { projects } from "@/lib/projects";

export default function SelectedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section className="container-wide py-20 lg:py-28 border-t border-line">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <h2 className="text-[28px] lg:text-[34px] leading-[1.1] text-ink max-w-[16ch]">
          Four houses, four light conditions
        </h2>
        <Link
          href="/projects"
          className="text-[14.5px] text-umber hover:text-ink whitespace-nowrap"
        >
          View all projects
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line">
        {featured.map((project) => (
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
              <h3 className="text-[20px] text-ink group-hover:text-bronze transition-colors">
                {project.name}
              </h3>
              <p className="text-[13.5px] text-bronze">
                {project.location} — {project.year}
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
