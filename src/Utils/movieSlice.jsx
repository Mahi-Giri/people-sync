import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movies",
    initialState: {
        trailerVideo: null,
        nowPlayingMovie: null,
        popular: null,
        topRated: null,
        upcoming: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovie, addTrailerVideo, addPopular, addTopRated, addUpcoming } = movieSlice.actions;
export default movieSlice.reducer;
