import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>);

export default function RevivePricingPage() {
  return (
    <div className="bg-[#F9F6F0] text-[#2C4A3F]">
      <Header />
      <main>
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 text-center">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">The Revive Path</h2>
                    <p className="text-lg md:text-xl text-[#6E8C7D] max-w-3xl mx-auto">Your listing is live, but it has hit a plateau. We specialize in diagnosing underperforming properties—from NYC apartments to CT coastal homes—and implementing targeted strategies to boost visibility, guest experience, and revenue.</p>
                </motion.div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">ESSENTIALS</h4>
                        <p className="font-serif text-3xl font-bold mb-4">The Audit Kit</p>
                        <p className="text-[#6E8C7D] mb-6">An expert-led, data-driven analysis delivered remotely.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Comprehensive 100-point listing audit</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Personalized feedback video with actionable tips</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Local competitor analysis report</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$1,800</p>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Get Started</a>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl ring-2 ring-[#D36D47] flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">GUIDED</h4>
                        <p className="font-serif text-3xl font-bold mb-4">Audit & Strategy</p>
                        <p className="text-[#6E8C7D] mb-6">A deep-dive on-site to build your custom growth plan.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Essentials, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />On-site property & guest experience audit</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Dynamic pricing & marketing strategy session</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Delivery of a 90-day growth plan</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$3,800</p>
                        <a href="#contact" className="w-full text-center bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Get Started</a>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">COMPLETE</h4>
                        <p className="font-serif text-3xl font-bold mb-4">Full Revitalization</p>
                        <p className="text-[#6E8C7D] mb-6">We don't just build the plan—we execute it with you.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Guided, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Implementation of key recommendations</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Full media refresh (photos & video)</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Updated listing copy & social assets</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$6,500+</p>
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