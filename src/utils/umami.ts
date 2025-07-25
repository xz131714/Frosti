export interface UmamiStats {  
  pageviews: { value: number; prev: number };  
  visitors: { value: number; prev: number };  
  visits: { value: number; prev: number };  
}  
  
export interface UmamiTokenResponse {  
  websiteId: string;  
  token: string;  
}  
  
const SHARE_ID = "yj7cIMUe3kQOc9Qr";  
const WEBSITE_ID = "30a60ba6-c4d7-47d5-8a1b-f1c831e1332a";  
  
// 全局 token 缓存  
let globalTokenPromise: Promise<UmamiTokenResponse | null> | null = null;  
  
// 获取最新的 token  
export async function getUmamiToken(): Promise<UmamiTokenResponse | null> {  
  try {  
    const response = await fetch(`https://us.umami.is/api/share/${SHARE_ID}`);  
    if (!response.ok) {  
      throw new Error(`Failed to fetch token: ${response.status}`);  
    }  
    return await response.json();  
  } catch (error) {  
    console.error('Failed to fetch Umami token:', error);  
    return null;  
  }  
}  
  
// 获取共享的 token  
export async function getSharedUmamiToken(): Promise<UmamiTokenResponse | null> {  
  if (!globalTokenPromise) {  
    globalTokenPromise = getUmamiToken();  
    // 5分钟后清除缓存，允许重新获取  
    setTimeout(() => {  
      globalTokenPromise = null;  
    }, 5 * 60 * 1000);  
  }  
  return globalTokenPromise;  
}  
  
// 服务端使用的函数（保持兼容性）  
export async function getUmamiStats(url: string): Promise<UmamiStats | null> {  
  try {  
    const tokenData = await getUmamiToken();  
    if (!tokenData) return null;  
  
    const endTime = Date.now();  
    const statsUrl = `https://us.umami.is/api/websites/${tokenData.websiteId}/stats?startAt=0&endAt=${endTime}&unit=hour&timezone=Asia/Hong_Kong&url=${url}&compare=false`;  
  
    const statsResponse = await fetch(statsUrl, {  
      headers: {  
        'x-umami-share-token': tokenData.token  
      }  
    });  
  
    if (!statsResponse.ok) {  
      throw new Error(`Failed to fetch stats: ${statsResponse.status}`);  
    }  
  
    return await statsResponse.json();  
  } catch (error) {  
    console.error('Failed to fetch Umami stats:', error);  
    return null;  
  }  
}  
  
// 优化后的客户端函数（用于博客列表页）  
export async function getUmamiStatsClientOptimized(url: string): Promise<UmamiStats | null> {  
  const cacheKey = `umami-stats:${url}`;  
  const cachedData = getCachedStats(cacheKey);  
  if (cachedData) {  
    return cachedData;  
  }  
  
  try {  
    const tokenData = await getSharedUmamiToken(); // 使用共享 token  
    if (!tokenData) return null;  
  
    const endTime = Date.now();  
    const statsUrl = `https://us.umami.is/api/websites/${tokenData.websiteId}/stats?startAt=0&endAt=${endTime}&unit=hour&timezone=Asia/Hong_Kong&url=${url}&compare=false`;  
  
    const statsResponse = await fetch(statsUrl, {  
      headers: {  
        'x-umami-share-token': tokenData.token  
      }  
    });  
  
    if (!statsResponse.ok) {  
      throw new Error(`Failed to fetch stats: ${statsResponse.status}`);  
    }  
  
    const stats = await statsResponse.json();  
    cacheStats(cacheKey, stats);  
    return stats;  
  } catch (error) {  
    console.error('Failed to fetch Umami stats:', error);  
    return null;  
  }  
}  
  
// 缓存相关函数  
function getCachedStats(key: string): UmamiStats | null {  
  if (typeof localStorage === 'undefined') return null;  
    
  try {  
    const cached = localStorage.getItem(key);  
    if (cached) {  
      const { data, timestamp } = JSON.parse(cached);  
      // 5分钟缓存  
      if (Date.now() - timestamp < 5 * 60 * 1000) {  
        return data;  
      }  
    }  
  } catch (e) {  
    console.warn('Error reading from cache:', e);  
  }  
  return null;  
}  
  
function cacheStats(key: string, data: UmamiStats): void {  
  if (typeof localStorage === 'undefined') return;  
    
  try {  
    localStorage.setItem(key, JSON.stringify({  
      data,  
      timestamp: Date.now()  
    }));  
  } catch (e) {  
    console.warn('Error writing to cache:', e);  
  }  
}