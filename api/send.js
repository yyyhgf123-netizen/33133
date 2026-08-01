export default async function handler(req, res) {
  // CORS - allow from your Shopify store
  res.setHeader('Access-Control-Allow-Origin', 'https://solisita.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Solisita <support@solisita.com>',
        to: email,
        subject: 'You’re In! Here’s Your 10% Off',
        html: `<div style="max-width:480px;margin:0 auto;padding:40px 24px;font-family:Arial,Helvetica,sans-serif;text-align:center;">
<p style="font-size:14px;color:#666;margin:0 0 8px;">SOLISITA</p>
<h1 style="font-size:28px;color:#B14A2A;margin:0 0 16px;font-weight:700;">YOU’RE IN!</h1>
<p style="font-size:16px;color:#333;margin:0 0 24px;">Thanks for joining. Use code <strong>SOLISITA10</strong> at checkout for 10% off your first order.</p>
<a href="https://solisita.com" style="display:inline-block;background:#B14A2A;color:#fff;text-decoration:none;padding:12px 32px;font-size:14px;font-weight:500;">SHOP NOW</a>
<p style="font-size:12px;color:#999;margin:32px 0 0;">Waterproof &amp; Tarnish-Resistant Jewellery</p>
</div>`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Resend API error' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
