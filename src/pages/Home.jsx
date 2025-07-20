import React from 'react'
import "../styles/home.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "motion/react"
import { Autoplay, Pagination } from 'swiper/modules';
import { useRef, useEffect, useCallback, useState } from 'react';

import gsap from 'gsap';
import SplitText from '../libs/gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
    const homeRef = useRef(null);

    useEffect(() => {
        gsap.from(homeRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 1.2,
        });
    }, []);


    const textRefs = useRef([]);
    const sectionRef = useRef(null);


    useEffect(() => {

        textRefs.current.forEach((textElement, index) => {
            if (textElement) {

                const text = textElement.textContent;
                textElement.innerHTML = '';


                [...text].forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(50px) rotateX(-90deg)';
                    span.classList.add('char');
                    textElement.appendChild(span);
                });


                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: textElement,
                        start: index < 2 ? "top 90%" : "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });


                tl.to(textElement.querySelectorAll('.char'), {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                    delay: index * 0.1
                })
                    .to(textElement.querySelectorAll('.char'), {
                        textShadow: "0 0 20px rgba(255,255,255,0.5)",
                        duration: 0.3,
                        stagger: 0.02,
                        yoyo: true,
                        repeat: 1
                    }, "-=0.2");


                textElement.addEventListener('mouseenter', () => {
                    gsap.to(textElement.querySelectorAll('.char'), {
                        y: -5,
                        color: '#4ecdc4',
                        duration: 0.3,
                        stagger: 0.02,
                        ease: "power2.out"
                    });
                });

                textElement.addEventListener('mouseleave', () => {
                    gsap.to(textElement.querySelectorAll('.char'), {
                        y: 0,
                        color: '#9FE2Bf',
                        duration: 0.3,
                        stagger: 0.02,
                        ease: "power2.out"
                    });
                });
            }

        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const FooterSlides = [
        {
            id: 0,
            image: 'https://cdn.skoda-auto.com/images/sites/encom-v2/1214d01d-8e36-4597-8c82-73e6f68c84df/5abb7ac233f080392eee41998ef26d0a/HighlightsModule/685106d543825796f9f55d44fec7a4b2/dc644d7dcc87568712479736f3d9616116a47d60f725f03bd4a66359b5358ab7/Default_bp576_1.webp',
            title: 'Mlada Boleslav',
            description: 'Mladá Boleslav is a hive of technical development. A place where models are crafted and put into full-scale production. The city hosting the company’s production facilities is also home to its headquarters. Škoda currently manufactures the Fabia, Kamiq, Scala, Karoq, Octavia and Enyaq models here.'
        },
        {
            id: 1,
            image: 'https://cdn.skoda-auto.com/images/sites/encom-v2/e9330ab1-d2e6-4916-b8a3-1e237d18e475/b2934e8c4cb601120fc1d1a5576900b7/HighlightsModule/685106d543825796f9f55d44fec7a4b2/dc644d7dcc87568712479736f3d9616116a47d60f725f03bd4a66359b5358ab7/Default_bp576_1.webp',
            title: 'Kvasiny',
            description: 'This plant is the baby in Škoda’s family of production facilities in the Czech Republic. This is the place where production lines build two of the Škoda’s SUVs - Karoq and Kodiaq.'
        },
        {
            id: 2,
            image: 'https://cdn.skoda-auto.com/images/sites/encom-v2/ed2c0f9a-e535-4153-a949-8c537299aa8b/081527c760f4cd8af317d4f729fa6257/HighlightsModule/685106d543825796f9f55d44fec7a4b2/dc644d7dcc87568712479736f3d9616116a47d60f725f03bd4a66359b5358ab7/Default_bp576_1.webp',
            title: 'Vrchlabí',
            description: 'Since 2012, the Vrchlabí has been turning out highly sophisticated DSG automatic gearboxes for the entire VW Group.'
        },
        {
            id: 3,
            image: 'https://cdn.skoda-auto.com/images/sites/encom-v2/45d4bd04-354c-4a80-ba03-d227455191d5/aa00d09479e06cbf02bcb2369726ef42/HighlightsModule/685106d543825796f9f55d44fec7a4b2/dc644d7dcc87568712479736f3d9616116a47d60f725f03bd4a66359b5358ab7/Default_bp576_1.webp',
            title: 'Plants abroad',
            description: 'In recent years, manufacturing operations have been expanded on other markets, such as China, Germany, India, Slovakia and Ukraine.'
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % FooterSlides.length);
    }, [FooterSlides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + FooterSlides.length) % FooterSlides.length);
    }, [FooterSlides.length]);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlay, nextSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };


    const headingRefs = useRef([]);

    const addToHeadRefs = (el) => {
        if (el && !headingRefs.current.includes(el)) {
            headingRefs.current.push(el);
        }
    };

    useEffect(() => {
        headingRefs.current.forEach((el) => {
            const split = new SplitText(el, { type: "words" });
            gsap.from(split.words, {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            });
        });
    }, []);

    return (
        <div  ref={homeRef} className='Home'>
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
            <section ref={sectionRef} className='page2'>
                <div className="container">
                    <motion.div
                        className="box1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="layer-1">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/11d12fef-0794-449b-8b30-7ccfd3d01e2b/7df8d236ba417fe74cadcdc34db94666/HometilesModule/6541a58f91ef0aa2af3aae92a9415479/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>

                            <div className="info">
                                <h1
                                    ref={addToRefs}
                                    className="animated-title"
                                    style={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        perspective: '1000px'
                                    }}
                                >
                                    Skoda App
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="layer-2"
                        >
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/6a629f91-036e-46c8-922e-adf200addf01/ee1ecfae4d6bff113f82f0da6d215190/HometilesModule/61fa58ec33c48623e437f7df4ab92b45/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>
                            <div className="info">
                                <h1
                                    ref={addToRefs}
                                    className="animated-title"
                                    style={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        perspective: '1000px'
                                    }}
                                >
                                    e-Mobility
                                </h1>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className="box2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}

                            className="layer-1">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/6a629f91-036e-46c8-922e-adf200addf01/ee1ecfae4d6bff113f82f0da6d215190/HometilesModule/61fa58ec33c48623e437f7df4ab92b45/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>

                            <div className="info">
                                <h1
                                    ref={addToRefs}
                                    className="animated-title"
                                    style={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        perspective: '1000px'
                                    }}
                                >
                                    e-Mobility
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="layer-2">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/11d12fef-0794-449b-8b30-7ccfd3d01e2b/7df8d236ba417fe74cadcdc34db94666/HometilesModule/6541a58f91ef0aa2af3aae92a9415479/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>
                            <div className="info">
                                <h1
                                    ref={addToRefs}
                                    className="animated-title"
                                    style={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        perspective: '1000px'
                                    }}
                                >
                                    Skoda App
                                </h1>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="box1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="layer-1">
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/11d12fef-0794-449b-8b30-7ccfd3d01e2b/7df8d236ba417fe74cadcdc34db94666/HometilesModule/6541a58f91ef0aa2af3aae92a9415479/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>

                            <div className="info">
                                <h1
                                    ref={addToRefs}
                                    className="animated-title"
                                    style={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        perspective: '1000px'
                                    }}
                                >
                                    Skoda App
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="layer-2"
                        >
                            <div className="wrapper"></div>
                            <div className="image">
                                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/6a629f91-036e-46c8-922e-adf200addf01/ee1ecfae4d6bff113f82f0da6d215190/HometilesModule/61fa58ec33c48623e437f7df4ab92b45/529fee9127cf46c11d03395194248848a902e6628a1b02e5f7e3f4628916b8c1/Default_bp576_1.webp" alt="" />
                            </div>
                            <div className="info">
                                <h1
                                    ref={addToRefs}
                                    className="animated-title"
                                    style={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        perspective: '1000px'
                                    }}
                                >
                                    e-Mobility
                                </h1>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className='page3'>

                <motion.div
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    exit={{ opacity: 0, x: -1000 }}
                    className="container">
                    <div className="left-box">
                        <motion.div
                            className="image1">
                            <motion.img
                                whileHover={{ y: -200, rotate: "-10deg" }}
                                src="/mobiles-removebg-preview.png" alt="" />
                        </motion.div>
                        <div className="image2">
                            <motion.img
                                whileHover={{ y: -100, rotate: "20deg" }}
                                src="/mobile2-removebg-preview.png" alt="" />
                        </div>
                    </div>
                    <div className="right-box">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >Convenient interaction</motion.p>
                        <h1>Modern App</h1>
                        <h3>We developed a simple and functional app.
                            It is built in such a way as to simplify the problem of the car selection and rental process. View the location, statement, and other information about each of the vehicles in one click.</h3>
                        <button>Download App</button>
                    </div>
                </motion.div>
            </section>
            <section className='page4  flex-col' >
                <h1 ref={addToHeadRefs} className='header'>Story of Skoda</h1>
                <div
                    className="slider-container"
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {FooterSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                                <button className="btn" onClick={() => console.log(`Exploring ${slide.title}`)}>
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="navigation">
                        <button className="nav-btn" onClick={prevSlide}>‹</button>
                        <button className="nav-btn" onClick={nextSlide}>›</button>
                    </div>

                    <div className="dots">
                        {FooterSlides.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className='page5' >
                <h1 ref={addToHeadRefs}>The Golden Age of Model Development</h1>
                <img src="https://cdn.skoda-auto.com/images/sites/encom-v2/f844c3e0-3a93-4b4a-a2a6-47e02d1aec2d/489885200686821dfc70d3eb0dee1179/IntroductionModule/78346a1c09e729ed7be6fda7deb03aea0220b22c1a0bae7745213a8fe54958d1/Default_bp1200_1.webp" alt="" />
            </section>
        </div>
    )
}

export default Home