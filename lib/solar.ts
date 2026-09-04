/**
 * Solar position model for the Home hero's light study.
 *
 * HONESTY NOTE (do not remove): this is a *simplified* daily solar-arc
 * model, not a full astronomical ephemeris. It captures the two things the
 * hero interaction actually needs — the sun's azimuth/elevation across a
 * single representative day, and how much that arc's peak elevation and
 * shadow length shift with the seasons — without pulling in NOAA-grade
 * solar position algorithms (declination via full orbital mechanics,
 * atmospheric refraction correction, equation of time, etc).
 *
 * It is deliberately structured so a real implementation (e.g. an
 * SPA/NOAA-style algorithm, or a small library like `suncalc`) can replace
 * `sunPositionForMoment` without touching any calling code — every consumer
 * only depends on the `SolarPosition` shape returned below.
 */

export type Season = "winter" | "spring-fall" | "summer";

export interface SolarPosition {
  /** 0–1 across the visible working day (roughly 7am–7pm) */
  dayFraction: number;
  /** Degrees above the horizon, 0 at horizon, ~90 at zenith */
  elevationDeg: number;
  /** -1 (due east horizon) to 1 (due west horizon), 0 at solar noon */
  azimuthFraction: number;
  /** Relative shadow length multiplier — long at low elevation, short near noon */
  shadowLength: number;
  /** Which seasonal arc this position belongs to, for peak-elevation lookup */
  season: Season;
  /** Human-readable clock time for the current dayFraction, e.g. "2:30 PM" */
  clockLabel: string;
}

const SEASON_PEAK_ELEVATION: Record<Season, number> = {
  // Peak (solar noon) elevation, in degrees, at ~45°N — roughly Portland, OR,
  // Solstice Studio's home region. Winter sun stays low; summer sun runs high.
  winter: 22,
  "spring-fall": 45,
  summer: 68,
};

const DAY_START_HOUR = 7;
const DAY_END_HOUR = 19;

export function clockLabelFromFraction(dayFraction: number): string {
  const hourFloat =
    DAY_START_HOUR + dayFraction * (DAY_END_HOUR - DAY_START_HOUR);
  const hour = Math.floor(hourFloat);
  const minute = Math.round((hourFloat - hour) * 60);
  const period = hour >= 12 ? "PM" : "AM";
  let hour12 = hour % 12;
  if (hour12 === 0) hour12 = 12;
  return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
}

/**
 * Given a 0–1 fraction of the working day and a season, return the sun's
 * simplified position and derived shadow behavior.
 */
export function sunPositionForMoment(
  dayFraction: number,
  season: Season = "spring-fall"
): SolarPosition {
  const clamped = Math.min(Math.max(dayFraction, 0), 1);

  // Model the day as a half-sine arc: 0 at both horizons, peak at solar noon.
  const peakElevation = SEASON_PEAK_ELEVATION[season];
  const elevationDeg = Math.sin(clamped * Math.PI) * peakElevation;

  // Azimuth sweeps linearly from -1 (east) to 1 (west) across the day —
  // a reasonable simplification for a mid-latitude single-day study.
  const azimuthFraction = clamped * 2 - 1;

  // Shadow length scales inversely with elevation (low sun -> long shadow),
  // normalized so it never explodes near the horizon.
  const elevationRad = (elevationDeg * Math.PI) / 180;
  const rawLength = elevationDeg <= 1 ? 6 : 1 / Math.tan(elevationRad);
  const shadowLength = Math.min(Math.max(rawLength, 0.3), 6);

  return {
    dayFraction: clamped,
    elevationDeg,
    azimuthFraction,
    shadowLength,
    season,
    clockLabel: clockLabelFromFraction(clamped),
  };
}

export const SEASON_LABELS: Record<Season, string> = {
  winter: "Winter",
  "spring-fall": "Spring / Fall",
  summer: "Summer",
};

export const SEASON_ORDER: Season[] = ["winter", "spring-fall", "summer"];
