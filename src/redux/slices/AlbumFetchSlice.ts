import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAlbumDetailsAsyncThunk = createAsyncThunk('saavanHome/search', async (id: string) => {
    const res = await fetch(`https://saavan-music-api.vercel.app/albums?id=${id}`);

    return { ...(await res?.json()), type: 'album' };
})