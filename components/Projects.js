import React from "react";
import userData from "@constants/data";
import projects from "pages/projects";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-[14rem] bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              key={proj.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a
      href={link}
      className="lg:w-full md:w-auto sm:w-auto block shadow-2xl max-w-xl mx-auto"
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-105 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 dark:text-[#FAF089] font-bold text-xl bg-gray-800 rounded-md px-2">
          {title}
        </h1>
        <div className="bg-gray-600 dark:bg-gray-700">
          <h1 className="text-gray-50 dark:text-[#FAF089] font-bold text-xl py-2 px-2 ml-3">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </div>
    </a>
  );
};
