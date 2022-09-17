import { createSlice } from "@reduxjs/toolkit";
const initialState = { 
    city: '',
    data: []
}
export const processingRequest = createSlice({
    name:'request',
    initialState,
    reducers: {
        setCity: (state,action) => { 
            state.city = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        }
    }
})


export const {setCity, setData} = processingRequest.actions
export default processingRequest.reducer