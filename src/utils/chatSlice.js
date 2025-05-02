import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: []
    },
    reducers:{
        addMessage: (state, actions) => {
            state.message.splice(50, 1);
            state.message.unshift(actions.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;