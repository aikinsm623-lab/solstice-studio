"use client";

import { sunPositionForMoment, type Season } from "@/lib/solar";

/**
 * A lightweight SVG stand-in for the 3D light study, shown when WebGL is
 * unavailable, blocked, or fails to initialize. It's driven by the same
 * solar model as the 3D scene, so the underlying idea — sun position
 * changes shadow direction and length — still comes through without a GPU.
 */
export default function SolarStudyFallback({
  dayFraction,
  season,
}: {
  dayFraction: number;
  season: Season;
}) {
  const solar = sunPositionForMoment(dayFraction, season);

  const cx = 320;
  const cy = 300;
  const radius = 250;
  const angle = Math.PI - dayFraction * Math.PI;
  const sunX = cx + radius * Math.cos(angle);
  const sunY = Math.max(cy - radius * Math.sin(angle), 30);

  const baseX1 = 190;
  const baseX2 = 320;
  const shadowExtend = Math.min(solar.shadowLength * 22, 130);
  const fromLeft = dayFraction < 0.5;
  const points = fromLeft
    ? `${baseX1},${cy} ${baseX2},${cy} ${baseX2},${cy} ${baseX1 - shadowExtend * 0.4},${cy}`
    : `${baseX1},${cy} ${baseX2},${cy} ${baseX2 + shadowExtend * 0.4},${cy} ${baseX1},${cy}`;

  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label={`Light study diagram showing the sun at ${solar.clockLabel}, casting a shadow to the ${
        fromLeft ? "west" : "east"
      } of the house.`}
      className="w-full h-auto"
    >
      <path
        d="M 70 300 A 250 250 0 0 1 570 300"
        fill="none"
        stroke="var(--color-slate)"
        strokeWidth={1}
        strokeDasharray="2 5"
        opacity={0.5}
      />
      <line
        x1="50"
        y1="300"
        x2="590"
        y2="300"
        stroke="var(--color-ink)"
        strokeWidth={1.25}
      />
      <rect
        x={baseX1}
        y={180}
        width={130}
        height={120}
        fill="var(--color-paper)"
        stroke="var(--color-ink)"
      />
      <polygon points={points} fill="var(--color-ink)" opacity={0.16} />
      <circle cx={sunX} cy={sunY} r={7} fill="var(--color-bronze)" />
    </svg>
  );
}
