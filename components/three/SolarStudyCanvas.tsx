"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HouseMassing from "./HouseMassing";
import SunRig from "./SunRig";
import { sunPositionForMoment, type Season } from "@/lib/solar";

interface SolarStudyCanvasProps {
  dayFraction: number;
  season: Season;
  interactive?: boolean;
}

export default function SolarStudyCanvas({
  dayFraction,
  season,
  interactive = true,
}: SolarStudyCanvasProps) {
  const solarPosition = sunPositionForMoment(dayFraction, season);

  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [8.5, 5.5, 9.5], fov: 32 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#e4ddcb"]} />
      <fog attach="fog" args={["#e4ddcb", 18, 32]} />

      <SunRig position={solarPosition} />
      <HouseMassing />

      {interactive && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2.15}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
          rotateSpeed={0.35}
          enableDamping
          dampingFactor={0.08}
        />
      )}
    </Canvas>
  );
}
