// import React from "react";
import Container from "react-bootstrap/esm/Container";
import style from "./Projects.module.css";
import Title from "./Title";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.png";
import image3 from "../assets/img/3.png";
import image4 from "../assets/img/4.jpg";
import image5 from "../assets/img/5.png";
import image6 from "../assets/img/6.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { Autoplay } from "swiper";

// import required modules
import { EffectCards } from "swiper";

function Projects() {
    return (
        <div className={style.body}>
            <Container>
                <Title text="Some Things I’ve Built" number="03." />
                <div class={`d-flex row align-items-center ${style.project}`}>
                    <div class={`col-md-6 ${style.description}`}>
                        <h3>Take a look through my recent projects</h3>
                        <p>
                            It's my belief that practice doesn't make you perfect, there's always more to learn and
                            experience but practice makes you better than before and that is a great thing to aim for.
                        </p>
                    </div>
                    <div class="swiper mySwiper col-md-6">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            modules={[Autoplay, EffectCards]}
                            className={`${style.mySwiper}`}>
                            <SwiperSlide className={`${style.swiperSlide}`}>
                                <div className={`${style.card}`}>
                                    <div className={`${style.projectIamge}`}>
                                        <img src={image1} alt="image one" />
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h5 className={`${style.cardTitle}`}>Book Mark Landingpage</h5>
                                        <p className={`${style.cardText}`}>
                                            A clean and simple website about organize your favourite websites.
                                        </p>
                                        <div className={`${style.tools}`}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${style.swiperSlide}`}>
                                <div className={`${style.card}`}>
                                    <div className={`${style.projectIamge}`}>
                                        <img src={image2} alt="image one" />
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h5 className={`${style.cardTitle}`}>Book Mark Landingpage</h5>
                                        <p className={`${style.cardText}`}>
                                            A clean and simple website about organize your favourite websites.
                                        </p>
                                        <div className={`${style.tools}`}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${style.swiperSlide}`}>
                                <div className={`${style.card}`}>
                                    <div className={`${style.projectIamge}`}>
                                        <img src={image3} alt="image one" />
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h5 className={`${style.cardTitle}`}>Book Mark Landingpage</h5>
                                        <p className={`${style.cardText}`}>
                                            A clean and simple website about organize your favourite websites.
                                        </p>
                                        <div className={`${style.tools}`}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${style.swiperSlide}`}>
                                <div className={`${style.card}`}>
                                    <div className={`${style.projectIamge}`}>
                                        <img src={image4} alt="image one" />
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h5 className={`${style.cardTitle}`}>Book Mark Landingpage</h5>
                                        <p className={`${style.cardText}`}>
                                            A clean and simple website about organize your favourite websites.
                                        </p>
                                        <div className={`${style.tools}`}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>{" "}
                            <SwiperSlide className={`${style.swiperSlide}`}>
                                <div className={`${style.card}`}>
                                    <div className={`${style.projectIamge}`}>
                                        <img src={image5} alt="image one" />
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h5 className={`${style.cardTitle}`}>Book Mark Landingpage</h5>
                                        <p className={`${style.cardText}`}>
                                            A clean and simple website about organize your favourite websites.
                                        </p>
                                        <div className={`${style.tools}`}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>{" "}
                            <SwiperSlide className={`${style.swiperSlide}`}>
                                <div className={`${style.card}`}>
                                    <div className={`${style.projectIamge}`}>
                                        <img src={image6} alt="image one" />
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h5 className={`${style.cardTitle}`}>Book Mark Landingpage</h5>
                                        <p className={`${style.cardText}`}>
                                            A clean and simple website about organize your favourite websites.
                                        </p>
                                        <div className={`${style.tools}`}>
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Projects;
