import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 65%;
  font-size: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
