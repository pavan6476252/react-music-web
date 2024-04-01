import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AlbumCard from '../../utils/AlbumCard';
import ChartCard from '../../utils/ChartCard';
import PlaylistCard from '../../utils/PlaylistCard';
import TrendingSongCard from '../../utils/TrendingSongs';
import SidePanel from './SidePanel';

function HomePage() {

  const saavanHome = useSelector((state: RootState) => state.saavanHome);

  return (
    <div className='m-0 dark:bg-dark-gray py-4 flex  h-screen scroll-smooth'>

      <div
         className="relative  overflow-hidden w-full overflow-y-scroll ">
        {saavanHome.isLoading && <p>Loading...</p>}
        {saavanHome.isSuccess && (
          <div>
            <div className="mb-8">

              <div>
                <h1 className="text-2xl font-bold  mx-4 dark:text-white">Top Albums</h1>
                <div className="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden [&::-webkit-scrollbar]:hidden">
                  {saavanHome.data?.data.albums.map((album, index) => (
                    <AlbumCard key={index} album={album} className={''} />
                  ))}
                </div>
              </div>

              <div className="my-3">
                <h1 className="text-xl  mb-2 font-bold  mx-4 dark:text-white">Top Charts</h1>
                <div className="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden  [&::-webkit-scrollbar]:hidden">
                  {saavanHome.data?.data.charts.map((chart, index) => (
                    <ChartCard key={index} chart={chart} />
                  ))}
                </div>
              </div>

              <div className="my-4">
                <h1 className="text-xl font-bold dark:text-white mx-4">Featured Playlists</h1>
                <div className="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden  [&::-webkit-scrollbar]:hidden">
                  {saavanHome.data?.data.playlists.map((playlist, index) => (
                    <PlaylistCard key={index} playlist={playlist} />
                  ))}
                </div>
              </div>

              <div className="my-4">
                <h1 className="text-2xl
              mb-2 font-bold  dark:text-white mx-4">Trending</h1>
                <h4 className="text-xl font-bold  dark:text-white  mx-4">Top Albums</h4>
                <div className="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden  [&::-webkit-scrollbar]:hidden">
                  {saavanHome.data?.data.trending.albums.map((album, index) => (
                    <AlbumCard key={index} album={album} className={''} />
                  ))}
                </div>
                <h4 className="text-xl font-bold  dark:text-white mx-4">Top Playlists</h4>
                <div className="flex overflow-x-auto overflow-y-hidden w-full scrollbar-hidden  [&::-webkit-scrollbar]:hidden">
                  {saavanHome.data?.data.trending.songs.map((trendingSong, index) => (
                    <TrendingSongCard key={index} trendingSong={trendingSong} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
        {saavanHome.errorMessage && <p>Error: {saavanHome.errorMessage}</p>}
      </div>
      
        <SidePanel />
      
    </div>
  );
}

export default HomePage