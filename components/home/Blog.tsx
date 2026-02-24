import React from 'react';
import Image from 'next/image';

const blogPosts = [
    {
        category: 'UI/UX Design',
        title: 'UI/UX Principles Every Designer Should Know',
        excerpt: <>Explore how thoughtful UI/UX design creates intuitive,<br />engaging, and meaningful digital experiences.</>,
        image: '/Rectangle 15 (1).png',
        buttonStyle: 'outline'
    },
    {
        category: 'Web Development',
        title: 'Frontend vs Backend: What Matters Most',
        excerpt: <>Learn how modern web development turns ideas into<br />high-performance, reliable, and scalable</>,
        image: '/Rectangle 16 (1).png',
        buttonStyle: 'dark'
    },
    {
        category: 'Videography',
        title: 'From Concept to Final Cut: Video Production',
        excerpt: <>Discover how powerful videography transforms<br /> concepts into compelling stories</>,
        image: '/Rectangle 17.png',
        buttonStyle: 'outline'
    }
];

const Blog = () => {
    return (
        <section className="w-full py-24 bg-white" dir="ltr">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="w-1.5 h-1.5 bg-black rotate-45" />
                        <span className="text-[16px]  text-[#121212]">Blog & Article</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-[1.1]">
                        Insights Ideas Trends<br /> from Studio
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col ${index === 1 ? 'md:-translate-y-7' : ''}`}
                        >
                            <div className="relative aspect-[1.6/1] rounded-[18px] overflow-hidden mb-8 transition-transform duration-500 group-hover:scale-[0.98]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="px-2 text-left">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-1.5 h-1.5 bg-[#5D5D5D] rotate-45" />
                                    <span className="text-[12px] text-[#5D5D5D] font-medium uppercase tracking-wider">{post.category}</span>
                                </div>

                                <h3 className="text-2xl font-[400] mb-4 leading-snug group-hover:text-black transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-[#5D5D5D] md:text-[14px] xl:text-[16px]  leading-relaxed xl:whitespace-nowrap mb-8 font-medium">
                                    {post.excerpt}
                                </p>

                                <div>
                                    <button className={`
                                        inline-flex items-center gap-3 px-4 py-3 rounded-full text-[16px] font-[500] transition-all duration-300 cursor-pointer
                                        ${post.buttonStyle === 'dark'
                                            ? 'bg-[#121212] text-[#F5F5F5] hover:bg-black px-5'
                                            : 'border border-black text-black hover:bg-gray-50'}
                                    `}>
                                        Learn More
                                        <img
                                            src="/Icon.svg"
                                            alt="Arrow"
                                            width={15}
                                            height={15}
                                            className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${post.buttonStyle === 'outline' ? 'invert' : ''}`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
