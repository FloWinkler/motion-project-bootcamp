import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 6rem;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperDiv = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
`
export const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  
`;
export const InputField = styled.input`
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: start;
  border-style: none;
  opacity: 80%;
  ::placeholder {
    font-size: 11px;
    
  }
`;
export const SubmitButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
`;
export const SubmitButtonIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
`;
