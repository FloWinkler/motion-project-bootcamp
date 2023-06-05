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

export const ColumnWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const RowWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ContentWrapperDiv = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100px;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const TextField = styled.textarea`
  width: 100%;
  height: fit-content;
  border: none;
  outline: none;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  font-size: 16px;
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 1rem;
  object-fit: cover;
`;


export const UploadWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;
export const BorderLineDiv = styled.div`
  width: 100%;
  max-width: 500px;
  height: 370px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
`;


export const PictureGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: 100px;
  gap: 1rem;
  justify-items: center;
  

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    &:hover {
      transform: scale(1.02);
    }
  }
  `
export const FileUploadButton = styled.input`
  &::file-selector-button {
    display: none;
    cursor: pointer;
  }
  
`;

export const UploadButtonIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  margin: 1rem;
  opacity: 40%;
`;


export const SubmitButtonStyle = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 1rem;
`;
export const SubmitButtonIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  
`;