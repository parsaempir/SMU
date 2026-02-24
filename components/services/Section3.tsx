'use client';

import React from 'react';
import Image from 'next/image';

const Section3 = () => {
    const listItems = [
        "Business & market analysis",
        "Competitor review",
        "Audience research",
        "Opportunity validation"
    ];

    return (
        <section className="w-full bg-white mt-[-250px] pb-20 overflow-hidden font-inter" dir='ltr'>
            <div className="w-full px-4 md:px-15">

                <div className="relative w-full aspect-[0.7/1] md:aspect-[1.1/1] lg:aspect-[1.3/1] xl:aspect-[1.3/1]">

                    {/* Background Texture clipped by SVG Mask (Subtract.svg) */}
                    <div
                        className="absolute inset-0 z-0 bg-white"
                        style={{
                            maskImage: 'url("/Subtract.svg")',
                            WebkitMaskImage: 'url("/Subtract.svg")',
                            maskSize: '100% 100%',
                            WebkitMaskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }}
                    >
                        <Image
                            src="/Rectangle 1000.png"
                            alt="Optimize Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-0 z-10">

                        {/* Central White Card - Positioned Independently */}
                        <div className="absolute top-[58.3%] left-[56%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-[43px] p-10 md:p-14 lg:px-16 lg:py-18 max-w-2xl w-full text-center shadow-xl z-20">
                            <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-extrabold text-[#121212] leading-[0.85] tracking-tighter mb-6 font-poppins">
                                Optimize
                            </h2>
                            <p className="text-[#5D5D5D] text-[14px] md:text-[15px] font-medium leading-[1.6] mb-10 max-w-md mx-auto whitespace-nowrap font-inter">
                                We translate insights into a focused roadmap with clear priorities,<br className="hidden md:block" />
                                positioning, and measurable goals aligned with your growth vision.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                                <button className="bg-[#24314c] md:bg-gradient-to-r md:from-[#3C5079] md:to-[#10172F] text-white px-12 py-3.5 rounded-full text-[14px] md:text-[15px] font-bold hover:bg-[#121212] transition-colors cursor-pointer font-inter text-nowrap">
                                    Clients About Us
                                </button>
                                <span className="text-[#121212] font-semibold text-[17px] md:text-[20px] font-inter whitespace-nowrap">2-3 Weeks</span>
                            </div>
                        </div>

                        {/* Process List - Bottom Horizontal Card - Positioned Independently */}
                        <div className="absolute bottom-[11%] left-[56%] -translate-x-1/2 w-full max-w-2xl z-20">
                            <div className="bg-white rounded-[28px] md:rounded-[40px] py-6 px-10 md:px-12 shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-2">
                                    {listItems.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 group">
                                            <div className="flex items-center">
                                                {/* Dot */}
                                                <div className="w-[6.5px] h-[6.5px] bg-[#121212] rounded-full" />
                                                {/* Line */}
                                                <div className="w-[45px] md:w-[65px] h-[1.3px] bg-[#121212]" />
                                            </div>
                                            <span className="text-[#121212] font-semibold text-[15px] md:text-[17.5px] tracking-tight whitespace-nowrap font-inter">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Number '04' - Positioned behind/left of the cards */}
                        <div className="absolute top-[74%] left-[5%] md:left-[8%] lg:left-[1%] translate-y-[-50%] z-0 pointer-events-none">
                            <span className="text-[120px] md:text-[130px] lg:text-[150px] font-extrabold text-[#E5E5E5]/80 leading-none select-none tracking-tighter font-poppins">
                                04
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
