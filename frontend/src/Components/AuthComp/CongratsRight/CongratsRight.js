import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckMarkIcon from "../../../assets/svgs/checkmark.svg";
import {
  CheckMarkIconContainer,
  ConfirmationText,
  ContinueButton,
  FormTitle,
  ProgressCirclesContainer,
  RightSide,
} from "./CongratsRight.style";

function CongratsRight() {
  const navigate = useNavigate();

  const userEmail = useSelector((store) => store.signupemail.signupemail);

  //navigate to verification page
  const handleContinueClick = () => {
    navigate("/verification");
  };

  return (
    <RightSide>
      <FormTitle>Congratulations!</FormTitle>
      <CheckMarkIconContainer>
        <img src={CheckMarkIcon} alt="Check mark" />
      </CheckMarkIconContainer>
      <ConfirmationText>We’ve sent a confirmation code to your email</ConfirmationText>
      <ConfirmationText>{userEmail}</ConfirmationText>
      <ContinueButton onClick={handleContinueClick}>CONTINUE</ContinueButton>
      <ProgressCirclesContainer>
        <svg height="20" width="20">
          <circle
            cx="8"
            cy="8"
            r="0.3rem"
            fill="white"
            stroke="rgba(0, 0, 0, 0.2)"
            strokeWidth="2"
          />
        </svg>
        <svg height="20" width="20">
          <circle cx="8" cy="8" r="0.3rem" fill="black" stroke="black" />
        </svg>
        <svg height="20" width="20">
          <circle
            cx="8"
            cy="8"
            r="0.3rem"
            fill="white"
            stroke="rgba(0, 0, 0, 0.2)"
            strokeWidth="2"
          />
        </svg>
      </ProgressCirclesContainer>
    </RightSide>
  );
}

export default CongratsRight;
