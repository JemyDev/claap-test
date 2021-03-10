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
import TeamMatesContext from 'context/TeamMatesContext';
import { searchUser, users } from 'mockData';

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
          searchTerms={createSearchTerms}
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

  async function createSearchTerms(inputValue: string): Promise<SearchResult[]> {
    const teamMates = await searchUser(inputValue);

    return teamMates.map((teamMate) => ({
      label: teamMate.firstName,
      value: teamMate.firstName,
    }));
  }

  function removeError(): void {
    setError(null);
  }

  async function onSubmitSearch(selectedValues: string[] | null): Promise<void> {
    if (selectedValues) {
      setError(null);
      const usersData = await users();
      const data = usersData.map((user, index) => {
        if (user.firstName === selectedValues[index]) {
          return user;
        }

        return selectedValues[index];
      });

      setData(data);
      onClose();
    } else {
      setError("You didn't added teammates, please select at least one.");
    }
  }
};

export default TeamMatesModal;