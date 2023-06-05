import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 30rem;
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

