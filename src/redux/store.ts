import { configureStore } from '@reduxjs/toolkit'
import { saavanHomeSlice } from './home/homeSlice';
import { saavanSearchSlice } from './search/searchSlice';
import { sidePanelSlice } from './sidepanel/SidePanelSlice';
import { audioPlayerSlice } from './player/AudioPlayerSlice';

export const store = configureStore({
  reducer: {
    saavanHome: saavanHomeSlice.reducer,
    saavanSearch: saavanSearchSlice.reducer,
    sidePanel: sidePanelSlice.reducer,
    audioPlayer: audioPlayerSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch