const POINTS = [
  {
    title: "Light before layout",
    body: "We run a solar study for the actual site — its latitude, slope, and tree line — before we draw a floor plan. The plan follows the light, not the other way around.",
  },
  {
    title: "Built for the hours you keep",
    body: "A family that's out the door by 7am needs a different kitchen than one that gathers there at 7pm. We design around the hours a room is actually occupied.",
  },
  {
    title: "The seasons are the client",
    body: "A house that only works in July isn't finished. Every major room is checked against winter, spring, and summer sun before it's approved.",
  },
];

export default function Philosophy() {
  return (
    <section className="container-wide py-20 lg:py-28 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
        <h2 className="text-[28px] lg:text-[34px] leading-[1.1] text-ink max-w-[14ch]">
          Light is the medium we design with.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">
          {POINTS.map((point) => (
            <div key={point.title} className="flex flex-col gap-3">
              <h3 className="text-[18px] text-ink">{point.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-slate">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
