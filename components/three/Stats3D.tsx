'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Box, Float } from '@react-three/drei'
import * as THREE from 'three'

interface Stat3DProps {
  value: number
  suffix: string
  label: string
  color: string
}

function Stat3D({ value, suffix, label, color }: Stat3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        <Box args={[2.5, 2.5, 0.5]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </Box>
        
        <Text
          position={[0, 0.3, 0.26]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/NotoSansJP-Bold.woff"
        >
          {value}{suffix}
        </Text>
        
        <Text
          position={[0, -0.5, 0.26]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/NotoSansJP-Regular.woff"
        >
          {label}
        </Text>
        
        {/* Glowing edges */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2.5, 2.5, 0.5)]} />
          <lineBasicMaterial color={color} linewidth={2} />
        </lineSegments>
      </group>
    </Float>
  )
}

export function Stats3DScene({ stats }: { stats: Array<{value: number, suffix: string, label: string}> }) {
  const colors = ['#2E8BC0', '#5BA3D0', '#1E6BA8', '#3498DB']
  
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <group>
          {stats.map((stat, index) => {
            const xPos = (index - 1.5) * 3
            return (
              <Stat3D
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={colors[index % colors.length]}
              />
            )
          })}
        </group>
      </Canvas>
    </div>
  )
}