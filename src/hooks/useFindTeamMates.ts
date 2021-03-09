import { searchUser, User } from 'mockData';

interface UseFindTeamMates {
  findTeamMates: (inputValue: string) => Promise<User[]>;
}

export function useFindTeamMates(): UseFindTeamMates {
  const findTeamMates = async (inputValue: string): Promise<User[]> => {
    return searchUser(inputValue);
  }

  return { findTeamMates };
};
