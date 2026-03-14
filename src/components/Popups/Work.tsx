/* eslint-disable @next/next/no-img-element */
import { WorkPageData } from "@/constants/WorkPage";
import Link from "next/link";

export default function Work() {
  const { tools, dev, behance } = WorkPageData;

  return (
    <div className="pb-5 work-popup-content">
      {/* Info Box */}
      {/* <div className="bg-[#4b88bf] rounded p-4 mb-6">
        <b>Accepting work offers via email.</b>
        <br />
        I do illustration, animation, web design, and web/app development :)
      </div> */}

      {/* Tools + Dev */}
      <div className="grid grid-cols-2 gap-4.5">
        <div>
          <h2 className="text-3xl font-bold mb-2">TOOLS</h2>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="
                px-2.5 py-1
                border border-gray-200
                rounded-lg
                text-[17px]
                dark:bg-[rgba(17,19,24,0.55)]
                transition
                hover:translate-y-0.75
                hover:shadow-lg
                darkhover:bg-[rgba(37,48,70,0.85)]
                shadow-flat cursor-default
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">
            DEVELOPMENT
          </h2>

          <div className="flex flex-wrap gap-3">
            {dev.map((item) => (
              <span
                key={item}
                className="
                px-2.5 py-1
                border border-gray-200
                rounded-lg
                text-[17px]
                dark:bg-[rgba(17,19,24,0.55)]
                transition
                hover:translate-y-0.75
                hover:shadow-lg
                dark:hover:bg-[rgba(37,48,70,0.85)]
                shadow-flat cursor-default
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/25 my-5" />

      {/* Behance Section */}
      <h2 className="text-3xl font-bold mb-2">
        BEHANCE PROJECTS
      </h2>

      <p className="opacity-90 mb-3">
        Imported from your Behance profile.
      </p>

      {/* Projects */}
      <div className="work-projects-grid">
        {behance.projects.map((project, key) => (
          <Link key={key} href={project?.url} className="group">
            <article
              key={project.title}
              className="
                border border-gray-200
                rounded-[10px]
                aspect-video
                dark:bg-[rgba(17,19,24,0.55)]
                dark:hover:bg-[rgba(37,48,70,0.85)]
                hover:bg-gray-50/50
                p-2.5 cursor-pointer shadow-flat duration-150 group-hover:translate-y-1.75
              "
            >
              <div className="overflow-hidden rounded-lg w-full aspect-video relative flex items-center justify-center">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full aspect-video object-cover object-top absolute"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start flex-col gap-1.5 my-2.5">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur fugiat facilis beatae, dolorem aliquam.</p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-3">
        See all projects on&nbsp;
        <a
          href={behance.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-cyan-200 text-blue-600 underline"
        >
          Behance
        </a>
      </div>
    </div>
  );
}
