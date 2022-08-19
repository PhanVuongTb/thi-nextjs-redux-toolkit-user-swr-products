import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from './../models/user';
import { signin, signup } from './../api/auth';

interface IUser {
  value: any[];
}

const initialState: IUser = {
  value: [],
};

export const dangNhap = createAsyncThunk("users/dangNhap", async (params: Users) => {
  const data = await signin(params);
  return data
})

export const dangKy = createAsyncThunk("users/dangKy", async (params: Users) => {
  const data = await signup(params);
  return data
})

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [dangKy.fulfilled]: (state, action) => {
      state.value.push(action.payload)
    },
    [dangNhap.fulfilled]: (state, action) => {
      state.value == action.payload
    },
  }
});


export default usersSlice.reducer;