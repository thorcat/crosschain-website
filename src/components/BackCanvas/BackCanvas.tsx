import React, { useRef, useEffect } from 'react'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import { Canvas } from './BackCanvas.style'
import { noise } from './perlin'

const BackCanvas: React.FC<{}> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)
  const { height, width } = useWindowDimensions()
  useEffect(() => {
    const points = 0.1 * width
    const lines = 6
    const smoothness = 10
    const lineDistance = 14
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
      const ctx = canvasCtxRef.current
      for (let j = 1; j < lines; j++) {
        ctx!.beginPath()
        const opacity = 0xaa - 10 * j
        /* eslint-disable prefer-template */
        ctx!.strokeStyle = '#8474b3' + opacity.toString(16)
        for (let i = 0; i < points; i++) {
          const y = noise(i / smoothness) * j * lineDistance
          if (i === 0) ctx!.moveTo(0, y)
          else ctx!.lineTo((i * document.body.clientWidth) / points, y)
        }
        ctx!.stroke()
      }
    }
  }, [width, height])

  return <Canvas ref={canvasRef} width={width} height={height} />
}

export default BackCanvas
