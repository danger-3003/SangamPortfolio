/* eslint-disable @next/next/no-img-element */
"use client"

import { AboutPageData } from "@/constants/AboutPage";

const About = () => {
  return (
    <div className="">
      <div className="flex items-center justify-start gap-8 border-b border-wave-to pb-5">
        <div>
          <img src={AboutPageData.image} alt={AboutPageData.name} className="rounded-full size-40" />
        </div>
        <div className="flex items-center justify-start flex-col gap-4">
          <h2 className="text-5xl text-amber-500 dark:text-cyan-100 font-bold">{AboutPageData.name}</h2>
          <div>{AboutPageData.role}</div>
        </div>
      </div>
      <div className="flex items-start justify-start flex-col gap-3 pt-5">
        <div className="flex items-start justify-start flex-col gap-3">
          <div className="text-4xl font-semibold">About me</div>
          <p>{AboutPageData.about}</p>
        </div>
        <div className="flex items-start justify-start flex-col gap-3">
          <div className="text-4xl font-semibold">Education</div>
          <div className="flex items-center justify-between w-full">
            <b>{AboutPageData.education.degree}</b>
            <div>({AboutPageData.education.year})</div>
          </div>
          <div>{AboutPageData.education.description}</div>
        </div>
        <div className="flex items-start justify-start flex-col gap-3">
          <div className="text-4xl font-semibold">Experience</div>
          <div style={{ display: "grid", gap: "14px" }}>
            {AboutPageData.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex items-center justify-between w-full mb-1">
                  <b className="text-xl">{exp.company}</b>
                  ({exp.duration})
                </div>
                <div>
                  <b>{exp.role}</b>
                </div>
                <div className="mt-1.5">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;