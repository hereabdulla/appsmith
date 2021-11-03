const widgetsPage = require("../../../../locators/Widgets.json");
const dsl = require("../../../../fixtures/multiSelectedRowUpdationDsl.json");
const commonlocators = require("../../../../locators/commonlocators.json");

describe("Table Widget row multi select validation", function() {
  before(() => {
    cy.addDsl(dsl);
  });

  it("Test multi select column shows when enableMultirowselection is true", function() {
    // cy.PublishtheApp();
    // cy.wait(2000);
    cy.get(widgetsPage.buttonWidget)
      .first()
      .click();
    cy.wait(1000);
    cy.get(".t--table-multiselect")
      .first()
      .click();
    cy.get(widgetsPage.buttonWidget)
      .last()
      .click();
    cy.get(".tbody .tr")
      .first()
      .should("have.class", "selected-row");
  });
});
