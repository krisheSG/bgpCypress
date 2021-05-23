import reusable from "./reusable";

export default class businessImapact extends reusable {
  constructor() {
    super();
    this.mnuProposal = "li:nth-child(5) .menu-text";
    this.txtEndDate = "#react-project_impact-fy_end_date_0";
    this.txtOverseasSalesCurrentYear = "#react-project_impact-overseas_sales_0";
    this.txtOverseasSalesYear1 = "#react-project_impact-overseas_sales_1";
    this.txtOverseasSalesYear2 = "#react-project_impact-overseas_sales_2";
    this.txtOverseasSalesYear3 = "#react-project_impact-overseas_sales_3";
    this.txtOverseasInvestmentsCurrentYear =
      "#react-project_impact-overseas_investments_0";
    this.txtOverseasInvestmentsYear1 =
      "#react-project_impact-overseas_investments_1";
    this.txtOverseasInvestmentsYear2 =
      "#react-project_impact-overseas_investments_2";
    this.txtOverseasInvestmentsYear3 =
      "#react-project_impact-overseas_investments_3";
    this.txtRationale = "#react-project_impact-rationale_remarks";
    this.txtBenefits = "#react-project_impact-benefits_remarks";

    this.txtError = "#react-project_impact-fy_end_date_0-alert";
  }

  saveBusinessImpact(data) {
    this.log("Filling in values in the Business Impact section...");
    this.click(this.mnuProposal);
    this.typeVal(this.txtEndDate, data.endDate);

    this.typeVal(
      this.txtOverseasSalesCurrentYear,
      data.overseasSales.currentYear
    );
    this.typeVal(this.txtOverseasSalesYear1, data.overseasSales.year1);
    this.typeVal(this.txtOverseasSalesYear2, data.overseasSales.year2);
    this.typeVal(this.txtOverseasSalesYear3, data.overseasSales.year3);

    this.typeVal(
      this.txtOverseasInvestmentsCurrentYear,
      data.overseasInvestments.currentYear
    );
    this.typeVal(
      this.txtOverseasInvestmentsYear1,
      data.overseasInvestments.year1
    );
    this.typeVal(
      this.txtOverseasInvestmentsYear2,
      data.overseasInvestments.year2
    );
    this.typeVal(
      this.txtOverseasInvestmentsYear3,
      data.overseasInvestments.year3
    );

    this.typeVal(this.txtRationale, data.rationale);
    this.typeVal(this.txtBenefits, data.benefits);
  }
  verifyPreFilledReadonly(businessImpact) {
    this.log(
      "Checking if the Business Impact section contains the entered values..."
    );
    this.haveText(this.txtEndDate, businessImpact.endDate);

    this.haveText(
      this.txtOverseasSalesCurrentYear,
      this.formatCurrencyValue(businessImpact.overseasSales.currentYear)
    );
    this.haveText(
      this.txtOverseasSalesYear1,
      this.formatCurrencyValue(businessImpact.overseasSales.year1)
    );
    this.haveText(
      this.txtOverseasSalesYear2,
      this.formatCurrencyValue(businessImpact.overseasSales.year2)
    );
    this.haveText(
      this.txtOverseasSalesYear3,
      this.formatCurrencyValue(businessImpact.overseasSales.year3)
    );

    this.haveText(
      this.txtOverseasInvestmentsCurrentYear,
      this.formatCurrencyValue(businessImpact.overseasInvestments.currentYear)
    );
    this.haveText(
      this.txtOverseasInvestmentsYear1,
      this.formatCurrencyValue(businessImpact.overseasInvestments.year1)
    );
    this.haveText(
      this.txtOverseasInvestmentsYear2,
      this.formatCurrencyValue(businessImpact.overseasInvestments.year2)
    );

    this.haveText(
      this.txtOverseasInvestmentsYear3,
      this.formatCurrencyValue(businessImpact.overseasInvestments.year3)
    );

    // this.containstext(
    //   this.txtOverseasSalesCurrentYear,
    //   businessImpact.overseasSales.currentYear
    // );
    // this.containstext(
    //   this.txtOverseasSalesYear1,
    //   businessImpact.overseasSales.year1
    // );
    // this.containstext(
    //   this.txtOverseasSalesYear2,
    //   businessImpact.overseasSales.year2
    // );
    // this.containstext(
    //   this.txtOverseasSalesYear3,
    //   businessImpact.overseasSales.year3
    // );

    // this.containstext(
    //   this.txtOverseasInvestmentsCurrentYear,
    //   businessImpact.overseasInvestments.currentYear
    // );
    // this.containstext(
    //   this.txtOverseasInvestmentsYear1,
    //   businessImpact.overseasInvestments.year1
    // );
    // this.containstext(
    //   this.txtOverseasInvestmentsYear2,
    //   businessImpact.overseasInvestments.year2
    // );
    // this.containstext(
    //   this.txtOverseasInvestmentsYear3,
    //   businessImpact.overseasInvestments.year3
    // );

    this.haveText(this.txtRationale, businessImpact.rationale);
    this.haveText(this.txtBenefits, businessImpact.benefits);
  }
}
