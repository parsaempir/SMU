import React from 'react';
import Image from 'next/image';

const CTA = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24" dir="ltr">
            <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
                <div className="relative overflow-hidden rounded-[18px] md:rounded-[24px] min-h-[600px] md:min-h-[420px] lg:min-h-[500px] bg-[#273664]">
                    <div className="absolute inset-x-0 top-0 h-[45%] md:h-full z-0">
                        <Image
                            src="/Rectangle 22 (2).png"
                            alt="Creative team collaboration"
                            fill
                            priority={false}
                            className="object-cover object-left md:object-right"
                        />
                    </div>

                    <div
                        className="hidden md:block absolute inset-0 z-10"
                        style={{
                            background:
                                'linear-gradient(90deg, #273664 0%, #273664 35%, #525F8A 50%, rgba(105, 119, 166, 0) 57%)'
                        }}
                    />

                    <div
                        className="md:hidden absolute inset-x-0 top-0 h-[50%] z-10"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(39, 54, 100, 0) 0%, rgba(39, 54, 100, 0.4) 60%, #273664 100%)'
                        }}
                    />

                    <div className="absolute inset-y-0 left-0 w-[53%] bg-white/[0.02]" />

                    <div className="absolute bottom-10 left-0 md:left-12 md:bottom-20 lg:bottom-24 lg:left-14 z-20 px-6 md:px-0 flex flex-col items-start text-left">
                        <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight text-white mb-4">
                            Create Something
                            <br />
                            Powerful With Us
                        </h2>

                        <p className="text-[14px] md:text-[15px] leading-relaxed text-white/70 max-w-[430px] mb-8">
                            From strategy to execution, we craft creative solutions that elevate <br className="hidden md:block" /> your brand and make it stand out in a crowded market.
                        </p>

                        <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#121212] transition-opacity duration-300 hover:opacity-90 group cursor-pointer">
                            Start Your Project
                            <Image
                                src="/Icon.svg"
                                alt="Arrow"
                                width={15}
                                height={15}
                                className="invert transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
