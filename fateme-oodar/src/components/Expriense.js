import { React } from "react";
import Container from "react-bootstrap/esm/Container";
import Title from "./Title";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import style from "./Expriense.module.css";

function Expriense() {
    return (
        <div className={style.body}>
            <Container>
                <Title text="Where I’ve Worked" number="02." />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="row d-flex align-items-start">
                        <Col md={3}>
                            <Nav
                                variant="pills"
                                className={`row flex-row flex-md-column justify-content-around nav-pills ${style.nav}`}>
                                <Nav.Item className="col-md-12 col-4 ps-0">
                                    <Nav.Link className={`${style.navLink}`} eventKey="first">
                                        Namira
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="col-md-12 col-4 ps-0">
                                    <Nav.Link className={style.navLink} eventKey="second">
                                        Movassagh
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="col-md-12 col-4 ps-0">
                                    <Nav.Link className={style.navLink} eventKey="third">
                                        Rastan
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className={style.tabBody}>
                                        <h5>
                                            Namira Yarasan Vista:
                                            <span>Graphic Designer and Frontend Developer</span>
                                        </h5>
                                        <span>2018 - 2022</span>
                                        <ul>
                                            <li>Developing responsive websites using reactjs and nextjs</li>
                                            <li>Working with versioning tools such as github and gitlab</li>
                                            <li>Designing and developing modern web user interfaces</li>
                                            <li>Designing modern mobile user interfaces</li>
                                            <li>Working in a dynamic team</li>
                                            <li>Utilizing agile project management methods such as scrum</li>
                                            <li>Character Design</li>
                                            <li>designing multiple catalogs, banners and brochures</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className={style.tabBody}>
                                        <h5>
                                            Movassagh:
                                            <span>Motion Grapic Designer</span>
                                        </h5>
                                        <span>5 May 2018- 20 May 2018</span>
                                        <ul>
                                            <li>Motion Grapic</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>{" "}
                                <Tab.Pane eventKey="third">
                                    <div className={style.tabBody}>
                                        <h5>
                                            Rastan:
                                            <span>Motion Grapic Designer</span>
                                        </h5>
                                        <span>5 May 2017- 8 August 2017</span>
                                        <ul>
                                            <li>Motion Grapic</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}

export default Expriense;
