'use client';

import React from 'react';
import Image from 'next/image';

const Section2 = () => {
    const listItems = [
        "Business & market analysis",
        "Audience research",
        "Competitor review",
        "Opportunity validation"
    ];

    return (
        <section className="w-full bg-white mt-[-320px] pb-20 overflow-hidden font-inter" dir='ltr'>
            <div className="w-full px-4 md:px-15">

                <div className="relative w-full aspect-[0.7/1] md:aspect-[1.1/1] lg:aspect-[1.3/1] xl:aspect-[1.3/1]">

                    {/* Background Texture clipped by SVG Mask (Rectangle 55) */}
                    <div
                        className="absolute inset-0 z-0 bg-white"
                        style={{
                            maskImage: 'url("/Rectangle 55.svg")',
                            WebkitMaskImage: 'url("/Rectangle 55.svg")',
                            maskSize: '100% 100%',
                            WebkitMaskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }}
                    >
                        <Image
                            src="/Rectangle 59.png"
                            alt="Execution Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-x-0 bottom-0 top-0 z-10 p-8 md:p-14 lg:p-20">

                        {/* Execution Title & Description - Left area cutout */}
                        <div className="absolute top-[64%] left-8 md:left-16 lg:left-0 max-w-xl translate-y-[-50%] pointer-events-auto">
                            <h2 className="text-[70px] md:text-[100px] lg:text-[100px] font-extrabold text-[#121212] leading-[0.75]  mb-12 font-poppins">
                                Execution
                            </h2>
                            <p className="text-[#5D5D5D] text-[15px] md:text-[16px] font-medium leading-[1.5] mb-12 max-w-md font-inter whitespace-nowrap">
                                We translate insights into a focused roadmap with clear priorities,<br />
                                positioning, and measurable goals aligned with your growth vision.
                            </p>

                            {/* Process List - Stacked Vertically on Left */}
                            <div className="flex flex-col gap-4 mb-16">
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

                            <div className="flex items-center gap-10">
                                <button className="bg-[#24314c] md:bg-gradient-to-r md:from-[#3C5079] md:to-[#10172F] text-white px-15 py-4 rounded-full text-[14px] md:text-[16px] font-bold hover:bg-[#121212] transition-colors cursor-pointer font-inter">
                                    Clients About Us
                                </button>
                                <span className="text-[#121212] font-[400] text-[18px] md:text-[20px] font-poppins line-height-1">2-3 Weeks</span>
                            </div>
                        </div>

                        {/* Number '03' - Right side cutout area */}
                        <div className="absolute bottom-[10%] right-8 md:right-16 lg:right-7 translate-y-[-50%] z-5 pointer-events-none">
                            <span className="text-[100px] md:text-[130px] lg:text-[150px] font-extrabold text-[#E5E5E5] leading-none select-none tracking-tighter font-poppins">
                                03
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
