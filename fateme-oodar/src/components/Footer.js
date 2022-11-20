import React from "react";
import Container from "react-bootstrap/esm/Container";

import style from "./Footer.module.css";

function Footer() {
    return (
        <div className={style.body}>
            <Container className="text-center">
                <span className={style.name}>Designed & Built by Fateme Oodar</span>
            </Container>
        </div>
    );
}
export default Footer;
