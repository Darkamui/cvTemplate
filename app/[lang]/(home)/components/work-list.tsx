import React from "react";
import { WorkItem } from "./work-item";
import { WorkExperience } from "@/lib/types";

type Props = {
  data: WorkExperience[];
};

export const WorkList = async ({ data }: Props) => {
  return (
    <div
      className="max-w-screen-xl min-h-screen w-full px-8 lg:px-0 flex flex-col justify-center"
      id="workExperience"
    >
      <div className="inline-block relative">
        <h6 className="text-3xl font-bold">{data[0].headerTitle}</h6>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        {data.map((workItem, i) => (
          <WorkItem data={workItem} key={i} />
        ))}
      </div>
    </div>
  );
};
