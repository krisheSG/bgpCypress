import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { proposalSection } from "../../fixtures/testdata.json";
import {
  bgpPortalHomePage,
  myGrantPage,
  myGrantApplication,
  commonSectionLoctors,
  declareReview,
  proposal,
} from "../../integration/pageFactory";
import { login } from "../../fixtures/testdata.json";

Given("user logged in BGP portal", () => {
  cy.log("User logs into the BGP portal with CorpPass...");
  cy.visit(login.baseUrl, {
    auth: {
      username: login.username,
      password: login.password,
    },
  });
});

When("user launched the {string} application to get new grant", (val) => {
  cy.log("user viewed the MY GRANT page");
  myGrantPage.clickNewGrant(val);
});

And(
  "started and proceed to submit application form with {string}, Bring my business overseas, Market Readiness Assistance",
  (dept) => {
    cy.log("user started application process ");
    myGrantApplication.sumbitapplicationform(dept);
  }
);

And("navigate to next section", () => {
  commonSectionLoctors.clicknext();
});

And("review the form", () => {
  commonSectionLoctors.reviewApplication();
});

When("they goto their My Grants dashboard", () => {
  cy.log("Navigating to the My Grants dashboard...");
  myGrantPage.openDashboard();
});

Then("they should be able to see the application under Processing tab", () => {
  cy.log(
    "Checking if the user sees the application in the My Grants dashboard under the Processing tab..."
  );
  myGrantPage.openProcessingTab();
  myGrantPage.checkIfApplicationExists(proposalSection);
});

And("refresh the page", () => {
  cy.log("Refreshing the page...");
  commonSectionLoctors.refershApplication();
});

And("navigate to Declar & review section", () => {
  commonSectionLoctors.navigateToSection();
});

Then(
  "verify {string} error message should display for {string}",
  (count, section) => {
    commonSectionLoctors.findErrormessageCount(count, section);
  }
);
