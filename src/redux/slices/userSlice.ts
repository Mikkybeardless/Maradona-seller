import {createSlice, createAsyncThunk , isAnyOf} from '@reduxjs/toolkit';
const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL


export const loginUser = createAsyncThunk('login', async (body: {[key: string]: any}) => {
    
        const config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(body)
        };

      const data = await fetch(`${apiUrl}/auth/login`, config)
        .then(response => response.json())
        .then(data => 
            {
                console.log(data)
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
            isAnyOf(loginUser.pending),
            (state) => {
                    state.isLoading = true;
                }
            )
    
          builder.addMatcher(
            isAnyOf(loginUser.fulfilled),
            (state, { payload }) => {
                  state.isLoading = false;
                  state.data = payload
                }
          )
    
          builder.addMatcher(
            isAnyOf(loginUser.rejected),
            (state, { payload }) => {
                  state.isLoading = false;
                  state.data = payload
                }
          )
        },
})

export default userSlice.reducer;