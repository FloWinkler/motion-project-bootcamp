import CongratsRight from "../../../Components/AuthComp/CongratsRight/CongratsRight";
import SignInLeft from "../../../Components/AuthComp/SignInLeft/signIn";
import { CongratulationsDiv } from "./Congratulations.style";

function Congratulations() {
  return (
    <CongratulationsDiv>
      <SignInLeft />
      <CongratsRight />
    </CongratulationsDiv>
  );
}

export default Congratulations;
