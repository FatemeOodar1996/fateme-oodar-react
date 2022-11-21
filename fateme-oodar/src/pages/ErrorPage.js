import React from "react";
import style from "./ErrorPage.module.css";
import error from "../assets/img/error.svg";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <div>
            <Container className={style.body}>
                <div className={style.description}>
                    <h3>Sorry!</h3>
                    <p>Page Not Found</p>
                    <Button
                        className={style.backbtn}
                        onClick={() => {
                            navigate("/");
                        }}>
                        Back to Home
                    </Button>
                </div>
                <img className={style.errorImg} src={error} alt="error image" />
            </Container>
        </div>
    );
}
export default ErrorPage;
