import { SlideUp } from "@/components/slide-up";
import { WorkExperience } from "@/lib/types";
import { monthsDifference } from "@/lib/utils";
import { LucideArrowBigRight, LucideCircleArrowRight } from "lucide-react";
import React from "react";

type Props = {
  data: WorkExperience;
};

export const WorkItem = ({ data }: Props) => {
  // Handle current date in fr & en
  const presentDate = new Date();
  const presentMonth = presentDate.toLocaleString("default", { month: "long" });
  const presentYear = presentDate.toLocaleString("default", {
    year: "numeric",
  });
  const presentMonthFR = presentDate.toLocaleString("fr-FR", { month: "long" });
  // Local string for months text in fr & en
  var monthsString = "";
  // Display current month if no end date
  const getEndDate = (endDate: string) => {
    switch (endDate) {
      case "present":
        monthsString = "months";
        return (
          presentMonth.charAt(0).toUpperCase() +
          presentMonth.slice(1) +
          " " +
          presentYear
        );
      case "présent":
        monthsString = "mois";
        return (
          presentMonthFR.charAt(0).toUpperCase() +
          presentMonthFR.slice(1) +
          " " +
          presentYear
        );
      default:
        return endDate;
    }
  };

  return (
    // Container
    <SlideUp offset="-200px 0px -200px 0px">
      <div className="flex border-l-4 border-l-green-700 w-full relative pb-4">
        <div className="absolute left-[-3px]">
          <LucideCircleArrowRight color="green" />
        </div>
        {/* Content container -  */}
        <div className="flex flex-col w-full lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 px-8 lg:px-0">
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg lg:text-xl">
                {data.company}
              </p>
              <p className="text-base md:text-lg lg:text-xl">{data.title}</p>
            </div>
            <div className="flex items-end flex-col">
              <div className="flex">
                <p>{data.startDate}</p>
                <LucideArrowBigRight color="green" />
                <p>{getEndDate(data.endDate)}</p>
              </div>
              <p className="italic text-xs">
                (
                {data.duration == "0"
                  ? monthsDifference(
                      data.startDate,
                      presentMonth + " " + presentYear
                    ) +
                    " " +
                    monthsString
                  : data.duration}
                )
              </p>
            </div>
          </div>

          <ul className="list-[square] pl-6 mt-2">
            {data.content.map((text, i) => (
              <li className="text-balance my-1 tracking-wide" key={i}>
                {text}
              </li>
            ))}
          </ul>
          {data.projects.map((project, i) => (
            <div key={i}>
              <p className="font-bold">{project.name}</p>
              <div className="px-6">
                <ul className="list-[circle] pl-6 mt-2">
                  {project.tasks.map((text, i) => (
                    <li
                      className="text-balance text-base md:text-lg lg:text-xl my-1 tracking-wide"
                      key={i}
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideUp>
  );
};
