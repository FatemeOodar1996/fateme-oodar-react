import React from "react";

import style from "./Title.module.css";

function Title() {
    return (
        <div>
            <div className={style.title}>
                <h2>
                    <span>01.</span>
                    About Me
                </h2>
                <span className={style.line}></span>
            </div>
        </div>
    );
}
export default Title;
