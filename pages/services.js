import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — YiMera STR Photography & Consulting</title>
        <meta name="description" content="Airbnb and short-term rental photography, lifestyle shoots, listing optimization, and host consulting across NYC, NJ, the Catskills, Poconos, and Hamptons." />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          {/* ── PAGE HEADER ────────────────────────────────────────────────── */}
          <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection>
                <span className="inline-block text-[#D36D47] font-semibold tracking-[0.18em] text-xs uppercase mb-4">What We Offer</span>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Services</h1>
                <p className="text-lg md:text-xl text-[#6E8C7D] max-w-2xl mx-auto">
                  Everything we do is focused on one thing: getting your property in front of the right guests and making them want to book it.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── LISTING PHOTOGRAPHY ────────────────────────────────────────── */}
          <section id="photography" className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  {/* Replace with your own photo */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/photos/yimera-005.jpg" alt="Professionally photographed Airbnb living room with fireplace" fill className="object-cover object-top" />
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  <div>
                    <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-4">On-Location</span>
                    <h2 className="font-serif text-4xl font-bold mb-4">Listing Photography</h2>
                    <p className="text-[#6E8C7D] leading-relaxed mb-4">
                      Listing photos are about the space. The goal is to show the property accurately and compellingly — every room, every detail, in its best light. We shoot for the conditions we find and edit to a consistent, polished standard.
                    </p>
                    <p className="text-[#6E8C7D] leading-relaxed mb-4">
                      That includes atmosphere too. A good listing photo of a firepit at dusk or morning light coming through bedroom windows tells guests something real about what it feels like to be there — without anyone in the frame. That distinction matters, which is why we keep listing and lifestyle photography as separate services.
                    </p>
                    <p className="text-[#6E8C7D] leading-relaxed mb-6">
                      Every photo is licensed for use on any platform you list on — Airbnb, VRBO, Booking.com, your own site, anywhere you market the property.
                    </p>
                    <ul className="space-y-2 mb-8">
                      {[
                        'Apartments and condos — priced by bedroom count',
                        'Houses — priced by finished square footage',
                        'Professionally edited to a consistent standard',
                        'Delivered within 48 hours',
                        'Drone photography available as an add-on',
                        'Video walkthrough available — editing billed separately',
                      ].map(item => (
                        <li key={item} className="flex items-center text-sm">
                          <CheckIcon className="w-4 h-4 text-[#D36D47] mr-2 flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/pricing#photography" className="inline-block bg-[#D36D47] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-md text-sm">
                      See Photography Pricing &rarr;
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── LIFESTYLE SHOOTS ───────────────────────────────────────────── */}
          <section id="lifestyle" className="py-20 md:py-28 bg-[#2C4A3F] text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  <div>
                    <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-4">By the Hour</span>
                    <h2 className="font-serif text-4xl font-bold mb-4">Lifestyle &amp; Social Shoots</h2>
                    <p className="text-[#DDE5DB] leading-relaxed mb-4">
                      Lifestyle photography is different from listing photography. Where listing photos show the space, lifestyle photos show the experience — and they&apos;re directed to do it. Think someone actually in bed stretching in the morning, or a close-up of marshmallows on sticks over a fire rather than a wide shot of the firepit. These are images built for Instagram, property websites, and seasonal campaigns.
                    </p>
                    <p className="text-[#DDE5DB] leading-relaxed mb-5">
                      These sessions are flexible and priced by the hour. We work with what your property offers and direct for the story you want to tell.
                    </p>

                    <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-6">
                      <p className="text-sm text-[#DDE5DB] leading-relaxed">
                        <strong className="text-white">Shoots with people:</strong> You can use family, friends, or yourself — we provide the necessary model releases. If you&apos;d prefer professional talent, we can help arrange it; talent fees are quoted separately based on the scope of the shoot.
                      </p>
                    </div>

                    <ul className="space-y-2 mb-8">
                      {[
                        'Directed, editorial-style sessions',
                        'Social-ready vertical and square crops included',
                        'Drone exterior content available',
                        'Video clips available — editing billed separately from shoot time',
                        'Licensed for all platforms and marketing channels',
                      ].map(item => (
                        <li key={item} className="flex items-center text-sm">
                          <CheckIcon className="w-4 h-4 text-[#D36D47] mr-2 flex-shrink-0" />
                          <span className="text-[#DDE5DB]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/pricing#lifestyle" className="inline-block bg-[#D36D47] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-md text-sm">
                      See Lifestyle Pricing &rarr;
                    </Link>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  {/* Replace with your own lifestyle photo */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/photos/yimera-002.jpg" alt="Short-term rental living room styled for social media photography" fill className="object-cover object-top" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── LISTING OPTIMIZATION ───────────────────────────────────────── */}
          <section id="optimization" className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  {/* Replace with your own photo */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/photos/yimera-009.jpg" alt="Short-term rental living room and kitchen photographed for Airbnb listing" fill className="object-cover object-top" />
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  <div>
                    <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-4">No Site Visit Required</span>
                    <h2 className="font-serif text-4xl font-bold mb-4">Listing Optimization</h2>
                    <p className="text-[#6E8C7D] leading-relaxed mb-4">
                      Sometimes a listing isn&apos;t performing and the photos aren&apos;t the problem. The cover image is wrong. The sequence leads with the least interesting room. The title doesn&apos;t say anything. These are things we can look at and give you a clear answer on without ever visiting the property — and they&apos;re available to hosts anywhere in the country.
                    </p>
                    <p className="text-[#6E8C7D] leading-relaxed mb-6">
                      We offer two ways to do this, depending on what you need.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#DDE5DB]">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">Listing Review</h3>
                          <span className="font-serif text-xl font-bold text-[#D36D47]">$129</span>
                        </div>
                        <p className="text-[#6E8C7D] text-sm leading-relaxed mb-4">
                          We go through your live listing the way a potential guest would — cover photo, photo order, title, description, first impression. You get a written report with specific, numbered changes to make.
                        </p>
                        <div className="flex gap-2">
                          <Link href="/contact?services=listing-review" className="flex-1 text-center border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-2 px-3 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-xs">Have Questions</Link>
                          <a href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-a87f9c8935e14895b2961513c3a547201e7417f6fbf4472c8d2c091e20ad6fda59c4d6dae87749c384c8ddc11957e695?locale=EN_US&cta=saveandcopylink" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#D36D47] text-white font-bold py-2 px-3 rounded-full hover:opacity-90 transition text-xs">Pay Now &rarr;</a>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#DDE5DB]">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">Photo Curation</h3>
                          <span className="font-serif text-xl font-bold text-[#D36D47]">$89</span>
                        </div>
                        <p className="text-[#6E8C7D] text-sm leading-relaxed mb-4">
                          You send us a selection of your best shots — maybe a few extras if you&apos;re not sure about some of them. We pick the strongest ones, put them in the order most likely to get a booking, and tell you if anything critical is missing.
                        </p>
                        <div className="flex gap-2">
                          <Link href="/contact?services=photo-curation" className="flex-1 text-center border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-2 px-3 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-xs">Have Questions</Link>
                          <a href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-fb093b9781b0407ca04c025941ff6b1536231f25f4c64a048d58838753b7d4d89366c46f301b4b8c92c6e5f573ef8136?locale=EN_US&cta=saveandcopylink" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#D36D47] text-white font-bold py-2 px-3 rounded-full hover:opacity-90 transition text-xs">Pay Now &rarr;</a>
                        </div>
                      </div>

                      <div className="bg-[#DDE5DB] rounded-xl p-5">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <span className="text-[#D36D47] text-xs font-bold uppercase tracking-widest">Bundle</span>
                            <h3 className="font-bold">Both Services</h3>
                          </div>
                          <div className="text-right">
                            <span className="font-serif text-xl font-bold text-[#D36D47]">$199</span>
                            <p className="text-[#88A096] text-xs line-through">$218</p>
                          </div>
                        </div>
                        <p className="text-[#6E8C7D] text-sm mb-4">Save $19 when you order both together.</p>
                        <div className="flex gap-2">
                          <Link href="/contact?services=listing-review,photo-curation" className="flex-1 text-center border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-2 px-3 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-xs">Have Questions</Link>
                          <a href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-69991e9fcae4479192984b2c9472e54ef6e7a2ad0ec642288697fefdffe9fd998282e0acd0494f39a2014fc057b74c5f?locale=EN_US&cta=saveandcopylink" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#D36D47] text-white font-bold py-2 px-3 rounded-full hover:opacity-90 transition text-xs">Pay Now &rarr;</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── HOST CONSULTING ────────────────────────────────────────────── */}
          <section id="consulting" className="py-20 md:py-28 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-6">
                  <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-4">Strategy &amp; Advisory</span>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5">Host Consulting</h2>
                  <p className="text-lg text-[#6E8C7D] max-w-2xl mx-auto">
                    Hosts started asking Tom questions during shoots — about sequencing, about what guests notice, about why some properties book and others don&apos;t. The answers people found useful led to this. Jun brings the marketing perspective. The combination is more useful than either one alone.
                  </p>
                </div>
              </AnimatedSection>

              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-10">

                {/* Host Strategy Session */}
                <AnimatedSection delay={0.05}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#88A096]">Entry</span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium bg-[#DDE5DB] text-[#6E8C7D]">Remote — 60 min</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Host Strategy Session</h3>
                    <p className="text-[#6E8C7D] text-sm mb-5 leading-relaxed flex-grow">
                      An hour with both of us. We review your listing, photos, and pricing before the call and come with specific observations ready. You ask the questions you&apos;ve been sitting on. We give you straight answers and written follow-up notes within 24 hours.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm">
                      {[
                        'Pre-session intake and listing review',
                        'Live feedback on your specific situation',
                        'Pricing, positioning, and photo strategy',
                        'Written follow-up notes within 24 hours',
                      ].map(item => (
                        <li key={item} className="flex items-start">
                          <CheckIcon className="w-4 h-4 text-[#88A096] mr-2 flex-shrink-0 mt-0.5" />{item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-[#DDE5DB] pt-5 mt-auto">
                      <p className="font-serif text-2xl font-bold text-[#D36D47]">$129</p>
                      <Link href="/contact" className="bg-[#2C4A3F] text-white font-bold py-2 px-5 rounded-full hover:opacity-80 transition text-sm">Book</Link>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Property Experience Audit */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-[#D36D47] text-white rounded-2xl p-8 shadow-xl ring-2 ring-[#D36D47] flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-200">Standard</span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/20 text-white">On-site</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2 text-white">Property Experience Audit</h3>
                    <p className="text-orange-100 text-sm mb-5 leading-relaxed flex-grow">
                      We walk your property like a guest would — front door to back bedroom — and tell you what we see. What&apos;s working, what isn&apos;t, and what to fix in what order. You get a written report with prioritized action items. Book a listing shoot at the same time and save $50.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm">
                      {[
                        'Full on-site walkthrough, guest perspective',
                        'Every space reviewed and discussed',
                        'Written report with prioritized action items',
                        'Photography and staging notes included',
                        'Save $50 when combined with a listing shoot',
                      ].map(item => (
                        <li key={item} className="flex items-start">
                          <CheckIcon className="w-4 h-4 text-orange-200 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-orange-50">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-orange-400 pt-5 mt-auto">
                      <p className="font-serif text-2xl font-bold text-white">$299</p>
                      <Link href="/contact" className="bg-white text-[#D36D47] font-bold py-2 px-5 rounded-full hover:bg-orange-50 transition text-sm">Book</Link>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Full Stay Audit */}
                <AnimatedSection delay={0.15}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#88A096]">In-Depth</span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium bg-[#DDE5DB] text-[#6E8C7D]">On-site overnight</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Full Stay Audit</h3>
                    <p className="text-[#6E8C7D] text-sm mb-5 leading-relaxed flex-grow">
                      We stay at the property overnight — checking in exactly as a guest would, experiencing every part of the stay from arrival to morning. The result is a level of detail you can&apos;t get from a walkthrough: how the check-in instructions actually read, how the bed sleeps, what&apos;s missing from the kitchen at 7am, what a guest notices that an owner never would. You get a comprehensive written report covering the full guest experience.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm">
                      {[
                        'Full overnight stay, guest check-in experience',
                        'Every touchpoint reviewed — arrival through checkout',
                        'Comprehensive written report on the full stay',
                        'Amenity, staging, and listing recommendations',
                        'Photography recommendations included',
                      ].map(item => (
                        <li key={item} className="flex items-start">
                          <CheckIcon className="w-4 h-4 text-[#88A096] mr-2 flex-shrink-0 mt-0.5" />{item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-[#DDE5DB] pt-5 mt-auto">
                      <p className="font-serif text-2xl font-bold text-[#D36D47]">$699</p>
                      <Link href="/contact" className="bg-[#2C4A3F] text-white font-bold py-2 px-5 rounded-full hover:opacity-80 transition text-sm">Book</Link>
                    </div>
                  </div>
                </AnimatedSection>

              </div>

              <AnimatedSection delay={0.2}>
                <p className="text-center text-sm text-[#88A096] mt-8 max-w-lg mx-auto">
                  On-site consulting is subject to travel fees outside the NJ/NYC metro. Book a Property Experience Audit and a listing shoot together and save $50 — and keep it to one trip.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────────── */}
          <section className="py-20 md:py-24">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <AnimatedSection>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Not sure where to start?</h2>
                <p className="text-[#6E8C7D] text-lg mb-8">Tell us about your property. We&apos;ll point you in the right direction.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/pricing" className="inline-block border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-4 px-8 rounded-full hover:bg-[#2C4A3F] hover:text-white transition">
                    View All Pricing
                  </Link>
                  <Link href="/contact" className="inline-block bg-[#D36D47] text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition shadow-lg">
                    Get in Touch
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}