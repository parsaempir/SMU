'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const results = [
    {
        id: '01',
        title: <>FinTech<br />Startup</>,
        challenge: 'Launch new product in competitive market',
        stats: [
            { label: 'LEADS', value: '10K+' },
            { label: 'CONVERSION', value: '23%' },
            { label: 'LEADS', value: '480%' },
        ],
        buttonBg: 'bg-white',
        buttonText: 'text-black',
        buttonBorder: 'border border-black'
    },
    {
        id: '02',
        title: <>Ecommerce<br />Brand</>,
        challenge: 'Increase online sales and brand awareness',
        stats: [
            { label: 'REVENUE', value: '+312%' },
            { label: 'CAC', value: '-40%' },
            { label: 'ROAS', value: '6.2x' },
        ],
        buttonBg: 'bg-gradient-to-r from-[#3C5079] to-[#10172F]',
        buttonText: 'text-white',
        buttonBorder: 'border-none'
    },
    {
        id: '03',
        title: <>SaaS<br />Company</>,
        challenge: 'Improve conversion rates and user acquisition',
        stats: [
            { label: 'CHURN', value: '-65%' },
            { label: 'MRR', value: '+180%' },
            { label: 'LTV', value: '+240%' },
        ],
        buttonBg: 'bg-white',
        buttonText: 'text-black',
        buttonBorder: 'border border-black'
    }
];

const Section1 = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        // ─── DESKTOP (≥ 1024px) ─────────────────────────────────────────
        // ORIGINAL ANIMATION — DO NOT TOUCH
        mm.add("(min-width: 1024px)", () => {
            if (!sectionRef.current || !pinRef.current) return;

            const targetRotations = [-4, 2, -4];

            gsap.set(".result-card", {
                rotate: (i) => targetRotations[i],
                scale: 1,
                transformOrigin: "bottom center"
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "bottom bottom",
                    end: "+=2500",
                    pin: pinRef.current,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            tl.from(".result-card", {
                x: 1000,
                y: 300,
                z: -500,
                opacity: 0,
                scale: 0.7,
                filter: "blur(15px)",
                stagger: 2.5,
                duration: 2,
                ease: "power2.out"
            });

            tl.to({}, { duration: 1 });
        });

        // ─── MOBILE & TABLET (≤ 1023px) ───────────────────────────────────────────────
        // Tilted horizontal card swap, right-to-left, sections pins AFTER fully visible
        mm.add("(max-width: 1023px)", () => {
            if (!sectionRef.current || !pinRef.current) return;

            const cards = gsap.utils.toArray<HTMLElement>(".result-card");

            // Set all cards to absolute, tilted, and centered
            gsap.set(cards, {
                rotate: 2,
                opacity: 1,
                y: 0,
                scale: 1,
                position: "absolute",
                bottom: 0,
                left: "50%",
                xPercent: -50,
            });

            // Send cards 2 and 3 off-screen to the right (hidden)
            gsap.set(cards.slice(1), { xPercent: 150, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinRef.current,
                    // "bottom bottom" = section is FULLY in view before pinning
                    start: "bottom bottom-=6%",
                    end: "+=3000",
                    pin: pinRef.current,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            // Card 1 → Card 2
            tl.to(cards[0], {
                xPercent: -250,
                opacity: 0,
                rotate: -4,
                duration: 2,
                ease: "power2.inOut"
            });
            tl.to(cards[1], {
                xPercent: -50,
                opacity: 1,
                rotate: 2,
                duration: 2,
                ease: "power2.inOut"
            }, "<");

            tl.to({}, { duration: 1 }); // pause on card 2

            // Card 2 → Card 3
            tl.to(cards[1], {
                xPercent: -250,
                opacity: 0,
                rotate: -4,
                duration: 2,
                ease: "power2.inOut"
            });
            tl.to(cards[2], {
                xPercent: -50,
                opacity: 1,
                rotate: 2,
                duration: 2,
                ease: "power2.inOut"
            }, "<");

            tl.to({}, { duration: 1 }); // pause on card 3
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white relative z-20" dir="ltr">
            {/* pinRef wraps the entire visible card + text layout */}
            <div ref={pinRef} className="w-full min-h-[110vh]  flex flex-col items-center justify-center md:pt-0 pt-24 px-4 md:px-10">
                <div className="w-full max-w-[1440px] bg-[#10172F] min-h-[750px] max-[1024px]:min-h-[50vh]  rounded-[25px] md:rounded-[50px] pt-16  xl:pt-20 px-6 md:px-10 relative overflow-hidden flex flex-col items-center">

                    {/* Section header */}
                    <div className="text-center mb-10 relative z-20 w-full mt-4 md:mt-8">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-white rotate-45 mb-5 mr-4" />
                            <span className="text-white/80 font-inter text-xs tracking-wider uppercase mb-5">Our Service</span>
                        </div>
                        <h2 className="text-[36px] md:text-[52px] font-bold text-white mb-2 leading-tight">
                            Proven Results
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                            Real outcomes from real clients. See how we've helped businesses achieve exceptional growth.
                        </p>
                    </div>

                    {/* Cards container */}
                    {/* On mobile & tablet: relative + explicit height so absolute cards are visible */}
                    {/* On desktop: flex row for the side-by-side stacked layout */}
                    <div
                        className="flex flex-col lg:flex-row items-end justify-center w-full max-w-7xl mx-auto relative max-[480px]:mt-auto z-10 max-[1024px]:mt-20 min-h-[480px] lg:min-h-0"
                        style={{ perspective: "1200px" }}
                    >
                        {results.map((card, index) => (
                            <div
                                key={card.id}
                                className={`result-card bg-white rounded-t-[40px] rounded-b-none p-8 md:p-10 flex flex-col items-center text-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)] relative
                                    ${index === 1 ? 'z-30' : 'z-20'}
                                    lg:-mx-4
                                    ${index === 0 ? 'lg:ml-14' : index === 2 ? 'lg:ml-14' : ''}
                                    w-[94%] md:w-[410px] shrink-0`}
                                style={{
                                    minHeight: '550px',
                                    marginBottom: '-150px',
                                    paddingBottom: '200px'
                                }}
                            >
                                <span className="text-[#B5B5B5] font-poppins text-lg mb-4">{card.id}</span>
                                <h3 className="text-[28px] md:text-[34px] font-bold text-[#D4AF37] mb-4 leading-tight">
                                    {card.title}
                                </h3>
                                <p className="text-[#5D5D5D] text-xs md:text-sm leading-relaxed mb-6 max-w-[220px]">
                                    <span className="font-semibold text-black">Challenge:</span> {card.challenge}
                                </p>

                                <div className="flex justify-between w-full gap-2 mb-6">
                                    {card.stats.map((stat, sIndex) => (
                                        <div key={sIndex} className="flex flex-col items-center bg-[#F8F9FA] rounded-xl p-3 flex-1 min-w-0">
                                            <span className="text-[14px] md:text-[18px] font-bold text-black mb-1">{stat.value}</span>
                                            <span className="text-[8px] text-[#A0A0A0] font-medium tracking-tight whitespace-nowrap uppercase">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 ${card.buttonBg} ${card.buttonText} ${card.buttonBorder} hover:opacity-90 mt-auto`}>
                                    <span className="font-inter font-semibold text-sm">Learn More</span>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#2D3E61]/20 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#2D3E61]/20 blur-[120px] rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Section1;
