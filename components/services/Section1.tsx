'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section1 = () => {
    const listItems = [
        "Business & market analysis",
        "Competitor review",
        "Audience research",
        "Opportunity validation"
    ];

    return (
        <section className="w-full bg-white mt-[-275px] pb-20 overflow-hidden font-inter" dir='ltr'>
            <div className="w-full px-4 md:px-15">

                <div className="relative w-full aspect-[0.7/1] md:aspect-[1.1/1] lg:aspect-[1.3/1] xl:aspect-[1.3/1]">

                    {/* Background Texture clipped by SVG Mask (Rectangle 54) */}
                    <div
                        className="absolute inset-0 z-0 bg-white"
                        style={{
                            maskImage: 'url("/Rectangle 54.svg")',
                            WebkitMaskImage: 'url("/Rectangle 54.svg")',
                            maskSize: '100% 100%',
                            WebkitMaskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }}
                    >
                        <Image
                            src="/Rectangle 53 (1).png"
                            alt="Strategy Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-x-0 bottom-0 top-0 z-10 p-8 md:p-14 lg:p-20">

                        {/* Strategy Title & Description - Right area cutout */}
                        <div className="absolute top-[53%] right-8 md:right-16 lg:right-24 xl:right-46 max-w-xl translate-y-[-50%] pointer-events-auto">
                            <h2 className="text-[70px] md:text-[100px] lg:text-[115px] font-extrabold text-[#121212] leading-[0.75] tracking-tighter mb-10  font-poppins">
                                Strategy
                            </h2>
                            <p className="text-[#5D5D5D] text-[15px] md:text-[16px] font-medium leading-[1.5] mb-18 max-w-md font-inter whitespace-nowrap">
                                We translate insights into a focused roadmap with clear priorities,<br />
                                positioning, and measurable goals aligned with your growth vision.
                            </p>
                            <div className="flex items-center gap-10">
                                <button className="bg-[#24314c] md:bg-gradient-to-r md:from-[#3C5079] md:to-[#10172F] text-white px-15 py-4 rounded-full text-[14px] md:text-[16px] font-bold hover:bg-[#121212] transition-colors cursor-pointer font-inter">
                                    Clients About Us
                                </button>
                                <span className="text-[#121212] font-[400] text-[18px] md:text-[20px] font-poppins">2-3 Weeks</span>
                            </div>
                        </div>

                        {/* Number '02' - Left side cutout */}
                        <div className="absolute top-[49.5%] left-8 md:left-16 lg:left-4 translate-y-[-50%] z-5 pointer-events-none">
                            <span className="text-[100px] md:text-[130px] lg:text-[150px] font-extrabold text-[#E5E5E5] leading-none select-none tracking-tighter">
                                02
                            </span>
                        </div>

                        {/* Process List - Bottom Horizontal (2x2 Grid) */}
                        <div className="absolute bottom-[15%] left-1/2 translate-x-[-50%] lg:translate-x-0 lg:left-auto lg:right-24 xl:-right-1 flex justify-center pointer-events-auto">
                            <div className="grid grid-cols-2 gap-x-12 md:gap-x-20 gap-y-2  items-center">
                                {listItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="flex items-center">
                                            {/* Dot with Glow */}
                                            <div className="w-[6px] h-[6px] bg-[#121212] rounded-full shadow-[0_0_8px_rgba(18,18,18,0.4)]" />
                                            {/* Connecting Line */}
                                            <div className="w-[30px] md:w-[45px] h-[1px] bg-[#121212]/30" />
                                        </div>
                                        <span className="text-[#121212] font-semibold text-[14px] md:text-[15px] lg:text-[18px] tracking-tight whitespace-nowrap font-inter">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
