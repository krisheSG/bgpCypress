/// <reference types="cypress" />

const cucumber = require("cypress-cucumber-preprocessor").default;

// Cypress.on("uncaught:exception", (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false;
// });

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });
};
