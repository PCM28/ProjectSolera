import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import GetTaskList from "../../../../components/ListTeams/GetTaskList/GetTaskList";
import { BrowserRouter as Router } from "react-router-dom";

const team = {
  _id: 0,
  activities: [
    {
      name: "Go",
      point: 15,
    },
  ],
};

test("Should show an GetTaskList", () => {
  const { container } = render(
    <Router>
      <GetTaskList team={team} activities={team.activities} />
    </Router>
  );
  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.queryByText("Java")).toBeInTheDocument;
  expect(screen.queryByText("0")).toBeInTheDocument;
});
