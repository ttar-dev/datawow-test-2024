import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false
};

const app = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setLoading(state, {payload}) {
            state.loading = payload;
            return state;
        }
    }
});

export const {setLoading} = app.actions;

export default app.reducer;
