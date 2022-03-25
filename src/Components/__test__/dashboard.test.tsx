import React from "react";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Dashboard } from '../Dashboard'

describe("test", () => {
  test("tessst", () => {
    render (<Dashboard/>);

    const dashboardTitle = screen.getByText("Calendar");

    expect(dashboardTitle).toBeInTheDocument();
  });
});