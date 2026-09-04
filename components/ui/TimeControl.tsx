"use client";

import { SEASON_LABELS, SEASON_ORDER, type Season } from "@/lib/solar";

interface TimeControlProps {
  dayFraction: number;
  season: Season;
  clockLabel: string;
  onDayFractionChange: (value: number) => void;
  onSeasonChange: (season: Season) => void;
}

/**
 * The sun/time interaction's control surface. A native range input handles
 * drag, click, and keyboard (arrow keys / Home / End) out of the box; the
 * season buttons are a second, independent way to move through the study
 * for anyone who'd rather not fine-drag a slider — including touch and
 * screen-reader users.
 */
export default function TimeControl({
  dayFraction,
  season,
  clockLabel,
  onDayFractionChange,
  onSeasonChange,
}: TimeControlProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor="time-of-day"
          className="font-display text-[15px] text-umber"
        >
          Time of day
        </label>
        <span
          className="font-display text-[15px] text-bronze tabular-nums"
          aria-live="polite"
        >
          {clockLabel}
        </span>
      </div>

      <input
        id="time-of-day"
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(dayFraction * 100)}
        onChange={(e) => onDayFractionChange(Number(e.target.value) / 100)}
        aria-label="Time of day, from 7am to 7pm"
        aria-valuetext={clockLabel}
        className="w-full accent-bronze"
      />

      <div className="flex items-center gap-2" role="group" aria-label="Season">
        {SEASON_ORDER.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSeasonChange(s)}
            aria-pressed={season === s}
            className={`px-3 py-1.5 text-[13px] rounded-sm border transition-colors ${
              season === s
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-umber border-line-strong hover:border-ink"
            }`}
          >
            {SEASON_LABELS[s]}
          </button>
        ))}
      </div>
    </div>
  );
}
