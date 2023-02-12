import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getAllFoods, getSingleFood } from '../api/api'

const initialState = {
    foods: [],
    food: {},
    loading: false, 
    error: null
}

export const fetchFoods = createAsyncThunk('food/fetchFoods', async () => {
    const response = await getAllFoods()
    return response.data
})


export const fetchSingleFood = createAsyncThunk('food/fetchSingleFood', async (id) => {
    const response = await getSingleFood(id)
    return response.data
})

const foodSlice = createSlice( {
    name: 'food',
    initialState: initialState, 
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchFoods.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.loading = false
            state.foods = action.payload
            state.error = ''
        })
        builder.addCase(fetchFoods.rejected, (state,action) => {
            state.loading = false
            state.foods = []
            state.error = action.error.message
        })
        builder.addCase(fetchSingleFood.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchSingleFood.fulfilled, (state, action) => {
            state.loading = false
            state.food = action.payload
            state.error = ''
        })
        builder.addCase(fetchSingleFood.rejected, (state,action) => {
            state.loading = false
            state.food = {}
            state.error = action.error.message
        })
    }
})

export const foodActions = foodSlice.actions
export default foodSlice.reducer