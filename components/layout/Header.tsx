'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import MenuOverlay from './MenuOverlay';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Logo opacity: starts appearing later and takes longer (300px to 600px)
    const logoOpacity = useTransform(scrollY, [300, 600], [0, 1]);

    // Header background fade-in
    const headerBgOpacity = useTransform(scrollY, [300, 500], [0, 1]);

    return (
        <header className="fixed top-0 left-0 w-full py-8 z-50 flex items-center">
            {/* 
                Advanced Inversion Effect:
                Using backdrop-filter: invert(1) ensures that whatever is behind 
                the header gets its colors inverted perfectly.
            */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: headerBgOpacity,
                    backgroundColor: 'rgba(255, 255, 255, 0.01)', // Very slight bg to trigger backdrop-filter
                    backdropFilter: 'invert(1) blur(10px)',
                    WebkitBackdropFilter: 'invert(1) blur(10px)',
                }}
            />

            <div className="w-full px-18 flex justify-between items-center relative z-10">
                {/*
                    Current dir is RTL (set in page.tsx).
                    justify-between will put the first child on the Right.
                */}

                {/* Menu Icon (Right in RTL) */}
                <div
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Image
                        src="/Vector (14).svg"
                        alt="Menu"
                        width={37}
                        height={16}
                        className="brightness-0" // Keeps it black as per original design
                    />
                </div>

                {/* Logo (Left in RTL) - Animates based on scroll */}
                <motion.div
                    className="flex-shrink-0"
                    style={{
                        opacity: logoOpacity,
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

            {/* Menu Overlay */}
            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
};

export default Header;
