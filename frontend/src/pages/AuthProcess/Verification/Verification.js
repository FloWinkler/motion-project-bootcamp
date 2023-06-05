import VerificationRight from "../../../Components/AuthComp/VerificationRight/VerificationRight";
import SignInLeft from "../../../Components/AuthComp/SignInLeft/signIn";
import { VerificationDiv } from "./Verification.style";

function Verification() {
  return (
    <VerificationDiv>
      <SignInLeft />
      <VerificationRight />
    </VerificationDiv>
  );
}

export default Verification;
