import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "./SortControl";

describe("SortControl Component", () => {
  test("renders label and select dropdown", () => {
    render(<SortControl currentSort="releaseDate" onSortChange={jest.fn()} />);

    expect(screen.getByText(/Sort by:/i)).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("select dropdown has correct initial value", () => {
    render(<SortControl currentSort="releaseDate" onSortChange={jest.fn()} />);

    expect(screen.getByRole("combobox")).toHaveValue("releaseDate");
  });

  test("calls onSortChange when a new option is selected", () => {
    const mockOnSortChange = jest.fn();

    render(<SortControl currentSort="releaseDate" onSortChange={mockOnSortChange} />);

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "title" } });

    expect(mockOnSortChange).toHaveBeenCalledTimes(1);
    expect(mockOnSortChange).toHaveBeenCalledWith("title");
  });
});
