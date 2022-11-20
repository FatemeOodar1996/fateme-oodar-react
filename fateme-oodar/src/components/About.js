import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Title from "./Title";
import SkillsTable from "./SkillsTable";
import style from "./About.module.css";
import fatemeoodar from "../assets/img/FatemeOodar.png";

// import style from "./About.module.css";

function About() {
    const [programSkill, setProgramSkill] = useState({
        header: "FRONT - END SKILLS",
        name: [
            "HTML",
            "CSS",
            "SASS/SCSS",
            "Bootstrap",
            "Tailwind",
            "Responsive Design",
            "React.js",
            "Git",
            "JavaScript",
            "jQuery",
            " Ajax",
        ],
    });
    const [graphicSkill, setGraphicSkill] = useState({
        header: "GRAPHIC SKILLS",
        name: [
            " UI Design",
            " UX Design",
            " Logo Design",
            " Catalouge",
            " Banner",
            " Motion Graphic",
            " 2D Animation",
            " 3D animation",
            " Photoshop",
            "Iilustrator",
            "Figma",
        ],
    });

    return (
        <div className={style.aboutMe}>
            <Container className="mt-5">
                <Title text="About Me" number="01." />
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className={`col-md-8 col-12 ${style.description}`}>
                        <p>
                            Computer engineer who loves code, music, nature and photography based in sari, Iran! I
                            specialize in Web Development and also passionate about UI/UX Design. It’s needless to say
                            that I enjoy the work I do and I’m always open to expanding my knowledge and expertise.
                        </p>
                        <div className={`d-flex ${style.skills}`}>
                            <SkillsTable header={programSkill.header} data={programSkill.name} />
                            <SkillsTable header={graphicSkill.header} data={graphicSkill.name} />
                            {/* <SkillsTable /> */}
                        </div>
                    </div>
                    <div className={`col-md-4 col-12 ${style.image}`}>
                        <img src={fatemeoodar} alt="fatemeoodar" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default About;
