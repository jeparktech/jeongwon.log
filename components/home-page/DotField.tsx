'use client'

import { useEffect, useRef } from 'react'

const SPACING = 24
const RADIUS = 110

export default function DotField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let frame = 0
    let running = false
    const pointer = { x: -9999, y: -9999 }
    const eased = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      render()
    }

    const paint = () => {
      const dark = document.documentElement.classList.contains('dark')
      const base = dark ? 'rgba(244,244,245,' : 'rgba(24,24,27,'
      const baseAlpha = dark ? 0.14 : 0.12

      ctx.clearRect(0, 0, width, height)
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          const dx = x - eased.x
          const dy = y - eased.y
          const pull = Math.max(0, 1 - Math.hypot(dx, dy) / RADIUS)
          const falloff = 1 - y / height

          ctx.beginPath()
          ctx.arc(x + dx * pull * 0.14, y + dy * pull * 0.14, 1 + pull * 1.7, 0, Math.PI * 2)
          ctx.fillStyle = `${base}${(baseAlpha + pull * 0.5) * falloff})`
          ctx.fill()
        }
      }
    }

    const render = () => {
      eased.x += (pointer.x - eased.x) * 0.12
      eased.y += (pointer.y - eased.y) * 0.12
      paint()

      if (Math.abs(pointer.x - eased.x) < 0.4 && Math.abs(pointer.y - eased.y) < 0.4) {
        running = false
        return
      }
      frame = requestAnimationFrame(render)
    }

    const start = () => {
      if (running) return
      running = true
      frame = requestAnimationFrame(render)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      start()
    }

    const onPointerLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
      start()
    }

    resize()
    window.addEventListener('resize', resize)
    const themeObserver = new MutationObserver(paint)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    if (!reduceMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.addEventListener('pointerleave', onPointerLeave)
    }

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
      themeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
