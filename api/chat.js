// Vercel Serverless Function for Claude API
// This keeps your API key secure and adds rate limiting

const rateLimit = new Map();

// Simple rate limiting: max 10 requests per IP per hour
function checkRateLimit(ip) {
  const now = Date.now();
  const hourAgo = now - (60 * 60 * 1000);
  
  // Clean old entries
  for (const [key, data] of rateLimit.entries()) {
    if (data.timestamp < hourAgo) {
      rateLimit.delete(key);
    }
  }
  
  const userData = rateLimit.get(ip) || { count: 0, timestamp: now };
  
  if (userData.timestamp < hourAgo) {
    // Reset if more than an hour old
    userData.count = 0;
    userData.timestamp = now;
  }
  
  userData.count++;
  rateLimit.set(ip, userData);
  
  return userData.count <= 10; // Max 10 requests per hour
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ 
      error: 'Rate limit exceeded. Please try again later.' 
    });
  }

  try {
    const { model, max_tokens, system, messages } = req.body;

    // Validate required fields
    if (!system || !messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    // Check for API key
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ 
        error: 'Server configuration error: API key not found' 
      });
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: model || 'claude-sonnet-4-20250514',
        max_tokens: max_tokens || 4000,
        system,
        messages
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Claude API error:', errorData);
      return res.status(response.status).json({ 
        error: 'API request failed',
        details: errorData 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
