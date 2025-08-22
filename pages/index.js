// This is a complete Next.js page component. 
// In a Next.js project, you would save this file as `pages/index.js`
// This version uses Framer Motion for animations. To run this, you would need to install it:
// npm install framer-motion react-intersection-observer

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Link from 'next/link'; // Import the Link component


// Helper component for SVG icons to keep the code clean
const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Animation Wrapper Component to reduce boilerplate
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};


export default function YiMeraHome() {
  return (
    // Main container with the off-white background color
    <div className="bg-[#F9F6F0] text-[#2C4A3F]">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-serif text-3xl font-bold text-[#2C4A3F]">YiMera</h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition">Services</a>
            <a href="#about" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition">About</a>
            <a href="#portfolio" className="text-[#2C4A3F] font-semibold hover:text-[#D36D47] transition">Work</a>
            <a href="#contact" className="bg-[#D36D47] text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition shadow-lg">Let's Chat</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section - Corrected Layout */}
        <section className="relative h-screen min-h-[800px] flex items-center">
          <div className="container mx-auto flex h-full">
            <div className="relative z-10 w-full md:w-10/12 flex flex-col justify-center pt-24">
                <div className="md:pr-12 bg-[#F9F6F0]/60 p-8 rounded-xl">
                    <motion.h2 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Your property has a story.<br/>We have a plan.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl max-w-xl text-[#6E8C7D] mb-8"
                    >
                        A creative consultancy for short-term rental owners who think like investors. We turn good listings into great businesses.
                    </motion.p>
                     <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                     >
                        <a href="#contact" className="inline-block bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg text-lg">
                            Start the Conversation
                        </a>
                    </motion.div>
                </div>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-5/12 h-full">
             <motion.div 
                className="w-full h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
             >
                <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80" alt="Beautifully designed modern living room" className="w-full h-full object-cover"/>
            </motion.div>
          </div>
        </section>

  {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Clear pricing for ambitious hosts.</h2>
              <p className="text-lg md:text-xl text-[#6E8C7D] max-w-3xl mx-auto mb-16">Our packages are designed as strategic investments in your property's success. No hidden fees, no jargon—just results.</p>
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
                <a href="#contact" className="mt-8 w-full text-center bg-[#D36D47] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition shadow-lg">Get Started</a>
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
                <a href="#contact" className="mt-8 w-full text-center bg-[#D36D47] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition shadow-lg">Boost My Bookings</a>
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
                <a href="#contact" className="mt-8 w-full text-center bg-[#D36D47] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition shadow-lg">Build My Brand</a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <AnimatedSection>
              <div className="text-left">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Where the Left Brain Meets the Right Brain.</h3>
                <p className="text-lg text-[#6E8C7D] mb-4">Most consultants are either creatives who don't get the numbers, or data nerds who miss the magic. We think that's a false choice.</p>
                <p className="text-lg">YiMera was founded on a simple idea: what if you combined a <span className="font-bold text-[#D36D47]">top real estate photographer and Airbnb Lux inspector's eye for detail</span> with a <span className="font-bold text-[#D36D47]">seasoned business and marketing executive's strategic mind?</span> You get us - savvy business strategy with epic storytelling.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" alt="Two founders collaborating" className="rounded-lg shadow-xl w-full h-full object-cover"/>
            </AnimatedSection>
          </div>
        </section>

        {/* Sample Projects Section */}
        <section id="portfolio" className="py-20 md:py-32 bg-[#F9F6F0]">
            <div className="container mx-auto text-center px-4">
                <AnimatedSection>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Spaces transformed. Stories told.</h3>
                    <p className="text-lg md:text-xl text-[#6E8C7D] max-w-2xl mx-auto mb-16">A few of our favorite projects that went from 'nice' to 'booked solid'.</p>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-4">
                    <AnimatedSection delay={0.1}><div className="group relative overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" alt="Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6"><h4 className="text-white font-bold text-xl">The Hudson Hideaway</h4></div></div></AnimatedSection>
                    <AnimatedSection delay={0.2}><div className="group relative overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80" alt="Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6"><h4 className="text-white font-bold text-xl">Poconos Modern Cabin</h4></div></div></AnimatedSection>
                    <AnimatedSection delay={0.3}><div className="group relative overflow-hidden rounded-lg"><img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80" alt="Project 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6"><h4 className="text-white font-bold text-xl">Brooklyn Brownstone</h4></div></div></AnimatedSection>
                </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 md:py-32 bg-[#DDE5DB]">
            <div className="container mx-auto text-center max-w-3xl px-4">
                <AnimatedSection>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8">"Working with YiMera was the single best investment we've made for our rental."</h3>
                    <p className="text-lg font-semibold">- Sarah L., Host in Montauk, NY</p>
                </AnimatedSection>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto text-center max-w-3xl px-4">
                <AnimatedSection>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to get serious?</h3>
                    <p className="text-lg md:text-xl text-[#6E8C7D] mb-8">We'd love to hear about your property. Drop us a line, and let's see if we're a good fit. No pressure, just a conversation.</p>
                    <a href="mailto:hello@yimera.co" className="inline-block bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg text-lg">
                      hello@yimera.co
                    </a>
                </AnimatedSection>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C4A3F] text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">YiMera</h3>
          <p className="text-[#DDE5DB]">A consultancy for hosts who mean business.</p>
          <p className="text-[#88A096] text-sm mt-8">© 2025 YiMera. All Rights Reserved. | Serving NY, NJ, PA, & CT</p>
        </div>
      </footer>
    </div>
  );
}
