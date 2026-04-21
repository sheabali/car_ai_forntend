"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 md:py-12">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/r_logo.png"
            alt="SmartAutoTech.ai Logo"
            width={180}
            height={160}
            className="w-[140px] md:w-[180px] h-auto"
            priority
          />
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-md md:max-w-xl mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
          SmartAutoTech is a web-based SaaS platform designed to help automotive
          repair shops diagnose vehicle issues faster and more accurately using
          AI.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16 text-gray-800 text-sm md:text-base">
          <a
            href="#home"
            className="font-medium hover:text-gray-600 transition"
          >
            Home
          </a>
          <a
            href="#features"
            className="font-medium hover:text-gray-600 transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="font-medium hover:text-gray-600 transition"
          >
            Pricing
          </a>
          <a
            href="#how-it-works"
            className="font-medium hover:text-gray-600 transition"
          >
            How it works
          </a>
        </nav>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2026 SmartAutoTech
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 md:gap-6">
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-800 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-800 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-800 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-gray-600 hover:text-gray-800 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="text-gray-600 hover:text-gray-800 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
