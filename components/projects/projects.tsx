import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import { DownloadIcon } from "../icons/download";

import "./projects.scss"


export function Projects(){

    const projects = [
        { id: 1, name: "GoParty", downloadLink: "/projects/GoParty-TCS-main.zip" },
        { id: 2, name: "Month Manager", downloadLink: "/projects/Gerenciamento-Mensal-master.zip" },
        { id: 3, name: "QR-Code Generator", downloadLink: "/projects/QR-Code-generator-main..zip" },
        { id: 3, name: "Multistep Form", downloadLink: "/FormularioMultstep-main.zip" },
        { id: 3, name: "IMC Calculator", downloadLink: "/projects/IMC-Calculator-main.zip" },
        { id: 3, name: "Real time chat", downloadLink: "/projects/UserChat-main.zip" },
      ];

      return (
        <div className="my-projects">
          <h1>Main projects</h1>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <a href={project.downloadLink} download>
                  {project.name} <DownloadIcon/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }