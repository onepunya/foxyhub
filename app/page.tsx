"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const sakura = useMemo(() => Array.from({ length: 18 }), []);

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-black/70 backdrop-blur-xl border-r border-white/10 p-6 z-20">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.png"
            alt="Foxy Logo"
            className="w-20 h-20 rounded-full border border-white/20 object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">Foxy</h2>
        </div>

        {/* Menu */}
        <nav className="space-y-4">
          <Link href="/" className="hover:text-pink-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-300 transition">
            About
          </Link>
        </nav>
      </aside>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg-japan.jpg')] bg-cover bg-center" />

      {/* Sakura */}
      {sakura.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300 text-xl select-none"
          style={{ left: `${Math.random() * 100}%` }}
          animate={{ y: ["-10%", "110%"], rotate: [0, 360] }}
          transition={{ duration: 12 + Math.random() * 8, repeat: Infinity }}
        >
          ❀
        </motion.span>
      ))}

      {/* Content */}
      <main className="flex-1 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 backdrop-blur-xl p-10 rounded-3xl border border-white/20 max-w-xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            和風ポートフォリオ
          </h1>
          <p className="text-white/80 mb-6">
            Japanese style website – production optimized.
          </p>

          <Link
            href="/about"
            className="px-6 py-2 rounded-2xl bg-white text-black hover:scale-105 transition"
          >
            About
          </Link>
        </motion.div>
      </main>
    </div>
  );
}