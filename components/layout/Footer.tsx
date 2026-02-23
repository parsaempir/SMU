import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-white overflow-hidden" dir="ltr">
            <div className="w-full px-12 md:px-24">

                <div className="flex flex-col md:flex-row gap-16 md:gap-32 pt-16">

                    <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-fit px-16 md:px-0">
                        <p className="text-black text-[15px] leading-relaxed mb-8 max-w-[280px]">
                            We craft creative digital experiences<br className="hidden md:block" />
                            that help brands grow and stand out.
                        </p>
                        <button className="inline-flex items-center gap-3 rounded-full bg-[#121212] px-4 py-3 md:px-6 md:py-4 text-[13px] md:text-[15px] font-semibold text-white transition-all duration-300 hover:bg-black group cursor-pointer">
                            Contact Our Team
                            <img
                                src="/Icon.svg"
                                alt="Arrow"
                                width={14}
                                height={14}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </button>
                    </div>

                    <div className="flex flex-row md:gap-36 justify-evenly md:justify-start gap-12 w-full md:w-auto">
                        <div className="min-w-fit">
                            <h4 className="text-[18px] md:text-[15px] font-[400] text-black mb-7 md:mb-5">Page Links</h4>
                            <ul className="space-y-4 md:space-y-3">
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors cursor-pointer">Home</Link></li>
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">About Us</Link></li>
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">Our Service</Link></li>
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">Our Work</Link></li>
                            </ul>
                        </div>

                        <div className="min-w-fit">
                            <h4 className="text-[18px] md:text-[15px] font-[400] text-black mb-7 md:mb-5">Fast Acces</h4>
                            <ul className="space-y-4 md:space-y-3">
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">Instructions</Link></li>
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">Licenses</Link></li>
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">Changelog</Link></li>
                                <li><Link href="#" className="text-black text-[14px] hover:text-black transition-colors">Our Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-16">
                <div className="mb-0 md:-mb-20 flex justify-start pointer-events-none">
                    <img
                        src="/Clip path group (1).svg"
                        alt="SMU"
                        className="w-full md:w-[55%] h-auto opacity-100 max-w-none"
                    />
                </div>

                <div className="absolute inset-x-0 -top-2 h-full flex items-end pb-12 md:pb-24 pointer-events-none">
                    <div className="w-full px-6 md:px-24 hidden md:flex flex-col md:flex-row items-center pointer-events-auto">
                        <div className="md:w-[58%] hidden md:block"></div>
                        <p className="text-black text-[12px] md:w-fit text-left whitespace-nowrap mb-4 md:mb-0">
                            © 2026 — Copyright
                        </p>

                        <div className="md:flex-1 flex justify-end gap-8">
                            <Link href="#" className="text-black text-[12px] hover:text-black transition-colors underline underline-offset-4">
                                Our Term
                            </Link>
                            <Link href="#" className="text-black text-[12px] hover:text-black transition-colors underline underline-offset-4">
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
