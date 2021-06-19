import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        // render the SignInContainer component, fill the text inputs and press the submit button
        const submitForm = jest.fn();
        const { debug, getByTestId } = render(<SignInContainer onSubmit={submitForm} />);
        debug();
        const creds = {username: 'elina', password: 'password'};
        await act(async () => {
            await fireEvent.changeText(getByTestId('username'), creds.username);
            await fireEvent.changeText(getByTestId('password'), creds.password);
            await fireEvent.press(getByTestId('submit'));
            console.log('painettu');
        });
        await waitFor(() => {
            // expect the onSubmit function to have been called once and with a correct first argument
            expect(submitForm).toHaveBeenCalledTimes(1);
            expect(submitForm.mock.calls[0][0]).toEqual(creds);

        });
    });
  });
});