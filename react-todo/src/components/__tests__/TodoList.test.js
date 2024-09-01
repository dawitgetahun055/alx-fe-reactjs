// src/components/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo item", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Learn React"));
  expect(screen.getByText("Learn React")).toHaveClass("completed");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Delete"));
  expect(screen.queryByText("Learn React")).toBeNull();
});
