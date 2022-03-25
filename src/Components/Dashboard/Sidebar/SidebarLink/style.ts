import styled from 'styled-components';


export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: stretch;
  width: 80%;
  height: 3rem;
  gap: 1rem;
  cursor: pointer;
  padding: 0px 10px;
  border-radius: 5px;

  @media screen and (max-width: 1100px) {
     width: 50px;
     justify-content: center;
  } 

  & > svg {
    width: 1.3rem;
    height: auto;
    fill: #000;
  }

  &:hover {
    border-color: #333;
    background-color: #B2E7FF;
    transition: all 0.3s ease-in-out;
    transform: scale3d(1.02, 1.02, 1.02);
  }

  p { 
    font-size: 1.2rem;
    font-weight: 300;

    @media screen and (max-width: 1100px) {
     display: none;
  } 
  }
`;