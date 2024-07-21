"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import dark from "@/assets/images/dj-dark.png";
import light from "@/assets/images/dj-light.png";
import { useEffect, useState } from "react";
type Props = {};

export const Logo = (props: Props) => {
  const { theme } = useTheme();
  var [currentImg, setCurrentImg] = useState(light);
  useEffect(() => {
    setCurrentImg(theme === "dark" ? light : dark);
  }, [theme]);
  return <Image src={currentImg} alt="" width={300} height={300} />;
};
