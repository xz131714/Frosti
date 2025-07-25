export interface UmamiStats {  
  pageviews: { value: number; prev: number };  
  visitors: { value: number; prev: number };  
  visits: { value: number; prev: number };  
}  
  
interface UmamiCredentials {  
  websiteId: string;  
  token: string;  
}  
  
// 缓存凭据，避免频繁请求  
let cachedCredentials: UmamiCredentials | null = null;  
let credentialsExpiry: number = 0;  
  
async function getUmamiCredentials(): Promise<UmamiCredentials> {  
  // 检查缓存是否有效（缓存1小时）  
  if (cachedCredentials && Date.now() < credentialsExpiry) {  
    return cachedCredentials;  
  }  
  
  try {  
    const response = await fetch('https://us.umami.is/api/share/yj7cIMUe3kQOc9Qr');  
    if (!response.ok) {  
      throw new Error(`Failed to fetch credentials: ${response.status}`);  
    }  
      
    const credentials = await response.json();  
    cachedCredentials = credentials;  
    credentialsExpiry = Date.now() + 60 * 60 * 1000; // 缓存1小时  
      
    return credentials;  
  } catch (error) {  
    console.error('Failed to fetch Umami credentials:', error);  
    // 如果获取失败，使用备用的硬编码凭据  
    return {  
      websiteId: "30a60ba6-c4d7-47d5-8a1b-f1c831e1332a",  
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiIzMGE2MGJhNi1jNGQ3LTQ3ZDUtOGExYi1mMWM4MzFlMTMzMmEiLCJpYXQiOjE3NTM0NjY3MDF9.ha4VBtaw0DkNttuvJ5mZ70g3m0yhzQr97Kpa4QHq0sM"  
    };  
  }  
}  
  
export async function getUmamiStats(url: string): Promise<UmamiStats | null> {  
  try {  
    const { websiteId, token } = await getUmamiCredentials();  
      
    const endTime = Date.now();  
    const statsUrl = `https://us.umami.is/api/websites/${websiteId}/stats?startAt=0&endAt=${endTime}&unit=hour&timezone=Asia/Hong_Kong&url=${url}&compare=false`;  
      
    const statsResponse = await fetch(statsUrl, {  
      headers: {  
        'x-umami-share-token': token  
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