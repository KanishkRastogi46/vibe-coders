"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-2xl">
            AutoDev
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#faqs" className="text-foreground/70 hover:text-foreground transition-colors">
            FAQs
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
            Documentation
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-background border-b">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              href="#features"
              className="px-2 py-1 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#faqs"
              className="px-2 py-1 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="#"
              className="px-2 py-1 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#"
              className="px-2 py-1 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}