import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { seekSongDuration, playSong, pauseSong } from './redux/player/AudioPlayerSlice';
import { CiPause1, CiPlay1 } from 'react-icons/ci';
import { CgPlayList } from 'react-icons/cg';

const AudioPlayer: React.FC = () => {
    const dispatch = useDispatch();
    const audioRef = useRef<HTMLAudioElement>(null);
    const { queue, currentSongIndex, isPlaying, currentTime } = useSelector((state: RootState) => state.audioPlayer);
    const state = useSelector((state: RootState) => state.audioPlayer);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            if (!isPlaying) {
                if (audio.src) {
                    audio.src = queue[0].url;
                }
                audio.play();
            } else {
                audio.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio && currentSongIndex !== null) {
            audio.src = queue[currentSongIndex].url;
            audio.currentTime = currentTime;
        }
    }, [currentSongIndex]);

    const handlePlayPause = () => {
        if (isPlaying) {
            dispatch(pauseSong());
        } else {
            dispatch(playSong(currentSongIndex ?? 0));
        }
    };


    // const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const newPosition = parseInt(event.target.value);
    //     dispatch(seekSongDuration(newPosition));
    // };

    return (
        <div className='dark:bg-dark-gray-2 flex   w-full items-center justify-between'>
            <div className='flex'>

                {
                    (queue.length != 0) && <img src={queue[currentSongIndex ?? 0].image} alt="" className='w-14 rounded-md' />
                }
                <audio
                    ref={audioRef}
                    controls
                    className=' bottom-0 left-0 bg-gray-900 text-white p-2'
                    onTimeUpdate={(e) => dispatch(seekSongDuration(e.currentTarget.currentTime))}
                />

                <button onClick={handlePlayPause} className='dark:text-white'>{isPlaying ? <CiPause1 /> : <CiPlay1 />}</button>

                {/* <input
                type="range"
                min="0"
                max={queue}
                value={currentTime}
                onChange={handleSeek}
            /> */}


            </div>

            <div className="flex relative">
                <h1 className=''>{state.queue.length}</h1>
                <CgPlayList size={35} className='dark:text-white ' />
                <div className="absolute p-3 bg-blue-gray-300 bottom-14 right-0">
                    {
                        queue.map((e) => {
                            return (<div className=' flex'>
                                <img src={e.image} alt="" className='
                                aspect-square
                                h-14' />
                            </div>)
                        })
                    }
                </div>
            </div>


        </div >
    );
};

export default AudioPlayer;
