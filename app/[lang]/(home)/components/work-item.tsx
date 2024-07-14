import { SlideUp } from "@/components/slide-up";
import { WorkExperience } from "@/lib/types";
import { LucideArrowBigRight, LucideCircleArrowRight } from "lucide-react";
import React from "react";

type Props = {
  data: WorkExperience;
};

export const WorkItem = ({ data }: Props) => {
  return (
    // Container
    <SlideUp offset="-200px 0px -200px 0px">
      <div className="flex border-l-4 border-l-green-700 w-full relative pb-4">
        <div className="absolute left-[-3px]">
          <LucideCircleArrowRight color="green" />
        </div>
        {/* Content container -  */}
        <div className="flex flex-col w-full px-8 ">
          <div className="flex">
            <div className="flex-1">
              <p className="font-bold text-xl">{data.company}</p>
              <p className="text-xl">{data.title}</p>
            </div>
            <div className="flex items-end flex-col">
              <div className="flex">
                <p>{data.startDate}</p>
                <LucideArrowBigRight color="green" />
                <p>{data.endDate}</p>
              </div>
              <p className="italic text-xs">({data.duration})</p>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-2">
            {data.content.map((text, i) => (
              <li className="text-balance my-1 tracking-wide" key={i}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideUp>
  );
};
