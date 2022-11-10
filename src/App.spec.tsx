/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should display elements', () => {
    render(<App />);
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});
