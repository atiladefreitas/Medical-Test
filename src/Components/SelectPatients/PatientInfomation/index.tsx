import React, { useEffect, useState } from 'react';
import {
  Container,
  ListItem,
  ProgressPatientList,
  AppointmentList,
  TableContainer,
  Table,
  TableCell,
  AppointmentDetails,
  HeaderDetails,
  Title,
  TitleDetails,
  DateAppointment,
  BodyDetails,
  Text,
  NotAppointments,
} from './style';
import formatDate from '../../../utils/formateDate';
import {
  FaBriefcaseMedical,
  FaFileMedical,
  FaFileMedicalAlt,
  FaHandHoldingMedical,
  FaPumpMedical,
} from 'react-icons/fa';
import { IAppointment, IPatient } from '../../History';
import formatToCapitalized from '../../../utils/formatToCapitalized';

interface IPatientProps {
  patient: IPatient;
  appointments: IAppointment[];
  orderAppointments: IAppointment[];
  setPatientAppointments: (appointments: IAppointment[]) => void;
}

const PatientInformation = ({
  orderAppointments,
}: IPatientProps): JSX.Element => {
  const [selected, setSelected] = useState<number>();
  const options = [
    {
      name: 'Recent',
    },
    {
      name: 'Upcoming',
    },
    {
      name: 'History',
    },
  ];

  const recent = orderAppointments.filter(
    (appointment: IAppointment) =>
      appointment.status === 'pending' ||
      appointment.status === 'completed' ||
      appointment.status === 'canceled' ||
      appointment.status === 'absent',
  );

  const upcoming = orderAppointments.filter(
    (appointment: IAppointment) => appointment.status === 'pending',
  );

  const history = orderAppointments.filter(
    (appointment: IAppointment) =>
      appointment.status === 'completed' ||
      appointment.status === 'canceled' ||
      appointment.status === 'absent',
  );

  const render = selected === 0 ? recent : selected === 1 ? upcoming : history;

  const handleClick = (index: number) => {
    if (selected === index) {
      setSelected(undefined);
    } else {
      setSelected(index);
    }
  };

  useEffect(() => {
    setSelected(0);
  }, []);

  return (
    <>
      <ProgressPatientList>
        {options.map((option, index) => (
          <ListItem
            key={index}
            onClick={() => handleClick(index)}
            role="button"
            style={{
              backgroundColor: selected === index ? '#fff' : '#eee',
            }}
          >
            {option.name}
          </ListItem>
        ))}
      </ProgressPatientList>
      <Container>
        <AppointmentList>
          <TableContainer>
            {render.length > 0 ? (
              render.map((appointment) => {
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
                      {appointment.type === 'firstVisit' ? (
                        <>
                          <FaBriefcaseMedical size={20} />
                          <span>{formatToCapitalized(appointment.type)}</span>
                        </>
                      ) : appointment.type === 'exam' ? (
                        <>
                          <FaFileMedical size={20} />
                          <span>{formatToCapitalized(appointment.type)}</span>
                        </>
                      ) : appointment.type === 'followUp' ? (
                        <>
                          <FaFileMedicalAlt size={20} />
                          <span>{formatToCapitalized(appointment.type)}</span>
                        </>
                      ) : appointment.type === 'checkUp' ? (
                        <>
                          <FaHandHoldingMedical size={20} />
                          <span>{formatToCapitalized(appointment.type)}</span>
                        </>
                      ) : appointment.type === 'surgery' ? (
                        <>
                          <FaPumpMedical size={20} />
                          <span>{formatToCapitalized(appointment.type)}</span>
                        </>
                      ) : null}
                    </TableCell>
                    <TableCell>
                      <span
                        style={{
                          color: '#fff',
                          textAlign: 'center',
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
                  </Table>
                );
              })
            ) : (
              <NotAppointments>You have no scheduled appointments .</NotAppointments>
            )}
          </TableContainer>
        </AppointmentList>
        <AppointmentDetails>
          <HeaderDetails>
            <TitleDetails>Appointment Details</TitleDetails>
            <DateAppointment>
              {formatDate(orderAppointments[0]?.startTime)}
            </DateAppointment>
          </HeaderDetails>
          <BodyDetails>
            <Title>
              {formatToCapitalized(orderAppointments[0]?.specialty)} says:
            </Title>
            <Text>{orderAppointments[0]?.description}</Text>
          </BodyDetails>
        </AppointmentDetails>
      </Container>
    </>
  );
};

export default PatientInformation;
