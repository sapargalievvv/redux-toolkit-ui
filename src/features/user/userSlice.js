import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:'',
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setFirstName, setValue } = userSlice.actions

export default userSlice.reducer