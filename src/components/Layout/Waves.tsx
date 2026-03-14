"use client"

import React from 'react'
import Wave from 'react-wavify'
import { WaveTypes } from '@/types/common'

const Waves = ({ gradientId, fromColor, toColor, height, amplitude, speed, points, className }: WaveTypes) => {

  return (
    <Wave fill={`url(#${gradientId})`}
      paused={false}
      style={{ display: 'flex' }}
      options={{
        height: height,
        amplitude: amplitude,
        speed: speed,
        points: points
      }}
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} gradientTransform="rotate(90)">
          <stop offset="10%" stopColor={`var(${fromColor})`} />
          <stop offset="90%" stopColor={`var(${toColor})`} />
        </linearGradient>
      </defs>
    </Wave>
  )
}

export default Waves