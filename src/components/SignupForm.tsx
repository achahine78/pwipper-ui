import { useState } from "react";
import "./SignupForm.scss";
import { FormInput } from "./ui/FormInput";
import { addBearerToken, privateAxios } from "../api";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "./ui/FlexContainer";
import { useUser } from "../hooks/useUser";
import { Button } from "./ui/Button";

export const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const { storeUserInLocalStorage } = useUser();

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
    <form className="signup-form" onSubmit={onSubmit}>
      <div className="signup-form__title">Create your account</div>
      <FormInput
        label="Name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
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
      <FormInput
        label="Bio"
        onChange={(e) => {
          setBio(e.target.value);
        }}
        value={bio}
      />
      <FlexContainer justifyContent="flex-end">
        <Button label="Signup" type="submit"/>
      </FlexContainer>
    </form>
  );
};
