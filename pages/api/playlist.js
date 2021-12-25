import { getPlaylist } from '../../lib/spotify';

const playlist_id = process.env.PLAYLIST_ID_CURRENT_FAVOURITES;

export default async function handler(req, res) {
  const response = await getPlaylist();
  const { items } = await response.json(playlist_id);

  const tracks = items.map((item) => ({
    artist: item.track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: item.track.external_urls.spotify,
    title: item.track.name,
    imageUrl: item.track.album.images[2].url
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks });
}