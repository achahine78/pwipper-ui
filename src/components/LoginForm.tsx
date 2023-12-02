import { useState } from "react";
import "./LoginForm.scss";
import { FlexContainer } from "./ui/FlexContainer";
import { FormInput } from "./ui/FormInput";
import { addBearerToken, privateAxios } from "../api";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
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
      />
      <FormInput
        label="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <FlexContainer justifyContent="flex-end">
        <button type="submit" className="login-form__button">
          Login
        </button>
      </FlexContainer>
    </form>
  );
};
