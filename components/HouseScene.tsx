'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function HouseModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.04;
  });

  const roofColor = useMemo(() => new THREE.Color('#2f4b37'), []);
  const wallColor = useMemo(() => new THREE.Color('#6d5b3a'), []);
  const trimColor = useMemo(() => new THREE.Color('#b88f4a'), []);

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.8, 2.4]} />
        <meshStandardMaterial color={wallColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh position={[0, 2.1, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.5, 1.1, 4]} />
        <meshStandardMaterial color={roofColor} roughness={0.45} />
      </mesh>
      <mesh position={[0, 1.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.45, 0.2, 2.6]} />
        <meshStandardMaterial color={trimColor} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.35, 0]} receiveShadow>
        <boxGeometry args={[3, 0.2, 3]} />
        <meshStandardMaterial color={'#18261d'} roughness={0.95} />
      </mesh>
      <mesh position={[-0.8, 1.15, 1.02]} castShadow receiveShadow>
        <boxGeometry args={[0.25, 0.8, 0.15]} />
        <meshStandardMaterial color={'#f4e9d8'} roughness={0.3} />
      </mesh>
      <mesh position={[0.8, 1.15, 1.02]} castShadow receiveShadow>
        <boxGeometry args={[0.25, 0.8, 0.15]} />
        <meshStandardMaterial color={'#f4e9d8'} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.7, 1.28]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.22, 0.12]} />
        <meshStandardMaterial color={trimColor} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function HouseScene() {
  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#141714] shadow-soft sm:h-[560px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 1.6, 5.6]} />
        <ambientLight intensity={0.45} />
        <directionalLight intensity={1.3} position={[3, 4, 2]} castShadow />
        <pointLight position={[-2.2, 2.8, -2]} intensity={0.7} color="#f3e0b3" />
        <fog attach="fog" args={['#171715', 5, 12]} />
        <HouseModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,143,74,0.18),transparent_45%)]" />
    </div>
  );
}
