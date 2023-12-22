import "./header.scss";

import Image from 'next/image'

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Pedro! 👋</h1>
            <h2>Full Stack Developer</h2>

            <div className="curriculums">

            <a href="/pdfs/PedroCurrículoBR.pdf" download>BR Curriculum /  </a>  
            
            <a href="/pdfs/PedroCurriculum.pdf" download> EN Curriculum </a>
              
          </div>

          </div>
          <Image
            src="/me.jpg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}