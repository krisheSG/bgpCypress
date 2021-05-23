import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { bgpPortalHomePage, corpPassLoginPage } from "../../integration/pageFactory";
import { userdetails } from "../../fixtures/testdata.json";

When("logged in CorpPass with given authentication", () => {
    cy.log("test");
    bgpPortalHomePage.launchCorpPass();
    corpPassLoginPage.loginCorpPass(userdetails);
  });