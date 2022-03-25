import React, { ReactNode } from 'react';

import { Navbar } from './Navbar';
import { Sidebar, DashboardLinksData } from './Sidebar';

import { FaCalendarAlt, FaHistory } from 'react-icons/fa';

import { Container, Aside, Main } from './style';
import { Route, Routes } from 'react-router';
import { Calendar } from '../Calendar';
import { History } from '../History';
import { SelectedPatients } from '../SelectPatients';

interface DashboardProps {
  children?: ReactNode;
}
export const dashboardLinks: DashboardLinksData[] = [
  {
    title: 'Calendar',
    icon: FaCalendarAlt,
    path: '/calendar',
  },
  {
    title: 'History',
    icon: FaHistory,
    path: '/history',
  },
] as DashboardLinksData[];

function Dashboard({ children }: DashboardProps) {

  return (
    <Container>
      <Aside>
        <Sidebar links={dashboardLinks} />
      </Aside>
      <Main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calendar />}/>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/history" element={<History />} />
          <Route path="/patients/:id" element={<SelectedPatients />} />
        </Routes>
      </Main>
    </Container>
  );
}

export { Dashboard };
