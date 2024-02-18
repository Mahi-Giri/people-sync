import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        showSearch: false,
        movies: null,
        name: null,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showSearch = !state.showSearch;
        },
        addSearchResult: (state, action) => {
            const { name, movies } = action.payload;
            state.name = name;
            state.movies = movies;
        },
    },
});

export const { toggleSearchView, addSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
