import React from "react";
import style from "./SkillsTable.module.css";

function SkillsTable({ data, header }) {
    return (
        <div>
            <h5 className={`d-flex justify-content-center align-items-center ${style.skillTitle}`}>{header}</h5>
            <div className={`d-flex justify-content-between ${style.skillData}`}>
                <ul>
                    {data.slice(0, 5).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {data.slice(6, 11).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default SkillsTable;
