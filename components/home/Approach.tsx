const STEPS = [
  {
    step: "01",
    title: "Site & solar study",
    body: "We map the site's sun path across all four seasons, along with tree cover, slope, and neighboring structures, before any design work begins.",
  },
  {
    step: "02",
    title: "Light-led schematic design",
    body: "Room placement follows the study — bedrooms toward morning light, gathering spaces toward the hours your family is actually home.",
  },
  {
    step: "03",
    title: "Seasonal verification",
    body: "Every major room is checked against winter, spring, and summer sun before drawings move to construction documents.",
  },
  {
    step: "04",
    title: "Construction administration",
    body: "We stay on site through framing and glazing — the two phases where a light study can still be quietly lost if no one is watching.",
  },
];

export default function Approach() {
  return (
    <section className="container-wide py-20 lg:py-28 border-t border-line">
      <h2 className="text-[28px] lg:text-[34px] leading-[1.1] text-ink max-w-[16ch] mb-14">
        How a project moves through the studio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
        {STEPS.map((s) => (
          <div key={s.step} className="flex flex-col gap-3">
            <span className="text-[13px] text-bronze font-medium">
              {s.step}
            </span>
            <h3 className="text-[17px] text-ink">{s.title}</h3>
            <p className="text-[14px] leading-relaxed text-slate">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
