"use client";
import { ThemeProvider as NextThemesProivder } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProivder {...props}>{children}</NextThemesProivder>;
}
