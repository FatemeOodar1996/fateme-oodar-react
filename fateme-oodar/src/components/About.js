import React from "react";
import Container from "react-bootstrap/Container";
import Title from "./Title";
import style from "./About.module.css";
import fatemeoodar from "../assets/img/FatemeOodar.png";

// import style from "./About.module.css";

function About() {
    return (
        <div className={style.aboutMe}>
            <Container className="mt-5">
                <Title />
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className={`col-md-8 col-12 ${style.description}`}>
                        <p>
                            Computer engineer who loves code, music, nature and photography based in sari, Iran! I
                            specialize in Web Development and also passionate about UI/UX Design. It’s needless to say
                            that I enjoy the work I do and I’m always open to expanding my knowledge and expertise.
                        </p>
                        <div className={`d-flex${style.skills}`}></div>
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
