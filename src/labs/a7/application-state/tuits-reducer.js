import {createSlice} from "@reduxjs/toolkit";

const tuits = [
  {_id: 123, tuit: 'Tuit 1234', liked: true, likes: 1234},
  {_id: 234, tuit: 'Tuit 2', liked: false, likes: 2345},
  {_id: 345, tuit: 'Tuit 3', liked: true, likes: 3465},
  {_id: 456, tuit: 'Tuit 4', liked: false, likes: 4567},
]

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    addTuit(state, action) {
      state.push({
        _id: (new Date()).getTime(),
        tuit: action.payload,
        likes: 0,
        liked: false
      })
    },
    deleteTuit(state, action) {
      // alert(action.payload.tuit)
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state.splice(tuitIndex, 1)
    },
    likeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].liked = true;
      state[tuitIndex].likes += 1;
    },
    unlikeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].liked = false;
      state[tuitIndex].likes -= 1;
    },
    updateTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].tuit = action.payload.tuit
    },
    replyTuit() {},
    retuitTuit() {}
  }
});

export const {
  deleteTuit,
  addTuit,
  updateTuit,
  likeTuit,
  unlikeTuit
} = tuitsSlice.actions
export default tuitsSlice.reducer
