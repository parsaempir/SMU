'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServicesHero = () => {
    const listItems = [
        "Competitor review",
        "Opportunity validation",
        "Business & market analysis",
        "Audience research"
    ];

    return (
        <section className="w-full bg-white pt-0 mt-[-15px] pb-20 overflow-hidden font-inter" dir='ltr'>
            <div className="w-full px-4 md:px-15">

                <div className="relative w-full aspect-[0.8/1] md:aspect-[1.3/1] lg:aspect-[1.5/1] xl:aspect-[1.5/1]">

                    {/* Background Marble clipped by SVG Mask */}
                    <div
                        className="absolute inset-0 z-0 bg-white"
                        style={{
                            maskImage: 'url("/Rectangle 53.svg")',
                            WebkitMaskImage: 'url("/Rectangle 53.svg")',
                            maskSize: '100% 100%',
                            WebkitMaskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }}
                    >
                        <Image
                            src="/Union.png"
                            alt="Discovery Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Layer (Absolute positioning) */}
                    <div className="absolute inset-x-0 bottom-0 top-0 z-10 p-8 md:p-14 lg:p-20">

                        {/* Discovery Title - Bottom Left area (White cutout in clip-path) */}
                        <div className="absolute bottom-[4%] md:bottom-[10%] left-8 md:left-16 lg:left-8 max-w-xl pointer-events-auto">
                            <h1 className="text-[70px] md:text-[100px] lg:text-[115px] font-extrabold text-[#121212] leading-[0.75] tracking-tighter mb-8  font-poppins">
                                Discovery
                            </h1>
                            <p className="text-[#5D5D5D] text-[15px] md:text-[16px] font-medium leading-[1.5] mb-12 max-w-md font-inter whitespace-nowrap">
                                We dive deep into your business, audience, and competitive<br /> landscape
                                to uncover real opportunities and risks before anything is <br />built.
                            </p>
                            <div className="flex items-center gap-10">
                                <button className=" bg-[#24314c] md:bg-gradient-to-r md:from-[#3C5079] md:to-[#10172F] text-white px-15 py-4 rounded-full text-[14px] md:text-[16px] font-bold hover:bg-[#121212] transition-colors cursor-pointer">
                                    Clients About Us
                                </button>
                                <span className="text-[#121212] font-[400] text-[18px] md:text-[20px]">1-2 Weeks</span>
                            </div>
                        </div>

                        {/* Number '01' - Middle Right cutout area (Moved to z-5 to be behind content) */}
                        <div className="absolute top-[43%] right-10 md:right-16 lg:right-2 translate-y-[-50%] z-5 hidden lg:block pointer-events-none">
                            <span className="text-[100px] md:text-[130px] lg:text-[150px] font-extrabold text-[#E5E5E5] leading-none select-none tracking-tighter">
                                01
                            </span>
                        </div>

                        {/* Process List - Middle-Bottom Right (Over the colourful image area) */}
                        <div className="absolute bottom-[10%] right-8 md:right-24 lg:right-[35%] xl:right-[28%] flex flex-col gap-5 lg:gap-6 items-start pointer-events-auto">
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-6 group">
                                    <div className="flex items-center">
                                        {/* Glow Dot on far left, then line, then Tiny Dot on right, then Text */}
                                        <div className="w-[7px] h-[7px] bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                                        <div className="w-10 md:w-14 lg:w-16 h-[1.2px] bg-white/40" />
                                        <div className="w-[3px] h-[3px] bg-white/60 rounded-full" />
                                    </div>
                                    <span className="text-white font-bold text-[14px] md:text-[16px] lg:text-[18px] tracking-tight drop-shadow-md whitespace-nowrap">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default ServicesHero;
