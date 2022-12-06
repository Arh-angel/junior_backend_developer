import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DesignerService from '../../../services/DesignerService';
import { RootState } from '../../store';

export const getDesigners = createAsyncThunk(
  'designer/getDesigners',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await DesignerService.getDesigners();

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);
export interface DesignerState {
  designers: any[];
  error: string
}

const initialState: DesignerState = {
  designers: [],
  error: ''
};

export const designerSlice = createSlice({
  name: 'designer',
  initialState,
  reducers: {
    clearDesigners: (state) => {
      state.designers = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDesigners.fulfilled, (state, action) => {
      state.designers = [
        ...action.payload
      ];
    });
    builder.addCase(getDesigners.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });
  },
});

export const { clearDesigners } = designerSlice.actions;

export const selectDesigner = (state: RootState) => state.designer.designers;

export default designerSlice.reducer;
