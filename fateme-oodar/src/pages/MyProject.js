import Container from "react-bootstrap/esm/Container";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import style from "./MyProject.module.css";
// import { useParams } from "react-router-dom";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.png";
import image3 from "../assets/img/3.png";
import image4 from "../assets/img/4.jpg";
import image5 from "../assets/img/5.png";
import image6 from "../assets/img/6.jpg";
import image7 from "../assets/img/7.png";
import image8 from "../assets/img/8.jpg";
import image9 from "../assets/img/9.png";
function MyProject() {
    // let { projectName } = useParams();
    const [key, setKey] = useState("home");

    return (
        <div>
            {/* <h1>hello : {projectName}</h1> */}
            <Container>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className={`mb-3 row row-cols-md-2 ${style.tabBody}`}>
                    <Tab eventKey="home" title="UI/UX Projects" className={`mb-3 w-100 ${style.ui}`}>
                        <Container>
                            <div className={`mb-3 row row-cols-md-4 row-cols-1 ${style.pictures}`}>
                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image2} alt="image2" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>
                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image4} alt="image4" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>
                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image5} alt="image5" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>
                            </div>
                        </Container>
                    </Tab>
                    <Tab eventKey="profile" title="Frontend Projects" className={` mb-3 w-100 ${style.code}`}>
                        <Container>
                            <div className={`mb-3 row row-cols-md-4 row-cols-1 ${style.pictures}`}>
                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image1} alt="image1" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>

                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image3} alt="image3" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>

                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image5} alt="image5" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>
                                <div className={`col ${style.picture}`}>
                                    <div className={` ${style.imgcontainer}`}>
                                        <img src={image6} alt="image6" />
                                    </div>
                                    <h6>Sahel Talaie</h6>
                                    <p>Online Shop</p>
                                </div>
                            </div>
                        </Container>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}
export default MyProject;
