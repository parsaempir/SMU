'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import MenuOverlay from './MenuOverlay';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const logoOpacity = useTransform(scrollY, [300, 600], [0, 1]);

    const headerBgOpacity = useTransform(scrollY, [300, 500], [0, 1]);

    const iconFilter = useTransform(
        scrollY,
        [300, 500],
        ["brightness(0) invert(0)", "brightness(0) invert(1)"]
    );

    return (
        <header className="fixed top-0 left-0 w-full py-8 z-50 flex items-center">

            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: headerBgOpacity,
                    backgroundColor: 'rgba(255, 255, 255, 0.01)', // Very slight bg to trigger backdrop-filter
                    backdropFilter: 'invert(1) blur(10px)',
                    WebkitBackdropFilter: 'invert(1) blur(10px)',
                }}
            />

            <div className="w-full px-6 md:px-10 lg:px-18 flex justify-between items-center relative z-10">
                <motion.div
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(true)}
                    style={{ filter: iconFilter }}
                >
                    <Image
                        src="/Vector (14).svg"
                        alt="Menu"
                        width={37}
                        height={16}
                    />
                </motion.div>

                <motion.div
                    className="flex-shrink-0"
                    style={{
                        opacity: logoOpacity,
                        filter: iconFilter
                    }}
                >
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={90}
                        height={40}
                        priority
                    />
                </motion.div>
            </div>

            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
};

export default Header;
