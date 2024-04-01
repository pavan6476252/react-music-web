import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSaavanSearch = createAsyncThunk('saavanHome/search', async (query: string ) => {
    const res = await fetch(`https://saavan-music-api.vercel.app/search/all?query=${query.split(' ').join('+')}`);

    return res?.json();
})