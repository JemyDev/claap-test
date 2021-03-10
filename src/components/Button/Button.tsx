import { Button, ButtonProps } from '@chakra-ui/button';
import React, { FC } from 'react';

interface Props extends ButtonProps {}

const ButtonComponent: FC<Props> = ({
  children,
  onClick,
  ...buttonProps
}) => {
  return (
    <Button
      borderRadius='lg'
      bg='#2C54EA'
      _hover={{ backgroundColor: 'rgba(44, 84, 234, .7)' }}
      onClick={onClick}
      {...buttonProps}
    >{children}</Button>
  );
}

export default ButtonComponent;
