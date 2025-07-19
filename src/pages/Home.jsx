import React from 'react'
import "../styles/home.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "motion/react"
import { Autoplay, Pagination } from 'swiper/modules';

const Home = () => {

    const slideData = [
        {
            imgSrc: "https://cdn.skoda-auto.com/images/sites/encom-v2/19f7263a-fba9-4522-afa4-b63816fd0d2d/37213c4c07a980b7691e5cfd1a1b4fc5/HeroBannerModule/d5873a76116765a49a9393a5cabdf63b/6c15c19c9087422c4b3593b63bcd9cadee61d995aa9aa406ecd1beab812bc116/Header_bp1200_1.webp",
            h1: "The new Škoda Enyaq",
            p: "Let's explore the latest addition to our electric portfolio, offering a range of over 580 kilometres"
        },
        {
            imgSrc: "https://cdn.skoda-auto.com/images/sites/encom-v2/5091778b-9a22-4891-908f-b5c4d6869dea/fef0a1135b56101b4e1a5efc76456ffe/HeroBannerModule/d5873a76116765a49a9393a5cabdf63b/6c15c19c9087422c4b3593b63bcd9cadee61d995aa9aa406ecd1beab812bc116/Header_bp992_1.webp",
            h1: "Škoda Elroq",
            p: "Be more Elroq."
        },
        {
            imgSrc: "https://cdn.skoda-auto.com/images/sites/encom-v2/edf3af7c-6e5d-428b-8ea1-49e9f531fcb2/3e344bc23d5b32c5f1124cfd2d55dbca/HeroBannerModule/d5873a76116765a49a9393a5cabdf63b/6c15c19c9087422c4b3593b63bcd9cadee61d995aa9aa406ecd1beab812bc116/Header_bp1200_1.webp",
            h1: "Škoda Kylaq",
            p: "Modern, bold & muscular SUV designed and engineered in India for India"
        },
        {
            imgSrc: "https://cdn.skoda-auto.com/images/sites/encom-v2/997709fc-3c1e-4e8b-981e-869e0f878be5/7b0010344ef8d2005c3562b1cf7ca03c/HomeBannerModule/d5873a76116765a49a9393a5cabdf63b/dc2c0c21ba8b690c28a681ba5993d110ba5ae3bb066ed32032e9288a0edcd321/Header_bp992_1.webp",
            h1: "Škoda Epiq",
            p: "Small becomes epic"
        }
    ];

    return (
        <div className='Home'>
            <section className='page1' >
                <div className="container">
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        style={{ width: '100%', height: '100%' }}
                        loop={true}
                        speed={800}
                        effect="slide"
                    >
                        {slideData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="box">
                                    <div className="image">
                                        <img src={slide.imgSrc} alt={slide.h1} />
                                    </div>
                                    <div className="info">
                                        <h1>{slide.h1}</h1>
                                        <p>{slide.p}</p>
                                        <button>Explore</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>
            <section className='page2'>
                <div className="container">
                    <motion.div
                        className="box1">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            transition={{
                                duration: 1
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            className="layer-1">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/11d12fef-0794-449b-8b30-7ccfd3d01e2b/7df8d236ba417fe74cadcdc34db94666/HometilesModule/6541a58f91ef0aa2af3aae92a9415479/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>

                            <div className="info">
                                <h1>Skoda App</h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            transition={{
                                duration: 1
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            className="layer-2"
                        >
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/6a629f91-036e-46c8-922e-adf200addf01/ee1ecfae4d6bff113f82f0da6d215190/HometilesModule/61fa58ec33c48623e437f7df4ab92b45/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>
                            <div className="info">
                                <h1>e-Mobility</h1>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className="box2">
                        <div className="layer-1">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/6a629f91-036e-46c8-922e-adf200addf01/ee1ecfae4d6bff113f82f0da6d215190/HometilesModule/61fa58ec33c48623e437f7df4ab92b45/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>

                            <div className="info">
                                <h1>Skoda App</h1>
                            </div>
                        </div>

                        <div className="layer-2">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/11d12fef-0794-449b-8b30-7ccfd3d01e2b/7df8d236ba417fe74cadcdc34db94666/HometilesModule/6541a58f91ef0aa2af3aae92a9415479/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>
                            <div className="info">
                                <h1>e-Mobility</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home