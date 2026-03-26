import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const faqs = [
  {
    category: 'Photography',
    questions: [
      {
        q: 'How do you edit the photos?',
        a: "We shoot and edit based on the conditions we find at the property. The goal is accurate color, balanced exposure, and a consistent look across the whole set — the kind of editing that makes a space look exactly as good as it actually is, not better and not worse. We don't use a single approach for every shoot because no two properties have the same light.",
      },
      {
        q: 'What\'s the difference between listing photos and a lifestyle shoot?',
        a: "Listing photos are about the space. They show every room accurately and compellingly — including shots that suggest the atmosphere, like morning light on the coffee setup or the firepit at dusk. But the space itself is the subject. Lifestyle photography is directed and can involve people — someone actually in bed stretching in the morning, marshmallows over the fire, that kind of thing. Lifestyle shoots are priced by the hour and built for social media and direct booking sites.",
      },
      {
        q: 'Do you do video?',
        a: "Yes. Video walkthroughs and short-form social content are available as add-ons to any photography session. Drone footage is also available. One thing to know upfront: on-site shoot time covers capture only. Video editing is quoted and billed separately based on what you need delivered.",
      },
      {
        q: 'Do you do drone photography?',
        a: "Yes, drone is available as an add-on. We'll let you know if there are any airspace restrictions for your location when we confirm the booking — some areas near airports or certain towns have limitations.",
      },
      {
        q: 'How long does a shoot take?',
        a: "A typical apartment or condo listing shoot runs 1.5 to 2.5 hours depending on size. Houses take longer — a 2,500 sq ft home is usually 3 to 4 hours including outdoor spaces. Lifestyle sessions are booked by the hour with a 2-hour minimum. We'll give you a realistic estimate when you book.",
      },
      {
        q: 'How quickly do I get my photos?',
        a: "Listing photos are delivered within 48 hours of the shoot. Lifestyle sessions are delivered within 72 hours. If you need something faster, reach out and we'll see what we can do.",
      },
      {
        q: 'Can I use the photos on multiple platforms?',
        a: "Yes. Every photo we deliver comes with a license to use it to market your property on any listing platform — Airbnb, VRBO, Booking.com, your own website, social media, print, wherever. We retain the copyright as the photographers, but you have full rights to use the images for your property marketing with no restrictions on platform or timeframe.",
      },
    ],
  },
  {
    category: 'Shoots with People',
    questions: [
      {
        q: 'If I want people in my lifestyle photos, do I need to hire models?',
        a: "Not necessarily. You can use family, friends, or yourself — we'll provide the model release forms you need. If you'd prefer professional talent, we can help arrange it and quote the cost separately. It depends on the look you're going for and what the content will be used for.",
      },
    ],
  },
  {
    category: 'Listing Optimization',
    questions: [
      {
        q: 'Do I need a new shoot to use the listing optimization services?',
        a: "No. Listing review and photo curation work with whatever you already have. The listing review looks at your live listing the way a guest would. Photo curation works from your existing photo library to pick the best shots and build the right sequence. Neither requires us to visit the property.",
      },
      {
        q: 'What does the listing review actually cover?',
        a: "We go through your live Airbnb or VRBO listing as a potential guest would see it — thumbnail, cover photo, full photo sequence, title, and description. You get a written report with specific, numbered things to change. Not general advice, actual changes.",
      },
      {
        q: 'Can you do this for a listing that\'s not on Airbnb?',
        a: "Yes. We can review listings on VRBO, Booking.com, or any other platform. The same principles apply regardless of where you're listed.",
      },
    ],
  },
  {
    category: 'Consulting',
    questions: [
      {
        q: 'What happens in a Host Strategy Session?',
        a: "Before the call, we ask you to fill out a short intake form and share your listing URLs and any relevant social or website links. We review everything ahead of time so we come to the call with specific observations already prepared — not a blank slate. The session is 60 minutes of live Q&A and feedback on your specific situation. You get written follow-up notes within 24 hours.",
      },
      {
        q: 'What\'s the Property Experience Audit?',
        a: "We visit the property and walk through it exactly the way a guest would — from the moment you pull up to the driveway through every room. We take notes on what works, what doesn't, and what to fix first. You get a written report with prioritized action items. If you want to book a listing shoot at the same time, we offer $50 off when you combine both services into one visit.",
      },
      {
        q: 'What is the Luxe & Select Pre-Evaluation?',
        a: "Airbnb Luxe and Airbnb Select are the platform's premium tiers, and they have specific eligibility criteria. We've worked with properties at that level and know what they look for. The pre-evaluation is an on-site walkthrough where we assess your property against those standards and give you a written report — what passes, what doesn't, and what to correct before you apply. We are not affiliated with Airbnb and cannot guarantee any outcome, but we can tell you clearly what you're walking into.",
      },
    ],
  },
  {
    category: 'Booking & Logistics',
    questions: [
      {
        q: 'How do I prepare for a shoot?',
        a: (<>The short version: prepare as if a guest is checking in that day. We have a full prep guide that covers everything in detail. <Link href="/prep" className="text-[#D36D47] underline hover:text-[#2C4A3F]">Read the shoot prep guide &rarr;</Link></>),
      },
      {
        q: 'What areas do you serve?',
        a: "NYC and NJ metro shoots are covered in the base rate. We also regularly shoot in the Hudson Valley, Catskills, Poconos, Hamptons, and along the Jersey Shore, with travel fees applied for those areas. Locations beyond 100 miles are available with a custom travel quote — reach out and we'll work it out.",
      },
      {
        q: 'What if I need to reschedule?',
        a: "We know things come up — a property that isn't ready, a guest who extends their stay, weather. Give us as much notice as you can and we'll work with you. Specific cancellation terms are included in the booking confirmation.",
      },
      {
        q: 'Do you work with hosts who are just getting started?',
        a: "Yes. Some of our most useful work is with hosts who haven't launched yet. If you're setting up a new listing, combining a shoot with a listing review or a strategy session is a good way to start strong instead of fixing things after the fact.",
      },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#DDE5DB] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex justify-between items-start gap-4"
      >
        <span className="font-semibold text-[#2C4A3F] leading-snug">{question}</span>
        <span className={`text-[#D36D47] text-xl font-bold shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pb-5 text-[#6E8C7D] leading-relaxed text-sm pr-8">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ — YiMera STR Photography & Consulting</title>
        <meta name="description" content="Common questions about YiMera's Airbnb and short-term rental photography, listing optimization, and host consulting services." />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">FAQ</h1>
                <p className="text-lg text-[#6E8C7D] max-w-xl mx-auto">
                  Answers to the questions we hear most. If yours isn&apos;t here, just ask.
                </p>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-12">
                {faqs.map((section, i) => (
                  <AnimatedSection key={section.category} delay={i * 0.05}>
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-1 text-[#D36D47]">{section.category}</h2>
                      <div className="bg-white rounded-2xl shadow-sm border border-[#DDE5DB] px-6 divide-y divide-[#DDE5DB]">
                        {section.questions.map(({ q, a }) => (
                          <FAQItem key={q} question={q} answer={a} />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.2}>
                <div className="max-w-3xl mx-auto mt-14 bg-[#2C4A3F] text-white rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div>
                    <p className="font-bold text-lg mb-1">Still have a question?</p>
                    <p className="text-[#DDE5DB] text-sm">We&apos;re easy to reach. Shoot us a message and we&apos;ll get back to you within one business day.</p>
                  </div>
                  <Link href="/contact" className="shrink-0 bg-[#D36D47] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition whitespace-nowrap text-sm">
                    Ask Us
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
