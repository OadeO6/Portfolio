"use client"

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'

const logos = [
  '/placeholder.svg?height=200&width=200&text=Python',
  '/placeholder.svg?height=200&width=200&text=JavaScript',
  '/placeholder.svg?height=200&width=200&text=React',
  '/placeholder.svg?height=200&width=200&text=Node.js',
  '/placeholder.svg?height=200&width=200&text=Docker',
  '/placeholder.svg?height=200&width=200&text=AWS',
]

function Prism({ position, texturePath }) {
  const mesh = useRef()
  const texture = useTexture(texturePath)

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default function TechPrism() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {logos.map((logo, index) => (
          <Prism
            key={index}
            position={[
              Math.cos(index / logos.length * Math.PI * 2) * 4,
              Math.sin(index / logos.length * Math.PI * 2) * 4,
              0
            ]}
            texturePath={logo}
          />
        ))}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}

