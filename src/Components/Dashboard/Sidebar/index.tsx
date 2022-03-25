import axios from 'axios';
import React, { ComponentType, useCallback, useEffect, useState } from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { IPatient } from '../../History';
import { PatientSelect } from './PatientSelect';
import { SidebarLink } from './SidebarLink';

import { Article, Container, Logo, Title } from './style';
import { useNavigate } from 'react-router-dom';
/* import logo from '../../../assets/images/logo.png'; */

export interface DashboardLinksData {
  path: string;
  title: string;
  icon: ComponentType<IconBaseProps>;
}

interface SidebarProps {
  links: DashboardLinksData[];
}

function Sidebar({ links: dashboardLinks }: SidebarProps): JSX.Element {
  const navigate = useNavigate();
  const [links, setLinks] = useState([
    ...dashboardLinks.map((dashboardLink) => ({
      ...dashboardLink,
    })),
  ]);
  const [patients, setPatients] = useState([] as IPatient[]);
  const [selectedPatientID, setSelectedPatientID] = useState<number>(0);

  async function getPatients(): Promise<void> {
    const response = await axios.get(
      'https://cm42-medical-dashboard.herokuapp.com/patients',
    );
    setPatients(response.data);
    return response.data;
  }

  useEffect(() => {
    getPatients();
  }, []);

  useEffect(() => {
    setLinks(
      dashboardLinks.map((link) => ({
        ...link,
      })),
    );
  }, [dashboardLinks]);

  const getSelectedPatientID = useCallback(
    (id: number) => {
      setSelectedPatientID(id);
      navigate(`/patients/${id}`);
    },
    [setSelectedPatientID, navigate],
  );

  useEffect(() => {
    if (!selectedPatientID) {
      setSelectedPatientID(0);
    }
  }, [selectedPatientID]);

  return (
    <Container>
      <Logo>
        <img src={require('../../../assets/images/logo.png')} alt="Medical Test" />
      </Logo>
      <Title>Medical test</Title>
      <PatientSelect
        patients={patients}
        onPatientChange={getSelectedPatientID}
      />
      <Article>
        {links.map(({ path, icon, title }) => {
          return (
            <SidebarLink icon={icon} title={title} path={path} key={path} />
          );
        })}
      </Article>
    </Container>
  );
}

export { Sidebar };
