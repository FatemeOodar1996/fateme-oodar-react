import React from "react";

import style from "./Title.module.css";

function Title(props) {
    return (
        <div>
            <div className={style.title}>
                <h2>
                    <span>{props.number}</span>
                    {props.text}
                </h2>
                <span className={style.line}></span>
            </div>
        </div>
    );
}
export default Title;
