export default async function handler(req, res) {
  const targetUrl = 'https://api.siliconflow.cn' + req.url;
  console.log('Proxying to:', targetUrl);  // 添加日志

  try {
    const response = await fetch(targetUrl, {
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
    console.error('Proxy error:', error);  // 添加错误日志
    return res.status(500).json({ error: 'Proxy error: ' + error.message });
  }
}
