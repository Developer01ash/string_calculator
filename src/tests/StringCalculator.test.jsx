import { render, screen } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

describe('StringCalculator Component - Basic Functionality', () => {
  test('renders the component', () => {
    render(<StringCalculator />);
    expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
  });
});
