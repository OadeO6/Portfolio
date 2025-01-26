"use client"

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'

const logos = [
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
]

function Prism({ position, texturePath }) {
  const mesh = useRef()
  const texture = useTexture(texturePath)

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2
    mesh.current.rotation.y += delta * 0.3
  })

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default function TechPrism() {
  const [error, setError] = useState(null)

  return (
    <div className="w-full h-[400px]">
      {error && <p className="text-red-500">Error loading 3D scene: {error}</p>}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {logos.map((logo, index) => (
          <Prism
            key={index}
            position={[
              (index % 3) * 2 - 2,
              Math.floor(index / 3) * 2 - 1,
              0
            ]}
            texturePath={logo}
          />
        ))}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

