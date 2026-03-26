import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-30 bg-[#F9F6F0]/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <Link href="/" className="font-serif text-3xl font-bold text-[#2C4A3F] tracking-tight">
            YiMera
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-[#D36D47]'
                    : 'text-[#2C4A3F] hover:text-[#D36D47]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#D36D47] text-white font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition shadow-md text-sm"
            >
              Book a Shoot
            </Link>
          </nav>

          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-[#2C4A3F] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-full h-0.5 bg-[#2C4A3F] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-[#2C4A3F] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-[#F9F6F0] z-20 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-7 text-2xl">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold transition-colors ${isActive(link.href) ? 'text-[#D36D47]' : 'text-[#2C4A3F] hover:text-[#D36D47]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg text-xl mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Shoot
          </Link>
        </nav>
      </div>
    </>
  );
}
