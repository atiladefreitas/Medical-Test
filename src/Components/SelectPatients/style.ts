import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  padding: 10px;
  gap: 5px;
  margin: 0 auto;
  background-color: transparent;
  margin-bottom: 50px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
  background-color: transparent;
  margin-bottom: 20px;
  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
    :nth-child(2) {
      width: 50%;
      justify-content: flex-start;
      align-content: flex-start;
    }
  }
`;

export const PatientCard = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  height: 160px;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  /* @media screen and (max-width: 1150px) {
    :nth-child(2), :nth-child(3) {
      width: 50%;
    }
  } */
  @media screen and (max-width: 1150px) {
    :nth-child(1) {
      max-width: 99%;
    }
    :nth-child(2),
    :nth-child(3) {
      max-width: 49%;
    }

  }
  @media screen and (max-width: 840px) {
      :nth-child(1) {
        max-width: 99%;
      }
      :nth-child(2),
      :nth-child(3) {
        min-width: 200px;
      }
    }
    @media screen and (max-width: 630px) {
      :nth-child(1) {
        max-width: 99%;
      }
      :nth-child(2),
      :nth-child(3) {
        min-width: 200px;
      }
    }

    @media screen and (max-width: 450px) {
      :nth-child(1),
      :nth-child(2),
      :nth-child(3) {
        min-width: 100%;
      }
    }
`;

export const Title = styled.h1`
  font-size: 1em;
  font-weight: bold;
  align-self: flex-start;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0px 15px 0px;
`;

export const TextInfo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  align-self: flex-start;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0px 15px 0px;
`;

export const CpfAndAgeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0px 0px 15px 0px;
`;

export const CPF = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
  align-self: flex-start;
`;

export const Age = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
  align-self: flex-end;
`;

export const HealthID = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0px 0px 15px 0px;
`;

export const DateAppointment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0px 0px 15px 0px;
`;