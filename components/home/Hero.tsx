import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[110vh] flex flex-col justify-end pb-32 bg-white overflow-x-hidden" dir="ltr">
            <div className="absolute top-[-8%] left-[3%] w-[105%] 2xl:left-[0%] h-[70%] pointer-events-none z-0">
                <div className="relative w-full h-full transform rotate-[6deg] scale-[1.0]">
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

            <div className="w-full px-10 md:px-24 relative z-20 flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="w-full relative min-h-[300px]">
                    <div className="md:absolute md:-bottom-20 left-0 w-full">
                        <h1 className="text-[42px] md:text-[52px] font-extrabold font-poppins leading-[1.0] mb-8 text-[#1A1A1A]">
                            Creative Solutions<br />
                            That Elevate Brands
                        </h1>
                        <p className="text-base w-full md:text-lg text-[#5D5D5D] font-inter leading-relaxed mb-10">
                            We craft bold visuals and smart digital experiences that make <br /> brands stand out and stay memorable.
                        </p>

                        <button className="group flex items-center gap-3 bg-gradient-to-r from-[#3C5079] to-[#10172F] text-white px-10 py-5 rounded-full font-inter font-medium hover:opacity-90 transition-all duration-300">
                            Get Template
                            <Image src="/Icon.svg" alt="Arrow" width={20} height={20} />
                        </button>
                    </div>
                </div>

                <div className="md:absolute md:-bottom-20 right-0 md:right-27 flex px-26 gap-12 md:gap-20 pb-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-[16px] md:text-[32px] font-[400] font-poppins text-[#1A1A1A] leading-tight">5K+</span>
                        <span className="text-[#5D5D5D] font-inter text-xs md:text-sm tracking-tight">Projects Finished</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[16px] md:text-[32px] font-[400] font-poppins text-[#1A1A1A] leading-tight">10K+</span>
                        <span className="text-[#5D5D5D] font-inter text-xs md:text-sm tracking-tight">Client Satisfied</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
