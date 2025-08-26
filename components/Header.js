import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-30 p-3 bg-[#F9F6F0]/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-serif text-3xl font-bold text-[#2C4A3F]">YiMera
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition">Services</Link>
            <Link href="/#about" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition">About</Link>
            <Link href="/#portfolio" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition">Work</Link>
            <Link href="#contact" className="bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Let&apos;s Chat</Link>
          </nav>

          {/* Hamburger Button */}
          <button 
            className="md:hidden z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-[#2C4A3F] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-[#2C4A3F] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-[#2C4A3F] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F6F0] z-20 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <Link href="/#services" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/#about" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/#portfolio" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition" onClick={() => setIsMenuOpen(false)}>Work</Link>
          <Link href="#contact" className="bg-[#D36D47] text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition shadow-lg" onClick={() => setIsMenuOpen(false)}>Let&apos;s Chat</Link>
        </nav>
      </div>
    </>
  );
}
