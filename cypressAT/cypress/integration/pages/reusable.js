export default class reusable {
  constructor() {}
  numeral = require("numeral");
  getLoc(loc) {
    return cy.get(loc);
  }

  getLocID(loc) {
    return cy.get("#" + loc);
  }

  click(loc) {
    this.getLoc(loc).click();
  }
  clickID(loc) {
    this.getLocID(loc).click();
  }
  clickcontains(loc, val) {
    this.getLoc(loc).contains(val).click();
  }

  log(message) {
    cy.log(message);
  }

  typeVal(loc, text) {
    this.getLoc(loc).focus().clear().type(text);
  }

  typevalPause(loc, text) {
    this.getLoc(loc).focus().clear().type(text);
  }

  typeEnter(loc, text) {
    this.getLoc(loc).type(text).type("{enter}");
  }

  typeValAndEnter(loc, text) {
    this.getLoc(loc).type(text).type("{enter}");
  }

  select(loc, text) {
    this.getLoc(loc).select(text);
  }

  check(loc) {
    this.getLoc(loc).check();
  }
  uploadImage(loc) {
    cy.get(loc).attachFile("sample.pdf");
  }

  scrolltop() {
    cy.scrollTo("top");
  }
  scrollbottom() {
    cy.scrollTo("bottom");
  }

  haveText(loc, text) {
    this.getLoc(loc).should("have.text", text);
  }
  haveVal(loc, val) {
    this.getLoc(loc).should("have.value", val);
  }
  containstext(loc, text) {
    this.getLoc(loc).should("contain.text", text);
  }
  // Utils
  formatCurrencyValue(str, addCurrency = false) {
    var displayValue = this.numeral(parseInt(str)).format("0,0.00");
    var finalValue = addCurrency ? "SGD " + displayValue : displayValue;
    return finalValue;
  }

  beVisible(loc) {
    this.getLoc(loc).should("be.visible");
  }

  beChecked(loc) {
    this.getLoc(loc).should("be.checked");
  }
  haveLength(loc, val) {
    this.getLoc(loc).should("have.length", val);
  }
  haveAttribute(loc, attr, val) {
    this.getLoc(loc).should("have.attr", attr, val);
  }
}
