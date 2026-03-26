import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const sections = [
  {
    title: 'The Right Mindset',
    intro: 'The simplest way to think about this: prepare the property as if a guest is checking in today. Not "pretty good" — actually ready. If you wouldn\'t want a guest to see it, the camera will find it.',
    items: [],
  },
  {
    title: 'Cleaning',
    intro: null,
    items: [
      'Have the property professionally cleaned before the shoot',
      'Vacuum all floors including under furniture edges — the camera catches dust in corners',
      'Vacuum vent and return covers — they stand out in wide shots',
      'Clean all mirrors, windows, and glass surfaces — streaks show up in photos',
      'Wipe down all countertops, appliances, and surfaces',
      'Clean stovetop, oven window, and microwave inside',
      'Clean and polish faucets and fixtures',
      'Empty and clean all trash cans — replace with fresh bags, no bag showing above the rim',
      'Take out all trash',
    ],
  },
  {
    title: 'Linens & Towels',
    intro: null,
    items: [
      'Wash all bed linens — don\'t overstuff the dryer, and pull them out as soon as the cycle ends so they don\'t set wrinkles',
      'Make all beds neatly — smooth while the sheets are still warm from the dryer',
      'Wash and fold all towels',
      'Stack or display towels neatly in bathrooms — folded consistently',
      'Fold and store extra bedding neatly (in a closet or at the foot of the bed if it\'s part of the aesthetic)',
    ],
  },
  {
    title: 'Kitchen',
    intro: null,
    items: [
      'All dishes put away — nothing on drying racks',
      'Silverware and kitchen drawers organized',
      'Pots and pans cleaned and stored neatly',
      'Coffee and drink supplies stocked and arranged (guests should be able to picture using them)',
      'Counters completely clear except for intentional decorative items',
      'New sponge at the sink',
      'Dish soap neatly placed, no old bottles',
    ],
  },
  {
    title: 'Bathrooms',
    intro: null,
    items: [
      'Fresh roll of toilet paper on the holder — not a partial roll',
      'Paper towels restocked',
      'Toiletries organized or stored out of frame',
      'No personal care items visible (razors, medication, etc.)',
      'Clean toilet, inside and out',
      'Trash can emptied with a fresh bag not showing',
    ],
  },
  {
    title: 'Bedrooms & Closets',
    intro: null,
    items: [
      'All personal items removed',
      'Nightstands clear of personal items — keep only intentional decor',
      'No visible charger cables or electronics',
      'Matching hangers in each closet if possible',
      'Closet interiors tidy — we may open them for staging shots',
      'Remote controls placed neatly, not just left wherever they landed',
    ],
  },
  {
    title: 'Lighting & Electrical',
    intro: null,
    items: [
      'Every light bulb working — walk the property the night before and test them all',
      'Replace any bulbs that are out, burned, or flickering',
      'Check that all bulbs match in temperature within each room where possible — mixing warm and cool bulbs in the same space creates color problems in photos',
      'Light switch plates and outlet covers in good condition — no missing or cracked covers',
    ],
  },
  {
    title: 'Staging & Details',
    intro: null,
    items: [
      'No personal items anywhere in the property',
      'TV screens wiped clean — they reflect light and catch dust',
      'No visible power strips, extension cords, or cable clutter',
      'Fan blades dusted',
      'Books, decorative objects, and throw pillows arranged intentionally',
      'Open all blinds and curtains fully — let in as much natural light as possible',
      'If there are plants, water them beforehand — wilting leaves show up clearly',
    ],
  },
  {
    title: 'Outdoor Spaces',
    intro: null,
    items: [
      'Sweep patios, decks, and entryways',
      'Move cars out of the driveway and off the street in front of the property if possible',
      'Coil or store hoses neatly — or get them out of frame entirely',
      'Pool or hot tub clean and cover removed',
      'Outdoor furniture arranged as guests would use it',
      'Grill cleaned and closed',
      'Trash and recycling bins moved out of frame',
      'Lawn mowed and edges trimmed if a shoot is coming up — overgrown grass reads as neglect in photos',
    ],
  },
  {
    title: 'A Note on Candles & Scents',
    intro: 'No open flames during the shoot — candles look great in photos but are a hazard around equipment. If you want to use candles as props, we can style unlit ones. Skip heavy air fresheners on shoot day too.',
    items: [],
  },
];

export default function Prep() {
  return (
    <>
      <Head>
        <title>Shoot Prep Guide — How to Prepare Your Airbnb for a Photo Shoot | YiMera</title>
        <meta name="description" content="A complete checklist for preparing your Airbnb or short-term rental property for a professional photo shoot. From cleaning to staging, everything you need to know." />
        <style>{`
          @media print {
            header, footer, nav { display: none !important; }
            * { opacity: 1 !important; transform: none !important; visibility: visible !important; }
            body { background: white !important; color: #111 !important; }
            main { padding: 0 !important; }
            section { padding: 8px 0 !important; background: white !important; }
            .container { max-width: 100% !important; padding: 0 20px !important; }
            h1 { font-size: 22pt !important; margin-bottom: 4px !important; color: #111 !important; }
            h2 { font-size: 13pt !important; margin: 16px 0 6px !important; color: #111 !important; page-break-after: avoid; }
            p, li, span { font-size: 10pt !important; color: #333 !important; line-height: 1.5 !important; }
            div[class*=rounded] { border: 1px solid #ddd !important; margin-bottom: 12px !important; padding: 12px !important; page-break-inside: avoid; box-shadow: none !important; background: white !important; }
            div[class*=bg] { background: white !important; }
            div[class*=shadow] { box-shadow: none !important; }
            ul { list-style: none !important; padding: 0 !important; }
            li { display: flex !important; gap: 8px !important; margin-bottom: 6px !important; align-items: flex-start !important; }
            .print-hidden { display: none !important; }
          }
        `}</style>
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection>
                <span className="inline-block text-[#D36D47] font-semibold tracking-[0.18em] text-xs uppercase mb-4">Before the Shoot</span>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Shoot Prep Guide</h1>
                <p className="text-lg text-[#6E8C7D] max-w-xl mx-auto">
                  How to get your property ready so we can get the most out of every shot.
                </p>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">

                {/* Print button */}
                <div className="flex justify-end mb-8 print-hidden">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 text-sm text-[#6E8C7D] border border-[#DDE5DB] rounded-full px-5 py-2 hover:border-[#2C4A3F] hover:text-[#2C4A3F] transition bg-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print this guide
                  </button>
                </div>

                <div className="space-y-10">
                  {sections.map((section, i) => (
                    <AnimatedSection key={section.title} delay={i * 0.04}>
                      <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#DDE5DB]">
                        <h2 className="font-serif text-2xl font-bold mb-3 text-[#2C4A3F]">{section.title}</h2>
                        {section.intro && (
                          <p className="text-[#6E8C7D] leading-relaxed mb-4 text-sm">{section.intro}</p>
                        )}
                        {section.items.length > 0 && (
                          <ul className="space-y-2.5">
                            {section.items.map(item => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded border-2 border-[#DDE5DB] shrink-0 mt-0.5 print:border-gray-400" />
                                <span className="text-[#2C4A3F] text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={0.2}>
                  <div className="mt-12 bg-[#2C4A3F] text-white rounded-2xl px-8 py-7 print-hidden">
                    <h3 className="font-bold text-lg mb-2">Questions before the shoot?</h3>
                    <p className="text-[#DDE5DB] text-sm mb-4 leading-relaxed">
                      If you&apos;re not sure about something specific to your property, reach out. We&apos;d rather answer a question beforehand than spend shoot time on things that could have been handled before we arrived.
                    </p>
                    <Link href="/contact" className="inline-block bg-[#D36D47] text-white font-bold py-2.5 px-7 rounded-full hover:opacity-90 transition text-sm">
                      Get in Touch
                    </Link>
                  </div>
                </AnimatedSection>

              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
