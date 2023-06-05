import styled from "styled-components";

export const RightSide = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 60%;
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 20%;
`;

export const CheckMarkIconContainer = styled.div`
  width: 20%;
  max-width: 130px;
`;

export const ConfirmationText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  width: 60%;
  text-align: center;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
`;

export const ContinueButton = styled.button`
  padding: 1.2rem 6rem;
  border-radius: 30px;
  border: none;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  color: white;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 12%;
  &:hover {
    cursor: pointer;
  }
`;

export const ProgressCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8%;
`;
