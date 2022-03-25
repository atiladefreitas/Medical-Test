import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #fff;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  } 
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    flex-direction: row;
  } 

`;

export const Logo = styled.div`
  width: 100%;
  padding: 8px 0;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    display: none;
  }

`

export const Title = styled.h1`

@media screen and (max-width: 1100px) {
    display: none ;
  }
`