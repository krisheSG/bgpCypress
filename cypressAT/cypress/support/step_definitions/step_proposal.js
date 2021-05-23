import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { proposal } from "../../integration/pageFactory";
import {proposalSection} from "../../fixtures/testdata.json";

And ("saved the proposal with valid input",()=>{
    cy.log("eligiblity details");
    proposal.completeSection(proposalSection);
})

Then('verify proposal prefilled values in read-only state', () => {
    proposal.verifyPreFilledReadonly(proposalSection);
  });