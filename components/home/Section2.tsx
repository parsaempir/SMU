'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        id: '01',
        title: 'Discovery',
        image: '/Frame 38286.png',
        award: 'We dive deep into your business, audience, and competitive landscape to uncover real opportunities and risks before anything is built.'
    },
    {
        id: '02',
        title: 'Strategy',
        image: '/Frame 38285.png',
        award: 'We translate insights into a focused roadmap with clear priorities, positioning, and measurable goals aligned with your growth vision.'
    },
    {
        id: '03',
        title: 'Optimize',
        image: '/Rectangle 41.png',
        award: 'We translate insights into a focused roadmap with clear priorities, positioning, and measurable goals aligned with your growth vision.'
    },
    {
        id: '04',
        title: 'Launch',
        image: '/Frame 38287.png',
        award: 'We bring your vision to life with precision execution, ensuring a seamless and impactful launch.'
    }
];

const Section2 = () => {
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add({
            // Desktop
            isDesktop: "(min-width: 1024px)",
            // Tablet
            isTablet: "(min-width: 640px) and (max-width: 1023px)",
            // Mobile
            isMobile: "(max-width: 639px)"
        }, (context: any) => {
            const { isDesktop, isTablet, isMobile } = context.conditions;
            const wrappers = gsap.utils.toArray('.project-wrapper');

            // Responsive Params
            const rotationVal = isMobile ? 4 : (isTablet ? 6 : 8);
            const scaleVal = isMobile ? 0.7 : (isTablet ? 0.65 : 0.55);
            const radiusVal = isMobile ? "40px" : "60px";

            wrappers.forEach((wrapper: any) => {
                const box = wrapper.querySelector('.animated-box');
                const img = wrapper.querySelector('.animated-img');
                const content = wrapper.querySelector('.project-content');

                gsap.set(box, {
                    rotation: rotationVal,
                    scale: scaleVal,
                    opacity: 1,
                    borderRadius: radiusVal,
                    transformOrigin: "center center"
                });

                gsap.set(img, { scale: 1.6, rotation: -rotationVal });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2.2,
                    }
                });

                tl
                    .to(box, {
                        rotation: 0,
                        scale: 1,
                        scaleX: 1,
                        borderRadius: "0px",
                        ease: "power1.inOut",
                        duration: 1.5
                    }, 0)
                    .to(img, {
                        rotation: 0,
                        scale: 1,
                        ease: "power1.inOut",
                        duration: 1.5
                    }, 0)
                    .to(content, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8
                    }, 0.6)

                    .to(box, {
                        scaleX: 0.985,
                        scaleY: 1.005,
                        duration: 0.8,
                        ease: "sine.inOut"
                    })

                    .to(box, {
                        rotation: -rotationVal,
                        scale: scaleVal,
                        scaleX: 1,
                        scaleY: 1,
                        borderRadius: radiusVal,
                        ease: "power1.inOut",
                        duration: 2.0
                    })
                    .to(img, {
                        rotation: rotationVal,
                        scale: 1.6,
                        ease: "power1.inOut",
                        duration: 2.0
                    }, "<")
                    .to(content, {
                        opacity: 0,
                        y: -30,
                        duration: 1.0
                    }, "<");
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="w-full bg-white">
            {projects.map((proj, idx) => (
                <div
                    key={idx}
                    className="project-wrapper relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center overflow-hidden"
                >
                    <div className="animated-box relative w-full h-full overflow-hidden will-change-transform z-10 shadow-2xl flex items-center justify-center">

                        <div className="animated-img absolute inset-0 w-full h-full will-change-transform">
                            <Image
                                src={proj.image}
                                alt={proj.title}
                                fill
                                className="object-cover"
                                priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-black/40 z-10" />
                        </div>

                        <div className="project-content opacity-0 translate-y-32 relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6">
                            <span className="text-white/50 font-mono tracking-widest text-[10px] mb-4">
                                {proj.id}
                            </span>
                            <h2 className="text-white font-bold text-5xl md:text-8xl lg:text-[100px] tracking-tighter leading-none mb-6">
                                {proj.title}
                            </h2>
                            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em]">
                                {proj.award}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
};

export default Section2;