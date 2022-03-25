import styled from 'styled-components';

export const Select = styled.select`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px; 
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 1100px) {
    margin-bottom: 0; 
  } 
  
  @media screen and (max-width: 450px) {
    margin-left: 50px;
  } 
`;