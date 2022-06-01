import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as axios from 'axios';

const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async (page, { rejectWithValue }) => {
    try {
      const { data, status, headers } = await axios.get(
        `https://api.thecatapi.com/v1/images/search?order=ASC&limit=15&page=${page}&mime_types=jpg`,
        { headers: { 'x-api-key': '3b269be7-481c-4d32-aa0c-4e2bfa73467c' } }
      );

      if (status >= 200 && status <= 299) {
        const totalPagesCount = Math.floor(headers['pagination-count'] / 15);

        return { data, totalPagesCount };
      }
      else if (status >= 400 && status <= 599) {
        throw new Error('dasdads');
      }
    }
    catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  cats: [],
  likedCats: [],
  initialized: false,
  isFetching: false,
  totalPagesCount: 0,
  page: 0,
  error: '',
};

const reducers = {
  toggleLike(state, { payload: id }) {
    const { likedCats } = state;

    const index = likedCats.indexOf(id);

    likedCats.includes(id) ? state.likedCats.splice(index, 1) : state.likedCats.push(id);
  },

  updatePage(state) {
    if (state.page < state.totalPagesCount && !state.isFetching) {
      state.page += 1;
    }
  },
};

const extraReducers = builder => {
  builder
    .addCase(
      fetchCats.pending,
      state => {
        state.isFetching = true;
      }
    )
    .addCase(
      fetchCats.fulfilled,
      (state, { payload: { data: cats, totalPagesCount } }) => {
        state.cats.push(...cats);
        state.isFetching = false;
        state.initialized = true;
        state.totalPagesCount = totalPagesCount;
      }
    )
    .addCase(
      fetchCats.rejected,
      (state, { payload: errorMessage }) => {
        state.error = errorMessage;
      }
    )
}

const catsSlice = createSlice({ name: 'cats', initialState, reducers, extraReducers });

const { actions, reducer } = catsSlice;

export default reducer;
export { fetchCats };
export const { toggleLike, updatePage } = actions;