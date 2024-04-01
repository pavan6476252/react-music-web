import { createSlice } from "@reduxjs/toolkit";

export interface SongInputDTO {
    url: string;
    image: string;
    name: string;
    subtitle: string;
}

interface AudioPlayerState {
    queue: SongInputDTO[];
    currentSongIndex: number | null;
    isPlaying: boolean;
    currentTime: number;
}

const initialState: AudioPlayerState = {
    queue: [],
    currentSongIndex: null,
    isPlaying: false,
    currentTime: 0,
};

export const audioPlayerSlice = createSlice({
    name: 'audioPlayer',
    initialState,
    reducers: {
        addSongToQueue: (state, action) => {
            state.queue.push(action.payload as SongInputDTO);
        },
        addSongToQueueAndPlay: (state, action) => {
            // state.queue.push(action.payload.data as SongInputDTO);
            // state.currentSongIndex = 0;

            return {
                currentSongIndex: 0,
                currentTime: 0,
                isPlaying: true,
                queue: [action.payload as SongInputDTO, ...state.queue]
            }
        },
        removeSongFromQueue: (state, action) => {
            state.queue = state.queue.filter((_, index) => index !== action.payload);
        },
        playSong: (state, action) => {
            state.currentSongIndex = action.payload;
            state.isPlaying = true;
        },
        pauseSong: (state) => {
            state.isPlaying = false;
        },
        seekSongDuration: (state, action) => {
            state.currentTime = action.payload;
        },
        playAlbumInShuffle: (state, action) => {
            state.queue = action.payload;
            state.currentSongIndex = 0;
            state.isPlaying = true;
        },
        shufflePlaySongsInQueue: (state) => {
            state.queue = shuffle(state.queue);
            state.currentSongIndex = 0;
            state.isPlaying = true;
        }
    },
});

function shuffle(array: SongInputDTO[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const { addSongToQueue, removeSongFromQueue, playSong, pauseSong, seekSongDuration,
    addSongToQueueAndPlay,
    playAlbumInShuffle, shufflePlaySongsInQueue } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
