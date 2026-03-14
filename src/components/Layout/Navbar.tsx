"use client"

import React, { useEffect } from "react";
import { MoonIcon, Sun, Volume2, VolumeX } from "lucide-react";
import SoundHover from "../PlaySound/HoverSound";
import { themeControls } from "@/store/theme-store";

function Navbar() {
  const { theme, volume, toggleTheme, toggleVolume } = themeControls();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="flex items-center justify-start p-5">
      <div className="flex items-center justify-center gap-3">

        {/* Theme Toggle */}
        <div className="relative size-6">
          <div className="absolute">
            <SoundHover
              src="/assets/original/sounds/darkmode.mp3"
              playType="click"
              vol={0.5}
            >
              <button
                className={theme === "light" ? "block" : "hidden"}
                onClick={toggleTheme}
              >
                <MoonIcon />
              </button>
            </SoundHover>
          </div>

          <div className="absolute">
            <SoundHover
              src="/assets/original/sounds/lightmode.mp3"
              playType="click"
              vol={0.5}
            >
              <button
                className={theme === "dark" ? "block" : "hidden"}
                onClick={toggleTheme}
              >
                <Sun />
              </button>
            </SoundHover>
          </div>
        </div>

        {/* Volume Toggle */}
        <button onClick={toggleVolume}>
          {volume ? <Volume2 /> : <VolumeX />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;