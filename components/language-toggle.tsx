"use client";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n-config";

import fr from "@/assets/images/fr_64.png";
import us from "@/assets/images/us_64.png";

export const LanguageToggle = ({ lang }: { lang: Locale }) => {
  return (
    <Link passHref href={lang === "fr" ? "/en" : "fr"} className="rounded-full">
      <Image
        className="max-w-[35px] max-h-[35px] lg:max-w-[45px] lg:max-h-[45px]"
        src={lang === "fr" ? us : fr}
        alt="France flag"
        width={45}
        height={45}
        sizes=""
      />
    </Link>
  );
};
