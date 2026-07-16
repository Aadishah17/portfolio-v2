import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "./Astronaut";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import Loader from "./Loader";

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default function AstronautCanvas({ isMobile }) {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <Suspense fallback={<Loader />}>
        <Float>
          <Astronaut
            scale={isMobile ? 0.23 : undefined}
            position={isMobile ? [0, -1.5, 0] : undefined}
          />
        </Float>
        <Rig />
      </Suspense>
    </Canvas>
  );
}
