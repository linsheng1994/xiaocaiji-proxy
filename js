export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.siliconflow.cn' + req.url, {
      method: req.method,
      headers: {
        ...req.headers,
        'host': 'api.siliconflow.cn'
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Proxy error: ' + error.message });
  }
}
