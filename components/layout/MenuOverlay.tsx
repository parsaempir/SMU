'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { id: 'home', label: 'Home', href: '/', image: '/Rectangle 41.png' },
    { id: 'services', label: 'Services', href: '#', image: '/Rectangle 43.png' },
    { id: 'about', label: 'About', href: '#', image: '/Rectangle 41.png' },
    { id: 'contacts', label: 'Contacts', href: '#', image: '/Rectangle 43.png' },
];

const overlayVariants: Variants = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.1,
        }
    }
};

const sectionVariants: Variants = {
    closed: {
        y: "-100%",
        skewY: 2,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    open: {
        y: 0,
        skewY: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    }
};

const contentVariants: Variants = {
    closed: {
        opacity: 0,
        y: 30
    },
    open: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5 + (i * 0.1),
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
    const [hoveredId, setHoveredId] = useState<string>('home');
    const [activeImage, setActiveImage] = useState<string>('/Rectangle 41.png');

    const handleHover = (id: string, image: string) => {
        setHoveredId(id);
        setActiveImage(image);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={overlayVariants}
                    className="fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden"
                    dir="ltr"
                >
                    <div className="lg:hidden flex flex-col w-full h-full bg-[#F3EFE8] p-8 relative overflow-y-auto" dir="ltr">
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 z-[110] p-2 hover:opacity-70 transition-opacity cursor-pointer"
                            aria-label="Close menu"
                        >
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex-grow flex flex-col items-center justify-center gap-6 mt-16 mb-12">
                            {menuItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.label !== 'Home') e.preventDefault();
                                        if (item.label === 'Home') onClose();
                                    }}
                                    className={`text-[48px] md:text-[64px] font-bold font-poppins transition-colors duration-300 cursor-pointer ${item.id === hoveredId ? 'text-black' : 'text-[#B5B5B5]'
                                        }`}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[4/3.5] min-h-[300px] md:min-h-[400px] flex-shrink-0 max-h-[40vh] md:max-h-[50vh] rounded-[40px] md:rounded-[60px] overflow-hidden mb-6 shadow-2xl">
                            <Image
                                src={menuItems.find(i => i.id === hoveredId)?.image || '/Rectangle 41.png'}
                                alt="Highlight"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="hidden lg:flex w-full h-full relative overflow-hidden" dir="ltr">
                        <motion.div
                            variants={sectionVariants}
                            className="relative w-[50%] h-full overflow-hidden bg-black"
                        >
                            <Image
                                src="/Rectangle 43.png"
                                alt="Info Background"
                                fill
                                className="object-cover opacity-60"
                                priority
                            />

                            <motion.div
                                custom={1}
                                variants={contentVariants}
                                className="absolute inset-0 flex flex-col items-center justify-center text-white p-20 font-inter"
                            >
                                <h3 className="text-[30px] font-bold mb-8 font-poppins">Sales Information</h3>
                                <p className="text-xl font-bold mb-10 font-poppins">Ahmad Karimpour</p>
                                <div className="space-y-4 text-lg text-center">
                                    <p>+91 999999999</p>
                                    <p>hello@smu.com</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={sectionVariants}
                            transition={{ delay: 0.1 }}
                            className="relative flex-grow flex items-center justify-start pl-[150px] xl:pl-[300px] bg-[#F3EFE8]"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-10 right-10 z-[110] p-2 hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <motion.div
                                custom={2}
                                variants={contentVariants}
                                className="relative flex flex-col gap-6 items-start"
                            >
                                {menuItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative group"
                                        onMouseEnter={() => handleHover(item.id, item.image)}
                                    >
                                        <a
                                            href={item.href}
                                            onClick={(e) => {
                                                if (item.label !== 'Home') e.preventDefault();
                                                if (item.label === 'Home') onClose();
                                            }}
                                            className={`text-[55px] leading-tight font-extrabold font-poppins transition-colors duration-300 ${hoveredId === item.id ? 'text-black' : 'text-gray-300'
                                                }`}
                                        >
                                            {item.label}
                                        </a>

                                        {hoveredId === item.id && (
                                            <motion.div
                                                layoutId="menuLine"
                                                className="absolute -left-[85px] top-1/2 -translate-y-1/2 flex items-center gap-0"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            >
                                                <div className="w-[3px] h-[3px] rounded-full bg-black flex-shrink-0" />
                                                <div className="w-14 h-[1px] bg-black opacity-40" />
                                                <div className="w-[3px] h-[3px] rounded-full bg-black flex-shrink-0" />
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={contentVariants}
                            custom={3}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                            style={{ perspective: '2000px' }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotateZ: [0, 1, 0, -1, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-[380px] aspect-[9/15] rounded-[20px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImage}
                                        initial={{
                                            opacity: 0,
                                            scale: 1.3,
                                            skewX: 15,
                                            clipPath: 'inset(0% 100% 0% 0%)'
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            skewX: 0,
                                            clipPath: 'inset(0% 0% 0% 0%)'
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                            skewX: -15,
                                            clipPath: 'inset(0% 0% 0% 100%)'
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 18,
                                            mass: 0.8
                                        }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={activeImage}
                                            alt="Highlight"
                                            fill
                                            className="object-cover scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none contrast-150 brightness-150 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence >
    );
};

export default MenuOverlay;
