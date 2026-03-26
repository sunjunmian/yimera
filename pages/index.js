import Head from 'next/head';
import { motion } from 'framer-motion';
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

const XIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ServiceCard = ({ title, desc, src, alt, href }) => (
  <Link href={href} className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
    <div className="relative h-48 w-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#D36D47] transition-colors">{title}</h3>
      <p className="text-[#6E8C7D] text-sm leading-relaxed">{desc}</p>
    </div>
  </Link>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>YiMera — Airbnb Photography, Listing Optimization & Host Consulting | NYC, NJ, Catskills, Hamptons</title>
        <meta name="description" content="Airbnb and short-term rental photography, listing optimization, and host consulting. Serving NYC, New Jersey, the Catskills, Poconos, and the Hamptons." />
        <meta property="og:title" content="YiMera — STR Photography & Host Consulting" />
        <meta property="og:description" content="Professional Airbnb and short-term rental photography and consulting for hosts across the NYC metro, Catskills, Poconos, and Hamptons." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "YiMera",
              "description": "Short-term rental photography and host consulting for Airbnb and VRBO hosts.",
              "url": "https://yimera.com",
              "email": "hello@yimera.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "NJ",
                "addressCountry": "US"
              },
              "areaServed": ["New York", "New Jersey", "Catskills", "Hamptons", "Poconos"],
              "sameAs": [
                "https://instagram.com/yimerastr",
                "https://pinterest.com/yimerastr",
                "https://tiktok.com/@yimerastr",
                "https://youtube.com/@yimerastr"
              ]
            })
          }}
        />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          {/* ── HERO ───────────────────────────────────────────────────────── */}
          <section className="relative bg-[#F9F6F0] min-h-[92svh] pb-20 md:pb-0 md:flex md:items-center">
            <div className="relative h-[48vh] md:absolute md:top-0 md:right-0 md:h-full md:w-7/12">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                <Image
                  src="/photos/yimera-008.jpg"
                  alt="Short-term rental living room photographed professionally for Airbnb listing — YiMera"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
              <div className="bg-[#ffffff] rounded-2xl p-8 -mt-20 md:mt-0 md:w-[58%] lg:w-3/4 md:bg-[#ffffff]/80 md:backdrop-blur-md md:p-14">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-[#D36D47] font-semibold tracking-[0.18em] text-xs uppercase mb-5"
                >
                  Airbnb &amp; Short-Term Rental Services
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                  className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] mb-6 tracking-tight"
                >
                  Your Property,<br />Through a{" "}
                  <em className="text-[#D36D47] not-italic">Guest&apos;s Eyes.</em>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  className="text-lg text-[#6E8C7D] mb-3 max-w-md leading-relaxed"
                >
                  Listing photography, listing optimization, and host consulting for Airbnb and VRBO properties across NYC, NJ, the Catskills, Poconos, and Hamptons.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  className="text-sm text-[#88A096] mb-8 max-w-md"
                >
                  A top-rated NYC area real estate photographer and an NYU marketing educator who know what actually moves the needle for short-term rental hosts.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact" className="inline-block bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg text-base">
                    Book a Shoot
                  </Link>
                  <Link href="/services" className="inline-block border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-4 px-8 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-base">
                    See What We Do
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop' }}
            >
              <svg className="w-8 h-8 text-[#88A096]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </section>

          {/* ── SERVICE CARDS ─────────────────────────────────────────────── */}
          <section className="py-20 md:py-28 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-14">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
                  <p className="text-lg text-[#6E8C7D] max-w-2xl mx-auto">
                    Four services, all focused on helping short-term rental hosts get more bookings.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                <AnimatedSection delay={0.05}>
                  <ServiceCard
                    title="Listing Photography"
                    desc="Professionally edited photos for apartments and houses, shot and sequenced to perform on Airbnb, VRBO, and every platform you list on."
                    src="/photos/yimera-005.jpg"
                    alt="Bright living room photographed for an Airbnb listing"
                    href="/services#photography"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <ServiceCard
                    title="Lifestyle Shoots"
                    desc="Directed, editorial-style sessions for social media and direct booking sites. The kind of photos that make someone feel what it would be like to stay there."
                    src="/photos/yimera-002.jpg"
                    alt="Styled short-term rental living room for lifestyle photography"
                    href="/services#lifestyle"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.15}>
                  <ServiceCard
                    title="Listing Optimization"
                    desc="Expert review of your existing listing and photos. Cover image, sequence, title, description — a written report with specific changes to make."
                    src="/photos/yimera-009.jpg"
                    alt="Well-lit rental interior showing professional photography results"
                    href="/services#optimization"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <ServiceCard
                    title="Host Consulting"
                    desc="Remote strategy sessions and on-site property walkthroughs. Honest feedback from people who have been inside a lot of these properties."
                    src="/photos/yimera-007.jpg"
                    alt="Short-term rental living room with distinctive design — property consulting"
                    href="/services#consulting"
                  />
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.25}>
                <div className="text-center mt-10">
                  <Link href="/services" className="inline-block border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-3 px-8 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-sm">
                    See Full Service Details &rarr;
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ── YOUR PHOTOS, YOUR MARKETING ──────────────────────────────── */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                  <div className="text-center mb-12">
                    <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-4">
                      One thing worth knowing upfront
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                      Your Photos.<br />
                      <span className="text-[#D36D47]">Every Platform. No Restrictions.</span>
                    </h2>
                    <p className="text-lg text-[#6E8C7D] max-w-2xl mx-auto">
                      Every photo we deliver comes with a full license to use it however you market your property — any listing platform, your own website, social media, print. No expiration, no restrictions on where.
                    </p>
                  </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedSection direction="left" delay={0.1}>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                          <XIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-400">Platform Photography Programs</h3>
                      </div>
                      <ul className="space-y-3">
                        {[
                          'Often restricted to a single platform',
                          'May not be usable on your own website or social media',
                          'Editing style and sequencing decisions are out of your hands',
                          'Switching platforms can mean starting your photos over',
                          'Quality varies widely depending on who shows up',
                        ].map(item => (
                          <li key={item} className="flex items-start">
                            <XIcon className="w-4 h-4 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection direction="right" delay={0.1}>
                    <div className="bg-white border-2 border-[#D36D47] rounded-2xl p-8 shadow-lg h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-[#D36D47] flex items-center justify-center shrink-0">
                          <CheckIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-[#2C4A3F]">YiMera Photography</h3>
                      </div>
                      <ul className="space-y-3">
                        {[
                          'Licensed for use on any listing platform — Airbnb, VRBO, Booking.com, all of them',
                          'Use on your own website and direct booking pages',
                          'Post on Instagram, TikTok, Pinterest, any channel',
                          'Consistent, professionally edited look throughout',
                          'Sequenced by people who understand how guests browse',
                        ].map(item => (
                          <li key={item} className="flex items-start">
                            <CheckIcon className="w-4 h-4 text-[#D36D47] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2C4A3F] text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>

                <AnimatedSection delay={0.2}>
                  <div className="mt-6 bg-[#2C4A3F] text-white rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                    <p className="text-[#DDE5DB] text-sm max-w-xl leading-relaxed">
                      The photos are yours to use however and wherever you market your property. That&apos;s how it should work.
                    </p>
                    <Link href="/pricing" className="shrink-0 bg-[#D36D47] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition whitespace-nowrap text-sm shadow">
                      See Pricing &rarr;
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── ABOUT TEASER ─────────────────────────────────────────────── */}
          <section className="py-20 md:py-28 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimatedSection direction="left">
                  <div>
                    <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-5">Who We Are</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
                      A photographer<br />and a marketing<br />
                      <span className="text-[#D36D47]">educator who know<br />this space.</span>
                    </h2>
                    <p className="text-[#6E8C7D] text-lg mb-5 leading-relaxed">
                      Tom has spent years photographing short-term rental properties across the northeast. Over the course of those shoots, hosts asked a lot of questions — what works, what doesn&apos;t, why certain photos convert and others don&apos;t. He paid attention.
                    </p>
                    <p className="text-[#6E8C7D] mb-8 leading-relaxed">
                      Jun teaches marketing strategy at NYU and has spent her career studying how people make decisions. When the two perspectives met, the overlap was hard to ignore.
                    </p>
                    <Link href="/about" className="inline-block border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-3 px-8 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-sm">
                      Our Story &rarr;
                    </Link>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: '100+', label: 'STR properties photographed' },
                      { val: '7+', label: 'Years in NYC real estate photography' },
                      { val: '10+', label: 'Years teaching integrated marketing at NYU' },
                      { val: '6+', label: 'Markets: NYC, NJ, Catskills, Poconos, Hamptons & Shore' },
                    ].map(({ val, label }, i) => (
                      <div key={label} className={`rounded-2xl p-6 shadow-sm text-center ${i === 3 ? 'bg-[#2C4A3F]' : 'bg-white'}`}>
                        <p className="font-serif text-4xl font-bold mb-1 text-[#D36D47]">{val}</p>
                        <p className={`text-xs leading-snug ${i === 3 ? 'text-[#DDE5DB]' : 'text-[#6E8C7D]'}`}>{label}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── NOT SURE WHERE TO START ───────────────────────────────────── */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <AnimatedSection>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Not sure where to start?</h2>
                  <p className="text-lg text-[#6E8C7D] mb-8 max-w-xl mx-auto leading-relaxed">
                    Tell us about your property and where you want to take it. A free 15-minute call is usually enough to point you in the right direction.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://calendly.com/hello-yimera/15-minute-consult"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg text-base"
                    >
                      Book a Free 15-Min Call
                    </a>
                    <Link href="/services" className="inline-block border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-4 px-8 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-base">
                      Browse Services
                    </Link>
                  </div>
                  <p className="text-[#88A096] text-xs mt-5">No obligation. We&apos;ll figure out what makes sense for your property.</p>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
          <section className="py-20 md:py-28 bg-[#DDE5DB]">
            <div className="container mx-auto text-center max-w-3xl px-4">
              <AnimatedSection>
                <div className="text-6xl text-[#88A096] font-serif mb-4 leading-none">&ldquo;</div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#2C4A3F] leading-snug">
                  Working with YiMera was the single best investment we&apos;ve made for our rental.
                </h3>
                <p className="text-[#88A096] font-semibold">Sarah L. &mdash; Host in Montauk, NY</p>
              </AnimatedSection>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}