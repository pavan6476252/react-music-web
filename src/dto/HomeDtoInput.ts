interface Artist {
    id: string;
    name: string;
    url: string;
    image: {
      quality: string;
      link: string;
    }[] | false;
    type: string;
    role: string;
  }
  
export  interface Album {
    id: string;
    name: string;
    year: string;
    type: string;
    playCount: string;
    language: string;
    explicitContent: string;
    songCount: string;
    url: string;
    primaryArtists: Artist[];
    featuredArtists: Artist[];
    artists: Artist[];
    image: {
      quality: string;
      link: string;
    }[];
    songs: any[]; 
  }
  
export  interface Playlist {
    id: string;
    userId: string;
    title: string;
    subtitle: string;
    type: string;
    image: {
      quality: string;
      link: string;
    }[];
    url: string;
    songCount: string;
    firstname: string;
    followerCount: string;
    lastUpdated: string;
    explicitContent: string;
  }
  
  export interface Chart {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: {
      quality: string;
      link: string;
    }[];
    url: string;
    firstname: string;
    explicitContent: string;
    language: string;
  }
  
  export interface TrendingSong {
    id: string;
    name: string;
    type: string;
    album: {
      id: string;
      name: string;
      url: string;
    };
    year: string;
    releaseDate: string;
    duration: string;
    label: string;
    primaryArtists: Artist[];
    featuredArtists: Artist[];
    explicitContent: string;
    playCount: string;
    language: string;
    url: string;
    image: {
      quality: string;
      link: string;
    }[];
  }
  
  export interface Trending {
    songs: TrendingSong[];
    albums: Album[];
  }
  
export  interface HomeData {
    status: string;
    message: null;
    data: {
      albums: Album[];
      playlists: Playlist[];
      charts: Chart[];
      trending: Trending;
    };
  } 
  