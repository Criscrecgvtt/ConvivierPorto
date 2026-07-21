'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import memoryTexture from '../images/IMG_1012.jpeg';

function HouseModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.28) * 0.08;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.03;
  });

  const roofColor = useMemo(() => new THREE.Color('#2f4b37'), []);
  const wallColor = useMemo(() => new THREE.Color('#62593f'), []);
  const trimColor = useMemo(() => new THREE.Color('#b88f4a'), []);
  const doorColor = useMemo(() => new THREE.Color('#2f3629'), []);
  const windowColor = useMemo(() => new THREE.Color('#f0e8c5'), []);

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 1.9, 2.4]} />
        <meshStandardMaterial color={wallColor} roughness={0.78} metalness={0.02} />
      </mesh>
      <mesh position={[0, 2.2, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.65, 1.1, 4]} />
        <meshStandardMaterial color={roofColor} roughness={0.42} />
      </mesh>
      <mesh position={[0, 1.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.55, 0.2, 2.65]} />
        <meshStandardMaterial color={trimColor} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.4, 0]} receiveShadow>
        <boxGeometry args={[3.1, 0.2, 3.1]} />
        <meshStandardMaterial color={'#151d17'} roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.75, 1.15]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 1.1, 0.15]} />
        <meshStandardMaterial color={doorColor} roughness={0.3} metalness={0.06} />
      </mesh>
      <mesh position={[0.25, 0.9, 1.22]} castShadow receiveShadow>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color={'#d9c37d'} metalness={0.7} roughness={0.12} />
      </mesh>
      <mesh position={[-0.9, 1.35, 1.02]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.75, 0.14]} />
        <meshStandardMaterial color={windowColor} roughness={0.18} emissive={'#fbe9b7'} emissiveIntensity={0.12} />
      </mesh>
      <mesh position={[0.9, 1.35, 1.02]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.75, 0.14]} />
        <meshStandardMaterial color={windowColor} roughness={0.18} emissive={'#fbe9b7'} emissiveIntensity={0.12} />
      </mesh>
      <mesh position={[-1.0, 0.35, 0.95]} rotation={[0, 0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.35, 0.15, 0.35]} />
        <meshStandardMaterial color={'#36392f'} roughness={0.76} />
      </mesh>
      <mesh position={[1.0, 0.35, 0.95]} rotation={[0, -0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.35, 0.15, 0.35]} />
        <meshStandardMaterial color={'#36392f'} roughness={0.76} />
      </mesh>
      <mesh position={[0, 0.12, 1.22]} castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.12, 0.4]} />
        <meshStandardMaterial color={'#3b4634'} roughness={0.7} />
      </mesh>
      <mesh position={[-0.82, 1.95, 0.28]} castShadow receiveShadow>
        <boxGeometry args={[0.28, 0.55, 0.28]} />
        <meshStandardMaterial color={'#3f4d34'} roughness={0.55} />
      </mesh>
      <mesh position={[0.82, 1.95, 0.28]} castShadow receiveShadow>
        <boxGeometry args={[0.28, 0.55, 0.28]} />
        <meshStandardMaterial color={'#3f4d34'} roughness={0.55} />
      </mesh>
    </group>
  );
}

function MemoryPanels() {
  const panelTexture = useTexture(memoryTexture.src);

  return (
    <group>
      <mesh position={[-1.8, 1.9, -1.05]} rotation={[0, 0.4, 0]}>
        <planeGeometry args={[1.15, 1.45]} />
        <meshBasicMaterial map={panelTexture} transparent opacity={0.8} depthWrite={false} />
      </mesh>
      <mesh position={[1.8, 1.9, -1.05]} rotation={[0, -0.4, 0]}>
        <planeGeometry args={[1.15, 1.45]} />
        <meshBasicMaterial map={panelTexture} transparent opacity={0.72} depthWrite={false} />
      </mesh>
    </group>
  );
}

function SilhouetteBackdrop() {
  const silhouetteTexture = useTexture(new URL('../images/siluhoette.png', import.meta.url).href);

  return (
    <mesh position={[0, 2.2, -3.2]}>
      <planeGeometry args={[7.5, 4.8]} />
      <meshBasicMaterial map={silhouetteTexture} transparent opacity={0.36} depthWrite={false} />
    </mesh>
  );
}

export function HouseScene() {
  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#141714] shadow-soft sm:h-[560px]">
      <div className="pointer-events-none absolute left-[-10%] top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(184,143,74,0.16),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),transparent_55%)] blur-3xl" />
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 1.6, 5.6]} />
        <ambientLight intensity={0.36} />
        <hemisphereLight args={["#b88f4a", "#11130f", 0.28]} />
        <directionalLight intensity={1.0} position={[3.8, 4.5, 2.4]} castShadow />
        <pointLight position={[-2.2, 2.8, -2]} intensity={0.7} color="#f3e0b3" />
        <fog attach="fog" args={['#171715', 4.5, 11]} />
        <SilhouetteBackdrop />
        <MemoryPanels />
        <mesh position={[0, 1.8, -1.85]} rotation={[-0.05, 0, 0]}>
          <planeGeometry args={[6.5, 5.2]} />
          <meshBasicMaterial color="#152718" transparent opacity={0.25} />
        </mesh>
        <mesh position={[0, 2.75, -1.8]} rotation={[0, 0, 0]}>
          <ringGeometry args={[1.1, 1.6, 64]} />
          <meshBasicMaterial color="#b88f4a" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
        <HouseModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,143,74,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(16,24,18,0.75),transparent_25%)]" />
    </div>
  );
}
