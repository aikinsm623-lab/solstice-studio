"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import TimeControl from "@/components/ui/TimeControl";
import SolarStudyFallback from "./SolarStudyFallback";
import { sunPositionForMoment, type Season } from "@/lib/solar";

const SolarStudyCanvas = dynamic(() => import("./SolarStudyCanvas"), {
  ssr: false,
  loading: () => <CanvasLoading />,
});

function CanvasLoading() {
  return (
    <div className="w-full aspect-[16/11] flex items-center justify-center text-slate text-sm">
      Setting up the light study…
    </div>
  );
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const ENTRANCE_START = 0.05;
const ENTRANCE_TARGET = 0.55; // ~2:30pm, matches the validated prototype's default
const ENTRANCE_DURATION_MS = 1600;

export default function SolarStudy() {
  const [dayFraction, setDayFraction] = useState(ENTRANCE_TARGET);
  const [season, setSeason] = useState<Season>("winter");
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [use3D, setUse3D] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Deliberately not a lazy useState initializer: detectWebGL() needs
    // `window`/`document`, which aren't available during SSR. Running it
    // there would either crash the server render or (with a same-render
    // guard) still diverge from the client's first render and cause a
    // hydration mismatch. This one-shot mount-time check is the correct
    // place for it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWebglSupported(detectWebGL());
  }, []);

  // One orchestrated entrance sweep on mount, skipped entirely under
  // prefers-reduced-motion (the scene simply settles at its resting position).
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      // Same rationale as the WebGL check above: prefers-reduced-motion
      // requires window.matchMedia, so this can only run post-mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDayFraction(ENTRANCE_TARGET);
      return;
    }

    setDayFraction(ENTRANCE_START);
    let start: number | null = null;

    function step(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / ENTRANCE_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDayFraction(
        ENTRANCE_START + eased * (ENTRANCE_TARGET - ENTRANCE_START)
      );
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const solar = sunPositionForMoment(dayFraction, season);
  const showCanvas = use3D && webglSupported !== false;

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-none border border-line bg-limestone-dim/60 overflow-hidden relative">
        <div className="w-full aspect-[16/11]">
          {webglSupported === null ? (
            <CanvasLoading />
          ) : showCanvas ? (
            <Suspense fallback={<CanvasLoading />}>
              <SolarStudyCanvas dayFraction={dayFraction} season={season} />
            </Suspense>
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6">
              <SolarStudyFallback dayFraction={dayFraction} season={season} />
            </div>
          )}
        </div>

        {webglSupported === false && (
          <p className="px-4 py-2 text-xs text-slate border-t border-line bg-paper">
            3D isn&apos;t available in this browser — showing the light study
            as a diagram instead.
          </p>
        )}
        {webglSupported && use3D && (
          <button
            type="button"
            onClick={() => setUse3D(false)}
            className="absolute bottom-3 right-3 text-[12px] px-2.5 py-1 bg-paper/90 border border-line-strong text-umber hover:text-ink"
          >
            View as diagram
          </button>
        )}
        {webglSupported && !use3D && (
          <button
            type="button"
            onClick={() => setUse3D(true)}
            className="absolute bottom-3 right-3 text-[12px] px-2.5 py-1 bg-paper/90 border border-line-strong text-umber hover:text-ink"
          >
            View in 3D
          </button>
        )}
      </div>

      <TimeControl
        dayFraction={dayFraction}
        season={season}
        clockLabel={solar.clockLabel}
        onDayFractionChange={setDayFraction}
        onSeasonChange={setSeason}
      />
    </div>
  );
}
