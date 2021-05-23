import reusable from "./reusable";

export default class myGrantApplication extends reusable {
  constructor() {
    super();
    // this.lnkDept = "#IT";
    this.lnkDevelopmentArea = 'input[id="International Expansion"]';
    this.lnkMarketReadinessAssistance =
      'input[id="Market Readiness Assistance 2"]';
    this.btnInitiateApplication = "#go-to-grant";
    this.btnProceedWithApplication = "#keyPage-form-button";
  }

  sumbitapplicationform(dept) {
    this.clickID(dept);
    this.click(this.lnkDevelopmentArea);
    this.click(this.lnkMarketReadinessAssistance);
    this.click(this.btnInitiateApplication);
    this.click(this.btnProceedWithApplication);
  }
}
