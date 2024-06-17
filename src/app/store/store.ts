import { configureStore } from '@reduxjs/toolkit';
import usersFeedbackSlice from './reducers/usersFeedback/usersFeedback.slice';
import selectedLanguageSlice from './reducers/selectedLanguage/selectedLanguage.slice';

export const store = configureStore({
  reducer: {
    data: usersFeedbackSlice,
    selectedLanguage: selectedLanguageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
