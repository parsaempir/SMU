'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
    {
        question: 'What services do you offer?',
        answer: 'We provide a wide range of creative and technical services including UI/UX design, web development, videography, and digital strategy to help your brand grow.'
    },
    {
        question: 'How does your project workflow work?',
        answer: 'Our workflow is collaborative and transparent. We start with discovery and strategy, followed by design, development, and thorough testing before launch.'
    },
    {
        question: 'How do we get started with your team?',
        answer: 'Getting started is easy! Simply reach out through our contact form or book a consultation. We will discuss your goals and provide a tailored proposal.'
    },
    {
        question: 'Can I request revisions during the project?',
        answer: 'Yes, we value your feedback. We include structured revision rounds in our process to ensure the final result aligns perfectly with your vision.'
    }
];

const AccordionItem = ({ item, isOpen, onClick }: { item: any; isOpen: boolean; onClick: () => void }) => {
    return (
        <motion.div
            animate={{ backgroundColor: isOpen ? '#F5F5F5' : '#FAFAFA' }}
            transition={{ duration: 0.4 }}
            className="mb-4 rounded-[32px] overflow-hidden"
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-7 md:p-9 text-left transition-colors duration-300 hover:bg-[#F4F4F4]/50 cursor-pointer"
            >
                <span className="text-lg md:text-xl font-bold text-[#121212]">
                    {item.question}
                </span>
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <motion.span
                        animate={{ rotate: 0 }}
                        className="absolute w-5 h-[3px] bg-black rounded-full"
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? 0 : 90 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute w-5 h-[3px] bg-black rounded-full"
                    />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-9 pb-9 text-[#5D5D5D] text-lg leading-relaxed max-w-2xl">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Section4 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 md:py-24 lg:py-32 bg-white" dir="ltr">
            <div className="container mx-auto px-4 md:px-22 max-w-[1400px]">
                <div className="flex flex-col gap-0 md:gap-0 lg:gap-2">
                    <div className="flex flex-col lg:flex-row lg:items-start xl:whitespace-nowrap gap-10 md:gap-16 lg:gap-24 mb-4">
                        <div className="w-full lg:w-[38%] text-center lg:text-left flex flex-col items-center lg:items-start lg:sticky lg:top-32 lg:self-start">
                            <div className="flex items-center gap-4  mb-6">
                                <span className="w-1.5 h-1.5 bg-black rotate-45" />
                                <span className="text-[14px] md:text-[16px] text-[#121212] font-medium uppercase tracking-wider">FAQ</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-bold text-[#121212] mb-6 leading-[1.2] xl:leading-[1.1] tracking-tight">
                                Common Questions<br className="hidden md:block" /> Answered
                            </h2>
                            <p className="text-[#5D5D5D] text-[15px] md:text-[16px] lg:text-[14px] xl:text-lg leading-relaxed max-w-[280px] md:max-w-sm">
                                We've gathered the most common questions to help you <br className="hidden lg:block" /> understand how we work and what to expect.
                            </p>
                        </div>

                        <div className="w-full lg:w-[62%] flex flex-col justify-start">
                            {faqItems.slice(0, 2).map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    item={item}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full">
                        {faqItems.slice(2, 4).map((item, index) => (
                            <AccordionItem
                                key={index + 2}
                                item={item}
                                isOpen={openIndex === index + 2}
                                onClick={() => setOpenIndex(openIndex === index + 2 ? null : index + 2)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
