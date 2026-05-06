"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import * as THREE from "three";

// Suppress THREE.Clock deprecation warning - still used internally by r3f
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) {
      return;
    }
    originalWarn(...args);
  };
}

function PetalParticles({ count = 50 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const particleCount = isMobile ? Math.floor(count / 3) : count;

  const { positions, velocities, rotations } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    const rot = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 15 - 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      vel[i * 3] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 1] = -Math.random() * 0.02 - 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      rot[i * 3] = Math.random() * Math.PI;
      rot[i * 3 + 1] = Math.random() * Math.PI;
      rot[i * 3 + 2] = Math.random() * Math.PI;
    }

    return { positions: pos, velocities: vel, rotations: rot };
  }, [particleCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;

      positions[idx] += velocities[idx] + Math.sin(time * 0.5 + i) * 0.002;
      positions[idx + 1] += velocities[idx + 1];
      positions[idx + 2] += velocities[idx + 2] + Math.cos(time * 0.3 + i) * 0.001;

      if (positions[idx + 1] < -8) {
        positions[idx + 1] = 8;
        positions[idx] = (Math.random() - 0.5) * 20;
        positions[idx + 2] = (Math.random() - 0.5) * 10;
      }

      dummy.position.set(positions[idx], positions[idx + 1], positions[idx + 2]);
      dummy.rotation.set(
        rotations[idx] + time * 0.3,
        rotations[idx + 1] + time * 0.2,
        rotations[idx + 2] + time * 0.4
      );
      dummy.scale.setScalar(0.3 + Math.sin(time + i) * 0.1);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <planeGeometry args={[0.3, 0.3]} />
      <meshBasicMaterial
        color="#ff9eb5"
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

function GlowingOrbs({ count = 8 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const orbCount = isMobile ? Math.floor(count / 2) : count;

  const { positions } = useMemo(() => {
    const pos = new Float32Array(orbCount * 3);
    for (let i = 0; i < orbCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return { positions: pos };
  }, [orbCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < orbCount; i++) {
      const idx = i * 3;
      const x = positions[idx] + Math.sin(time * 0.2 + i * 2) * 2;
      const y = positions[idx + 1] + Math.cos(time * 0.15 + i * 1.5) * 1.5;
      const z = positions[idx + 2] + Math.sin(time * 0.1 + i) * 1;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(0.15 + Math.sin(time * 0.5 + i) * 0.05);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, orbCount]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color="#c9a96e"
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

function CameraRig() {
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.05;
    state.camera.position.x = Math.sin(time) * 2;
    state.camera.position.y = Math.sin(time * 0.5) * 1 + 2;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function CherryBlossomScene() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: !isMobile, alpha: true }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <ambientLight intensity={0.2} />
        <CameraRig />
        <PetalParticles count={isMobile ? 20 : 50} />
        <GlowingOrbs count={isMobile ? 4 : 8} />
        <fog attach="fog" args={["#0a0a0a", 12, 30]} />
      </Canvas>
    </div>
  );
}
