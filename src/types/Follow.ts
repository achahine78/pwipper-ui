import { User } from "./User";

export type Follow = {
  followedBy: User;
  followedById: string;
  followingId: string;
};
