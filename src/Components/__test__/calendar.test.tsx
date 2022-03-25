import React from "react";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Calendar } from '../Calendar'

describe("Testing calendar component", () => {
  test("tessst", () => {
    render (<Calendar/>);

    const calendarTitle = screen.getByText("Calendar");

    expect(calendarTitle).toBeInTheDocument();
  });
});

/* test('test', () => {
  expect(true).toBe(true)
}) */

/* test('should render calendar component', () => {
  render(<Loading/>);
  const loadingElement = screen.getByTestId('Loading-1');
  expect(loadingElement).toBeInTheDocument();
  expect(loadingElement).toHaveTextContent('Calendar')
}) */

/* test('should render calendar component', () => {
  render(<Calendar/>);
  const calendarElement = screen.getByTestId('Calendar-1');
  expect(calendarElement).toHaveTextContent('Mon')
}) */

/* describe("Calendar", () => {
  test("should display the calendar container", async () => {

  });
}); */