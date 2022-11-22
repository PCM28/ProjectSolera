import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import AddEditTask from "../../../../components/ListTeams/AddEditTask/AddEditTask";
import { BrowserRouter as Router } from "react-router-dom";

const points = 0;
const id = 0;
const activities = [
  {
    name: "Go",
    point: 15,
  },
  {
    name: "Java",
    point: 15,
  },
];

test("Should show an AddEditTask", () => {
  const { container } = render(
    <Router>
      <AddEditTask
        id=""
        action="Add"
        teamId={id}
        activities={activities}
        taskName="Java"
        points={points}
        onSave={() => {
          setNewTask(false);
        }}
        onDiscard={() => {
          setNewTask(false);
        }}
      />
    </Router>
  );
  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.queryByText("Java")).toBeInTheDocument;
  expect(screen.queryByText("0")).toBeInTheDocument;
});
