import { createSlice } from "@reduxjs/toolkit";
import { fetchSaavanHomeSongs } from "./HomeApi";
import { HomeData } from "../../dto/HomeDtoInput";

interface SaavanHomeState {
    data: HomeData | null; 
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
}

const initialState: SaavanHomeState = {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
};
export const saavanHomeSlice = createSlice({
    name: "saavanHome",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSaavanHomeSongs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSaavanHomeSongs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload as HomeData;
            })
            .addCase(fetchSaavanHomeSongs.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload as string;
            });
    },
});

export default saavanHomeSlice.reducer;