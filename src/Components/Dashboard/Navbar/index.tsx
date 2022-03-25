import React from 'react';

import { Container, Title, Box, Avatar } from './style';
/* import profile from '../../../assets/images/profile.png'; */

function Navbar(): JSX.Element {
  return (
    <Container>
      <Box>
        <Title>DashBoard</Title>
        <Avatar>
          <img src={require('../../../assets/images/profile.png')} alt="Foto de Perfil" />
        </Avatar>
      </Box>
    </Container>
  );
}

export { Navbar };
