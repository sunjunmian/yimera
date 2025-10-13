import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        {/* Intro Section */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 text-center">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Pricing that fits your path.</h2>
                    <p className="text-lg md:text-xl text-[#6E8C7D] max-w-3xl mx-auto">From DIY playbooks to full-service management, choose the level of support you need to succeed.</p>
                </motion.div>
            </div>
        </section>

        {/* Path 1: Launch Path */}
        <section id="launch-path" className="py-16 md:py-24 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">The Launch Path</h3>
                <p className="text-lg md:text-xl text-[#6E8C7D] text-center max-w-2xl mx-auto mb-16">For new properties or first-time hosts.</p>
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    {/* Essentials */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">ESSENTIALS (REMOTE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">The Playbook</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Digital guide to market analysis</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Listing & branding checklist</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Our "Guest-Proof" tech stack</li></ul>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Contact for Pricing</a>
                    </div>
                    {/* Guided */}
                    <div className="bg-white p-8 rounded-lg shadow-xl ring-2 ring-[#D36D47] flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">GUIDED (ONSITE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">Design & Strategy</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Essentials, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />On-site design & layout consultation</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />1-on-1 brand & marketing strategy session</li></ul>
                        <a href="#contact" className="w-full text-center bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Contact for Pricing</a>
                    </div>
                    {/* Complete */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">COMPLETE (ONSITE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">Full Launch Service</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Guided, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Full listing creation & copywriting</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Professional photoshoot & video</li></ul>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Contact for Pricing</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Path 2: Revive Path */}
        <section id="revive-path" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">The Revive Path</h3>
                <p className="text-lg md:text-xl text-[#6E8C7D] text-center max-w-2xl mx-auto mb-16">For existing listings ready to level up.</p>
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    {/* Essentials */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">ESSENTIALS (REMOTE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">The Audit Kit</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />100-point DIY audit checklist</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Remote listing review & feedback video</li></ul>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Contact for Pricing</a>
                    </div>
                    {/* Guided */}
                    <div className="bg-white p-8 rounded-lg shadow-xl ring-2 ring-[#D36D47] flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">GUIDED (ONSITE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">Audit & Strategy</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Essentials, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />On-site property & operations audit</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Actionable growth plan delivery</li></ul>
                        <a href="#contact" className="w-full text-center bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Contact for Pricing</a>
                    </div>
                    {/* Complete */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">COMPLETE (ONSITE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">Full Revitalization</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Guided, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Implementation of recommendations</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Media refresh (photos/video)</li></ul>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Contact for Pricing</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Path 3: Elevate Path */}
        <section id="elevate-path" className="py-16 md:py-24 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">The Elevate Path</h3>
                <p className="text-lg md:text-xl text-[#6E8C7D] text-center max-w-2xl mx-auto mb-16">For hosts scaling to a multi-property brand.</p>
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    {/* Essentials */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">ESSENTIALS (REMOTE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">The Brand Kit</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Digital scaling workbook</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Access to monthly group strategy call</li></ul>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Contact for Pricing</a>
                    </div>
                    {/* Guided */}
                    <div className="bg-white p-8 rounded-lg shadow-xl ring-2 ring-[#D36D47] flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">GUIDED (ONSITE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">Brand Intensive</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Essentials, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Quarterly on-site brand strategy day</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Direct access for advising</li></ul>
                        <a href="#contact" className="w-full text-center bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Contact for Pricing</a>
                    </div>
                    {/* Complete */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">COMPLETE (ONSITE)</h4>
                        <p className="font-serif text-3xl font-bold mb-6">Fractional Partner</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Guided, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Bespoke retainer as your fractional COO/CMO</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Full system & brand build-out</li></ul>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Contact for Pricing</a>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
