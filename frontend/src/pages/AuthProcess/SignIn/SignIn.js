import SignInRight from "../../../Components/AuthComp/SignInRight/SignInRight";
import SignInLeft from "../../../Components/AuthComp/SignInLeft/signIn";
import { SignInDiv } from "./SignIn.style";

function SignIn() {
  return (
    <SignInDiv>
      <SignInLeft />
      <SignInRight />
    </SignInDiv>
  );
}

export default SignIn;
