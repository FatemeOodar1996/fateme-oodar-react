import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.css";
import { AiOutlineUnorderedList } from "react-icons/ai";

function OffcanvasExample() {
    return (
        <>
            {["md"].map((expand) => (
                <Navbar className={styles.navbar} key={expand} expand={expand}>
                    <Container>
                        <Navbar.Brand className={styles.brand} href="#">
                            SOLL
                        </Navbar.Brand>
                        <Navbar.Toggle
                            className={`order-1 ${styles.menu}`}
                            aria-controls={`offcanvasNavbar-expand-${expand}`}>
                            <AiOutlineUnorderedList />
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            className="bg-dark"
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end">
                            <Offcanvas.Header closeButton className={styles.closebtn}>
                                <Offcanvas.Title
                                    className={styles.offcanvasBrand}
                                    id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    SOLL
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 gap-3 pe-3">
                                    <Nav.Link className={styles.navLink} href="/">
                                        <span>01.</span>
                                        Home
                                    </Nav.Link>
                                    <Nav.Link className={styles.navLink} href="#action2">
                                        <span>02.</span>
                                        Experience
                                    </Nav.Link>
                                    <Nav.Link className={styles.navLink} href="/MyProject">
                                        <span>03.</span>
                                       Projects
                                    </Nav.Link>
                                    <Nav.Link className={styles.navLink} href="/Contact">
                                        <span>04.</span>
                                        Contact Me
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <a className={styles.resume} href="../assets/img/CVFatemeOodar.pdf" title="Resume" download>
                            Resume
                        </a>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
