import { useState } from "react";
import "./LoginForm.scss";
import { FlexContainer } from "./ui/FlexContainer";
import { FormInput } from "./ui/FormInput";
import { addBearerToken, privateAxios } from "../api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { Button } from "./ui/Button";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");

  const { storeUserInLocalStorage } = useUser();

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    privateAxios
      .post("/login", {
        handle,
        password,
      })
      .then(({ data }) => {
        if (data?.token) {
          localStorage.setItem("token", data?.token);

          storeUserInLocalStorage({
            id: data.id,
            username: data.username,
            handle: data.handle,
            image: data.image,
            bio: data.bio,
          });

          addBearerToken(data?.token);
          navigate("/home");
        }
      })
      .catch(({ response }) => {
        const { data } = response;
        if (data.message) {
          console.error(data.message);
        } else {
          console.error("Something went wrong. Please try again later.");
        }
      });
  };
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="login-form__title">Login to your account</div>
      <FormInput
        label="Handle"
        onChange={(e) => {
          setHandle(e.target.value);
        }}
        value={handle}
      />
      <FormInput
        label="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <FlexContainer justifyContent="flex-end">
        <Button label="Login" type="submit"/>
      </FlexContainer>
    </form>
  );
};
