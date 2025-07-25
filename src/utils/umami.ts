export interface UmamiStats {  
  pageviews: { value: number; prev: number };  
  visitors: { value: number; prev: number };  
  visits: { value: number; prev: number };  
}  
  
export async function getUmamiStats(url: string): Promise<UmamiStats | null> {  
  try {  
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiIzMGE2MGJhNi1jNGQ3LTQ3ZDUtOGExYi1mMWM4MzFlMTMzMmEiLCJpYXQiOjE3NTM0NTA2MjF9.ku1YhgDqLv7U2yG9BfO2K7tVuDfHAnqHGwoXc8SJRpg";  
    const websiteId = "30a60ba6-c4d7-47d5-8a1b-f1c831e1332a";  
      
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