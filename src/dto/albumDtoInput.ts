export interface AlbumDetailsDTO {
    type?: string,
    status: string;
    message: null | string;
    data: {
        id: string;
        name: string;
        year: string;
        releaseDate: string;
        songCount: string;
        url: string;
        primaryArtistsId: string;
        primaryArtists: string;
        featuredArtists: string[];
        artists: any[]; // You may need to define an interface for artists if necessary
        image: ImageInputDTO[];
        songs: SaavanSongInputDTO[];
    };
}
export interface ImageInputDTO {
    quality: string;
    link: string;
}
export interface SaavanSongInputDTO {
    id: string;
    name: string;
    album: {
        id: string;
        name: string;
        url: string;
    };
    year: string;
    releaseDate: string;
    duration: string;
    label: string;
    primaryArtists: string;
    primaryArtistsId: string;
    featuredArtists: string;
    featuredArtistsId: string;
    explicitContent: number;
    playCount: string;
    language: string;
    hasLyrics: string;
    url: string;
    copyright: string;
    image: SaavanImageDOT[];
    downloadUrl: SaavanDownloadURLDOT[];
}

export interface SaavanImageDOT {
    quality: string;
    link: string;
}
export interface SaavanDownloadURLDOT {
    quality: string;
    link: string;
}