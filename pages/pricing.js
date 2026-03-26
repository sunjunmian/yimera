import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const apartmentPricing = [
  { label: 'Studio / 1 Bedroom', price: '$249', note: 'Up to 1 bath' },
  { label: '2 Bedroom', price: '$329', note: 'Up to 2 baths', featured: true },
  { label: '3 Bedroom', price: '$399', note: 'Up to 2.5 baths' },
  { label: '4+ Bedroom', price: 'Custom', note: 'Contact us for a quote' },
];

const housePricing = [
  { range: 'Under 1,500 sq ft', price: '$399' },
  { range: '1,500 – 2,500 sq ft', price: '$549' },
  { range: '2,500 – 4,000 sq ft', price: '$699' },
  { range: '4,000+ sq ft', price: 'Custom Quote' },
];

const travelFees = [
  { area: 'NYC & NJ Metro (within ~40 mi)', fee: 'Included' },
  { area: 'Hudson Valley', fee: '+$100' },
  { area: 'Catskills / Poconos', fee: '+$175' },
  { area: 'Hamptons / East End LI', fee: '+$200' },
  { area: 'Jersey Shore', fee: '+$75' },
  { area: 'Beyond 100 miles', fee: 'Custom Quote' },
];

const packages = [
  {
    name: 'Essentials',
    tag: 'Photos + Optimize',
    tagline: 'A listing shoot and a fresh set of expert eyes on how it all comes together.',
    includes: [
      'Listing photography (your property rate)',
      'Listing review and written recommendations',
      'Photo curation and sequencing',
      'Licensed for all platforms and marketing channels',
    ],
    price: 'Photos + $179',
    contactUrl: '/contact?services=listing-photos,listing-review,photo-curation',
    featured: false,
  },
  {
    name: 'Deep Dive',
    tag: 'Most popular',
    tagline: 'Everything in Essentials plus an on-site walkthrough so we see the property the way your guests do.',
    includes: [
      'Listing photography (your property rate)',
      'Listing review and written recommendations',
      'Photo curation and sequencing',
      'Property Experience Audit — full on-site walkthrough and written report',
      'Save $49 vs. booking separately',
    ],
    price: 'Photos + $449',
    contactUrl: '/contact?services=listing-photos,listing-review,photo-curation,experience-audit',
    featured: true,
  },
  {
    name: 'Full Immersion',
    tag: 'Most comprehensive',
    tagline: 'The complete picture — photos, optimization, lifestyle content, and an overnight stay to experience the property as a guest would.',
    includes: [
      'Listing photography (your property rate)',
      'Listing review and written recommendations',
      'Photo curation and sequencing',
      'Lifestyle shoot (2 hours)',
      'Full Stay Audit — overnight stay and comprehensive written report',
      'Save ~$150 vs. booking separately',
    ],
    price: 'Photos + $1,199',
    contactUrl: '/contact?services=listing-photos,lifestyle,listing-review,photo-curation,full-stay-audit',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing — YiMera STR Photography & Consulting</title>
        <meta name="description" content="Transparent pricing for Airbnb and short-term rental photography, listing optimization, lifestyle shoots, and host consulting. NYC, NJ, Catskills, Hamptons, Poconos." />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          {/* ── PAGE HEADER ────────────────────────────────────────────────── */}
          <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
                <p className="text-lg md:text-xl text-[#6E8C7D] max-w-2xl mx-auto">
                  Everything is priced upfront. All photography includes a license to use your photos on any listing platform, your own website, and any marketing channel — no restrictions.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── VALUE FRAMING ──────────────────────────────────────────────── */}
          <section className="py-12 md:py-16 border-b border-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        num: '01',
                        heading: 'Shot by someone who knows STR.',
                        body: "Tom has photographed hundreds of short-term rental properties across the northeast. He knows which shots convert and which ones waste frame. That experience shows up in every image.",
                      },
                      {
                        num: '02',
                        heading: 'Edited to a consistent standard.',
                        body: "Every photo is professionally edited to a consistent look across the full set — coherent, polished, and ready to upload.",
                      },
                      {
                        num: '03',
                        heading: 'Yours to use everywhere.',
                        body: "Platform photography programs often come with restrictions on where you can use the photos. Ours don't. Every image is licensed for any platform, your own site, and any marketing channel you use — for as long as you own the property.",
                      },
                    ].map((item) => (
                      <div key={item.heading} className="bg-white rounded-2xl p-6 shadow-sm border border-[#DDE5DB] relative overflow-hidden">
                        <p className="font-serif text-8xl font-bold text-[#DDE5DB] absolute -top-3 -right-1 leading-none select-none">{item.num}</p>
                        <div className="relative">
                          <h3 className="font-bold text-base mb-2 text-[#2C4A3F]">{item.heading}</h3>
                          <p className="text-[#6E8C7D] text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── LISTING PHOTOGRAPHY ────────────────────────────────────────── */}
          <section id="photography" className="py-20 md:py-24">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="mb-10">
                  <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-3">On-Location</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Listing Photography</h2>
                  <p className="text-[#6E8C7D] max-w-2xl">
                    Professionally edited and delivered within 48 hours. Drone, video, and social content available as add-ons. Video editing is billed separately from shoot time.
                  </p>
                </div>
              </AnimatedSection>

              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
                <AnimatedSection direction="left">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Apartments &amp; Condos</h3>
                    <p className="text-[#88A096] text-xs mb-4">Priced by bedroom count</p>
                    <div className="space-y-2">
                      {apartmentPricing.map(tier => (
                        <div
                          key={tier.label}
                          className={`flex items-center justify-between px-5 py-4 rounded-xl ${
                            tier.featured ? 'bg-[#D36D47] shadow-md' : 'bg-white shadow-sm'
                          }`}
                        >
                          <div>
                            <p className={`font-bold text-sm ${tier.featured ? 'text-white' : 'text-[#2C4A3F]'}`}>{tier.label}</p>
                            <p className={`text-xs mt-0.5 ${tier.featured ? 'text-orange-100' : 'text-[#88A096]'}`}>{tier.note}</p>
                          </div>
                          <p className={`font-serif text-2xl font-bold ${tier.featured ? 'text-white' : 'text-[#D36D47]'}`}>{tier.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Houses &amp; Single-Family Homes</h3>
                    <p className="text-[#88A096] text-xs mb-4">Priced by total finished square footage</p>
                    <div className="space-y-2">
                      {housePricing.map(tier => (
                        <div key={tier.range} className="flex items-center justify-between px-5 py-4 bg-white rounded-xl shadow-sm">
                          <p className="font-bold text-sm text-[#2C4A3F]">{tier.range}</p>
                          <p className="font-serif text-2xl font-bold text-[#D36D47]">{tier.price}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#88A096] mt-2">Outdoor spaces and grounds included. Pricing based on finished living area.</p>
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection>
                <div className="max-w-5xl mx-auto mt-6 flex justify-center">
                  <Link href="/contact?services=listing-photos" className="inline-block bg-[#D36D47] text-white font-bold py-3 px-10 rounded-full hover:opacity-90 transition shadow-md text-sm">
                    Book a Shoot &rarr;
                  </Link>
                </div>
              </AnimatedSection>

              {/* Add-Ons */}
              <AnimatedSection>
                <div className="max-w-5xl mx-auto bg-white rounded-2xl p-7 shadow-sm border border-[#DDE5DB] mb-8">
                  <h3 className="font-bold text-base mb-1">Add-Ons</h3>
                  <p className="text-[#88A096] text-xs mb-4">Available for listing photography and lifestyle shoots. Video editing is billed separately from on-site shoot time.</p>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    {[
                      { name: 'Drone Photography', price: 'From $150' },
                      { name: 'Video Walkthrough (shoot)', price: 'From $200' },
                      { name: 'Video Editing', price: 'Quoted separately' },
                      { name: 'Social Media Content', price: 'From $150' },
                      { name: '3D Virtual Tour', price: 'From $350' },
                      { name: 'Floor Plan', price: 'From $150' },
                    ].map(addon => (
                      <div key={addon.name} className="flex justify-between items-center py-2 border-b border-[#F9F6F0]">
                        <span className="font-medium text-[#2C4A3F]">{addon.name}</span>
                        <span className="text-[#D36D47] font-semibold text-xs whitespace-nowrap ml-2">{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Travel Fees */}
              <AnimatedSection>
                <div className="max-w-5xl mx-auto bg-[#DDE5DB] rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:gap-10">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <h3 className="font-serif text-xl font-bold mb-2">Travel Fees</h3>
                      <p className="text-[#6E8C7D] text-sm leading-relaxed">
                        NYC and NJ metro shoots are always included in the base rate. For destinations further out, we charge a travel fee. Consulting and photography can be combined into a single trip when it makes sense.
                      </p>
                    </div>
                    <div className="md:flex-1 grid sm:grid-cols-2 gap-3">
                      {travelFees.map(t => (
                        <div key={t.area} className="flex justify-between items-center bg-white rounded-xl px-4 py-3">
                          <span className="text-[#2C4A3F] text-sm font-medium">{t.area}</span>
                          <span className={`font-bold text-sm ml-3 whitespace-nowrap ${t.fee === 'Included' ? 'text-[#88A096]' : 'text-[#D36D47]'}`}>{t.fee}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ── LIFESTYLE PRICING ──────────────────────────────────────────── */}
          <section id="lifestyle" className="py-16 md:py-20 bg-[#2C4A3F] text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  <div>
                    <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-3">By the Hour</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lifestyle &amp; Social Shoots</h2>
                    <p className="text-[#DDE5DB] leading-relaxed mb-3">
                      Directed sessions for social media, property websites, and seasonal content. Shoots involving people can use your own family or friends — we provide releases. Professional talent is available at an additional cost quoted per shoot.
                    </p>
                    <p className="text-[#DDE5DB] text-sm">
                      Video clips are available during the session. Video editing is billed separately and quoted based on length and deliverables.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection direction="right" delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-end gap-3 mb-6">
                      <p className="font-serif text-6xl font-bold text-white leading-none">$225</p>
                      <p className="text-[#DDE5DB] text-lg pb-1">/ hour</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      {[
                        ['Minimum booking', '2 hours ($450)'],
                        ['Typical session', '2–4 hours'],
                        ['Deliverables', '40–80 edited images'],
                        ['Turnaround', 'Within 72 hours'],
                        ['Video editing', 'Quoted separately'],
                        ['Talent (if needed)', 'Quoted separately'],
                      ].map(([label, val]) => (
                        <div key={label} className="flex justify-between border-b border-white/10 pb-3">
                          <span className="text-[#88A096]">{label}</span>
                          <span className="text-white font-semibold">{val}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[#88A096] text-xs mt-5">Travel fees apply outside the NJ/NYC metro.</p>
                    <div className="mt-6">
                      <Link href="/contact?services=lifestyle" className="inline-block bg-[#D36D47] text-white font-bold py-3 px-10 rounded-full hover:opacity-90 transition shadow-md text-sm">
                        Book a Session &rarr;
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* ── LISTING OPTIMIZATION ───────────────────────────────────────── */}
          <section id="optimization" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="mb-10">
                  <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-3">No Site Visit Required</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Listing Optimization</h2>
                  <p className="text-[#6E8C7D] max-w-xl">Available to hosts anywhere in the country.</p>
                </div>
              </AnimatedSection>
              <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { title: 'Listing Review', price: '$129', url: '/contact?services=listing-review', payUrl: 'https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-a87f9c8935e14895b2961513c3a547201e7417f6fbf4472c8d2c091e20ad6fda59c4d6dae87749c384c8ddc11957e695?locale=EN_US&cta=saveandcopylink', desc: 'Cover photo, sequence, title, and description reviewed. Written report with specific changes.' },
                  { title: 'Photo Curation', price: '$89', url: '/contact?services=photo-curation', payUrl: 'https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-fb093b9781b0407ca04c025941ff6b1536231f25f4c64a048d58838753b7d4d89366c46f301b4b8c92c6e5f573ef8136?locale=EN_US&cta=saveandcopylink', desc: 'Best-of selection from your submitted photos, optimal sequence, and reshoot gap notes.' },
                ].map((svc, i) => (
                  <AnimatedSection key={svc.title} delay={i * 0.1}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#DDE5DB] h-full flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-base">{svc.title}</h3>
                        <p className="font-serif text-2xl font-bold text-[#D36D47]">{svc.price}</p>
                      </div>
                      <p className="text-[#6E8C7D] text-sm leading-relaxed flex-grow">{svc.desc}</p>
                      <div className="mt-4 flex gap-2">
                        <Link href={svc.url} className="flex-1 text-center border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-2 px-3 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-xs">Have Questions</Link>
                        <a href={svc.payUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#D36D47] text-white font-bold py-2 px-3 rounded-full hover:opacity-90 transition text-xs">Pay Now &rarr;</a>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection delay={0.2}>
                <div className="max-w-3xl mx-auto bg-[#DDE5DB] rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="text-[#D36D47] text-xs font-bold uppercase tracking-widest">Bundle</span>
                    <p className="font-bold">Listing Review + Photo Curation</p>
                    <p className="text-[#6E8C7D] text-sm">Save $19 when you order both.</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="font-serif text-3xl font-bold text-[#D36D47]">$199</p>
                      <p className="text-[#88A096] text-xs line-through">$218</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                    <Link href="/contact?services=listing-review,photo-curation" className="text-center border-2 border-[#2C4A3F] text-[#2C4A3F] font-bold py-2 px-4 rounded-full hover:bg-[#2C4A3F] hover:text-white transition text-xs whitespace-nowrap">Have Questions</Link>
                    <a href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-69991e9fcae4479192984b2c9472e54ef6e7a2ad0ec642288697fefdffe9fd998282e0acd0494f39a2014fc057b74c5f?locale=EN_US&cta=saveandcopylink" target="_blank" rel="noopener noreferrer" className="text-center bg-[#D36D47] text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition text-xs whitespace-nowrap">Pay Now &rarr;</a>
                  </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ── CONSULTING PRICING ─────────────────────────────────────────── */}
          <section id="consulting" className="py-16 md:py-24 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="mb-10">
                  <span className="inline-block text-[#D36D47] font-semibold tracking-[0.15em] text-xs uppercase mb-3">Strategy &amp; Advisory</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Host Consulting</h2>
                  <p className="text-[#6E8C7D] max-w-xl">
                    On-site sessions subject to travel fees outside NJ/NYC metro. Book a Property Experience Audit and a listing shoot together and save $50. <Link href="/services#consulting" className="underline hover:text-[#2C4A3F]">See full service details.</Link>
                  </p>
                </div>
              </AnimatedSection>
              <div className="max-w-3xl mx-auto space-y-3">
                {[
                  { name: 'Host Strategy Session', format: 'Remote — 60 min', price: '$129', url: '/contact?services=strategy-session' },
                  { name: 'Property Experience Audit', format: 'On-site walkthrough', price: '$299', url: '/contact?services=experience-audit' },
                  { name: 'Full Stay Audit', format: 'On-site overnight', price: '$699', url: '/contact?services=full-stay-audit' },
                ].map((svc, i) => (
                  <AnimatedSection key={svc.name} delay={i * 0.08}>
                    <div className="bg-white rounded-xl px-6 py-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-[#2C4A3F]">{svc.name}</p>
                        <p className="text-[#88A096] text-xs mt-0.5">{svc.format}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <p className="font-serif text-2xl font-bold text-[#D36D47]">{svc.price}</p>
                        <Link href={svc.url} className="bg-[#2C4A3F] text-white font-bold py-2 px-5 rounded-full hover:opacity-80 transition text-sm whitespace-nowrap">Book</Link>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── PACKAGES ───────────────────────────────────────────────────── */}
          <section id="packages" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Packages</h2>
                  <p className="text-[#6E8C7D] text-lg max-w-xl mx-auto">
                    Photography and advisory bundled for better value. Photography rate is based on your property type and size.
                  </p>
                </div>
              </AnimatedSection>
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                {packages.map((pkg, i) => (
                  <AnimatedSection key={pkg.name} delay={i * 0.1}>
                    <div className={`rounded-2xl p-8 flex flex-col h-full ${pkg.featured ? 'bg-[#D36D47] text-white shadow-xl ring-2 ring-[#D36D47]' : 'bg-white shadow-sm border border-[#DDE5DB]'}`}>
                      <div className="flex-grow">
                        <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-1 ${pkg.featured ? 'text-orange-200' : 'text-[#88A096]'}`}>{pkg.tag}</span>
                        <h3 className={`font-serif text-2xl font-bold mb-2 ${pkg.featured ? 'text-white' : 'text-[#2C4A3F]'}`}>{pkg.name}</h3>
                        <p className={`text-sm mb-5 leading-relaxed ${pkg.featured ? 'text-orange-100' : 'text-[#6E8C7D]'}`}>{pkg.tagline}</p>
                        <ul className="space-y-2">
                          {pkg.includes.map(item => (
                            <li key={item} className="flex items-start text-sm">
                              <CheckIcon className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${pkg.featured ? 'text-orange-200' : 'text-[#88A096]'}`} />
                              <span className={pkg.featured ? 'text-orange-50' : 'text-[#2C4A3F]'}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`border-t pt-5 mt-6 flex items-center justify-between ${pkg.featured ? 'border-orange-400' : 'border-[#DDE5DB]'}`}>
                        <p className={`font-serif text-xl font-bold ${pkg.featured ? 'text-white' : 'text-[#D36D47]'}`}>{pkg.price}</p>
                        <Link href={pkg.contactUrl} className={`font-bold py-2 px-5 rounded-full transition text-sm ${pkg.featured ? 'bg-white text-[#D36D47] hover:bg-orange-50' : 'bg-[#2C4A3F] text-white hover:opacity-80'}`}>Book</Link>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}