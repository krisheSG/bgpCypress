import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { eligibility } from "../../integration/pageFactory";

Given("user saved the eligibility with input with {string}", (answer) => {
  cy.log("eligiblity details");
  if (answer == "Yes") {
    eligibility.save_eligbility();
  } else if (answer == "No") {
    eligibility.save_eligbility(false);
  }
});

And(
  "verify eligibility prefilled values with {string} in read-only in summary page",
  (answer) => {
    cy.log("eligiblity read-only prefilled values");
    if (answer == "Yes") {
      eligibility.verifyPreFilledReadonly();
    } else if (answer == "No") {
      eligibility.verifyPreFilledReadonly(false);
    }
  }
);

Then("verify reload the saved eligibility values with {string}", (answer) => {
  if (answer == "Yes") {
    eligibility.reloadSavedValues();
  } else if (answer == "No") {
    eligibility.reloadSavedValues(false);
  }
});

And(
  "{string} warn messages should displayed with {string}",
  (count, message) => {
    eligibility.validateMsg(count, message);
  }
);
And("warn messages FAQ URL with {string}", (val) => {
  eligibility.validateAttributesValues(val);
});
