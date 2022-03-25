/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IPatient } from '../History';
import formatCpf from '../../utils/formatCpf';
import formatHealthID from '../../utils/formatHealthID';
import { IAppointment } from './../History/index';
import {
  Container,
  Title,
  PatientCard,
  TextInfo,
  CpfAndAgeBox,
  CPF,
  Age,
  HealthID,
  DateAppointment,
  CardContainer,
} from './style';
import formatToCapitalized from '../../utils/formatToCapitalized';
import formatDate from '../../utils/formateDate';
import PatientInformation from './PatientInfomation';

const SelectedPatients = (): JSX.Element => {
  const { id } = useParams();
  const [patient, setPatient] = useState({} as IPatient);
  const [totalAppointments, setTotalPatientAppointments] = useState(
    [] as IAppointment[],
  );
  const [patientAppointments, setPatientAppointments] = useState(
    [] as IAppointment[],
  );

  async function getPatient(): Promise<void> {
    const response = await axios.get(
      `https://cm42-medical-dashboard.herokuapp.com/patients/${id}`,
    );
    setPatient(response.data);
    return response.data;
  }

  async function getAppointments(): Promise<void> {
    const response = await axios.get(
      `https://cm42-medical-dashboard.herokuapp.com/appointments`,
    );
    setTotalPatientAppointments(response.data);
    return response.data;
  }

  const filterPatientAppointments = (): void => {
    const filteredAppointments = totalAppointments.filter(
      (appointment: IAppointment) => appointment.patientId === patient.id,
    );
    setPatientAppointments(filteredAppointments);
  };

  useEffect(() => {
    getPatient();
    getAppointments();
    filterPatientAppointments();
  }, [patient]);

  function calcAge(date: Date) {
    const clientAge = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - clientAge.getFullYear();
    return `${age} y/o`;
  }

  const document = formatCpf(patient.document);
  const healthID = formatHealthID(patient.healthSystemId);
  const orderAppointments = patientAppointments.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

  return (
    <Container>
      <CardContainer>
        <PatientCard>
          <Title>Patient Info</Title>
          <TextInfo>{patient.name}</TextInfo>
          <CpfAndAgeBox>
            <CPF>{document}</CPF>
            <Age>{calcAge(patient.birthday)}</Age>
          </CpfAndAgeBox>
        </PatientCard>
        <PatientCard>
          <Title>Patient Plan</Title>
          <TextInfo>{patient.insurancePlan}</TextInfo>
          <HealthID>{healthID}</HealthID>
        </PatientCard>
        <PatientCard>
          <Title>Latest App.</Title>
          <TextInfo>{formatToCapitalized(orderAppointments[0]?.specialty)}</TextInfo>
          <DateAppointment>{formatDate(orderAppointments[0]?.startTime)}</DateAppointment>
        </PatientCard>
      </CardContainer>
      <>
        <PatientInformation
          patient={patient}
          appointments={patientAppointments}
          orderAppointments={orderAppointments}
          setPatientAppointments={setPatientAppointments}
        />
      </>
    </Container>
  );
};

export { SelectedPatients };
