'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
    return (
        <section className="relative w-full pt-48 pb-20 bg-[#F3EFE8] overflow-hidden" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-2 h-2 bg-black rotate-45" />
                            <span className="text-sm md:text-base font-medium uppercase tracking-widest text-black/60">
                                Our Expertise
                            </span>
                        </div>

                        <h1 className="text-[40px] md:text-[70px] lg:text-[90px] font-bold leading-[1.05] tracking-tight text-black mb-12 font-poppins">
                            Transforming Ideas Into <br className="hidden md:block" />
                            <span className="text-black/30 italic">Digital Excellence</span>
                        </h1>

                        <p className="text-lg md:text-xl text-black/70 max-w-2xl leading-relaxed mb-12 font-inter">
                            We combine strategic thinking with world-class design and technology
                            to help forward-thinking brands define their future.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="px-6 py-3 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm text-sm font-medium">
                                Branding
                            </div>
                            <div className="px-6 py-3 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm text-sm font-medium">
                                Development
                            </div>
                            <div className="px-6 py-3 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm text-sm font-medium">
                                Design
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default ServicesHero;
