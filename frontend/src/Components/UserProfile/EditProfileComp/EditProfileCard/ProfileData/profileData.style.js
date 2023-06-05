import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  font-size: 0.8rem;
`;

export const ProfileDataLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  padding: 3%;
`;

export const ProfileAbout = styled.div`
  height: 50%;
`;

export const ProfileContacts = styled.div`
  display: flex;
  height: 50%;
`;

export const ProfileEmail = styled.div`
  width: 65%;
`;

export const ProfilePhone = styled.div`
  width: 35%;
`;

export const ProfileDataRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 3%;
`;

export const LikedElementsDiv = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const LikedIndivualElementDiv = styled.div`
  mix-blend-mode: normal;
  background-color: #f4f3f3;
  border-radius: 2rem;
  height: 2.1rem;
`;

export const LikedIndivualElementP = styled.p`
  font-weight: 400;
  font-size: 0.7rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

//copied from verification form

export const RightSide = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60%;
`;

export const SignInHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  min-height: 40px;
  width: 100%;
  gap: 3%;
  margin-top: 3%;
`;

export const TextBesidesButton = styled.p`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
`;

export const HeaderButton = styled.button`
  background-color: white;
  padding: 0.8rem 2.2rem;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  margin-right: 4%;
  &:hover {
    cursor: pointer;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%;
  height: 90%;
  width: 100%;
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 4%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputCode = styled.input`
  line-height: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  width: 99%;
  margin-top: 5%;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

export const InputField = styled.input`
  line-height: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  width: 90%;
  margin-top: 12%;
`;

export const FormIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  margin-top: 22px;
  margin-left: 20px;
`;

export const CompleteButton = styled.button`
  padding: 1.2rem 6rem;
  border-radius: 30px;
  border: none;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  color: white;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 6%;
  &:hover {
    cursor: pointer;
  }
`;

export const ProgressCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8%;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;