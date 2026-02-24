'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section3 = () => {
    return (
        <section className="w-full py-24 bg-[#F8F8F8]" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-black/20" />
                        <span className="text-sm font-bold uppercase tracking-widest text-black/60">03. UI/UX Design</span>
                        <span className="w-8 h-[1px] bg-black/20" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">Designs That Feel Intuitive</h2>
                    <p className="text-lg text-gray-600 font-inter">
                        We prioritize the user experience, creating interfaces that are as functional
                        as they are beautiful. Every pixel serves a purpose.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'User Research', desc: 'Understanding your users to build what they need.' },
                        { title: 'Wireframing', desc: 'Mapping out the structure and flow of your product.' },
                        { title: 'Visual Design', desc: 'Applying aesthetics that align with your brand.' },
                        { title: 'Prototyping', desc: 'Interactive models to test and refine early ideas.' },
                        { title: 'Design Systems', desc: 'Scalable libraries for consistent growth.' },
                        { title: 'Accessibility', desc: 'Ensuring your product works for everyone.' }
                    ].map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[32px] text-left border border-black/5 hover:border-black/20 transition-all group"
                        >
                            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-bold">{i + 1}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4 font-poppins">{feature.title}</h4>
                            <p className="text-gray-500 font-inter text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section3;
