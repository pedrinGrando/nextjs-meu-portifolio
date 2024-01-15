import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>2 years working as a Full Stack Developer and learning new technologies that the market offers us.</p>
          <div className="experience-time">
            <Skill image="/java.png" measure={2} years="2 year"/>
            <Skill image="/spring.png" measure={2} years="2 year"/>
            <Skill image="/MySQL.png" measure={2} years="2 year"/>
            <Skill image="/react.png" measure={1} years="1 years"/>
            <Skill image="/ts.png" measure={1} years="1 years"/>
            <Skill image="/js.png" measure={1} years="1 years"/>
          </div>
        </div>
    )
}