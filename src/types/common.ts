import { ReactNode } from "react";

export interface WaveTypes {
  gradientId: string;
  fromColor: string;
  toColor: string;
  height?: number;
  amplitude?: number;
  speed?: number;
  points?: number;
  className?: string;
}

export interface MainLayoutTypes {
  children: ReactNode
}

export interface NavbarControlTypes {
  theme: "light" | "dark";
  volume: boolean;
}

export interface HomePageDataTypes {
  title: string;
  description: string;
}