import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSaavanHomeSongs = createAsyncThunk(
  'saavanHome/fetchSaavanHomeSongs',
  async (language: string[]) => {
    const res = await fetch(`https://saavan-music-api.vercel.app/modules?language=${language.join(',')}`);
    return res?.json();
  }
);  