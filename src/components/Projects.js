import React from "react";
import ProjectsModule from "./css/Projects.module.css";
import NavBar from "./NavBar";

const Projects = ({ title, img, github, siteLink, languages }) => {
  return (
    <>
      <div className={ProjectsModule.project}>
        <div className={ProjectsModule["img-container"]}>
          <div className={ProjectsModule.overlay}></div>
          <img src={img} className={ProjectsModule.screenshot} />
          <a href={github}>
            <div className={ProjectsModule["github-icon"]}>
              <img src="img/github-icon.svg" />
            </div>
          </a>
          <a href={siteLink}>
            <div className={ProjectsModule["link-icon"]}>
              <img src="img/link-icon.svg" />
            </div>
          </a>
        </div>
        <h1 className={ProjectsModule["project-title"]}>{title}</h1>
      </div>
      <ul className={ProjectsModule["skills-list"]}>
        {languages.map((language, i) => {
          return (
            <li className={ProjectsModule.language} key={i}>
              {language}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
