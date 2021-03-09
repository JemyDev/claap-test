import {
  ModalBody,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';

import Modal from 'components/Modal/Modal';
import Search, { SearchResult } from 'components/Search/Search';
import { useFindTeamMates } from 'hooks/useFindTeamMates';
import { isEmailValid } from 'utils/utils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
};

const TeamMatesModal: FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const { findTeamMates } = useFindTeamMates();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Invite members'
      isCentered
    >
      <ModalBody>
        <Text>Email invite</Text>
        <Text>Send members as email invitation to join this workspace</Text>
        <Search
          searchTerms={createSearchTerms}
          labelButton='Invite'
          placeholder='Search names or email...'
          onSubmitSearch={onSubmitSearch}
          validateNewOption={isEmailValid}
        />
      </ModalBody>
    </Modal>
  );

  async function createSearchTerms(inputValue: string): Promise<SearchResult[]> {
    const teamMates = await findTeamMates(inputValue);

    return teamMates.map((teamMate) => ({
      label: teamMate.firstName,
      value: teamMate.firstName,
    }));
  }

  function onSubmitSearch(): void {
    onClose();
  }
};

export default TeamMatesModal;