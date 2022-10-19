import {createSlice} from "@reduxjs/toolkit";

const tuits = [
  {_id: 123, tuit: 'Tuit 1'},
  {_id: 2343, tuit: 'Tuit 2'},
  {_id: 345, tuit: 'Tuit 3'},
  {_id: 456, tuit: 'Tuit 4'},
]

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits
});

const tuitsReducer = () => {
  return tuits
}

// export default tuitsReducer;
export default tuitsSlice.reducer;