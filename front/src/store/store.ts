import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import standartReducer from './slice/standartSlice/standartSlice';
import designerReducer from './slice/designerSlice/designerSlice';

const rootReducer = combineReducers({
  standart: standartReducer,
  designer: designerReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
