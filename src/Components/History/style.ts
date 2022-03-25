import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 450px) {
    width: 100%;
} 
  
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px 20px;

  @media screen and (max-width: 450px) {

  } 
`;

export const Table = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100% / 19);
  min-height: 50px;
  margin: 5px 0;
  &:nth-child(1) {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 450px) {
    justify-content: space-between;
  } 
`;

export const TableCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  & > span {
    font-size: 14px;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 5px;
    color: #333;
    min-width: 70px;
    text-align: center;

    @media screen and (max-width: 450px) {
      display: none;
  } 
  }

  @media screen and (max-width: 450px) {
    
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  align-self: flex-start;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0px;
`;

export const HistoryWrapper = styled.div`

@media screen and (max-width: 450px) {
      display: none;

  } 
`