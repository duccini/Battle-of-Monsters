import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { MonsterBattleCard } from "./MonsterBattleCard.extended";

describe("MonsterBattleCardExtended", () => {
  it("renders the monster card correctly with a monster", () => {
    // TODO complete tests
    render(<MonsterBattleCard title="Old Shark" />);

    const titleElement = screen.getByText("Old Shark");
    expect(titleElement).toBeInTheDocument();
  });
});
