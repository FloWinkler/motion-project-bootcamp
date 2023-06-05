import SignUpRight from "../../../Components/AuthComp/SignUpRight/SignUpRight";
import SignInLeft from "../../../Components/AuthComp/SignInLeft/signIn";
import { SignUpDiv } from "./SignUp.style";

function SignUp() {
  return (
    <SignUpDiv>
      <SignInLeft />
      <SignUpRight />
    </SignUpDiv>
  );
}

export default SignUp;
