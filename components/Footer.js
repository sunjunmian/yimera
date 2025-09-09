import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Footer */}
        <div className="container mx-auto text-center max-w-3xl px-4 py-20 md:py-32">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Not sure where to start?</h3>
            <p className="text-lg md:text-xl text-[#6E8C7D] mb-8">Drop us a line or book a free 15-minute call and tell us about your property.</p>
            <Link href="mailto:hello@yimera.com" className="inline-block bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg text-lg">
                hello@yimera.com
            </Link>
        </div>
      <footer className="bg-[#2C4A3F] text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">YiMera</h3>
          <p className="text-[#DDE5DB]">A consultancy for hosts who mean business.</p>
          <p className="text-[#88A096] text-sm mt-8">© 2025 YiMera. All Rights Reserved. | Serving NY, NJ, PA, & CT</p>
        </div>
      </footer>
    </>
  );
}