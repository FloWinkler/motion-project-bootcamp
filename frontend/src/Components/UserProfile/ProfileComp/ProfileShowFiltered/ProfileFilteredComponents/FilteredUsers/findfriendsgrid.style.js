import styled from "styled-components";

export const GridDiv = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  height: 100%;
  //aspect-ratio: 1/1;
  gap: 1rem;
  justify-items: center;
`;

export const FindFriednsPageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #f2f2f2;
  flex-wrap: nowrap;
`;
