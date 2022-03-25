import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ECF8F9;
  @media screen and (max-width: 1100px) {
   display: none; 
  }
`;

export const Box = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0px;
  user-select: none;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  border: 2px solid #056367;

  & > img {
    width: 60px;
  }
`;

export const Title = styled.h1`
  font-family: sans-serif;
`;
