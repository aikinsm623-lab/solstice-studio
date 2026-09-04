import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container-wide py-16 lg:py-24">
      <Link
        href="/projects"
        className="text-[13.5px] text-umber hover:text-ink"
      >
        All projects
      </Link>

      <header className="mt-8 mb-12 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-end">
        <h1 className="text-[34px] lg:text-[48px] leading-[1.05] text-ink">
          {project.name}
        </h1>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13.5px] border-t border-line pt-4">
          <div>
            <dt className="text-slate">Location</dt>
            <dd className="text-ink mt-0.5">{project.location}</dd>
          </div>
          <div>
            <dt className="text-slate">Year</dt>
            <dd className="text-ink mt-0.5">{project.year}</dd>
          </div>
          <div>
            <dt className="text-slate">Category</dt>
            <dd className="text-ink mt-0.5">{project.category}</dd>
          </div>
          <div>
            <dt className="text-slate">Size</dt>
            <dd className="text-ink mt-0.5">{project.size}</dd>
          </div>
        </dl>
      </header>

      <div
        className="w-full aspect-[16/8] mb-16"
        style={{ background: project.swatch }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 mb-20">
        <h2 className="text-[22px] lg:text-[26px] leading-[1.15] text-ink max-w-[16ch]">
          The light story
        </h2>
        <p className="text-[17px] leading-relaxed text-umber max-w-[62ch]">
          {project.lightStory}
        </p>
      </div>

      <div className="max-w-[68ch] flex flex-col gap-6 mb-24">
        {project.narrative.map((paragraph, i) => (
          <p key={i} className="text-[16px] leading-relaxed text-slate">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="border-t border-line pt-10 flex items-center justify-between">
        <span className="text-[13.5px] text-slate">Next project</span>
        <Link
          href={`/projects/${next.slug}`}
          className="text-[19px] text-ink hover:text-bronze"
        >
          {next.name}
        </Link>
      </div>
    </article>
  );
}
