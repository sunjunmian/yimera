import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>);

export default function LaunchPricingPage() {
  return (
    <div className="bg-[#F9F6F0] text-[#2C4A3F]">
      <Header />
      <main>
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 text-center">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">The Launch Path</h2>
                    <p className="text-lg md:text-xl text-[#6E8C7D] max-w-3xl mx-auto">You have a property and a vision. We have the playbook to turn it into a profitable, guest-ready business from day one. Whether you&apos;re launching a new Airbnb in the Hudson Valley or a shore house in NJ, our expertise ensures you sidestep the common pitfalls and start strong.</p>
                </motion.div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">ESSENTIALS</h4>
                        <p className="font-serif text-3xl font-bold mb-4">The Playbook</p>
                        <p className="text-[#6E8C7D] mb-6">A comprehensive digital toolkit for the self-starting host.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Digital guide to local market & yield analysis</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Our proprietary &quot;Guest-Proof&quot; tech stack</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Brand identity & listing creation checklist</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Photo shoot prep guide</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$1,500</p>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Get Started</a>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl ring-2 ring-[#D36D47] flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">GUIDED</h4>
                        <p className="font-serif text-3xl font-bold mb-4">Design & Strategy</p>
                        <p className="text-[#6E8C7D] mb-6">Hands-on expertise to perfect your space and your strategy.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Essentials, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />On-site interior design & layout consultation</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />1-on-1 brand & marketing strategy session</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Professional photography of the finished space</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$4,500</p>
                        <a href="#contact" className="w-full text-center bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Get Started</a>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
                        <h4 className="font-bold text-lg mb-2 text-[#D36D47]">COMPLETE</h4>
                        <p className="font-serif text-3xl font-bold mb-4">Full Launch Service</p>
                        <p className="text-[#6E8C7D] mb-6">Our signature, white-glove service to take you from empty space to booked solid.</p>
                        <ul className="space-y-3 flex-grow mb-8"><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" /><strong>Everything in Guided, plus:</strong></li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Full listing creation & expert copywriting</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Cinematic video tour & social media kit</li><li className="flex items-start"><CheckIcon className="w-5 h-5 text-[#88A096] mr-3 mt-1 flex-shrink-0" />Dynamic pricing & channel setup</li></ul>
                        <p className="text-2xl font-bold mb-6">Investment: ~$7,500+</p>
                        <a href="#contact" className="w-full text-center bg-gray-200 text-[#2C4A3F] font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-12">À La Carte Add-Ons</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                    <div className="bg-white p-6 rounded-lg shadow-sm"><strong>Drone Footage:</strong> Starting at $350</div>
                    <div className="bg-white p-6 rounded-lg shadow-sm"><strong>3D Virtual Tour:</strong> Starting at $400</div>
                    <div className="bg-white p-6 rounded-lg shadow-sm"><strong>Social Media Kit:</strong> Starting at $500</div>
                    <div className="bg-white p-6 rounded-lg shadow-sm"><strong>Direct Booking Site:</strong> Starting at $2,000</div>
                    <div className="bg-white p-6 rounded-lg shadow-sm"><strong>Floor Plans:</strong> Starting at $200</div>
                    <div className="bg-white p-6 rounded-lg shadow-sm"><strong>Advanced SEO:</strong> Custom Quote</div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}