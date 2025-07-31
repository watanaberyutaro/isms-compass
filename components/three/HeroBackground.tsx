'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function Shield({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#2E8BC0"
          emissive="#2E8BC0"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001
      points.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#5BA3D0"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  )
}

function NetworkLines() {
  const linesRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z += 0.001
    }
  })

  const lines = useMemo(() => {
    const lineCount = 20
    const lines = []
    
    for (let i = 0; i < lineCount; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 15
      const startY = (Math.random() - 0.5) * 15
      const startZ = (Math.random() - 0.5) * 15
      
      points.push(new THREE.Vector3(startX, startY, startZ))
      points.push(new THREE.Vector3(
        startX + (Math.random() - 0.5) * 5,
        startY + (Math.random() - 0.5) * 5,
        startZ + (Math.random() - 0.5) * 5
      ))
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      lines.push(geometry)
    }
    
    return lines
  }, [])

  return (
    <group ref={linesRef}>
      {lines.map((geometry, index) => (
        <line key={index} geometry={geometry}>
          <lineBasicMaterial
            color="#2E8BC0"
            transparent={true}
            opacity={0.3}
          />
        </line>
      ))}
    </group>
  )
}

export function HeroBackground() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: 0.7
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2E8BC0" />
        
        <ParticleField />
        <NetworkLines />
        <Shield position={[0, 0, 0]} />
        <Shield position={[5, 2, -3]} />
        <Shield position={[-5, -2, -3]} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}