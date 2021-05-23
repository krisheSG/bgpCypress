import {And} from "cypress-cucumber-preprocessor/steps";
import {} from "../../fixtures/testdata.json";
import {declareReview} from "../../integration/pageFactory";

And ("entered the declartion with valid input", ()=>{
    cy.log("declaration");
    declareReview.saveDeclaration();
})

Then("verify declartion prefilled values in read-only state", () => {
    cy.log("declartion read-only prefilled values");
    declareReview.verifyPreFilledReadonly();
  });

  When ('submit the application', () => {
    declareReview.agreeAndSubmitApplication();
  });

  Then('the application should be submitted', () => {
    declareReview.checkIfSubmitted();
  });
  
  And('the company profile should be displayed', () => {
    declareReview.checkIfCompanyProfileIsDisplayed();
  });

  