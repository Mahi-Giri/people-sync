import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        showSearch: false,
        // movies:null,
        // name:null,
        movies: {
            results: [
                {
                    adult: false,
                    backdrop_path: "/13QFKJa7ZPY3VN0L6sxKuNoLHFf.jpg",
                    genre_ids: [28, 80, 18],
                    id: 781732,
                    original_language: "hi",
                    original_title: "Animal",
                    overview:
                        "The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.",
                    popularity: 37.905,
                    poster_path: "/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg",
                    release_date: "2023-12-01",
                    title: "Animal",
                    video: false,
                    vote_average: 6.7,
                    vote_count: 74,
                },
                {
                    adult: false,
                    backdrop_path: "/H41DJiw7Q8xn6bWC75eyaavp9L.jpg",
                    genre_ids: [878, 12, 18, 9648],
                    id: 943134,
                    original_language: "fr",
                    original_title: "Le Règne animal",
                    overview:
                        "In a world hit by a wave of mutations transforming humans into animals, François does everything he can to save his wife. As some of the creatures disappear into a nearby forest, he and their son Émile embark on a quest that will change their lives forever.",
                    popularity: 346.601,
                    poster_path: "/39AiQnXlXOjoqBSkiUpTG80rXLw.jpg",
                    release_date: "2023-10-04",
                    title: "The Animal Kingdom",
                    video: false,
                    vote_average: 7.202,
                    vote_count: 277,
                },
                {
                    adult: false,
                    backdrop_path: "/pUhFSqqSErngRzhRgswXXHQHPCK.jpg",
                    genre_ids: [53, 27],
                    id: 274626,
                    original_language: "en",
                    original_title: "Animal",
                    overview:
                        "When plans for a weekend vacation hit a dead end, a group of close-knit friends find themselves stranded in unfamiliar territory, pursued by a menacing predator. Holed up in an isolated cabin, tensions mount as long-buried secrets are revealed. As the body count rises, the group must put their differences aside and fight for survival.",
                    popularity: 8.536,
                    poster_path: "/jR1nY5Cn4lpFpbsteGRTJtGDaVS.jpg",
                    release_date: "2014-06-17",
                    title: "Animal",
                    video: false,
                    vote_average: 4.979,
                    vote_count: 234,
                },
                {
                    adult: false,
                    backdrop_path: "/2PYSbjodqH6ytgXaeDtWitFjK1l.jpg",
                    genre_ids: [28, 18],
                    id: 10252,
                    original_language: "en",
                    original_title: "Animal",
                    overview:
                        'His name: infamous. His reputation: ruthless. But when James "Animal"Allen is locked up in a maximum security prison, he meets a revolutionary who changes his life. Now a reformed man, James is released only to find that his own son has assumed a life of crime and violence. Can a father haunted by his past redeem his family from the very streets he created, or will he be forced to make the ultimate sacrifice?',
                    popularity: 8,
                    poster_path: "/f0r2kdF3TitkTxAwb0kKdsTfIvi.jpg",
                    release_date: "2005-05-01",
                    title: "Animal",
                    video: false,
                    vote_average: 5.633,
                    vote_count: 45,
                },
                {
                    adult: false,
                    backdrop_path: "/9FXStraxmEeHCNwMHLGvw88ED6B.jpg",
                    genre_ids: [99, 18],
                    id: 842354,
                    original_language: "fr",
                    original_title: "Animal",
                    overview:
                        "16-year-old Bella and Vipulan are part of a generation convinced its very future is in danger. Between climate change and the 6th mass extinction of wildlife, their world could well be inhabitable 50 years from now. They have sounded the alarm over and over, but nothing has really changed. So they’ve decided to tackle the root of the problem: our relationship with the living world. Over the course of an extraordinary journey, they come to realize just how deeply humans are tied to all other living species. And that by saving them… we’re also saving ourselves. Humans thought they could distance themselves from nature, but humans are part and parcel of nature. For man is, after all, an Animal.",
                    popularity: 2.885,
                    poster_path: "/soVVTTA0PqYPaCviMxNALvtY23e.jpg",
                    release_date: "2021-12-01",
                    title: "Animal",
                    video: false,
                    vote_average: 7.3,
                    vote_count: 25,
                },
            ],
        },
        name: "Animal",
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
