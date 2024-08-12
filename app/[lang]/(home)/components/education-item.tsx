import { SlideUp } from "@/components/slide-up";
import { Education } from "@/lib/types";
import { LucideArrowBigRight, LucideCircleArrowRight } from "lucide-react";
import React from "react";

type Props = {
  data: Education;
};

export const EducationItem = ({ data }: Props) => {
  return (
    // Container
    <SlideUp offset="-200px 0px -200px 0px">
      <div className="flex border-l-4 border-l-green-700 w-full relative pb-4">
        <div className="absolute left-[-3px]">
          <LucideCircleArrowRight color="green" />
        </div>
        {/* Content container -  */}
        <div className="flex flex-col w-full lg:px-8 ">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 px-8 lg:px-0">
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg lg:text-xl">
                {data.location}
              </p>
              <p className="text-base md:text-lg lg:text-xl">{data.program}</p>
            </div>
            <div className="flex items-end flex-col">
              <div className="flex">
                <p>{data.startDate}</p>
                <LucideArrowBigRight color="green" />

                <p>{data.endDate}</p>
              </div>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-2">
            <li className="text-balance my-1 tracking-wide text-base md:text-lg lg:text-xl">
              {data.result}
            </li>
          </ul>
        </div>
      </div>
    </SlideUp>
  );
};
