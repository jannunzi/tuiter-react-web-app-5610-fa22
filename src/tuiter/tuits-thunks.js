import {createAsyncThunk} from "@reduxjs/toolkit";
import {createTuit, deleteTuit, findAllTuits, updateTuit} from "./tuits-service";

export const createTuitThunk = createAsyncThunk(
    'createTuit',
    async (tuitText) =>
        await createTuit(tuitText)
)

export const findAllTuitsThunk = createAsyncThunk(
    'tuits',
    async () => {
        return await findAllTuits()
    })

export const deleteTuitThunk = createAsyncThunk(
    'delete/tuit',
    async (tid) => await deleteTuit(tid)
)


export const updateTuitThunk = createAsyncThunk(
    'updateTuit',
    async (tid, tuitUpdates) =>
        await updateTuit(tid, tuitUpdates)
)