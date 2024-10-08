import React from "react";
import { Education } from "@/lib/types";
import { EducationItem } from "./education-item";

type Props = {
  data: Education[];
};

export const EducationList = async ({ data }: Props) => {
  return (
    <div
      className="max-w-screen-xl w-full px-2 md:px-6 flex flex-col justify-center py-12"
      id="educationExperience"
    >
      <div className="inline-block relative">
        <h6 className="text-3xl font-bold">{data[0].headerTitle}</h6>
      </div>
      <div className="mt-12">
        {data.map((educationItem, i) => (
          <EducationItem data={educationItem} key={i} />
        ))}
      </div>
    </div>
  );
};
