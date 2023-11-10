import { User } from "./User";

export type Pweep = {
  id: string;
  createdAt: string;
  content: string;
  likes: number;
  repweeps: number;
  user: User
};
