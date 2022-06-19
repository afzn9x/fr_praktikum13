import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

//buat slice
const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            //membuat login addMovie
            state.movies.push(action.payload);
        },
        deleteMovie() {},
    }
});


//generate reducer
const moviesReducer = movieSlice.reducer;
const { addMovie, deleteMovie } = movieSlice.actions;

export default moviesReducer;
export {
    addMovie, deleteMovie
};