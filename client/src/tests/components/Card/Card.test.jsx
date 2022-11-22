import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Card from "../../../components/Card/Card";
import { BrowserRouter as Router } from "react-router-dom";

const link = `/listTeam/0`;
const color = "green";
const propsValue = 66;
const propsMaxValue = 100;
const i = 0;
const teams = {
  0: {
    name: "Teams 1",
  },
};

test("Should show a Card", () => {
  const { container } = render(
    <Router>
      <Card
        link={link}
        color={color}
        propsValue={propsValue}
        teams={teams}
        i={i}
        propsMaxValue={propsMaxValue}
      />
    </Router>
  );
  const teamName = container.getElementsByClassName("teamName");

  expect(teamName.length).toBe(1);
  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.getByRole("heading"));
  expect(teamName).toBeInTheDocument;
  expect(screen.queryByText("Teams 1")).toBeInTheDocument;
  expect(screen.queryByText("66/100")).toBeInTheDocument;
  //expect(screen.getByRole("strong")).toHaveTextContent("66/100");
});
