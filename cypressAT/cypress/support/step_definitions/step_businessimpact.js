import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { businessImpactsection } from "../../integration/pageFactory";
import { businessImpact } from "../../fixtures/testdata.json";

Then("saved the Business Impact with valid input", () => {
  cy.log("business impact");
  businessImpactsection.saveBusinessImpact(businessImpact);
});

Then("verify Business Impact prefilled values in read-only state", () => {
  cy.log("contact details read-only prefilled values");
  businessImpactsection.verifyPreFilledReadonly(businessImpact);
});
