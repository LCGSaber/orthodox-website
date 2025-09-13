import type { NextApiRequest, NextApiResponse } from 'next'

// 健康检查API路由
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Health check API called');
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'API is working correctly'
  })
}