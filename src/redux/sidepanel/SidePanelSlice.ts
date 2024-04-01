import {  createSlice } from "@reduxjs/toolkit";
import { fetchAlbumDetailsAsyncThunk } from "../slices/AlbumFetchSlice";
import { AlbumDetailsDTO } from "../../dto/albumDtoInput";
interface SidePanelState {
    isActive: boolean,
    data?: AlbumDetailsDTO | any;
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;

}
const initialState: SidePanelState = {
    isActive: false,
    isLoading: false,
    data: null,
    isSuccess: false,
    errorMessage: "",
};



export const sidePanelSlice = createSlice({
    name: 'sidePanelSlice',
    initialState,
    reducers: {
        activateSidebar: (state) => {
            state.isActive = true
        },
        closeSidebar: (state) => {
            state.isActive = false
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbumDetailsAsyncThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAlbumDetailsAsyncThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload as AlbumDetailsDTO;

                console.log(action.payload);
            })
            .addCase(fetchAlbumDetailsAsyncThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload as string;
            });
    }
});

export const { activateSidebar, closeSidebar } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;