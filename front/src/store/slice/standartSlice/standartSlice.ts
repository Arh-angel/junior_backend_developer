import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StandartService from '../../../services/StandartService';
import { RootState } from '../../store';

export const createStandart = createAsyncThunk(
  'standart/createStandart',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { designer, title } = userData;

      const response = await StandartService.createStandart(designer, title);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const getStandart = createAsyncThunk(
  'standart/getStandart',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await StandartService.getStandart();

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export interface StandartState {
  standarts: any[];
  error: string
}

const initialState: StandartState = {
  standarts: [],
  error: ''
};

export const standartSlice = createSlice({
  name: 'standart',
  initialState,
  reducers: {
    clearStandarts: (state) => {
      state.standarts = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createStandart.fulfilled, (state, action) => {
      state.standarts = [
        ...action.payload
      ];
    });
    builder.addCase(createStandart.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });
    builder.addCase(getStandart.fulfilled, (state, action) => {
      state.standarts = [
        ...action.payload
      ];
    });
    builder.addCase(getStandart.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });
  },
});

export const { clearStandarts } = standartSlice.actions;

export const selectStandarts = (state: RootState) => state.standart.standarts;

export default standartSlice.reducer;
