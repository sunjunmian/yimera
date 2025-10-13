import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>);

export default function ElevatePricingPage() {
  return (
    <div className="bg-[#F9F6F0] text-[#2C4A3F]">
      <Header />
      <main>
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 text-center">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">The Elevate Path</h2>
                    <p className="text-lg md:text-xl text-[#6E8C7D] max-w-3xl mx-auto">You've mastered the single property. Now it's time to scale. We provide the strategic framework and operational systems to grow from a successful listing into a lasting, multi-property hospitality brand with a life of its own.</p>
                </motion.div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">ESSENTIALS</h4>
                        <p className="font-serif text-3xl font-bold mb-4">The Brand Kit</p>
                        <p className="text-[#6E8C7D] mb-6">The foundational assets for building a scalable brand.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Digital brand identity & style guide</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Multi-property scaling workbook</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Access to our monthly group strategy call</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$2,200</p>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Get Started</a>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl ring-2 ring-[#D36D47] flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">GUIDED</h4>
                        <p className="font-serif text-3xl font-bold mb-4">Brand Intensive</p>
                        <p className="text-[#6E8C7D] mb-6">High-touch advising for the emerging brand leader.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Essentials, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Quarterly on-site brand & portfolio strategy day</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Direct access to founders for advising</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Direct booking website strategy</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$5,500/qtr</p>
                        <a href="#contact" className="w-full text-center bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Get Started</a>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">COMPLETE</h4>
                        <p className="font-serif text-3xl font-bold mb-4">Fractional Partner</p>
                        <p className="text-[#6E8C7D] mb-6">Your dedicated COO/CMO on a fractional basis.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Guided, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Bespoke retainer as your fractional partner</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Full system, team, and brand build-out</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Exit strategy & business valuation</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: Retainer</p>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Get Started</a>
                    </div>
                </div>
            </div>
        </section>

        {/* ... (Add-Ons and Summary Table sections) ... */}
      </main>
      <Footer />
    </div>
  );
}