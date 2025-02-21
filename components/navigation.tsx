"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ml-2">
          <span className="font-bold text-xl">Video Stream Hub</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/series" className="font-bold text-xl hover:no-underline">
            Tv Series
          </Link>
          <Link href="/movies" className="font-bold text-xl hover:no-underline">
            Movies
          </Link>
          <Link href="/hindi-dubbed" className="text-sm font-medium hover:no-underline">
          Hindi Dubbed
          </Link>
          <Link href="/adult" className="font-bold text-xl hover:no-underline">
            Adult
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 py-4 border-t bg-background items-center">
            <Link href="/series" className="font-bold text-xl hover:no-underline">
            Tv Series
          </Link>
          <Link href="/movies" className="font-bold text-xl hover:no-underline">
            Movies
          </Link>
          <Link href="/hindi-dubbed" className="font-bold text-xl hover:no-underline">
          Hindi Dubbed
          </Link>
          <Link href="/adult" className="font-bold text-xl hover:no-underline">
            Adult
          </Link>
        </div>
      )}
    </nav>
  );
}
