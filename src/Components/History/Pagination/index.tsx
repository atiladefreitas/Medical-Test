import React, { MouseEvent } from 'react';
import { Button, Container, Page } from './style';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IAppointment } from '..';

interface IPaginationProps {
  currentPage: number;
  appointments: IAppointment[];
  setCurrentPage(value: number): void;
}
const Pagination = ({
  currentPage,
  appointments,
  setCurrentPage,
}: IPaginationProps): JSX.Element => {
  const previousPage = (event: MouseEvent) => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = (event: MouseEvent) => {
    const pageLimit = Math.floor(appointments.length / 10);
    if (currentPage < pageLimit) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
      <Container>
        <Button onClick={previousPage}>
          <FaAngleLeft />
        </Button>
        <Page>{currentPage + 1}</Page>
        <Button onClick={nextPage}>
          <FaAngleRight />
        </Button>
      </Container>
  );
};

export default Pagination;
