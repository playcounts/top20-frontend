import React from "react";
import { render, cleanup } from "@testing-library/react";
import WithSpinner from "../spinner.component";

import { UserContext } from "../../../providers/user/user.provider";
import { testUser, noUser } from "../../../test.fixtures/lastfm.user.fixture";
import messages from "../../../configuration/messages";

const TestHook = () => <div>TestComponent</div>;

describe("Check Spinner Rendering", () => {
  let utils;
  let state;
  let setup = [testUser, noUser];
  beforeEach(() => {
    state = setup.shift();
    const TestHookWithSpinner = WithSpinner(TestHook);
    utils = render(
      <UserContext.Provider value={state}>
        <TestHookWithSpinner />
      </UserContext.Provider>
    );
  });

  afterEach(cleanup);

  it("renders without a spinner when ready", () => {
    expect(utils.queryByText(messages.SpinnerMessage)).toBeNull();
    expect(utils.queryByTestId("Spinner1")).toBeNull();
  });

  it("renders with a spinner when no user is ready", () => {
    expect(utils.getByText(messages.SpinnerMessage)).toBeTruthy();
    expect(utils.getByTestId("Spinner1")).toBeTruthy();
  });
});
