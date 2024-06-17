import { createSlice } from '@reduxjs/toolkit';

interface State {
  isEnglish: boolean;
}

const initialState: State = {
  isEnglish: false,
};

const selectedLanguage = createSlice({
  name: 'selectedLanguage',
  initialState,
  reducers: {
    switchToRussian: (state) => {
      state.isEnglish = false;
    },
    switchToEnglish: (state) => {
      state.isEnglish = true;
    },
  },
});

export const { switchToEnglish, switchToRussian } = selectedLanguage.actions;
export default selectedLanguage.reducer;
