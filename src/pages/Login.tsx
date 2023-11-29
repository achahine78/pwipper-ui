import { LoginForm } from "../components/LoginForm";
import { FlexContainer } from "../components/ui/FlexContainer";

export const Login = () => {
  return (
    <FlexContainer
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <LoginForm />
    </FlexContainer>
  );
};
