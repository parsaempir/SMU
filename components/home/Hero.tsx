import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen md:min-h-[80vh] xl:min-h-[110vh] flex flex-col justify-end pb-24 xl:pb-32 bg-white overflow-x-hidden" dir="ltr">
            <div className="absolute top-[-15%] md:top-[-8%] left-[-25%] md:left-[3%] w-[130%] md:w-[105%] 2xl:left-[0%] h-[50%] md:h-[70%] pointer-events-none z-0">
                <div className="relative w-full h-full transform rotate-[6deg] scale-110 md:rotate-[6deg] md:scale-100">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{
                            maskImage: 'url("/logo.svg")',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            maskSize: 'contain',
                            WebkitMaskImage: 'url("/logo.svg")',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            WebkitMaskSize: 'contain',
                        }}
                    >
                        <source src="/4816954-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="w-full px-6 md:px-10 lg:px-24 relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mt-64 md:mt-0">
                <div className="w-full relative min-h-[auto] md:min-h-[300px]">
                    <div className="md:absolute  md:-bottom-20 left-0 w-full mb-10 md:mb-0">
                        <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-extrabold font-poppins leading-[1.1] md:leading-[1.0] mb-5 md:mb-8 text-[#1A1A1A]">
                            Creative Solutions<br />
                            That Elevate Brands
                        </h1>
                        <p className="text-[14px] max-w-[310px] md:max-w-full md:text-base lg:text-lg w-full text-[#5D5D5D] font-inter leading-[1.6] mb-8 md:mb-10">
                            We craft bold visuals and smart digital experiences that make <br className="hidden md:block" /> brands stand out and stay memorable.
                        </p>

                        <button className="group flex items-center gap-3 bg-[#24314c] md:bg-gradient-to-r md:from-[#3C5079] md:to-[#10172F] text-white px-7 md:px-10 py-3.5 md:py-5 rounded-full font-inter font-medium text-[14px] md:text-base hover:opacity-90 transition-all duration-300">
                            Get Template
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:hidden">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                            <Image src="/Icon.svg" alt="Arrow" width={20} height={20} className="hidden md:block" />
                        </button>
                    </div>
                </div>

                <div className="md:absolute md:-bottom-20 right-0 md:right-27 flex flex-row px-0 md:px-26 gap-10 md:gap-12 lg:gap-20 pb-4 mb-4 md:mb-0">
                    <div className="flex flex-col gap-1">
                        <span className="text-[28px] md:text-[32px] font-[400] font-poppins text-[#1A1A1A] leading-tight">5K+</span>
                        <span className="text-[#5D5D5D] font-inter text-sm tracking-tight text-nowrap">Projects Finished</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[28px] md:text-[32px] font-[400] font-poppins text-[#1A1A1A] leading-tight">10K+</span>
                        <span className="text-[#5D5D5D] font-inter text-sm tracking-tight text-nowrap">Client Satisfied</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 md:hidden flex flex-col items-center">
                <div className="flex flex-col items-center gap-3">
                    <Image src="/Flash.svg" alt="Arrow Up" width={40} height={20} className="opacity-40" />
                    <Image src="/Flash1.svg" alt="Arrow Down" width={40} height={20} className="-mt-6" />
                </div>
            </div>
        </section>
    );
};


export default Hero;
