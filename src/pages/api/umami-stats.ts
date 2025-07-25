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
    const stats = await getUmamiStats(urlParam);  
    return new Response(JSON.stringify(stats), {  
      headers: { 'Content-Type': 'application/json' }  
    });  
  } catch (error) {  
    return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), {  
      status: 500,  
      headers: { 'Content-Type': 'application/json' }  
    });  
  }  
};