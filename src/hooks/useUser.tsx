import { useState } from "react";
import { User } from "../types/User";

export const useUser = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const storeUserInLocalStorage = (user: Partial<User>) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return { user, storeUserInLocalStorage };
};
