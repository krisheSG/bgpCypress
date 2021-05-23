import { And } from "cypress-cucumber-preprocessor/steps";
import { cost } from "../../fixtures/testdata.json";
import { costsection } from "../../integration/pageFactory";

And("saved cost with valid input", () => {
  cy.log("cost");
  costsection.savecost(cost);
});


Then("verify Cost prefilled values in read-only state", () => {
  cy.log("cost read-only prefilled values");
  costsection.verifyPreFilledReadonly(cost);
});
