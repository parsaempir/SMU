'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section5 = () => {
    return (
        <section className="w-full py-24 bg-[#F3EFE8]" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full bg-[#121212] rounded-[60px] p-12 md:p-24 overflow-hidden text-center"
                >
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-poppins leading-[1.1]">
                            Ready to Elevate <br />
                            Your Digital Presence?
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl mb-12 font-inter max-w-xl mx-auto">
                            Let's collaborate to build something that stands out and
                            delivers measurable results for your business.
                        </p>

                        <button className="group relative inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all cursor-pointer">
                            Start A Conversation
                            <Image
                                src="/Icon.svg"
                                alt="Arrow"
                                width={20}
                                height={20}
                                className="invert transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </button>
                    </div>

                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default Section5;
