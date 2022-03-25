import React, { useEffect, useState } from 'react';
import axios from 'axios';
import formatDate from '../../utils/formateDate';
import {
  FaBriefcaseMedical,
  FaFileMedical,
  FaRegCalendarPlus,
  FaHandHoldingMedical,
  FaPumpMedical,
} from 'react-icons/fa';

import { Container, TableContainer, Table, TableCell, Title, HistoryWrapper } from './style';

import {Loading} from '../Loading';
import Pagination from './Pagination';

export interface IAppointment {
  id: number;
  patientId: number;
  specialty: string;
  type: string;
  description: string;
  notes: string;
  status: string;
  startTime: Date;
  endTime?: Date;
}

export interface IPatient {
  id: number;
  name: string;
  document: string;
  healthSystemId: string;
  birthday: Date;
  insurancePlan: string;
}

function History(): JSX.Element {
  const [appointments, setAppointments] = useState([] as IAppointment[]);
  const [patients, setPatients] = useState([] as IPatient[]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  async function getAppointments(): Promise<void> {
    setIsLoading(true);
    const response = await axios.get(
      'https://cm42-medical-dashboard.herokuapp.com/appointments',
    );
    setAppointments(response.data);
    setIsLoading(false);
    return response.data;
  }

  async function getPatients(): Promise<void> {
    const response = await axios.get(
      'https://cm42-medical-dashboard.herokuapp.com/patients',
    );
    setPatients(response.data);
    return response.data;
  }

  useEffect(() => {
    getAppointments();
    getPatients();
  }, []);

  const orderAppointments = appointments.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

  const splitArrayTenByTen = orderAppointments.map((_, index) => {
    const tempArray = [];
    const pageLimit = Math.ceil(appointments.length / 10);
    if (index % 10 === 0) {
      for (let i = 0; i < pageLimit; i++) {
        tempArray.push(appointments.slice(i * 10, i * 10 + 10));
      }
    }
    const filterArray = tempArray.splice(0, tempArray.length);
    return filterArray;
  });
  return (
    <Container>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          <Title>History</Title>
          <TableContainer>
            {appointments.length > 0 && splitArrayTenByTen[0][currentPage].map(
              (appointment: IAppointment) => {
                return (
                  <Table key={appointment.id}>
                    <TableCell>{`${formatDate(
                      appointment.startTime,
                    )} - ${new Date(appointment.startTime).toLocaleTimeString(
                      'pt-BR',
                      {
                        hour: '2-digit',
                        minute: '2-digit',
                      },
                    )} ${
                      appointment.endTime
                        ? `- ${new Date(appointment.endTime).toLocaleTimeString(
                            'pt-BR',
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                            },
                          )}`
                        : ''
                    }`}</TableCell>
                    <TableCell>
                      <span
                        style={{
                          fontWeight: 'regular',
                          color: '#fff',
                          backgroundColor: `${
                            appointment.status === 'cancelled'
                            ? '#808080'
                            : appointment.status === 'absent'
                            ? '#E16259'
                            : appointment.status === 'completed'
                            ? '#3FCC71'
                            : '#8470FF'
                          }`,
                        }}
                      >
                        {appointment.status}
                      </span>
                    </TableCell>
                    {patients.map((patient: IPatient) => {
                      if (patient.id === appointment.patientId) {
                        return (
                          <TableCell
                            id={"PatientNames"}
                            style={{
                              fontWeight: 'regular',
                            }}
                            key={patient.id}
                          >
                            {patient.name}
                          </TableCell>
                        );
                      }
                      return null;
                    })}
                    <TableCell>
                      <HistoryWrapper>
                      {appointment.type === 'firstVisit' ? (
                        <>
                          <FaBriefcaseMedical size={20} />
                          <span>{appointment.type}</span>
                        </>
                      ) : appointment.type === 'exam' ? (
                        <>
                          <FaFileMedical size={20} />
                          <span>{appointment.type}</span>
                        </>
                      ) : appointment.type === 'followUp' ? (
                        <>
                          <FaRegCalendarPlus size={20} />
                          <span>{appointment.type}</span>
                        </>
                      ) : appointment.type === 'checkUp' ? (
                        <>
                          <FaHandHoldingMedical size={20} />
                          <span>{appointment.type}</span>
                        </>
                      ) : appointment.type === 'surgery' ? (
                        <>
                          <FaPumpMedical size={20} />
                          <span>{appointment.type}</span>
                        </>
                      ) : null}
                      </HistoryWrapper>
                    </TableCell>
                  </Table>
                );
              },
            )}
          </TableContainer>
        </>
      )}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        appointments={appointments}
      />
    </Container>
  );
}

export { History };
