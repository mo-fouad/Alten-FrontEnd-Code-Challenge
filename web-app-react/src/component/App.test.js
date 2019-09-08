import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./app";
import { userData } from "../../__mocks__/userData.mock";

afterEach(cleanup);
jest.mock("axios");

function renderWithRouter(
    ui,
    {
        route = "/",
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),

        history
    };
}

test("makeSure that App is Rendered and the App has the Data > Header & footer", async () => {
    // Arrange
    const { container } = render(<App />);

    // Assert
    expect(container.getElementsByTagName("svg")[0]).toHaveClass(
        "MuiCircularProgress-svg"
    );
    //debug();
});

test("makeSure that we have Data on our App", async () => {
    const { container, getByText, debug } = renderWithRouter(
        <App userData={userData} />
    );

    // check that we have a header and footer
    expect(container.getElementsByTagName("header")[0]).toBeTruthy();
    expect(container.getElementsByTagName("footer")[0]).toBeTruthy();

    // Testing that we have our expected UI fields.
    expect(getByText("Table View")).toBeTruthy();
    expect(getByText("Map View")).toBeTruthy();
    expect(getByText("Vehicles App")).toBeTruthy();
    expect(getByText("Select User")).toBeTruthy();
    expect(getByText("Active Only:")).toBeTruthy();

    // check if it has the Table View and it renders the same Table as the users Length
    expect(container.getElementsByTagName("table").length).toEqual(
        userData.users.length
    );
});
