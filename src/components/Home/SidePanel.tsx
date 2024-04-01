import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { RxCross1 } from 'react-icons/rx';
import { closeSidebar } from '../../redux/sidepanel/SidePanelSlice';

import { AlbumDetailsDTO, SaavanSongInputDTO } from "../../dto/albumDtoInput";
import { CiPlay1, CiShuffle } from 'react-icons/ci';
import { SongInputDTO, addSongToQueueAndPlay } from '../../redux/player/AudioPlayerSlice';
function SidePanel() {

    const dispatch: AppDispatch = useDispatch();

    const sidePanelState = useSelector((state: RootState) => state.sidePanel);

    return (
        <>
            {
                sidePanelState.isActive &&
                <div className='w-4/12 
                relative
                flex flex-col items-start 
                px-2
                ' >

                    <div className='w-full items-end flex justify-end'>
                        <RxCross1 size={20} className='dark:
                        hover:cursor-pointer
                        text-white' onClick={() => dispatch(closeSidebar())} />
                    </div>


                    {
                        sidePanelState.isLoading && <div className=' 
                        absolute  inset-x-0 
                        z-50
                        flex
                        h-screen
                        items-center
                          justify-center '>
                            <div className="animate-spin
                         h-6 w-6
                            border mr-3"></div>
                        </div>
                    }
                    {
                        sidePanelState.isSuccess &&
                        <>
                            {
                                (sidePanelState?.data.type === 'album') && <RenderAlbumsDetails data={sidePanelState.data as AlbumDetailsDTO} />
                                // <div>{sidePanelState.data.type}</div>
                            }
                        </>
                    }

                </div>

            }

        </>
    )
}

export default SidePanel


interface P {
    data: AlbumDetailsDTO

}

function RenderAlbumsDetails({ data }: P) {
    // console.log(data.data)


    const dispatch: AppDispatch = useDispatch();
    const handlePlaySong = (data: SaavanSongInputDTO) => {
        const songData: SongInputDTO = {
            image: data.image[data.image.length - 1].link, name: data.name, subtitle: data.releaseDate, url: data.downloadUrl[data.downloadUrl.length - 1].link
        };
        dispatch(addSongToQueueAndPlay(songData))
    }
    return (
        <div className='overflow-hidden w-full'>
            <div className='flex m-2 bg-dark-gray-2 p-2 rounded-md relative'>
                <img src={data.data.image[data.data.image.length - 1].link} alt="" className='max-h-40 rounded-sm' />
                <div className='w-full m-4 flex flex-col items-center justify-center'>
                    <h2 className='dark:text-white'>{data.data.name}</h2>
                    <h2 className='dark:text-white'>{data.data.releaseDate}</h2>
                </div>
                <div className='absolute bottom-2 right-2 bg-white p-2 rounded-lg'>
                    <CiShuffle size={30} className='' />
                </div>
            </div>
            <div className='overflow-y-scroll h-4/6 '>
                {data.data.songs.map((e, index) => (
                    <div key={index} className={`my-2 flex justify-between items-center hover:bg-dark-gray-2 p-2 w-full rounded-sm hover:scale-95 transition-transform `} >
                        <div className='flex'>
                            <img src={e.image[e.image.length - 1].link} alt="" className='aspect-square h-16 w-16 rounded-sm mr-4' />
                            <div className="flex flex-col justify-evenly">
                                <h1 className='dark:text-white'>{e.name}</h1>
                                <p className='dark:text-gray-500'>{e.language} | {e.year}</p>
                            </div>
                        </div>
                        <CiPlay1 size={30}
                            onClick={() => handlePlaySong(e)} className='dark:text-white' />
                    </div>
                ))}
            </div>
        </div>
    );
}
