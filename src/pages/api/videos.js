import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export async function GET({params}) {
  const CHANNEL_ID = "UCvPGx8qh8AkrFZW06tESvaA"; 
  const URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const response = await fetch(URL);
    const xml = await response.text();
    const json = await parseStringPromise(xml);

    const videos = json.feed.entry.filter((entry) => {
      const viewsString = entry['media:group'][0]['media:community'][0]['media:statistics'][0].$.views;
        const views = parseInt(viewsString, 10);

        // Filtrar solo videos con vistas mayores a 15,000
        return views >= 15000;}).slice(0, 3).map((video) => {
        const description = video['media:group'][0]['media:description'][0];
        const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description;
        return{
          title: video.title[0],
          link: video.link[0].$.href,
          thumbnail: video['media:group'][0]['media:thumbnail'][0].$.url,
          description: truncatedDescription,
        }
        
    });

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener el feed RSS' }), {
      status: 500,
    });
  }
}

