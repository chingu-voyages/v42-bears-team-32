import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginUser as login, registerUser as register} from "../../api/api.js"
const initialState = {
    user: null,
    error: null, 
    loading: false
}

export const loginUser = createAsyncThunk('auth/loginUser', async (creds) => {
    let response
    try{
        response = await login(creds)
        return response.data
    }catch(error){
        return error.message
    }
})


export const registerUser = createAsyncThunk('auth/registerUser', async (creds) => {
  let response;
  try{
    response = await register(creds)
    return response.data;
  }catch(error){
    return error.message
  }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
          state.loading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false
          state.user = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
        })
        builder.addCase(registerUser.pending, state => {
          state.loading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false
          state.user = action.payload
        })
        builder.addCase(registerUser.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
        })
    }
})


export default authSlice.reducer
