import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header'; // Import the new Header component
import Footer from '../components/Footer'; // <-- ADD THIS IMPORT

// Re-using the CheckIcon component
const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="bg-[#F9F6F0] text-[#2C4A3F]">
      <Header />

      <main>
        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Clear pricing for ambitious hosts.</h2>
              <p className="text-lg md:text-xl text-[#6E8C7D] max-w-3xl mx-auto mb-16">Our packages are designed as strategic investments in your property&apos;s success. No hidden fees, no jargon—just results.</p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
              {/* Package 1: Launch */}
              <motion.div id="launch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                <h3 className="font-serif text-3xl font-bold mb-2">The Launchpad</h3>
                <p className="text-[#6E8C7D] mb-6">For new properties or first-time hosts.</p>
                <p className="font-serif text-4xl font-bold mb-2">Starting at $2,500</p>
                <p className="text-[#6E8C7D] mb-8">One-time project fee</p>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Market Analysis & Revenue Projections</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Compliance & Permitting Guidance</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Full Listing Creation & Copywriting</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Professional Photoshoot & Video</strong></li>
                </ul>
                <Link href="#contact" className="mt-8 w-full text-center bg-[#D36D47] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition shadow-lg">Get Started</Link>
              </motion.div>

              {/* Package 2: Boost */}
              <motion.div id="boost" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="bg-[#2C4A3F] text-white p-8 rounded-lg shadow-xl ring-4 ring-[#D36D47] flex flex-col">
                <h3 className="font-serif text-3xl font-bold mb-2">The Performance Audit</h3>
                <p className="text-[#DDE5DB] mb-6">For existing listings ready to level up.</p>
                <p className="font-serif text-4xl font-bold mb-2">Starting at $1,800</p>
                <p className="text-[#DDE5DB] mb-8">One-time project fee</p>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>100-Point Audit of Listing & Operations</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Dynamic Pricing & SEO Overhaul</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Guest Experience Enhancement Plan</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Direct Booking & Social Media Strategy</strong></li>
                </ul>
                <Link href="#contact" className="mt-8 w-full text-center bg-[#D36D47] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition shadow-lg">Boost My Bookings</Link>
              </motion.div>

              {/* Package 3: Brand */}
              <motion.div id="brand" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                <h3 className="font-serif text-3xl font-bold mb-2">The Portfolio Strategy</h3>
                <p className="text-[#6E8C7D] mb-6">For hosts scaling to a multi-property brand.</p>
                <p className="font-serif text-4xl font-bold mb-2">Custom Retainer</p>
                <p className="text-[#6E8C7D] mb-8">Bespoke monthly advising</p>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Multi-Property System Development</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Hospitality Brand Building</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Team Building & SOP Creation</strong></li>
                  <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 flex-shrink-0" /> <strong>Valuation & Exit/Acquisition Strategy</strong></li>
                </ul>
                <Link href="#contact" className="mt-8 w-full text-center bg-[#D36D47] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition shadow-lg">Build My Brand</Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}