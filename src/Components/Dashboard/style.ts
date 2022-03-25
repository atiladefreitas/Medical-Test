import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ECF8F9;
  display: flex;
  overflow: auto;
  
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 

`;

export const Aside = styled.aside`
  display: flex;
  width: 15%;
  min-width: 200px;
  height: 100vh;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 80px;
    padding-bottom: 20px;
    
  } 

`;

export const Main = styled.main`
  display: flex;
  width: 85%;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex: 1;
`;
