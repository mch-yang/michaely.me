import { getPlaylist } from '../../lib/spotify';

export default async function handler(req, res) {
  const response = await getPlaylist('7a18RllWcUOC7VJ8ARIR6E');
  const { items } = await response.json();

  const tracks = items.map((item) => ({
    artist: item.track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: item.track.external_urls.spotify,
    title: item.track.name
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks });
}