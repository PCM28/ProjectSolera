import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import CardsList from "../../../components/CardsList/CardsList";
import { BrowserRouter as Router } from "react-router-dom";

const teams = [
  {
    name: "Teams 1",
    activities: [
      {
        name: "Go",
        point: 15,
      },
    ],
  },
  {
    name: "Teams 2",
    activities: [
      {
        name: "Java",
        point: 10,
      },
    ],
  },
];

test("Should show a CardsList", () => {
  const { container } = render(
    <Router>
      <CardsList teams={teams} />
    </Router>
  );
  const teamName = container.getElementsByClassName("teamName");

  expect(teamName.length).toBe(2);
  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(teamName).toBeInTheDocument;
  expect(screen.queryByText("Teams 1")).toBeInTheDocument;
  expect(screen.queryByText("15/15")).toBeInTheDocument;
  expect(screen.queryByText("Teams 2")).toBeInTheDocument;
  expect(screen.queryByText("10/15")).toBeInTheDocument;
  //expect(screen.getByRole("strong")).toHaveTextContent("66/100");
});
