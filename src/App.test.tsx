import React from 'react';
import App from './App';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

test('renders blocky title', () => {
    // Arrange
    render(<App />);
    // Act
    const blockyTitle = screen.getByText(/Blocky Manager/i);

    // Assert
    expect(blockyTitle).toBeInTheDocument();
});