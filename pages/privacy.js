import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  const lastUpdated = 'March 2026';

  return (
    <>
      <Head>
        <title>Privacy Policy — YiMera</title>
        <meta name="description" content="Privacy policy for YiMera photography and consulting services." />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>
          <section className="pt-20 pb-14 md:pt-28 md:pb-16 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
              <p className="text-[#88A096] text-sm">Last updated: {lastUpdated}</p>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-10 text-[#2C4A3F]">

                <div>
                  <p className="text-[#6E8C7D] leading-relaxed">
                    This Privacy Policy describes how YiMera (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and handles information when you use our website or contact us about our services. We keep this simple because our data practices are simple.
                  </p>
                </div>

                {[
                  {
                    title: '1. Information We Collect',
                    body: null,
                    custom: (
                      <div className="space-y-4 text-sm text-[#6E8C7D] leading-relaxed">
                        <p><strong className="text-[#2C4A3F]">Information you provide directly:</strong> When you submit our contact form, we collect the information you enter — your name, email address, phone number (if provided), property location, listing URLs, social media handles, and any notes you include. This is the information you knowingly give us to help us respond to your inquiry.</p>
                        <p><strong className="text-[#2C4A3F]">Information collected automatically:</strong> We use Google Analytics to understand how visitors use our website. Google Analytics collects data such as pages visited, time spent on pages, general geographic location, and browser type. This data is aggregated and does not identify you personally. You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#2C4A3F]">Google Analytics Opt-out Browser Add-on</a>.</p>
                      </div>
                    ),
                  },
                  {
                    title: '2. How We Use Your Information',
                    body: null,
                    custom: (
                      <ul className="space-y-2 text-sm text-[#6E8C7D] leading-relaxed list-disc list-inside">
                        {[
                          'To respond to your inquiry and communicate about our services',
                          'To prepare for a booked shoot or consulting session',
                          'To send booking confirmations and payment information',
                          'To follow up if we have questions about your inquiry',
                          'To understand how our website is being used (via Google Analytics)',
                        ].map(item => <li key={item}>{item}</li>)}
                      </ul>
                    ),
                  },
                  {
                    title: '3. How We Share Your Information',
                    body: `We do not sell your personal information. We do not share your information with third parties for marketing purposes. Your form data is transmitted through Resend, an email delivery service, solely for the purpose of delivering your message to our inbox. Resend processes data on our behalf and is not authorized to use your information for any other purpose. We may share information if required by law or to protect our legal rights.`,
                  },
                  {
                    title: '4. Data Retention',
                    body: `We retain inquiry information for as long as necessary to respond to your inquiry and fulfill any booked services. If you become a client, we retain relevant booking and project information for our business records. You can request deletion of your information at any time by emailing hello@yimera.com.`,
                  },
                  {
                    title: '5. Cookies',
                    body: `Our website uses cookies in connection with Google Analytics to track site usage. These cookies do not store personally identifiable information. You can control cookies through your browser settings or use the Google Analytics opt-out tool linked above.`,
                  },
                  {
                    title: '6. Third-Party Links',
                    body: `Our website may contain links to third-party platforms such as Airbnb, VRBO, Instagram, and others. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.`,
                  },
                  {
                    title: '7. Security',
                    body: `We take reasonable measures to protect the information you share with us. Form submissions are transmitted over encrypted connections (HTTPS). No method of internet transmission is 100% secure, and we cannot guarantee absolute security.`,
                  },
                  {
                    title: '8. Children\'s Privacy',
                    body: `Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us and we will delete it.`,
                  },
                  {
                    title: '9. Changes to This Policy',
                    body: `We may update this policy from time to time. Changes will be posted on this page with an updated date. Your continued use of our website after changes are posted means you accept the updated policy.`,
                  },
                  {
                    title: '10. Contact',
                    body: `Questions about this policy or how we handle your data? Email us at hello@yimera.com.`,
                  },
                ].map(section => (
                  <div key={section.title}>
                    <h2 className="font-serif text-xl font-bold mb-3">{section.title}</h2>
                    {section.custom ?? <p className="text-[#6E8C7D] leading-relaxed text-sm">{section.body}</p>}
                  </div>
                ))}

                <div className="border-t border-[#DDE5DB] pt-8">
                  <p className="text-[#88A096] text-xs">
                    See also: <Link href="/terms" className="underline hover:text-[#2C4A3F]">Terms &amp; Conditions</Link>
                  </p>
                </div>

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
