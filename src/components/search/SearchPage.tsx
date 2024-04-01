import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaavanSearch } from '../../redux/search/searchApi';
import SongOrAlbumCard from './SongOrAlbumCard';
import ArtistsResultCard from './ArtistsResultCard';
import PlaylistResultCard from './PlaylistResultCard';
import TopQueryResultCard from './TopQueryResultCard';

function SearchPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchParamValue = searchParams.get('q');

    const dispatch: AppDispatch = useDispatch();

    const saavanSearch = useSelector((state: RootState) => state.saavanSearch);

    useEffect(() => {
        dispatch(fetchSaavanSearch(searchParamValue ?? ''));
    }, [dispatch, searchParamValue]);

    return (
        <div className='mx-auto p-4'>
            {saavanSearch.isLoading && <p className='text-center'>Loading...</p>}
            {saavanSearch.isSuccess && (
                <div>
                    <div className='mt-6'>
                        <div>
                            <h1 className='text-2xl font-bold mb-4'>Top Songs & Albums</h1>
                            <div className='flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden [&::-webkit-scrollbar]:hidden '>
                                {saavanSearch.data?.data.songs.results.map((song, index) => (
                                    <SongOrAlbumCard key={index} songOrAlbum={song} />
                                ))}
                                {saavanSearch.data?.data.albums.results.map((album, index) => (
                                    <SongOrAlbumCard key={index} songOrAlbum={album} />
                                ))}
                            </div>
                        </div>

                        <div className='mt-8'>
                            <h1 className='text-2xl font-bold mb-4'>Top Artists</h1>
                            <div className='flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden [&::-webkit-scrollbar]:hidden'>
                                {saavanSearch.data?.data.artists.results.map((artist, index) => (
                                    <ArtistsResultCard key={index} artistResult={artist} />
                                ))}
                            </div>
                        </div>

                        <div className='mt-8'>
                            <h1 className='text-2xl font-bold mb-4'>Top Queries</h1>
                            <div className='flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden [&::-webkit-scrollbar]:hidden'>
                                {saavanSearch.data?.data.topQuery.results.map((query, index) => (
                                    <TopQueryResultCard key={index} topQueryResult={query} />
                                ))}
                            </div>
                        </div>

                        <div className='mt-8'>
                            <h1 className='text-2xl font-bold mb-4'>Featured Playlists</h1>
                            <div className='flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden [&::-webkit-scrollbar]:hidden'>
                                {saavanSearch.data?.data.playlists.results.map((playlist, index) => (
                                    <PlaylistResultCard key={index} playlist={playlist} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {saavanSearch.errorMessage && (
                <p className='text-center text-red-500 mt-4'>Error: {saavanSearch.errorMessage}</p>
            )}
        </div>
    );
}

export default SearchPage;
