import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then(async res =>
    JSON.stringify({
      data: await res.json(),
      status: res.status,
    }),
  );
});

export const getUsers = createSlice({
  name: 'getUsers',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const data = JSON.parse(action.payload);
      state.users = data.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default getUsers.reducer;
