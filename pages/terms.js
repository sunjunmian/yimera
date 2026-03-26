import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  const lastUpdated = 'March 2026';

  return (
    <>
      <Head>
        <title>Terms & Conditions — YiMera</title>
        <meta name="description" content="Terms and conditions for YiMera photography and consulting services." />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="bg-[#F9F6F0] text-[#2C4A3F] overflow-x-hidden">
        <Header />
        <main>
          <section className="pt-20 pb-14 md:pt-28 md:pb-16 bg-[#DDE5DB]">
            <div className="container mx-auto px-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Terms &amp; Conditions</h1>
              <p className="text-[#88A096] text-sm">Last updated: {lastUpdated}</p>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose-custom space-y-10 text-[#2C4A3F]">

                <div>
                  <p className="text-[#6E8C7D] leading-relaxed">
                    These Terms &amp; Conditions govern all services provided by YiMera, a DBA operating under New Jersey law. By booking a service or submitting a contact form, you agree to these terms. Please read them before booking.
                  </p>
                </div>

                {[
                  {
                    title: '1. Services',
                    body: `YiMera provides short-term rental photography, lifestyle and social media photography, listing optimization (listing review and photo curation), and host consulting services. The specific scope of each engagement is confirmed in writing at the time of booking.`,
                  },
                  {
                    title: '2. Payment',
                    body: `Full payment is required upfront to confirm any booking. A payment link will be sent with your booking confirmation. We accept major credit cards. Your booking is not confirmed until payment is received. Prices are as listed on yimera.com at the time of booking and are subject to change without notice for future bookings.`,
                  },
                  {
                    title: '3. Travel Fees',
                    body: `Photography and on-site consulting services outside the NYC/NJ metro area are subject to travel fees as listed on our pricing page. Travel fees are confirmed at booking and included in the total amount due. Destinations beyond 100 miles are quoted individually and must be agreed upon in writing before booking is confirmed.`,
                  },
                  {
                    title: '4. Cancellations & Rescheduling',
                    body: `Cancellations made more than 24 hours before the scheduled appointment will receive a full refund. Cancellations made within 24 hours of the scheduled appointment are non-refundable. If you need to reschedule, please contact us as soon as possible. We will make every effort to accommodate rescheduling requests made with reasonable notice, subject to availability. YiMera reserves the right to reschedule any appointment due to weather, equipment failure, or other circumstances beyond our control, in which case a full refund or reschedule will be offered.`,
                  },
                  {
                    title: '5. Photography License',
                    body: `YiMera retains copyright ownership of all photographs and video content produced during any engagement. Upon full payment, clients receive a non-exclusive, perpetual, royalty-free license to use the delivered images and video for the purpose of marketing their short-term rental property. This includes use on any listing platform (Airbnb, VRBO, Booking.com, and others), the client's own website, and social media channels. This license does not include the right to sell, sublicense, or transfer the images to third parties, or to use the images for purposes unrelated to the marketing of the subject property. YiMera reserves the right to use images in its own portfolio, marketing materials, and website unless the client requests otherwise in writing at the time of booking.`,
                  },
                  {
                    title: '6. Lifestyle Shoots & Model Releases',
                    body: `For lifestyle and social media shoots involving people, all participants must sign a model release before the shoot begins. YiMera will provide release forms. If the client arranges their own participants (family, friends, or themselves), it is the client's responsibility to ensure all participants sign the release prior to shooting. If professional talent is required, talent fees are separate from session fees and will be agreed upon in writing before booking. YiMera is not responsible for the conduct or performance of talent arranged by the client.`,
                  },
                  {
                    title: '7. Video',
                    body: `On-site shoot time for video covers capture only. Video editing is a separate service and is quoted and billed independently based on the length and deliverables requested. The scope of video editing must be agreed upon in writing before work begins.`,
                  },
                  {
                    title: '8. Property Access & Preparation',
                    body: `The client is responsible for ensuring the property is accessible and prepared at the scheduled shoot time. YiMera is not responsible for delays or reduced shoot quality resulting from the property not being ready. We recommend reviewing our shoot prep guide at yimera.com/prep before every session. If significant preparation is required after our arrival that reduces the available shoot time, no refund or rate reduction will be issued.`,
                  },
                  {
                    title: '9. Listing Optimization & Consulting',
                    body: `Listing review, photo curation, and consulting services represent the professional opinion of YiMera based on our experience with short-term rental properties. Results are not guaranteed. We make no representations about the effect of our recommendations on booking rates, revenue, or platform rankings. For Luxe and Select pre-evaluations, YiMera is not affiliated with Airbnb and cannot guarantee any platform eligibility outcome.`,
                  },
                  {
                    title: '10. Limitation of Liability',
                    body: `YiMera's total liability for any claim arising from our services is limited to the amount paid for the specific service in question. We are not liable for any indirect, incidental, or consequential damages, including loss of bookings, revenue, or business opportunity.`,
                  },
                  {
                    title: '11. Governing Law',
                    body: `These terms are governed by the laws of the State of New Jersey. Any disputes arising from these terms or our services will be subject to the jurisdiction of the courts of New Jersey.`,
                  },
                  {
                    title: '12. Changes to These Terms',
                    body: `YiMera reserves the right to update these terms at any time. Changes take effect upon posting to yimera.com. Your continued use of our services after changes are posted constitutes acceptance of the updated terms.`,
                  },
                  {
                    title: '13. Contact',
                    body: `Questions about these terms? Email us at hello@yimera.com.`,
                  },
                ].map(section => (
                  <div key={section.title}>
                    <h2 className="font-serif text-xl font-bold mb-3">{section.title}</h2>
                    <p className="text-[#6E8C7D] leading-relaxed text-sm">{section.body}</p>
                  </div>
                ))}

                <div className="border-t border-[#DDE5DB] pt-8">
                  <p className="text-[#88A096] text-xs">
                    See also: <Link href="/privacy" className="underline hover:text-[#2C4A3F]">Privacy Policy</Link>
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
