import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./Hero.module.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

function Hero() {
    return (
        <div>
            <div id="particles-js"></div>
            <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-md-5 pb-5 mt-0">
                <div className={styles.heroTitle}>
                    <span>Hi , my name is</span>
                    <h1>Fateme Oodar</h1>
                    <h2>I build things for the web.</h2>
                    <p>I'm Frontend Developer Located in Iran</p>
                    <p>
                        You can see my resume in
                        <a target="_blank" href="https://github.com/FatemeOodar1996">
                            Github
                        </a>
                    </p>
                </div>
                <div className={styles.heroSocial}>
                    <a href="https://github.com/FatemeOodar1996" target="_blank" rel="noreferrer">
                        <BsGithub className={styles.socialIcons} />
                    </a>
                    <a href="https://linkedin.com/in/fateme-oodar-2a929a192" target="_blank" rel="noreferrer">
                        <BsLinkedin className={styles.socialIcons} />
                    </a>
                    <a href="mailto:fateme.oodar1375@gmail.com" target="_blank" rel="noreferrer">
                        <IoMail className={styles.socialIcons} />
                    </a>
                </div>
            </Container>
        </div>
    );
}
export default Hero;
