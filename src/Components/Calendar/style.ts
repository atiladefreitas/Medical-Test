import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 50px;
  border-radius: 5px;
  overflow-y: auto;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px 20px;
`;

export const TableHeader = styled.div`
  display: flex;
  flex: 1;
  gap: 5px;
  width: 100%;
  height: calc(100% / 19);
  min-height: 50px;
  margin: 5px 0;
`;

export const TableHeaderCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  user-select: none;
  &:nth-child(1) {
    width: 10%;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  flex: 1;
  gap: 5px;
  width: 100%;
  height: calc(100% / 19);
  min-height: 75px;
  margin: 5px 0;
`;

export const TableCell = styled.div`
  display: flex;
  width: 100% ;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ccc;
  border-radius: 5px;
  &:nth-child(1) {
    border: none;
    width: min-content;
    padding-right: 5px;
    font-weight: bold;
  }
`;
