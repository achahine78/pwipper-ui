import { SignupForm } from "../components/SignupForm";
import { FlexContainer } from "../components/ui/FlexContainer";

export const Signup = () => {
  return (
    <FlexContainer
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <SignupForm />
    </FlexContainer>
  );
};
