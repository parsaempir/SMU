'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section1 = () => {
    return (
        <section className="w-full py-24 bg-white" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-black" />
                            <span className="text-sm font-bold uppercase tracking-widest">01. Branding</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins leading-tight">
                            Identity That <br />
                            Commands Attention
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 font-inter leading-relaxed">
                            A brand is more than just a logo. It's a promise, an experience, and a story.
                            We help you define your voice and visual identity to connect deeply with your audience.
                        </p>

                        <div className="space-y-4">
                            {['Visual Identity', 'Brand Strategy', 'Logo Design', 'Typography & Color'].map((item) => (
                                <div key={item} className="flex items-center gap-4 text-black font-medium">
                                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/Rectangle 41.png"
                            alt="Branding Showcase"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
