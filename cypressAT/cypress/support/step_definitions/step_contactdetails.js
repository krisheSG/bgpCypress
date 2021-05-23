import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import {
  contact_details,
  commonSectionLoctors,
} from "../../integration/pageFactory";
import { contactSection } from "../../fixtures/testdata.json";

// And("saved the contact details with valid input", () => {
//   cy.log("contact details");
//   contact_details.save_contactdetails(contactSection);
// });

Given(
  "saved the contact details with {string} address and contact",
  (addressState) => {
    cy.log("contact details");
    if (addressState == "alternate") {
      contact_details.save_contactdetails(contactSection, false);
    } else if (addressState == "same") {
      contact_details.save_contactdetails(contactSection);
      cy.log("false");
    }
  }
);

Then(
  "verify contact details with {string} address and contact in read-only state",
  (addressState) => {
    if (addressState == "alternate") {
      cy.log("contact details read-only prefilled values");
      contact_details.verifyPreFilledReadonly(contactSection, false);
    } else if (addressState == "same") {
      contact_details.verifyPreFilledReadonly(contactSection);
    }
  }
);

Then(
  "verify reload the saved contact details with {string} address and contact",
  (addressState) => {
    if (addressState == "alternate") {
      contact_details.reloadSavedValues(contactSection, false);
    } else if (addressState == "same") {
      contact_details.reloadSavedValues(contactSection);
    }
  }
);
