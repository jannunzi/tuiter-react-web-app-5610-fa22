import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findAllTuitsThunk, updateTuitThunk} from "./tuits-thunks";

const initialState = {
    tuits: [
        {_id: '123', tuit: 'Tuit 123', likes: 1234, liked: true},
        {_id: '234', tuit: 'Tuit 234', likes: 2345, liked: false},
        {_id: '345', tuit: 'Tuit 345', likes: 3456, liked: true},
    ],
    loading: false,
}

const tuitsReducer = createSlice({
    name: 'tuits',
    initialState,
    reducer: {
        findAllTuits: (state, action) => {
            state.tuits = action.payload
        }
    },
    extraReducers: {
        [findAllTuitsThunk.pending]: (state, action) => {
            state.loading = true
            state.tuits = []
        },
        [findAllTuitsThunk.fulfilled]: (state, {payload}) => {
            state.tuits = payload
            state.loading = false
        },
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.tuits = state.tuits.filter(tuit => tuit._id !== payload)
        },
        [createTuitThunk.fulfilled]: (state, {payload}) => {
            state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]: (state, {payload}) => {
            const tuitIndex = state.tuits.findIndex(tuit => tuit._id === payload._id)
            state.tuits[tuitIndex] = payload
        }
    }
})

export default tuitsReducer.reducer