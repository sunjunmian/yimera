import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <>
      <Head>
        <title>About — YiMera STR Photography & Consulting</title>
        <meta name="description" content="YiMera is a partnership between a top-rated NYC real estate photographer and an NYU marketing educator. We help Airbnb and short-term rental hosts get more bookings." />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          {/* ── PAGE HEADER ────────────────────────────────────────────────── */}
          <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection>
                <span className="inline-block text-[#D36D47] font-semibold tracking-[0.18em] text-xs uppercase mb-4">Who We Are</span>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">About YiMera</h1>
                <p className="text-lg md:text-xl text-[#6E8C7D] max-w-2xl mx-auto">
                  A real estate photographer and a marketing educator who spend a lot of time thinking about the same problem from different angles.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── ORIGIN STORY ───────────────────────────────────────────────── */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  {/* Replace with your own photo */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#DDE5DB] flex items-center justify-center">
                    <span className="text-[#88A096] text-xs uppercase tracking-widest font-semibold">Add photo here</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  <div>
                    <h2 className="font-serif text-4xl font-bold mb-5 leading-tight">
                      How this started.
                    </h2>
                    <p className="text-[#6E8C7D] leading-relaxed mb-4">
                      Tom has been photographing real estate in the New York area for over a decade, with a large portion of that work in short-term rentals. Over the course of hundreds of shoots, hosts started asking questions — what works, what doesn&apos;t, why the cover photo matters so much, why a particular shot isn&apos;t doing what it should.
                    </p>
                    <p className="text-[#6E8C7D] leading-relaxed mb-4">
                      He started paying close attention. Asked his own questions. The observations he shared with hosts started producing results — different sequencing, a different lead photo, small staging changes that changed how a space read on screen. People came back and said it helped.
                    </p>
                    <p className="text-[#6E8C7D] leading-relaxed mb-4">
                      Jun teaches marketing strategy at NYU and has spent her career at the intersection of brand, operations, and communications. She had been arriving at many of the same observations from the other direction — not as a photographer, but as someone who studies how people make decisions and what actually drives them to click, book, and come back.
                    </p>
                    <p className="text-[#6E8C7D] leading-relaxed">
                      YiMera is what happened when those two perspectives got combined into one offering.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── THE TWO FOUNDERS ───────────────────────────────────────────── */}
          <section className="py-20 md:py-28 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold">Two perspectives.<br />One offering.</h2>
                </div>
              </AnimatedSection>

              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                {/* Tom */}
                <AnimatedSection direction="left" delay={0.05}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="relative h-72 bg-[#2C4A3F] flex items-end">
                      {/* Replace with Tom's photo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#88A096] text-xs uppercase tracking-widest font-semibold">Add photo of Tom here</span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2C4A3F]/90 to-transparent p-6">
                        <p className="text-white font-serif text-2xl font-bold">Tom</p>
                        <p className="text-[#DDE5DB] text-sm">Photographer &amp; Co-founder</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-[#6E8C7D] leading-relaxed mb-4">
                        Tom is a top-rated interior and real estate photographer based in the New York City area. Over the past decade he has photographed hundreds of short-term rental properties — from studio apartments in Brooklyn to multi-bedroom houses in the Catskills and Hamptons.
                      </p>
                      <p className="text-[#6E8C7D] leading-relaxed mb-4">
                        Beyond still photography, he shoots video walkthroughs, drone footage, and social media content, giving hosts a complete visual package from a single visit. He has worked with properties across a wide range of platforms, including Airbnb listings at the higher tiers of the platform.
                      </p>
                      <p className="text-[#6E8C7D] leading-relaxed">
                        He is licensed and insured, operating as a registered real estate photography business in New Jersey.
                      </p>
                      <div className="mt-6 pt-5 border-t border-[#DDE5DB] grid grid-cols-2 gap-3 text-center">
                        {[['500+', 'STR properties photographed'], ['10+', 'Years in NYC real estate']].map(([val, label]) => (
                          <div key={label}>
                            <p className="font-serif text-2xl font-bold text-[#D36D47]">{val}</p>
                            <p className="text-[#88A096] text-xs">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Jun */}
                <AnimatedSection direction="right" delay={0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="relative h-72 bg-[#2C4A3F] flex items-end">
                      {/* Replace with Jun's photo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#88A096] text-xs uppercase tracking-widest font-semibold">Add photo of Jun here</span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2C4A3F]/90 to-transparent p-6">
                        <p className="text-white font-serif text-2xl font-bold">Jun</p>
                        <p className="text-[#DDE5DB] text-sm">Marketing Strategist &amp; Co-founder</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-[#6E8C7D] leading-relaxed mb-4">
                        Jun has spent her career at the intersection of marketing strategy, brand communications, and operations — working with some of the larger names in digital media and advertising before bringing that experience into the classroom.
                      </p>
                      <p className="text-[#6E8C7D] leading-relaxed mb-4">
                        She has been teaching Integrated Marketing at NYU&apos;s graduate school since 2014 — not as theory, but as a working practitioner who has built and scaled marketing programs from the ground up. She teaches the same frameworks she applies.
                      </p>
                      <p className="text-[#6E8C7D] leading-relaxed">
                        What she brings to YiMera is a precise read on how guests make booking decisions — what they see first, what builds or breaks trust, and how every element of a listing is a marketing message whether the host treats it that way or not.
                      </p>
                      <div className="mt-6 pt-5 border-t border-[#DDE5DB] grid grid-cols-2 gap-3 text-center">
                        {[['10+', 'Years teaching at NYU'], ['MS', 'Integrated Marketing']].map(([val, label]) => (
                          <div key={label}>
                            <p className="font-serif text-2xl font-bold text-[#D36D47]">{val}</p>
                            <p className="text-[#88A096] text-xs">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

              </div>
            </div>
          </section>

          {/* ── WHAT WE BELIEVE ────────────────────────────────────────────── */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <AnimatedSection>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-center">How we think about this</h2>
                </AnimatedSection>
                <div className="space-y-8">
                  {[
                    {
                      heading: 'The cover photo is a marketing decision.',
                      body: "Guests don't read your listing first. They scroll thumbnails. The cover photo either earns a click or it doesn't, and most hosts treat it like an afterthought. It's the highest-leverage thing on your listing and the easiest thing to get wrong.",
                    },
                    {
                      heading: 'Your photos should work wherever you list.',
                      body: "Every photo we deliver is licensed for use on any platform you list on — Airbnb, VRBO, Booking.com, your own site, any marketing channel. We retain the copyright as photographers, which is standard practice, but the license we give you is as broad as it needs to be. No restrictions on where or how long.",
                    },
                    {
                      heading: 'Most hosts need honest feedback more than they need more tools.',
                      body: "There are a lot of products promising to optimize your listing. What most hosts actually want is someone who has been inside enough of these properties to look at theirs and say clearly what's working and what isn't. That's harder to find.",
                    },
                    {
                      heading: 'We do what we do and nothing else.',
                      body: 'Photography, visual content, listing reviews, and consulting advisory. We are not a property management company, co-hosts, or a platform. We are photographers and marketing strategists who happen to know short-term rentals well.',
                    },
                  ].map((item, i) => (
                    <AnimatedSection key={item.heading} delay={i * 0.07}>
                      <div className="flex gap-6 items-start">
                        <div className="w-8 h-8 rounded-full bg-[#D36D47] flex items-center justify-center shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">{i + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{item.heading}</h3>
                          <p className="text-[#6E8C7D] leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────────── */}
          <section className="py-16 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center max-w-xl">
              <AnimatedSection>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Want to work together?</h2>
                <p className="text-[#6E8C7D] mb-8">Start with our services page or reach out directly.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/services" className="inline-block border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-3 px-8 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-sm">
                    View Services
                  </Link>
                  <Link href="/contact" className="inline-block bg-[#D36D47] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-md text-sm">
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
