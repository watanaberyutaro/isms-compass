'use client'

import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { AnimatedCard } from './AnimatedCard'
import * as THREE from 'three'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface InteractiveFeatureProps {
  features: Feature[]
}

export function InteractiveFeature({ features }: InteractiveFeatureProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <div style={{ height: '400px', width: '100%', cursor: 'grab' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2E8BC0" />
        
        <group>
          {features.slice(0, 3).map((_, index) => {
            const angle = (index / 3) * Math.PI * 2
            const radius = 3
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius - 2
            
            return (
              <AnimatedCard
                key={index}
                position={[x, 0, z]}
                rotation={[0, -angle + Math.PI / 2, 0]}
                scale={hoveredIndex === index ? 1.1 : 1}
                color={hoveredIndex === index ? '#5BA3D0' : '#2E8BC0'}
              />
            )
          })}
        </group>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}