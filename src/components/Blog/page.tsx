"use client";

import Image from "next/image";
import { User, Folder, MessageCircle, ArrowRight } from "lucide-react";
import img1 from "../../../public/img/blog-img-1-1.png";
import img2 from "../../../public/img/blog_02.webp";
import img3 from "../../../public/img/blog_03.webp";
import img4 from "../../../public/img/blog_01.webp";



const blogPosts = [
    {
        id: 1,
        image: img1, // replace with your images
        date: "03 Jun",
        author: "Rimon",
        category: "AI Content",
        title: "Web Development Essentials Every Business",
        comments: 0,
    },
    {
        id: 2,
        image: img2,
        date: "03 Jun",
        author: "Rimon",
        category: "AI Technology",
        title: "How AI is Revolutionizing Web Development",
        comments: 0,
    },
    {
        id: 3,
        image: img3,
        date: "01 Jun",
        author: "Kamrul",
        category: "UI Design",
        title: "Effective Hashtag Strategies to Increase Reach",
        comments: 0,
    },
    {
        id: 4,
        image: img4,
        date: "01 Jun",
        author: "Kamrul",
        category: "UI Design",
        title: "Effective Hashtag Strategies to Increase Reach",
        comments: 0,
    },
];

const BlogSection = () => {
    return (
        <section className="pb-10 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-red-500 uppercase tracking-widest text-sm font-semibold inline-block mb-2">
                        From the Blog
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                        News & Articles
                    </h2>
                </div>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-white rounded-b-2xl">
                                <div className="relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-60 object-cover"
                                    />
                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 bg-red-400 text-white px-3 py-1 text-sm font-semibold rounded">
                                        {post.date}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center text-gray-500 text-sm mb-2 space-x-4">
                                        <span className="flex items-center space-x-1">
                                            <User className="w-4 h-4 text-red-500" />
                                            <span>By {post.author}</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <Folder className="w-4 h-4 text-red-500" />
                                            <span>{post.category}</span>
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{post.title}</h3>
                                </div>
                                 </div>

                                <div className="flex justify-between items-center text-sm text-gray-500 px-6 py-3 bg-gray-200">
                                    <a href="#" className="flex items-center space-x-1 hover:text-red-500">
                                        <span>Read More</span>
                                        <span><ArrowRight className="w-4 h-4 text-red-500"/></span>
                                    </a>
                                    <span className="flex items-center space-x-1">
                                        <MessageCircle className="w-4 h-4 text-red-500" />
                                        <span>{post.comments === 0 ? "No Comments" : post.comments}</span>
                                    </span>
                                </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
