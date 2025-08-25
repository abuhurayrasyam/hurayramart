"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#03373D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Shop Smart, <span className="text-primary">Live Better</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-10 text-[#606060] text-white/80"
        >
          Explore our curated products that blend quality, style, and
          affordability. Sign in to manage and add your own favorites!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <Link
            href="/products"
            className="px-6 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-[#6d8d36] transition shadow-lg"
          >
            View Products
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 border border-accent text-accent rounded-2xl font-semibold hover:bg-accent hover:text-white transition"
          >
            Login
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}