import {createSlice, createAsyncThunk , isAnyOf} from '@reduxjs/toolkit';
import axios from "axios"
const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL


export const loginUser = createAsyncThunk('login', async (body: {[key: string]: any}) => {
    
        const config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'System-Key': 1234
            },
            body: JSON.stringify(body)
        };

      const data = await fetch(`/api/v2/auth/login`, config)
        .then(response => {
          // console.log(response)
          return response.json()})
        .then(data => 
            {
                // console.log(data)
                return data
            });
            
            console.log(data)
            return data;
    }
  );


  // Create New Shop 
  export const registerUser = createAsyncThunk('register', async (body: {[key: string]: any}) => {
    
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'System-Key': 1234
        },
        body: JSON.stringify(body)
    };

    const data = await fetch(`/api/v2/auth/login`, config)
        .then(response => {
          // console.log(response)
          return response.json()})
        .then(data => 
            {
                // console.log(data)
                return data
            });
            
            console.log(data)
            return data;
    }
);

  interface InitialState {
    data: any,
    isLoading: boolean
  }

const userSlice = createSlice({
        name: "users",
        initialState:<InitialState> {
            data: null, 
            isLoading: false,
        },
        reducers:{},
        extraReducers: (builder) => {
        
        builder.addMatcher(
            isAnyOf(loginUser.pending, registerUser.pending),
            (state) => {
                    state.isLoading = true;
                }
            )
    
          builder.addMatcher(
            isAnyOf(loginUser.fulfilled, registerUser.fulfilled),
            (state, { payload }) => {
                  state.isLoading = false;
                  state.data = payload
                }
          )
    
          builder.addMatcher(
            isAnyOf(loginUser.rejected, registerUser.rejected),
            (state, { payload }) => {
                  state.isLoading = false;
                  state.data = payload
                }
          )
        },
})

export default userSlice.reducer;