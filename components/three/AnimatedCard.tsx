'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'
import * as THREE from 'three'

interface AnimatedCardProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  children?: React.ReactNode
}

export function AnimatedCard({ 
  position, 
  rotation = [0, 0, 0], 
  scale = 1,
  color = '#2E8BC0',
  children 
}: AnimatedCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      meshRef.current.rotation.y = rotation[1] + Math.cos(state.clock.elapsedTime * 0.3) * 0.05
    }
    
    if (glowRef.current) {
      const glowIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2
      glowRef.current.scale.setScalar(1 + glowIntensity * 0.1)
      ;(glowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glowIntensity
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position} scale={scale}>
        {/* Glow effect */}
        <RoundedBox
          ref={glowRef}
          args={[4.2, 2.7, 0.05]}
          radius={0.1}
          smoothness={4}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </RoundedBox>
        
        {/* Main card */}
        <RoundedBox
          ref={meshRef}
          args={[4, 2.5, 0.2]}
          radius={0.1}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#ffffff"
            emissive={color}
            emissiveIntensity={0.1}
            metalness={0.2}
            roughness={0.3}
          />
        </RoundedBox>
        
        {children}
      </group>
    </Float>
  )
}