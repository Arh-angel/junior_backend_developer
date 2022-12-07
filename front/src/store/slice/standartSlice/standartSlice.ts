import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import StandartService from '../../../services/StandartService';
import { RootState } from '../../store';

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const createStandart = createAsyncThunk(
  'standart/createStandart',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { designer, title } = userData;

      const response = await StandartService.createStandart(designer, title);

      return response.data;
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
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
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
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
    },
    clearError: (state) => {
      state.error = '';
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

export const { clearStandarts, clearError } = standartSlice.actions;

export const selectStandarts = (state: RootState) => state.standart.standarts;
export const selectError = (state: RootState) => state.standart.error;

export default standartSlice.reducer;
