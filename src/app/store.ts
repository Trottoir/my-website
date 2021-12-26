import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import skillsReducer from '../features/skills/skillsSlice';

export const store = configureStore({
  reducer: {
    skills: skillsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
