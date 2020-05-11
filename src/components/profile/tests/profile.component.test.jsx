import React from "react";
import { render, cleanup } from "@testing-library/react";
import Profile from "../profile.component";
import Title from "../subcomponents/title/title.component";
import Chart from "../subcomponents/chart/chart.component";

import { mockApiData0 } from "../../../test.fixtures/api.fixture";

jest.mock("../subcomponents/title/title.component");
jest.mock("../subcomponents/chart/chart.component");

describe("Check the Profile Component Renders Without Crashing", () => {
  afterEach(cleanup);

  let utils;
  beforeEach(() => {
    Title.mockImplementation(() => <div>MockTitle</div>);
    Chart.mockImplementation(() => <div>ChartTitle</div>);
    utils = render(<Profile data={{ data: mockApiData0 }} />);
  });

  it("should contain the expected test", () => {
    expect(utils.getByText("MockTitle")).toBeTruthy();
    expect(utils.getByText("ChartTitle")).toBeTruthy();
  });
});
