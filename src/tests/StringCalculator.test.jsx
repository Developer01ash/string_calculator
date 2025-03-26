import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

describe('StringCalculator Component - Basic Functionality', () => {
  test('renders the component', () => {
    render(<StringCalculator />);
    expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
  });
  test('returns the number itself for a single number', () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '5' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 5/i)).toBeInTheDocument();
  });

  test('returns the sum of two numbers', () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1,2' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 3/i)).toBeInTheDocument();
  });

  test('handles new line delimiters', () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1\n2,3' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });

  test('handles custom delimiter', () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '//;\n1;2;3' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });
  test('throws an exception for negative numbers', () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1,-2,3' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/negatives not allowed: -2/i)).toBeInTheDocument();
  });
});
