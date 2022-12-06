import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DesignerService from '../../../services/DesignerService';
import { RootState } from '../../store';

export const getDesigner = createAsyncThunk(
  'designer/getDesigner',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await DesignerService.getDesigner();

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
    builder.addCase(getDesigner.fulfilled, (state, action) => {
      state.designers = {
        ...state.designers,
        ...action.payload
      };
    });
    builder.addCase(getDesigner.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });
  },
});

export const { clearDesigners } = designerSlice.actions;

export const selectDesigner = (state: RootState) => state.designer.designers;

export default designerSlice.reducer;
