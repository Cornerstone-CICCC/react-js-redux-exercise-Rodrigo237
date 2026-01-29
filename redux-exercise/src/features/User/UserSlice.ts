import {createSlice,type PayloadAction} from "@reduxjs/toolkit"

type UserState = {
    firstname: string;
    lastname: string;
    age: number;
}

const initialState: UserState = {
    firstname: "Pedro",
    lastname: "Lopez",
    age: 25,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        incrementAge: (state) =>{
            state.age += 1;
        },
        setFirstname: (state, action: PayloadAction<string>) =>{
            state.firstname = action.payload;  
        },
        setLastname: (state, action: PayloadAction<string>) =>{
            state.lastname = action.payload;
        },
    },
});

export const {incrementAge, setFirstname, setLastname} = userSlice.actions;

export default userSlice.reducer;