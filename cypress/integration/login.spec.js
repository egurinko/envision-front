/// <reference types="Cypress" />

describe("Login", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  beforeEach(() => {
    cy.visit("/login");

    cy.server();
    cy.route("POST", "/api/auth/login").as("login");
  });

  it("should be done with valid user", () => {
    cy.getCookie("envision_session").should("be.null");

    cy.get("[data-cy=username]").type(username);
    cy.get("[data-cy=password]").type(password);
    cy.get("[data-cy=login-button]").click({ force: true });

    cy.wait("@login").then(res => {
      expect(res.status).eq(200);
      cy.setCookie("envision_session", res.response.body.token);
      cy.getCookie("envision_session").should("have.property", "value");
    });
  });
});
