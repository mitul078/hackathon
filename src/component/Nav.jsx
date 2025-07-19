import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/nav.scss"
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Nav = () => {
    const [open, setOpen] = useState(false)

    const logoRef = useRef(null);
    const linkRefs = useRef([]);
    const mobileMenuRef = useRef(null);
    const closeButtonRef = useRef(null);
    const mobileLinksRef = useRef([]);
    linkRefs.current = [];
    mobileLinksRef.current = [];
    const addToRefs = (el) => {
        if (el && !linkRefs.current.includes(el)) {
            linkRefs.current.push(el);
        }
    };
    const addToMobileRefs = (el) => {
        if (el && !mobileLinksRef.current.includes(el)) {
            mobileLinksRef.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power2.out' } });

        tl.from(logoRef.current, { y: -20, opacity: 0 })
            .from(linkRefs.current, { x: -30, opacity: 0, stagger: 0.2 }, "-=0.4"); // starts while logo animates
    }, []);

    useEffect(() => {
        if (open) {
            // Opening animation
            const tl = gsap.timeline();

            // Set initial state
            gsap.set(mobileMenuRef.current, {
                display: 'block',
                x: '100%',
                opacity: 0
            });

            gsap.set(mobileLinksRef.current, {
                x: 50,
                opacity: 0
            });

            gsap.set(closeButtonRef.current, {
                scale: 0,
                rotation: 180
            });

            // Animate in
            tl.to(mobileMenuRef.current, {
                x: '0%',
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out'
            })
                .to(closeButtonRef.current, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                }, "-=0.2")
                .to(mobileLinksRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'power2.out'
                }, "-=0.3");

        } else if (mobileMenuRef.current) {
            // Closing animation
            const tl = gsap.timeline();

            tl.to(mobileLinksRef.current, {
                x: 50,
                opacity: 0,
                duration: 0.2,
                stagger: 0.05,
                ease: 'power2.in'
            })
                .to(closeButtonRef.current, {
                    scale: 0,
                    rotation: 180,
                    duration: 0.2,
                    ease: 'power2.in'
                }, "-=0.1")
                .to(mobileMenuRef.current, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power3.in'
                }, "-=0.1")
                .set(mobileMenuRef.current, {
                    display: 'none'
                });
        }
    }, [open]);

    const handleLinkClick = () => {
        // Add a slight delay before closing for better UX
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <div className='Navbar relative'>
            <div className="left">
                <h1 ref={logoRef}>Skoda</h1>
            </div>
            <div className={`right window-view `} >
                <div className="routes ">
                    <NavLink ref={addToRefs} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/"} >Home</NavLink>
                    <NavLink ref={addToRefs} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/models"} >Models</NavLink>
                    <NavLink ref={addToRefs} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/service"} >Service</NavLink>
                    <NavLink ref={addToRefs} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/company"} >Company</NavLink>

                </div>
            </div>
            <i onClick={() => setOpen(!open)} className="menu ri-menu-fold-fill"></i>
            <div ref={mobileMenuRef} className={`right mobile-view top-0 w-full absolute bg-gradient-to-br from-green-700 to-black h-screen ${open ? "block" : "hidden"}`}
                style={{ backdropFilter: 'blur(10px)' }}>
                <i onClick={() => setOpen(false)} className="close ri-close-circle-fill"></i>
                <div className="routes flex flex-col ">
                    <NavLink  ref={addToMobileRefs}  onClick={handleLinkClick} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/"} >Home</NavLink>
                    <NavLink ref={addToMobileRefs}  onClick={handleLinkClick} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/models"} >Models</NavLink>
                    <NavLink ref={addToMobileRefs}  onClick={handleLinkClick} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/service"} >Service</NavLink>
                    <NavLink  ref={addToMobileRefs} onClick={handleLinkClick} className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-700 after:to-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" to={"/company"} >Company</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav
