"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import dark from "@/assets/images/dj-dark.png";
import light from "@/assets/images/dj-light.png";
type Props = {};

export const Logo = (props: Props) => {
  const { theme } = useTheme();
  return (
    <Image
      src={theme != "dark" ? dark : light}
      alt=""
      width={300}
      height={300}
    />
  );
};
