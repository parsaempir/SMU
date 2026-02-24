'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section4 = () => {
    return (
        <section className="w-full py-24 bg-white" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-black" />
                            <span className="text-sm font-bold uppercase tracking-widest">04. Marketing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins leading-tight">
                            Strategic Growth <br />
                            Through Content
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 font-inter leading-relaxed">
                            We don't just create assets; we create results. Our marketing strategies are
                            driven by data and creative storytelling.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="text-3xl font-bold text-black/20">01</span>
                                <div>
                                    <h4 className="text-xl font-bold font-poppins mb-2">SEO & SEM</h4>
                                    <p className="text-gray-500 text-sm">Visibility where it matters most to your potential customers.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="text-3xl font-bold text-black/20">02</span>
                                <div>
                                    <h4 className="text-xl font-bold font-poppins mb-2">Content Strategy</h4>
                                    <p className="text-gray-500 text-sm">Building authority through high-quality video and design.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="text-3xl font-bold text-black/20">03</span>
                                <div>
                                    <h4 className="text-xl font-bold font-poppins mb-2">Social Positioning</h4>
                                    <p className="text-gray-500 text-sm">Making your brand a recognized leader in your industry.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="aspect-square bg-[#F3EFE8] rounded-3xl p-8 flex flex-col justify-end"
                        >
                            <span className="text-4xl font-bold mb-2">85%</span>
                            <span className="text-xs font-bold uppercase tracking-widest opacity-40">Growth Rate</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="aspect-[4/5] bg-[#E8EEF3] rounded-3xl p-8 flex flex-col justify-end"
                        >
                            <span className="text-4xl font-bold mb-2">10M+</span>
                            <span className="text-xs font-bold uppercase tracking-widest opacity-40">Impressions</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="col-span-2 h-48 bg-[#121212] text-white rounded-3xl p-8 flex flex-col justify-end"
                        >
                            <span className="text-4xl font-bold mb-2">Global Influence</span>
                            <span className="text-xs font-bold uppercase tracking-widest opacity-40">Strategy & Execution</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
