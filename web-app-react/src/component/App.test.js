import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./app";

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
const userData = {
    users: [
        {
            id: "1",
            user_name: "Kalles Grustransporter AB",
            user_address: "Cementvägen 8, 111 11 Södertälje",
            lat: "59.1846215",
            long: "17.5499362"
        },
        {
            id: "2",
            user_name: "Johans Bulk AB",
            user_address: "Balkvägen 12, 222 22 Stockholm",
            lat: "59.3260664",
            long: "17.8416284"
        }
    ],
    vehicles: [
        {
            user_id: "1",
            vehicle_id: "YS2R4X20005399401",
            reg_number: "ABC123"
        },
        {
            user_id: "1",
            vehicle_id: "VLUR4X20009093588",
            reg_number: "DEF456"
        },
        {
            user_id: "2",
            vehicle_id: "YS2R4X20005387949",
            reg_number: "MNO345"
        },
        {
            user_id: "3",
            vehicle_id: "VLUR4X20009048066",
            reg_number: "PQR678"
        }
    ]
};

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
