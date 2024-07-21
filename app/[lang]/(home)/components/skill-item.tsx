import Image from "next/image";
import React from "react";

type Props = {};

export const SkillItem = ({ data }: any) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 p-4 bg-gray-200 rounded-md gap-4">
      <div className="max-w-[100px] max-h-[100px] flex items-center justify-center">
        <Image src={data.image} alt="" width={100} height={100} />
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="font-bold text-lg">{data.name}</p>
      </div>
    </div>
  );
};
