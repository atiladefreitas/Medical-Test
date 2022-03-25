import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 63vh;
  background-color: #fff;
  margin-bottom: 50px;
  border-radius: 5px;
  flex-direction: column;
`;

export const ProgressPatientList = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  margin-bottom: -10px;
  user-select: none;
`;

export const ListItem = styled.div`
  max-width: 150px;
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  transition: all 0.3s;
  cursor: pointer;
  background-color: #fff;
  font-size: 1rem;
  gap: 20px;
  user-select: none;
`;

export const AppointmentList = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;

  @media screen and (max-width: 450px) {

    }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

˛
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
  
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  user-select: none;
  & > span {
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 5px;
    color: #000;
    min-width: 70px;

    @media screen and (max-width: 450px) {
    display: none;
}
  }
  &:nth-child(1) {
    justify-content: stretch;
  }
  &:nth-child(4) {
    justify-content: flex-end;
  }

  & > svg {
    @media screen and (max-width: 450px) {
    display: none;
}
  }
`;

export const AppointmentDetails = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  flex-direction: column;
`;
export const HeaderDetails = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;


`;
export const TitleDetails = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;
export const DateAppointment = styled.div`
  font-size: 1rem;
  
`;
export const BodyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  width: 95%;
  margin: 0 auto;
  font-size: 1rem;
`;

export const NotAppointments = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 0 auto;
`;
