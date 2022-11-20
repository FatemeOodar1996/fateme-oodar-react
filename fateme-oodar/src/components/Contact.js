import React from "react";
import Container from "react-bootstrap/esm/Container";

import style from "./Contact.module.css";

function Contact() {
    return (
        <div className={style.body}>
            <Container>
                <div class="d-flex flex-column align-items-center">
                    <a class={style.title}>Start building your website.</a>
                    <p class={style.description}>
                        I’m always looking for any new opportunities, my inbox is always open. Whether you have a
                        question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <a class={style.email} href="mailto:fateme.oodar75@gmail.com">
                        Fateme.oodar75@gmail.com
                    </a>
                </div>
            </Container>
        </div>
    );
}
export default Contact;
