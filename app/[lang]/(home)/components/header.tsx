"use client";
import { HeaderType } from "@/lib/types";
import { FileText, LucideCircleArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImg from "@/assets/images/hero.webp";
import { Button } from "@/components/ui/button";

type Props = {
  data: HeaderType;
  lang: "fr" | "en";
};

export const Header = ({ data, lang }: Props) => {
  const handleDownload = () => {
    window.open(`/${lang}/cv_2024.pdf`, "_blank");
  };
  return (
    <div className="flex flex-col items-center justify-around min-h-[90vh]">
      <div className="flex flex-col max-w-screen-xl w-full gap-10 items-center justify-center mt-8">
        <div className="max-w-[250px] max-h-[250px] md:max-w-[350px] md:max-h-[350px] xl:max-w-[450px] xl:max-h-[450px] animate-in">
          <Image
            src={heroImg}
            alt=""
            width={450}
            height={450}
            className="rounded-full"
          />
        </div>
        <Button onClick={handleDownload} className="flex gap-2">
          <FileText />
          <p>{data.pdfDownload}</p>
        </Button>
        <div className="flex-1 flex flex-col gap-4 items-center justify-center animate-in delay-100">
          <p className="tracking-wide leading-[1.7] px-8 lg:px-0 lg:max-w-[75%] text-sm/loose lg:text-lg/loose text-pretty text-center ">
            {data.summary1}{" "}
            <span className="text-green-500 font-bold dark:text-green-400">
              {data.colorText}
            </span>
            {data.summary2}
          </p>
        </div>
      </div>
      <Link href="#workExperience" passHref>
        <LucideCircleArrowDown
          className="animate-bounce"
          size={48}
          color="green"
        />
      </Link>
    </div>
  );
};
