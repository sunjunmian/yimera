import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const inputClass = "w-full border border-[#DDE5DB] rounded-xl px-4 py-3 text-[#2C4A3F] bg-white focus:outline-none focus:ring-2 focus:ring-[#D36D47] focus:border-transparent text-sm placeholder-[#88A096]";
const labelClass = "block text-sm font-semibold text-[#2C4A3F] mb-1.5";

const SERVICES = [
  { id: 'listing-photos', label: 'Listing Photography' },
  { id: 'lifestyle', label: 'Lifestyle / Social Shoot' },
  { id: 'drone', label: 'Drone Photography' },
  { id: 'video', label: 'Video Walkthrough' },
  { id: 'listing-review', label: 'Listing Review' },
  { id: 'photo-curation', label: 'Photo Curation' },
  { id: 'strategy-session', label: 'Host Strategy Session' },
  { id: 'experience-audit', label: 'Property Experience Audit' },
  { id: 'full-stay-audit', label: 'Full Stay Audit' },
  { id: 'not-sure', label: "Not sure yet — I have questions" },
];

export default function Contact() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('idle');
  const router = useRouter();

  useEffect(() => {
    if (router.query.services) {
      const preselected = router.query.services.split(',').filter(s =>
        SERVICES.some(svc => svc.id === s)
      );
      if (preselected.length > 0) setServices(preselected);
    }
  }, [router.query.services]);

  const set = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const get = (field, fallback = '') => formData[field] ?? fallback;

  const toggleService = (id) => {
    setServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (services.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services, ...formData }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact & Book — YiMera STR Photography</title>
        <meta name="description" content="Book a shoot, order a listing review, or schedule a consulting session with YiMera. Airbnb and short-term rental photography across NYC, NJ, the Catskills, Poconos, and Hamptons." />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>

          <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-[#DDE5DB]">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Get in Touch</h1>
                <p className="text-lg text-[#6E8C7D] max-w-xl mx-auto">
                  Tell us what you need and we&apos;ll take it from there. We get back to everyone within one business day.
                </p>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">

                {status === 'success' ? (
                  <AnimatedSection>
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#DDE5DB] text-center">
                      <div className="w-16 h-16 rounded-full bg-[#DDE5DB] flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-[#2C4A3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="font-serif text-3xl font-bold mb-3">Got it — thanks.</h2>
                      <p className="text-[#6E8C7D] leading-relaxed max-w-sm mx-auto">
                        We&apos;ll look this over and get back to you within one business day. If you have a shoot coming up, take a look at our{' '}
                        <Link href="/prep" className="text-[#D36D47] underline hover:text-[#2C4A3F]">shoot prep guide</Link>{' '}
                        in the meantime.
                      </p>
                    </div>
                  </AnimatedSection>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Services */}
                    <AnimatedSection>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDE5DB]">
                        <h2 className="font-serif text-2xl font-bold mb-2">What are you interested in?</h2>
                        <p className="text-[#6E8C7D] text-sm mb-6">Check everything that applies — you can select more than one.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {SERVICES.map(svc => (
                            <label
                              key={svc.id}
                              className={`flex items-center gap-3 cursor-pointer p-3.5 rounded-xl border-2 transition-all ${
                                services.includes(svc.id)
                                  ? 'border-[#D36D47] bg-[#D36D47]/5'
                                  : 'border-[#DDE5DB] hover:border-[#2C4A3F]/30'
                              }`}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 accent-[#D36D47] shrink-0"
                                checked={services.includes(svc.id)}
                                onChange={() => toggleService(svc.id)}
                              />
                              <span className={`text-sm font-medium ${services.includes(svc.id) ? 'text-[#D36D47]' : 'text-[#2C4A3F]'}`}>
                                {svc.label}
                              </span>
                            </label>
                          ))}
                        </div>
                        {/* Audit + shoot discount callout */}
                        {services.includes('experience-audit') && services.includes('listing-photos') && (
                          <div className="mt-4 bg-[#DDE5DB] rounded-xl px-4 py-3 text-sm text-[#2C4A3F]">
                            <strong>Nice — you qualify for the $50 bundle discount</strong> when you book a Property Experience Audit and a listing shoot together.
                          </div>
                        )}
                      </div>
                    </AnimatedSection>

                    {/* Contact info */}
                    <AnimatedSection delay={0.05}>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDE5DB] space-y-5">
                        <h2 className="font-serif text-2xl font-bold mb-1">Your info</h2>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Name *</label>
                            <input required className={inputClass} placeholder="First and last" value={get('name')} onChange={e => set('name', e.target.value)} />
                          </div>
                          <div>
                            <label className={labelClass}>Email *</label>
                            <input required type="email" className={inputClass} placeholder="you@example.com" value={get('email')} onChange={e => set('email', e.target.value)} />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Phone</label>
                          <input type="tel" className={inputClass} placeholder="Optional but helpful for scheduling" value={get('phone')} onChange={e => set('phone', e.target.value)} />
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Property info */}
                    <AnimatedSection delay={0.08}>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDE5DB] space-y-5">
                        <h2 className="font-serif text-2xl font-bold mb-1">About the property</h2>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Property type</label>
                            <select className={inputClass} value={get('propertyType')} onChange={e => set('propertyType', e.target.value)}>
                              <option value="">Select one</option>
                              <option>Apartment / Condo</option>
                              <option>House / Single-family</option>
                              <option>Townhouse</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>City / Town and State</label>
                            <input className={inputClass} placeholder="e.g. Woodstock, NY" value={get('location')} onChange={e => set('location', e.target.value)} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Bedrooms</label>
                            <select className={inputClass} value={get('bedrooms')} onChange={e => set('bedrooms', e.target.value)}>
                              <option value="">Select</option>
                              <option>Studio</option>
                              <option>1 bedroom</option>
                              <option>2 bedrooms</option>
                              <option>3 bedrooms</option>
                              <option>4+ bedrooms</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Sq footage (houses)</label>
                            <input className={inputClass} placeholder="e.g. 2,200 sq ft" value={get('sqft')} onChange={e => set('sqft', e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Links */}
                    <AnimatedSection delay={0.1}>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDE5DB] space-y-5">
                        <div>
                          <h2 className="font-serif text-2xl font-bold mb-1">Your listing &amp; links</h2>
                          <p className="text-[#6E8C7D] text-sm">Share whatever you have — even if you&apos;re just getting started, share what exists.</p>
                        </div>

                        <div>
                          <label className={labelClass}>Airbnb listing URL</label>
                          <input type="url" className={inputClass} placeholder="https://airbnb.com/rooms/..." value={get('airbnbUrl')} onChange={e => set('airbnbUrl', e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>VRBO listing URL</label>
                          <input type="url" className={inputClass} placeholder="https://vrbo.com/..." value={get('vrboUrl')} onChange={e => set('vrboUrl', e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Other listing platforms</label>
                          <input className={inputClass} placeholder="Booking.com, Furnished Finder, etc." value={get('otherPlatforms')} onChange={e => set('otherPlatforms', e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Your own website</label>
                          <input type="url" className={inputClass} placeholder="https://..." value={get('website')} onChange={e => set('website', e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Social media handles</label>
                          <input className={inputClass} placeholder="@yourhandle — Instagram, TikTok, etc." value={get('social')} onChange={e => set('social', e.target.value)} />
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Scheduling & notes */}
                    <AnimatedSection delay={0.12}>
                      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDE5DB] space-y-5">
                        <h2 className="font-serif text-2xl font-bold mb-1">Anything else</h2>

                        <div>
                          <label className={labelClass}>Preferred dates or timeframe</label>
                          <input className={inputClass} placeholder="e.g. any weekday in April, ASAP, flexible" value={get('dates')} onChange={e => set('dates', e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Tell us what you&apos;re working on or what&apos;s not working</label>
                          <textarea
                            className={inputClass}
                            rows={4}
                            placeholder="New listing launching, existing listing that isn't booking, property you want to take to Luxe level — whatever the situation is."
                            value={get('notes')}
                            onChange={e => set('notes', e.target.value)}
                          />
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Payment notice */}
                    <AnimatedSection delay={0.13}>
                      <div className="bg-[#DDE5DB] rounded-xl px-6 py-4 text-sm text-[#6E8C7D]">
                        <strong className="text-[#2C4A3F]">Payment:</strong> Full payment is due upfront to confirm your booking. We&apos;ll send a payment link with your booking confirmation. Cancellations with more than 24 hours notice receive a full refund. See our{' '}
                        <Link href="/terms" className="underline hover:text-[#2C4A3F]">Terms &amp; Conditions</Link>{' '}
                        for full details.
                      </div>
                    </AnimatedSection>

                    {/* Submit */}
                    <AnimatedSection delay={0.15}>
                      <div className="flex flex-col items-start gap-3">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="bg-[#D36D47] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-base"
                        >
                          {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'error' && (
                          <p className="text-red-500 text-sm">
                            Something went wrong. Email us directly at{' '}
                            <a href="mailto:hello@yimera.com" className="underline">hello@yimera.com</a>
                          </p>
                        )}
                        <p className="text-[#88A096] text-xs">
                          We get back to everyone within one business day. By submitting this form you agree to our{' '}
                          <Link href="/privacy" className="underline hover:text-[#2C4A3F]">Privacy Policy</Link>.
                        </p>
                      </div>
                    </AnimatedSection>

                  </form>
                )}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
