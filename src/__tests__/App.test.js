import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders password input', () => {
    const { getByPlaceholderText } = render(<App />);
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('generates password correctly', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const copyButton = getByText('Copy');
    fireEvent.click(copyButton);
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput.value).not.toBe('');
    expect(copyButton.textContent).toBe('Copied !');
  });

  test('copies password to clipboard correctly', () => {
    // Mock the clipboard API
    const clipboardWriteTextMock = jest.fn();
    Object.defineProperty(window.navigator, 'clipboard', {
      value: {
        writeText: clipboardWriteTextMock,
      },
    });

    const { getByText, getByPlaceholderText } = render(<App />);
    const copyButton = getByText('Copy');
    fireEvent.click(copyButton);
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput.value).toBe('');
    expect(copyButton.textContent).toBe('Copied !');
    expect(clipboardWriteTextMock).toHaveBeenCalledWith('');
  });

  test('updates length state correctly', () => {
    const { getByLabelText } = render(<App />);
    const lengthInput = getByLabelText('Length: 8');
    fireEvent.change(lengthInput, { target: { value: 10 } });
    expect(lengthInput.value).toBe('10');
  });

  test('updates numberAllowed state correctly', () => {
    const { getByLabelText } = render(<App />);
    const numberInput = getByLabelText('Numbers');
    fireEvent.click(numberInput);
    expect(numberInput.checked).toBe(true);
  });

  test('updates characterAllowed state correctly', () => {
    const { getByLabelText } = render(<App />);
    const characterInput = getByLabelText('Characters');
    fireEvent.click(characterInput);
    expect(characterInput.checked).toBe(true);
  });
});