import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import TeamMates from './TeamMates';

describe('Add teammates page', () => {
  it('Should render button invite teammates', () => {
    render(<TeamMates />);
    const buttonElement = screen.getByText('Invite teammates');

    expect(buttonElement).toBeInTheDocument();
  });

  it('Should render a modal on click button', async () => {
    render(<TeamMates />);
    const buttonElement = screen.getByText('Invite teammates');

    buttonElement.click();

    expect(await screen.findByText('Invite members')).toBeInTheDocument();
  });
});