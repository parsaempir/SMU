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
        title: 'LAMY DESIGN',
        subtitle: 'CREATIVE WORK',
        image: '/Rectangle 41.png',
        award: '@ GDWEB WINNER PRIZE'
    },
    {
        id: '02',
        title: 'CALIVERSE',
        subtitle: 'GRAND PRIZE',
        image: '/Rectangle 43.png',
        award: '@ GDWEB GRAND PRIZE'
    }
];

const Section2 = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrappers = gsap.utils.toArray('.project-wrapper');

            wrappers.forEach((wrapper: any) => {
                const box = wrapper.querySelector('.animated-box');
                const img = wrapper.querySelector('.animated-img');
                const content = wrapper.querySelector('.project-content');

                gsap.set(box, {
                    rotation: 8,
                    scale: 0.55,
                    opacity: 1,
                    borderRadius: "60px",
                    transformOrigin: "center center"
                });

                gsap.set(img, { scale: 1.6, rotation: -8 });

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
                        rotation: -8,
                        scale: 0.55,
                        scaleX: 1,
                        scaleY: 1,
                        borderRadius: "60px",
                        ease: "power1.inOut",
                        duration: 2.0
                    })
                    .to(img, {
                        rotation: 8,
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

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-black">
            {projects.map((proj, idx) => (
                <div
                    key={idx}
                    className="project-wrapper relative w-full h-[200vh] flex items-center justify-center overflow-hidden"
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
                                {proj.id} / {proj.subtitle}
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