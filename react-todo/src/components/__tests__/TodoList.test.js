import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList"; // Adjust the import path as necessary

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
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass("completed");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Delete"));
  expect(screen.queryByText("Learn React")).toBeNull();
});
