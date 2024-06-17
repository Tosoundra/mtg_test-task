import { UserReviewType } from '@entities/userReview/lib/types/UserReviewType';

type Languages = 'ru' | 'en';

export type UserFeedbackResponseType = {
  [key in Languages]: {
    [client_id: string]: UserReviewType;
  };
};
