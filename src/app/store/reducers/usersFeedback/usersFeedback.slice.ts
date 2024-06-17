import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUsersFeedback } from '@widgets/Main/api/getUsersFeedback';
import { UserFeedbackResponseType } from 'src/shared/lib/types/UserFeedbackResponseType';

interface State {
  reviews: UserFeedbackResponseType | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  reviews: null,
  loading: false,
  error: null,
};

const usersFeedback = createSlice({
  name: 'usersFeedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getUsersFeedback.fulfilled,
        (state, action: PayloadAction<UserFeedbackResponseType>) => {
          state.reviews = action.payload;
          state.loading = false;
        },
      )
      .addCase(getUsersFeedback.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch data';
        state.loading = false;
      });
  },
});

export default usersFeedback.reducer;
