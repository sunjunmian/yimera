// pages/api/contact.js
// Setup:
// 1. npm install resend
// 2. In Vercel environment variables, add:
//    RESEND_API_KEY       — from resend.com (free tier is fine)
//    RESEND_FROM_EMAIL    — a verified sender on your domain, e.g. noreply@yimera.com
//    RESEND_TO_EMAIL      — where inquiries should land, e.g. hello@yimera.com

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(data) {
  const {
    services = [],
    name, email, phone,
    propertyType, location, bedrooms, sqft,
    airbnbUrl, vrboUrl, otherPlatforms, website, social,
    dates, notes,
  } = data;

  const row = (label, value) => value
    ? `<tr>
        <td style="padding:7px 12px;background:#f5f5f5;font-weight:600;white-space:nowrap;vertical-align:top;font-size:13px;width:160px;">${label}</td>
        <td style="padding:7px 12px;font-size:13px;">${value}</td>
       </tr>`
    : '';

  return `
    <div style="font-family:sans-serif;max-width:620px;margin:0 auto;color:#2C4A3F;">
      <div style="background:#2C4A3F;padding:20px 24px;">
        <h1 style="color:#fff;font-size:20px;margin:0;">YiMera — New Inquiry</h1>
        <p style="color:#DDE5DB;font-size:13px;margin:6px 0 0;">${name} &lt;${email}&gt;</p>
      </div>
      <div style="padding:24px;">

        <h2 style="font-size:15px;margin:0 0 8px;">Services requested</h2>
        <p style="margin:0 0 20px;font-size:13px;color:#D36D47;font-weight:600;">${services.join(', ') || 'Not specified'}</p>

        <h2 style="font-size:15px;margin:0 0 8px;">Contact</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row('Name', name)}
          ${row('Email', `<a href="mailto:${email}">${email}</a>`)}
          ${row('Phone', phone)}
        </table>

        <h2 style="font-size:15px;margin:0 0 8px;">Property</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row('Type', propertyType)}
          ${row('Location', location)}
          ${row('Bedrooms', bedrooms)}
          ${row('Sq footage', sqft)}
        </table>

        <h2 style="font-size:15px;margin:0 0 8px;">Links</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row('Airbnb', airbnbUrl ? `<a href="${airbnbUrl}">${airbnbUrl}</a>` : '')}
          ${row('VRBO', vrboUrl ? `<a href="${vrboUrl}">${vrboUrl}</a>` : '')}
          ${row('Other platforms', otherPlatforms)}
          ${row('Website', website ? `<a href="${website}">${website}</a>` : '')}
          ${row('Social', social)}
        </table>

        <h2 style="font-size:15px;margin:0 0 8px;">Scheduling &amp; Notes</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row('Preferred dates', dates)}
          ${row('Notes', notes ? notes.replace(/\n/g, '<br>') : '')}
        </table>

      </div>
      <div style="background:#f9f6f0;padding:14px 24px;font-size:11px;color:#888;">
        Submitted via yimera.com/contact
      </div>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, services } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const serviceList = Array.isArray(services) ? services.join(', ') : services || 'Not specified';
  const subject = `[YiMera] ${serviceList} — ${name}`;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'YiMera <noreply@yimera.com>',
      to: process.env.RESEND_TO_EMAIL || 'hello@yimera.com',
      replyTo: email,
      subject,
      html: buildEmailHtml(req.body),
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send' });
  }
}
