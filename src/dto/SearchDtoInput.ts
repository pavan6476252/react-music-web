 
export interface Image {
  quality: string;
  link: string;
}

export interface TopQueryResult {
  id: string;
  title: string;
  image: Image[];
  url: string;
  type: string;
  description: string;
  position: number;
}

export interface TopQuery {
  results: TopQueryResult[];
  position: number;
}

export interface SongOrAlbumResult {
  id: string;
  title: string;
  image: Image[];
  album?: string; // For songs
  artist?: string; // For albums
  url: string;
  type: string;
  description: string;
  position: number;
  primaryArtists?: string; // For songs
  singers?: string; // For songs
  language?: string;
  year?: string; // For albums
  songIds?: string; // For albums
}

export interface SongsOrAlbums {
  results: SongOrAlbumResult[];
  position: number;
}

export interface ArtistResult {
  id: string;
  title: string;
  image: Image[];
  url: string;
  type: string;
  description: string;
  position: number;
}

export interface Artists {
  results: ArtistResult[];
  position: number;
}

 export interface PlaylistResult {
  id: string;
  title: string;
  image: Image[];
  url: string;
  type: string;
  language?: string;  
  description: string;
  position: number;
}

export interface Playlists {
  results: PlaylistResult[];
  position: number;
}

export interface SaavnApiSearchResponse {
  status: string;
  message: null | string;
  data: {
    topQuery: TopQuery;
    songs: SongsOrAlbums;
    albums: SongsOrAlbums;
    artists: Artists;
    playlists: Playlists;
  };
}
