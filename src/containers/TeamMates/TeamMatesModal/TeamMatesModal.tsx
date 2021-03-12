import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import React, { FC, useState, useContext } from 'react';

import Modal from 'components/Modal/Modal';
import Search, { SearchResult } from 'components/Search/Search';
import { isEmailValid } from 'utils/utils';
import TeamMatesContext, { Data as TeamMatesDataContext } from 'context/TeamMatesContext';
import { searchUser } from 'mockData';
import { Option } from 'react-select/src/filters';

interface Props {
  isOpen: boolean;
  onClose: () => void;
};

const TeamMatesModal: FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const { setData } = useContext(TeamMatesContext);
  const [error, setError] = useState<string | null>(null);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Invite members'
      isCentered
      size='lg'
    >
      <ModalBody p='0'>
        <Text
          as='h4'
          color='#DBE1E6'
          fontSize='md'
          lineHeight='5'
          mb='4'
        >Email invite</Text>
        <Text
          color='#8C9DB5'
          fontSize='md'
          lineHeight='5'
          mb='6'
        >Send members as email invitation to join this workspace</Text>
        <Search
          searchTerms={searchUsers}
          labelButton='Invite'
          placeholder='Search names or email...'
          onSubmitSearch={onSubmitSearch}
          validateNewOption={isEmailValid}
        />
        {error && (
          <Alert mt='6' status='error'>
            <AlertIcon />
            <AlertTitle mr={2}>{error}</AlertTitle>
            <CloseButton
              position='absolute'
              right='8px'
              top='8px'
              onClick={removeError}
            />
          </Alert>
        )}
        <Alert mt='6' status='info'>
          <AlertIcon />
          Add an existing user or a valid email to invite them in your workspace.
        </Alert>
      </ModalBody>
    </Modal>
  );

  async function searchUsers(inputValue: string): Promise<SearchResult[] | undefined> {
    try {
      const users = await searchUser(inputValue);

      return users.map((user) => ({
        label: user.firstName,
        value: { ...user },
      }));
    } catch (error) {
      setError(error);
    }
  }

  function removeError(): void {
    setError(null);
  }

  function onSubmitSearch(selectedValues: TeamMatesDataContext | null): void {
    if (selectedValues) {
      setError(null);
      setData(selectedValues);
      onClose();
    } else {
      setError("You didn't added teammates, please select at least one.");
    }
  }
};

export default TeamMatesModal;