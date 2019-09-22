/// <reference types="Cypress" />

describe("Drawer", () => {
  beforeEach(() => {
    cy.server();
    cy.route("GET", "/api/comfort").as("comfort");
    cy.route("GET", "/api/envs").as("envs");

    cy.visit("/");
  });

  it("logo and app name should be rendered", () => {
    expect(true).to.true;
    expect(cy.contains("ENVISION")).to.exist;
    expect(cy.get("[data-cy=logo]")).to.exist;
  });

  it("icons should be rendered", () => {
    expect(cy.get("[data-cy=home]")).to.exist;
    expect(cy.get("[data-cy=bar_chart]")).to.exist;
    expect(cy.get("[data-cy=supervisor_account]")).to.exist;
  });

  it("icons should enable users to go target routes", () => {
    cy.wait(["@comfort", "@envs"]);

    cy.get("[data-cy=bar_chart]").click({ force: true });
    cy.url().should("include", "/graphs");

    cy.get("[data-cy=supervisor_account]").click({ force: true });
    cy.url().should("include", "/users");

    cy.get("[data-cy=home]").click({ force: true });
    cy.url().should("include", "/");
  });
});
