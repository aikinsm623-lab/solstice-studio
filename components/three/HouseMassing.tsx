"use client";

import { useMemo } from "react";
import * as THREE from "three";

/**
 * A deliberately simplified architectural massing model — not a literal
 * rendering of any Solstice Studio project, but a generic single-story plan
 * (living volume + bedroom wing + a glazed connector) built specifically to
 * demonstrate how solar position changes light and shadow across a floor
 * plan. Geometry is kept low-poly (boxes + a handful of plane "openings")
 * so the scene stays cheap on mid-range mobile GPUs.
 */

const INK = "#2a221a";
const WALL = "#e7e0d0";
const WALL_DARK = "#cfc5ac";
const GLASS = "#b9c7cc";
const ROOF = "#4a3b2a";
const GROUND = "#d8cfb8";

function Volume({
  position,
  size,
  color = WALL,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.02} />
    </mesh>
  );
}

function Roof({
  position,
  size,
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={ROOF} roughness={0.9} />
    </mesh>
  );
}

/** A glazed opening: a slightly recessed, low-roughness panel that catches light distinctly from the walls around it. */
function Opening({
  position,
  size,
  rotationY = 0,
}: {
  position: [number, number, number];
  size: [number, number];
  rotationY?: number;
}) {
  return (
    <mesh position={position} rotation={[0, rotationY, 0]} receiveShadow>
      <planeGeometry args={[size[0], size[1]]} />
      <meshStandardMaterial
        color={GLASS}
        roughness={0.12}
        metalness={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function HouseMassing() {
  const groundGeom = useMemo(() => new THREE.PlaneGeometry(40, 40), []);

  return (
    <group>
      {/* Ground plane — receives the shadow study */}
      <mesh
        geometry={groundGeom}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.02, 0]}
        receiveShadow
      >
        <meshStandardMaterial color={GROUND} roughness={1} />
      </mesh>

      {/* Living volume */}
      <Volume position={[-2.6, 1.1, 0]} size={[4.4, 2.2, 3.6]} />
      <Roof position={[-2.6, 2.32, 0]} size={[4.7, 0.18, 3.9]} />
      <Opening
        position={[-2.6, 1.1, 1.81]}
        size={[3.6, 1.9]}
        rotationY={0}
      />

      {/* Glazed connector */}
      <Volume position={[0.55, 0.95, 0]} size={[1.3, 1.9, 2.6]} color={WALL_DARK} />
      <Opening position={[0.55, 0.95, 1.31]} size={[1.1, 1.6]} />
      <Opening position={[0.55, 0.95, -1.31]} size={[1.1, 1.6]} />

      {/* Bedroom wing */}
      <Volume position={[3.2, 1.0, -0.4]} size={[3.4, 2.0, 3.0]} />
      <Roof position={[3.2, 2.1, -0.4]} size={[3.7, 0.18, 3.3]} />
      <Opening position={[3.2, 1.0, 1.11]} size={[2.4, 1.5]} />

      {/* Low garden wall — helps read the shadow direction clearly on the ground */}
      <mesh position={[-1, 0.25, -2.4]} castShadow receiveShadow>
        <boxGeometry args={[5.6, 0.5, 0.2]} />
        <meshStandardMaterial color={INK} roughness={0.9} />
      </mesh>
    </group>
  );
}
