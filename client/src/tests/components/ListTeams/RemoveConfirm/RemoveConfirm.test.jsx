import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import RemoveConfirm from "../../../../components/ListTeams/RemoveConfirm/RemoveConfirm";
import { BrowserRouter as Router } from "react-router-dom";

const teamId = 0;
const taskId = 0;
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

test("Should show an RemoveConfirm", () => {
  const { container } = render(
    <Router>
      <RemoveConfirm
        teamId={teamId}
        title="Confirm Delete"
        message="The following Task will be deleted:"
        id={taskId}
        taskName="Java"
        onDelete={() => {
          console.log("Deleted saved");
        }}
        onCancel={() => {
          console.log("Delete canceled");
        }}
      />
    </Router>
  );
  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.queryByText("Java")).toBeInTheDocument;
  expect(screen.queryByText("0")).toBeInTheDocument;
});
