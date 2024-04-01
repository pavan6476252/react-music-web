import { createSlice } from "@reduxjs/toolkit/react";
import { SaavnApiSearchResponse } from "../../dto/SearchDtoInput";
import { fetchSaavanSearch } from "./searchApi";

interface SaavanHomeState {
    data: SaavnApiSearchResponse | null; // Replace 'any[]' with the actual type of your data
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
export const saavanSearchSlice = createSlice({
    name: "saavanHome",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSaavanSearch.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSaavanSearch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload as SaavnApiSearchResponse;
            })
            .addCase(fetchSaavanSearch.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload as string;
            });
    },
});

export default saavanSearchSlice.reducer;