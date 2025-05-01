import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: {}, 
    },
    reducers:{
        addSearchList : (state, actions) => {
            state.search = {...actions.payload, ...state.search}
        }
    }
})

export const {addSearchList} = searchSlice.actions
export default searchSlice.reducer;