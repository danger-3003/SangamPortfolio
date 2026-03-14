"use client"

import { useRef } from "react"
import { themeControls } from "@/store/theme-store"

type Props = {
  src: string
  children: React.ReactNode
  vol?: number
  playType?: "click" | "hover"
}

export default function SoundHover({ src, children, vol = 1, playType }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { volume } = themeControls();

  const playSound = () => {
    if (!audioRef.current || !volume) return

    audioRef.current.volume = vol
    audioRef.current.currentTime = 0
    audioRef.current.play().catch(() => { })
  }

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      <div
        onClick={() => playType === "click" && playSound()}
        onMouseEnter={() => playType === "hover" && playSound()}
      >
        {children}
      </div>
    </>
  )
}