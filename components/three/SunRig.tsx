"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { SolarPosition } from "@/lib/solar";

const ARC_RADIUS = 11;

/** Converts a simplified elevation/azimuth reading into a 3D position on the study's sun arc. */
function positionFromSolar(position: SolarPosition): [number, number, number] {
  const elevationRad = (position.elevationDeg * Math.PI) / 180;
  const azimuthRad = (position.azimuthFraction * Math.PI) / 2; // -90deg..+90deg sweep

  const horizontalRadius = ARC_RADIUS * Math.cos(elevationRad);
  const x = horizontalRadius * Math.sin(azimuthRad);
  const z = horizontalRadius * Math.cos(azimuthRad) * -1;
  const y = Math.max(ARC_RADIUS * Math.sin(elevationRad), 0.4);

  return [x, y, z];
}

export default function SunRig({ position }: { position: SolarPosition }) {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const sunPos = useMemo(() => positionFromSolar(position), [position]);

  // Warmer, lower-intensity light near the horizon; brighter and cooler near noon
  const warmth = 1 - Math.min(position.elevationDeg / 60, 1);
  const lightColor = useMemo(() => {
    const warm = new THREE.Color("#ffb27a");
    const cool = new THREE.Color("#fff6e6");
    return cool.clone().lerp(warm, warmth);
  }, [warmth]);

  const intensity = 0.55 + Math.min(position.elevationDeg / 68, 1) * 1.35;

  return (
    <group>
      <directionalLight
        ref={lightRef}
        position={sunPos}
        color={lightColor}
        intensity={intensity}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-9}
        shadow-camera-right={9}
        shadow-camera-top={9}
        shadow-camera-bottom={-9}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-bias={-0.0015}
      />
      <ambientLight intensity={0.32} color="#dfe4e8" />

      {/* Visible sun marker on the arc, purely diagrammatic */}
      <mesh position={sunPos}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color="#e8a24d" />
      </mesh>
    </group>
  );
}
