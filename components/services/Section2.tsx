'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section2 = () => {
    return (
        <section className="w-full py-24 bg-[#121212] text-white overflow-hidden" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, order: 2 }}
                        whileInView={{ opacity: 1, order: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] rounded-[40px] overflow-hidden lg:order-1"
                    >
                        <Image
                            src="/Rectangle 43.png"
                            alt="Development Showcase"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:order-2"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-white/40" />
                            <span className="text-sm font-bold uppercase tracking-widest text-white/60">02. Development</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins leading-tight">
                            Engineered for <br />
                            Performance
                        </h2>
                        <p className="text-lg text-white/60 mb-10 font-inter leading-relaxed">
                            We build fast, secure, and scalable digital products that don't just look good
                            but perform exceptionally. From complex web apps to custom internal tools.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-2">Frontend</h4>
                                <p className="text-sm text-white/40">React, Next.js, Framer Motion</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Backend</h4>
                                <p className="text-sm text-white/40">Node.js, PostgreSQL, Supabase</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Performance</h4>
                                <p className="text-sm text-white/40">90+ Lighthouse Score Guarantee</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">CMS</h4>
                                <p className="text-sm text-white/40">Headless CMS Integration</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
