import { TagLeftIcon } from '@chakra-ui/tag';
import { EmailIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MultiValueProps, components } from 'react-select';
import { isEmailValid } from 'utils/utils';
import { Avatar } from '@chakra-ui/avatar';

const MultiValueContainer: FC<MultiValueProps<any, any>> = ({ children, ...props}) => {
  const isEmail = isEmailValid(props.data.value);

  return (
    <components.MultiValueLabel {...props}>
      <Flex align='center' justify='space-around'>
        {isEmail ? (
          <TagLeftIcon color='#EE748F' boxSize='12px' as={EmailIcon} />
        ) : (
          <Avatar
            size='2xs'
            color='#FFF'
            fontSize='3'
            mr='3'
            name={props.data.label}
            bgColor='#EE748F'
          />
        )}
        {children}
      </Flex>
    </components.MultiValueLabel>
  );
}

export default MultiValueContainer;
