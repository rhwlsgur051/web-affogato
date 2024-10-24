import { UserResponse } from "./user";

export type FeedRequest = {
  feedDesc: string;
  feedImages: Array<string>;
};

export type Feed = {
  feedDesc: string;
  feedImages: string;
  feedNo: number;
  user: UserResponse;
};
