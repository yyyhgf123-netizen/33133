export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://solisita.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body;
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'Invalid email' });

  function card(name, img, url) {
    return `<div class="w50" style="display:table-cell;vertical-align:top;width:50%;"><table border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;"><tr><td style="padding:10px;"><table border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;background-color:#FBF7F4;"><tr><td align="center" style="padding:0;position:relative;"><a href="https://solisita.com${url}" target="_blank" style="display:block;"><img class="wf" alt="${name}" src="${img}?width=300&height=330&crop=center" style="display:block;height:auto;margin:0 auto;max-width:100%;padding:0;" width="300" height="auto"></a><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;"><span style="color:#FFFFFF;font-family:\'Cormorant\',Georgia,serif;font-size:50px;font-style:italic;font-weight:400;text-shadow:0 2px 8px rgba(0,0,0,0.5);">${name}</span></div></td></tr></table></td></tr></table></div>`;
  }

  const cats = [
    ['Necklaces','https://solisita.com/cdn/shop/files/solisita-necklaces-collection.jpg','/collections/necklaces'],
    ['Earrings','https://solisita.com/cdn/shop/files/solisita-earrings-collection.jpg','/collections/earrings'],
    ['Bracelets','https://solisita.com/cdn/shop/files/solisita-bracelets-collection.jpg','/collections/bracelets'],
    ['Rings','https://solisita.com/cdn/shop/files/solisita-rings-collection.jpg','/collections/rings'],
    ['New In','https://solisita.com/cdn/shop/files/solisita-bracelets-collection.jpg','/collections/new-in'],
    ['Most Gifted','https://solisita.com/cdn/shop/files/solisita-earrings-collection.jpg','/collections/most-gifted'],
  ];

  function grid() {
    let h = '';
    for (let i = 0; i < cats.length; i += 2) {
      h += '<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0;"><div style="display:table;margin:0 auto;width:100%;max-width:640px;">';
      h += card(...cats[i]);
      if (cats[i + 1]) h += card(...cats[i + 1]);
      h += '</div></td></tr></table>';
    }
    return h;
  }

  const html = `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="x-apple-disable-message-reformatting"><title>Solisita</title><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Cormorant:ital@0;1&family=Montserrat:ital,wght@0,400;0,500;1,400;1,500&family=Tenor+Sans&display=swap" rel="stylesheet"><!--<![endif]--><style>#outlook a{padding:0;border:none}.ExternalClass *{line-height:100%}html{font-size:14px}html,body{margin:0;padding:0;width:100%}body,table,th,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-spacing:0;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt}img{border:0;outline:none;display:block;max-width:100%}a,a:link,a:hover{color:#2B2F2E;text-decoration:none}th,td,ol,ul,li,p,a{font-family:'Montserrat',Arial,sans-serif}th,td,ol,ul,li,h1,h2,h3,h4,h5,h6,p{color:#2B2F2E;margin:0;padding:0;font-weight:normal}h1{font-size:29px;line-height:120%;font-family:'Tenor Sans',Arial,sans-serif}p{font-size:14px;line-height:150%;font-family:'Montserrat',Arial,sans-serif}.wf{width:100%!important;max-width:100%!important;height:auto!important}.w50{width:50%;max-width:50%}.column{display:table-cell;text-align:center;vertical-align:top;width:50%}@media only screen and (max-width:480px){.wf{display:block!important}.column{display:block!important;width:100%!important}}</style></head><body style="background-color:#F6EDE6;margin:0;padding:0;word-spacing:normal;text-align:center;">

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center"><div style="margin:0 auto;width:100%;max-width:620px;"><table border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;"><tr><td style="font-size:1px;line-height:30px">&nbsp;</td></tr><tr><td align="center"><a href="https://solisita.com" target="_blank" style="display:block;"><img alt="Solisita" src="https://cdn.shopify.com/s/files/1/0974/2549/0244/files/LOGO_-11_-01.png" style="display:block;height:auto;margin:0 auto;max-width:100%;padding:0;" width="200" height="auto"></a></td></tr><tr><td style="font-size:1px;line-height:30px">&nbsp;</td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="background-color:#FBF7F4;margin:0 auto;width:100%;"><tr><td align="center" style="color:#2B2F2E;font-size:14px;font-weight:normal;padding:12px;"><span style="display:block;margin-bottom:6px;">Waterproof &amp; Tarnish-Resistant Jewellery, Right at Your Fingertips.</span><a href="https://solisita.com/collections/all" style="font-weight:bold;text-decoration:underline;text-transform:uppercase;">Shop the Collection</a></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table class="wf" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin:0 auto;width:100%;"><tr><td align="center" style="padding:0;"><a href="https://solisita.com/collections/all" target="_blank" style="display:block;"><img class="wf" alt="15% off your first order" src="https://cdn.shopify.com/s/files/1/0974/2549/0244/files/1-solisita-classic-crystal-halo-leverback-earrings-gold-vintage.jpg?width=620&height=400&crop=center" style="display:block;height:auto;margin:0 auto;max-width:100%;padding:0;" width="620" height="auto"></a></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table class="wf" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin:0 auto;width:90%;"><tr><td align="center" style="padding-top:12px;padding-bottom:12px;"><p style="font-family:'Montserrat',Arial,sans-serif;font-size:16px;font-weight:normal;margin:0 0 2px;text-align:center;color:#2B2F2E;">Welcome to the Solisita community!</p><p style="font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:normal;margin:0 0 2px;text-align:center;color:#2B2F2E;white-space:nowrap;">As a little welcome treat, we&apos;re giving you 15% off* your first order with us.</p><p style="font-family:'Montserrat',Arial,sans-serif;font-size:16px;font-weight:normal;margin:0 0 2px;text-align:center;color:#2B2F2E;">Use your exclusive code at checkout:<br><br><b><big>SOLISITA15</big></b></p></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin:0 auto;width:90%;"><tr><td class="button" style="padding-top:10px;padding-bottom:10px;text-align:center;" role="button"><a href="https://solisita.com/collections/all" style="color:#f6ede6;background-color:#2B2F2E;border:1px solid #2B2F2E;display:inline-block;padding:16px 26px;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:500;text-align:center;text-decoration:none;text-transform:uppercase;">GET 15% OFF*</a></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;width:100%!important" width="100%"><tr><td style="font-size:1px;line-height:20px">&nbsp;</td></tr></table></td></tr></table>

${grid()}

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;width:100%!important" width="100%"><tr><td style="font-size:1px;line-height:10px">&nbsp;</td></tr></table></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin:0 auto;width:90%;"><tr><td class="button" style="padding-top:10px;padding-bottom:10px;text-align:center;" role="button"><a href="https://solisita.com/collections/new-in" style="color:#f6ede6;background-color:#2B2F2E;border:1px solid #2B2F2E;display:inline-block;padding:16px 26px;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:500;text-align:center;text-decoration:none;text-transform:uppercase;">SHOP NEW ARRIVALS</a></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;width:100%!important" width="100%"><tr><td style="font-size:1px;line-height:20px">&nbsp;</td></tr></table></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table class="wf" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin:0 auto;width:100%;"><tr><td align="center" style="padding:0;"><a href="https://solisita.com/collections/most-gifted" target="_blank" style="display:block;"><img class="wf" alt="Shop Most Gifted" src="https://cdn.shopify.com/s/files/1/0974/2549/0244/files/1-solisita-classic-crystal-halo-leverback-earrings-gold-vintage.jpg?width=620&height=350&crop=center" style="display:block;height:auto;margin:0 auto;max-width:100%;padding:0;" width="620" height="auto"></a></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:0 10px;"><div style="margin:0 auto;width:100%;max-width:620px;"><table class="wf" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin:0 auto;width:90%;"><tr><td align="center" style="padding-top:20px;padding-bottom:12px;"><p style="color:#2B2F2E;font-family:'Cormorant',Georgia,serif;font-size:15px;font-style:italic;font-weight:normal;margin:0 0 12px;text-align:center;">*Terms &amp; conditions apply. <a href="https://solisita.com/pages/terms-conditions" style="color:#B14A2A;text-decoration:underline;font-family:'Cormorant',Georgia,serif;font-size:15px;font-style:italic;">Click here</a> for full details.</p></td></tr></table></div></td></tr></table>

<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F6EDE6;width:100%;"><tr><td align="center" style="padding:10px"><div style="margin:0 auto;width:100%;max-width:620px"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tr><td align="center" style="padding:20px 0"><div style="display:table;width:100%"><div class="column"><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/pages/shipping" style="color:#2B2F2E;text-decoration:none">Free Delivery &amp; Returns</a></p><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/pages/about" style="color:#2B2F2E;text-decoration:none">Our Story</a></p><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/pages/sustainability" style="color:#2B2F2E;text-decoration:none">Sustainability</a></p><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/pages/contact" style="color:#2B2F2E;text-decoration:none">Contact Us</a></p></div><div class="column"><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/collections/all" style="color:#2B2F2E;text-decoration:none">Shop All</a></p><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/pages/refer" style="color:#2B2F2E;text-decoration:none">Refer a Friend</a></p><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/pages/reviews" style="color:#2B2F2E;text-decoration:none">Reviews</a></p><p style="color:#2B2F2E;font-size:16px;margin:1em 0"><a href="https://solisita.com/blogs/journal" style="color:#2B2F2E;text-decoration:none">Journal</a></p></div></div></td></tr><tr><td align="center" style="border-top:1px solid #2B2F2E;border-bottom:1px solid #2B2F2E;padding:20px 10px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto"><tr><td align="center" style="padding:5px 12px"><a href="https://www.instagram.com/solisita" target="_blank" style="display:block;"><img src="https://d1uewsh0mmowj3.cloudfront.net/emails/astridandmiyu-global/assets/img/social-instagram.png" alt="Instagram" width="24" style="display:block;margin:0 auto;border:0;"></a></td><td align="center" style="padding:5px 12px"><a href="https://www.tiktok.com/@solisita" target="_blank" style="display:block;"><img src="https://d1uewsh0mmowj3.cloudfront.net/emails/astridandmiyu-global/assets/img/social-tiktok.png" alt="TikTok" width="24" style="display:block;margin:0 auto;border:0;"></a></td></tr></table></td></tr><tr><td align="center" style="padding:20px 0"><p style="color:#2B2F2E;font-family:'Montserrat',Arial,sans-serif;font-size:11px;margin:0;text-align:center;"><a href="*|PREFERENCES|*" style="color:#2B2F2E;text-decoration:underline;">My Preferences</a> &ensp;|&ensp; <a href="*|UNSUB|*" style="color:#2B2F2E;text-decoration:underline;">Unsubscribe</a> &ensp;|&ensp; <a href="https://solisita.com/pages/privacy" style="color:#2B2F2E;text-decoration:underline;">Privacy Policy</a> &ensp;|&ensp; <a href="https://solisita.com/pages/contact" style="color:#2B2F2E;text-decoration:underline;">Contact Us</a></p></td></tr></table></div></td></tr></table></body></html>`;

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
        subject: "You're In! Here's Your 15% Off",
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.message || 'Resend API error' });
    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
