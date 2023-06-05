import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainRenderContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridDiv = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  width: 100%;
  aspect-ratio: 1/1;
  gap: 1rem;
  justify-items: center;
  /* margin-top: 1rem; */
  background-color: #f2f2f2;
`;

export const WrapperDiv = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  &:hover {
      cursor: pointer;
    }
`;

export const FlexRowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const Name = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  &:hover {
      cursor: pointer;
    }
`;
export const Time = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  opacity: 80%;
`;
export const Menu = styled.img``;

export const PostText = styled.p`
  font-size: 12px;
`;
export const PostImage = styled.img`
  width: 100%;
  height: 300px;
  margin: 1rem 0;
  object-fit: cover;
  border-radius: 15px;
`;

export const PictureGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  grid-auto-rows: 200px;
  /* aspect-ratio: 1/1; */
  gap: 1rem;
  justify-items: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const GridImage = styled.img`
  border-radius: 15px;
`;

export const FooterWrapper = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
export const HeartIcon = styled.img`
  &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
    
`;
export const ActionButton = styled.p`
  margin: 0 2rem 0 1rem;
`;
export const ShareIcon = styled.img``;
export const SeperatorDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;
export const LikeCount = styled.p`
  margin: 0;
  opacity: 50%;
`;
