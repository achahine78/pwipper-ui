import { Pweep } from "./types/Pweep";
import { User } from "./types/User";

export const user: User = {
  id: "user",
  username: "achahine78",
  image: "https://picsum.photos/200",
  handle: "achahine78",
  bio: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  followerCount: 125,
  followingCount: 12345
};

export const pweep: Pweep = {
  id: "pweep",
  createdAt: "whatever",
  content:
    "shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz shu lshabezz",
  likes: 123,
  repweeps: 400,
  user,
};

export const pweeps = [
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
  pweep,
];
