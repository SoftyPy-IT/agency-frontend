"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import logo from "@/public/img/bigRedDot.webp";

type FooterLinkGroup = {
  title?: string;
  links: { label: string; href: string }[];
};

const linkGroups: FooterLinkGroup[] = [
  {
    links: [
      { label: "About Us", href: "#" },
      { label: "Services", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Our Experts", href: "#" },
      { label: "Faq", href: "#" },
    ],
  },
  {
    links: [
      { label: "Latest News", href: "#" },
      { label: "Case Study", href: "#" },
      { label: "App Development", href: "#" },
      { label: "Team Profile", href: "#" },
      { label: "Shop", href: "#" },
      { label: "Pricing Table", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3">

        {/* Left Section */}
        <div>



          <h2 className="flex items-center content-center gap-2 text-4xl sm:text-5xl font-semibold  leading-tight">
            <Image src={logo} className="h-8 w-8" alt="logo" />
            <span>
              to Dart
            </span>
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <Mail size={22} />
            <Link href="mailto:helloPulnex@Pulnex.com" className="hover:underline text-gray-300 break-all">
              helloPulnex@Pulnex.com
            </Link>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <Phone size={22} />
            <Link href="tel:+99008908979" className="hover:underline text-gray-300">
              +99 00 8908979
            </Link>
          </div>

          {/* Subscribe Input */}
          <div className="mt-10 flex  max-w-xl bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Subscribe....."
              className="text-red-500 flex-1 px-6 py-4 text-sm sm:text-base outline-none"
            />
            <button className="bg-black text-red-500 m-1  px-3 py-3 text-sm sm:text-base rounded-full mr-1 hover:bg-white hover:text-black border border-black hover:border-red-500 transition">
              GO
            </button>
          </div>
        </div>

        {/* Link Groups */}
        <div className="grid grid-cols-2 gap-16 text-sm">
          {linkGroups.map((group, index) => (
            <div key={index} className="space-y-3">
              {group.links.map((link, i) => (
                <Link key={i} href={link.href} className="hover:text-gray-300 block">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-center lg:justify-start items-start">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="border border-red-500 p-2 rounded-full hover:bg-white hover:text-black transition"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-14 pt-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2024 Dot to Dart</p>
      </div>
    </footer>
  );
}
