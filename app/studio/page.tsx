import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Solstice Studio is a small residential architecture practice in Portland, Oregon, founded on the idea that solar orientation should drive design before floor plans do.",
};

const TEAM = [
  {
    name: "Mara Odell",
    role: "Founding Principal",
    bio: "Trained as an architect and, before that, spent four years doing daylighting analysis for a commercial lighting consultancy — the two combined into Solstice's founding premise.",
  },
  {
    name: "Theo Bram",
    role: "Principal, Construction",
    bio: "Runs construction administration on every project. Spent a decade as a general contractor before returning to architecture, and still visits every framing walkthrough personally.",
  },
  {
    name: "Priya Nair",
    role: "Associate",
    bio: "Leads the studio's solar and site studies, and built the modeling workflow the practice now uses on every new commission.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="container-wide py-16 lg:py-24">
        <div className="max-w-[56ch]">
          <p className="text-[13.5px] text-bronze font-medium mb-4">Studio</p>
          <h1 className="text-[34px] lg:text-[46px] leading-[1.06] text-ink mb-6">
            We started this practice because most houses treat light as
            decoration.
          </h1>
          <p className="text-[16px] leading-relaxed text-umber mb-4">
            Solstice Studio was founded in 2016 by Mara Odell, an architect
            who spent her early career doing daylighting analysis for
            commercial buildings — the discipline of calculating, precisely,
            how sun moves through a space across a year. She kept noticing
            that residential architecture rarely applied the same rigor.
          </p>
          <p className="text-[16px] leading-relaxed text-umber">
            Ten years later, the studio is still small — three principals and
            a rotating group of consultants — and every project still begins
            the same way it did on day one: with a solar study of the actual
            site, run before a single wall gets drawn.
          </p>
        </div>
      </section>

      <section className="container-wide py-16 lg:py-24 border-t border-line">
        <h2 className="text-[26px] lg:text-[32px] text-ink mb-12 max-w-[18ch]">
          How we actually work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-[17px] text-ink">
              We study the site before the client&apos;s wish list
            </h3>
            <p className="text-[14.5px] leading-relaxed text-slate">
              A solar and shade study — including existing trees and
              neighboring structures — happens before we discuss room
              counts. It shapes what&apos;s possible before it shapes what&apos;s
              requested.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[17px] text-ink">
              We design for a specific daily schedule
            </h3>
            <p className="text-[14.5px] leading-relaxed text-slate">
              Every client interview includes a walk through an ordinary
              weekday, hour by hour. That schedule, more than any style
              reference, determines where rooms go.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[17px] text-ink">
              We stay through framing and glazing
            </h3>
            <p className="text-[14.5px] leading-relaxed text-slate">
              A light study can be quietly lost during construction if no
              one checks window placement and roof overhangs against the
              original model. We check.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[17px] text-ink">
              We take on a small number of projects
            </h3>
            <p className="text-[14.5px] leading-relaxed text-slate">
              Three or four active commissions at a time, deliberately. Every
              project gets a principal, not a rotating team.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 lg:py-24 border-t border-line">
        <h2 className="text-[26px] lg:text-[32px] text-ink mb-12 max-w-[18ch]">
          The people
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((person) => (
            <div key={person.name} className="flex flex-col gap-2.5">
              <h3 className="text-[18px] text-ink">{person.name}</h3>
              <p className="text-[13.5px] text-bronze">{person.role}</p>
              <p className="text-[14px] leading-relaxed text-slate">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-16 lg:py-24 border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="text-[28px] lg:text-[36px] leading-[1.1] text-ink max-w-[18ch]">
            Considering a project with us?
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center px-6 py-3.5 bg-ink text-paper text-[15px] hover:bg-bronze transition-colors whitespace-nowrap"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
