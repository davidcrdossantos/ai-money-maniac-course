"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { Menu, X, LogOut, LayoutDashboard, BookOpen, CreditCard, Phone, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const { data: session, status } = useSession() || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthenticated = status === "authenticated" && session?.user;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="AI Money Maniac"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">
              AI Money <span className="text-green-400">Maniac</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {mounted && isAuthenticated ? (
              <>
                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link href="/course" className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <BookOpen className="w-4 h-4" />
                  Course
                </Link>
                <Link href="/about" className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <Info className="w-4 h-4" />
                  About
                </Link>
                <Link href="/contact" className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <Phone className="w-4 h-4" />
                  Contact
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 hover:bg-red-600/30 rounded-lg transition-all ml-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : mounted ? (
              <>
                <Link href="/about" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <Info className="w-4 h-4" />
                  About
                </Link>
                <Link href="/contact" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <Phone className="w-4 h-4" />
                  Contact
                </Link>
                <Link href="/pricing" className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                  <CreditCard className="w-4 h-4" />
                  Pricing
                </Link>
                <Link href="/login" className="px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 ml-1">
                  Get Started
                </Link>
              </>
            ) : null}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <nav className="px-4 py-4 space-y-2">
              {mounted && isAuthenticated ? (
                <>
                  <Link href="/dashboard" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <LayoutDashboard className="w-5 h-5" />Dashboard
                  </Link>
                  <Link href="/course" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <BookOpen className="w-5 h-5" />Course
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <Info className="w-5 h-5" />About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="w-5 h-5" />Contact
                  </Link>
                  <button onClick={() => { setIsMenuOpen(false); signOut({ callbackUrl: "/" }); }} className="flex items-center gap-2 w-full px-4 py-3 bg-red-600/20 text-red-400 hover:bg-red-600/30 rounded-lg transition-all">
                    <LogOut className="w-5 h-5" />Logout
                  </button>
                </>
              ) : mounted ? (
                <>
                  <Link href="/about" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <Info className="w-5 h-5" />About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="w-5 h-5" />Contact
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    <CreditCard className="w-5 h-5" />Pricing
                  </Link>
                  <Link href="/login" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/signup" className="block px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg text-center" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </>
              ) : null}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
