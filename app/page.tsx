'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Navigation } from './components/navigation'
import { YearSelector } from './components/year-selector'
import { Sidebar } from './components/sidebar'
import { Footer } from './components/footer'
import { Globe } from './components/globe'
import { Logo } from './components/logo'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Globe />
            <Environment preset="night" />
            <OrbitControls 
              enablePan={false}
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10">
        <header className="flex items-center justify-between p-4">
          <Logo />
          <Navigation />
        </header>

        <main className="flex min-h-[calc(100vh-8rem)]">
          <div className="flex-1 p-4">
            <YearSelector />
          </div>
          <Sidebar />
        </main>

        <Footer />
      </div>
    </div>
  )
}

