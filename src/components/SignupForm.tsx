import { useState } from "react";
import "./SignupForm.scss";
import { FormInput } from "./ui/FormInput";
import { addBearerToken, privateAxios } from "../api";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "./ui/FlexContainer";

export const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    privateAxios
      .post("/signup", {
        username,
        handle,
        password,
        bio,
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
    <form className="signup-form" onSubmit={onSubmit}>
      <div className="signup-form__title">Create your account</div>
      <FormInput
        label="Name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
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
      <FormInput
        label="Bio"
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
      <FlexContainer justifyContent="flex-end">
        <button type="submit" className="signup-form__button">
          Signup
        </button>
      </FlexContainer>
    </form>
  );
};
