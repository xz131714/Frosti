import type { APIRoute } from 'astro';  
import { getUmamiStats } from '@utils/umami';  
  
export const GET: APIRoute = async ({ url }) => {  
  const urlParam = url.searchParams.get('url');  
  if (!urlParam) {  
    return new Response(JSON.stringify({ error: 'URL parameter required' }), {  
      status: 400,  
      headers: { 'Content-Type': 'application/json' }  
    });  
  }  
  
  try {  
    // 处理URL格式：如果是完整URL，提取路径部分  
    let processedUrl = urlParam;  
    try {  
      const parsedUrl = new URL(urlParam);  
      processedUrl = parsedUrl.pathname; // 只取路径部分  
    } catch {  
      // 如果不是完整URL，直接使用原值  
      processedUrl = urlParam;  
    }  
  
    const stats = await getUmamiStats(processedUrl);  
    return new Response(JSON.stringify(stats), {  
      headers: { 'Content-Type': 'application/json' }  
    });  
  } catch (error) {  
    console.error('API Error:', error);  
    return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), {  
      status: 500,  
      headers: { 'Content-Type': 'application/json' }  
    });  
  }  
};