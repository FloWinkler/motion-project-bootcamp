import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35%;
`;

export const ProfileCounterDiv = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileCounterAmount = styled.div`
  font-size: 1.2rem;
  padding-top: 40px;
  margin-left: 20%;
  height: 50%;
`;

export const ProfileCounterTag = styled.div`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
  height: 50%;
  margin-right: 40%;
  margin-left: 20%;
  padding-bottom: 10px;
  &:hover {
    border-bottom: 2px solid #ad73fd;
    cursor: pointer;
  }
  border-bottom: ${props =>
  props.active ? '2px solid #ad73fd' : 'none'};
`;
