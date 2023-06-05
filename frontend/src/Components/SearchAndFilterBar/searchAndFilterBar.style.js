import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for Firefox 4+, Opera, Chrome */
  
`;

export const SearchBarWrapper = styled.div`
  width: 64rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerWrapperLeft = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: start;
  
`;
export const SearchIcon = styled.img`
  margin: 0 1rem 0 1rem;
  height: 1rem;
`;
export const SearchInput = styled.input`
  border-style: none;
  background-color: #f8f8f9;
  ::placeholder {
    font-size: 11px;
  }
`;
export const ContainerWrapperRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: end;

  
`;
export const FilterWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 12rem;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;
export const FilterSetter = styled.p`
  height: 100%;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

