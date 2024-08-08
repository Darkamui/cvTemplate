import React from "react";
import { SkillType } from "@/lib/types";
import { css, docker, js, html, git, sql, cicd, csharp } from "@/assets/images";
import { SkillItem } from "./skill-item";

type Props = {
  data: SkillType;
};

const skills = [
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "JavaScript",
    image: js,
  },
  {
    name: "C#",
    image: csharp,
  },
  {
    name: "Docker",
    image: docker,
  },
  {
    name: "SQL",
    image: sql,
  },
  {
    name: "Git",
    image: git,
  },

  {
    name: "CI/CD",
    image: cicd,
  },
];

export const SkillsList = async ({ data }: Props) => {
  return (
    <div
      className="max-w-screen-xl  w-full px-8 lg:px-0 flex flex-col justify-center p-12"
      id="skills"
    >
      <div className="inline-block relative">
        <h6 className="text-3xl font-bold">{data.headerTitle}</h6>
      </div>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SkillItem data={skill} key={i} />
        ))}
      </div>
    </div>
  );
};
