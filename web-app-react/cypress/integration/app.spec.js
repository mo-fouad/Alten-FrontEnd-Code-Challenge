describe("testing app Componenet", () => {
    it("Cypress is working", () => {
        expect(true).to.equal(true);
    });

    it("visits the app and it Exist", () => {
        cy.visit("/");
    });

    it("can be reloaded", () => {
        cy.reload();
        cy.reload(true); // without caching
    });

    it("Should have a header", () => {
        cy.get("header").should("have.length", 1);
        cy.get("footer").should("have.length", 1);
    });

    it("Header Should have a Text for the logog & menu for Langg & full screen btn ", () => {
        // for Title
        cy.get("header div")
            .find("h4")
            .should("have.text", "Vehicles App");
    });

    it("should Go Full screen", () => {
        // test if you can click on full screen
        cy.get(".MuiButton-label > .MuiSvgIcon-root").click();
    });

    // Testing for Menu and Selecting Items//

    // Navigation

    // Testing for Table View

    // Language

    // Map View

    // Active Only
});
