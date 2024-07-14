"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import dark from "@/assets/images/dj-dark.png";
import light from "@/assets/images/dj-light.png";
import { useEffect, useState } from "react";
type Props = {};

export const Logo = (props: Props) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");
  useEffect(() => {
    if (theme == "light") setCurrentTheme("light");
    else setCurrentTheme("dark");
  }, [theme]);
  return (
    <Image
      src={currentTheme != "dark" ? dark : light}
      alt=""
      width={300}
      height={300}
    />
  );
};
