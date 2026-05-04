import Link from "next/link";
import { Zap, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white">
              AI Money <span className="text-green-400">Maniac</span>
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <a
            href="mailto:aimoneymachine93@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            aimoneymachine93@gmail.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AI Money Maniac. All rights reserved.
        </div>
      </div>
    </footer>
  );
}