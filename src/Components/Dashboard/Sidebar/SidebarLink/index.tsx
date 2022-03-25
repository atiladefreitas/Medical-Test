import React, { ComponentType, useCallback } from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';

import { Container } from './style';

interface ISidebarLink {
  path: string;
  title: string;
  icon: ComponentType<IconBaseProps>;
}

function SidebarLink({
  icon: Icon,
  title,
  path,
}: ISidebarLink): JSX.Element {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(path)
  }, [path, navigate]);

  return (
    <Container
      onClick={handleOnClick}
    >
      <Icon />
      <p>{title}</p>
    </Container>
  );
}

export { SidebarLink };
