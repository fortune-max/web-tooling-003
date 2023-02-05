import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("App", () => {
  it("should render the app", () => {
    render(<App />);
  });

  it()

  it("should increment the counter", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click me/i });
    userEvent.click(button);
    const count = screen.getByText(/you clicked 1 times/i);
    expect(count).toBeInTheDocument();
  });

  it("should increment the counter twice", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click me/i });
    userEvent.click(button);
    userEvent.click(button);
    const count = screen.getByText(/you clicked 2 times/i);
    expect(count).toBeInTheDocument();
  });
});