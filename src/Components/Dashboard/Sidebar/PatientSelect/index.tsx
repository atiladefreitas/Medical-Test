import React, { ChangeEvent, useCallback, useState } from 'react';
import { Select } from './style';
import { IPatient } from '../../../History';

interface IPatientProps {
  patients: IPatient[];
  onPatientChange: (id: number) => void;
}
const PatientSelect = ({
  patients,
  onPatientChange,
}: IPatientProps): JSX.Element => {
  const [selectedPatient, setSelectedPatient] = useState<IPatient>(
    {} as IPatient,
  );
  const handlePatientChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      const findPatientById = patients.find(
        (patient) => patient.id === Number(value),
      );
      if (typeof findPatientById !== 'undefined') {
        setSelectedPatient(findPatientById);
      }
      onPatientChange(Number(value));
    },
    [patients, setSelectedPatient, onPatientChange],
  );

  return (
    <>
      <Select defaultValue={selectedPatient.id} onChange={handlePatientChange}>
        {patients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export { PatientSelect };
