import React from 'react';
import { Container, Spinner } from './style';

interface IProps {
  isLoading: boolean;
}


function Loading({ isLoading }: IProps): JSX.Element {
  return (
    <Container
      data-testid='Loading-1'
      style={{ display: isLoading ? 'flex' : 'none' }}
      aria-label='Carregando...'
    >
      <Spinner />
    </Container>
  );
}

export { Loading };
