import reusable from "./reusable";

export default class proposal extends reusable {
  constructor() {
    super();
    this.mnuitem = "li:nth-child(4) .menu-text";
    this.txtTitle = "#react-project-title";
    this.txtStartDate = "#react-project-start_date";
    this.txtEndDate = "#react-project-end_date";
    this.txtDescription = "#react-project-description";
    this.lstActivity = "#react-select-project-activity--value";
    this.lstTargetMarket = "#react-select-project-primary_market--value";
    this.radFirstTimeOutsideSGYes = "#react-project-is_first_time_expand-true";
    this.radFirstTimeOutsideSGNo = "#react-project-is_first_time_expand-false";
    this.fileSupportingDocuments = "#react-project-attachments-input";
    this.txtRemarks = "#react-project-remarks";

    // Read only check
    this.txtActivity = "#react-project-activity";
    this.txtTargetMarket = "#react-project-primary_market";
    this.txtFirstTimeOutsideSG = "#react-project-is_first_time_expand";

    this.txtError = "#react-project-title-alert";
  }

  completeSection(proposalSection) {
    this.log("Filling in values in the Proposal section...");
    // this.click(this.mnuitem);
    this.scrolltop();
    this.typeVal(this.txtTitle, proposalSection.title);
    this.typeVal(this.txtStartDate, proposalSection.startDate);
    this.typeVal(this.txtEndDate, proposalSection.endDate);
    this.typeVal(this.txtDescription, proposalSection.description);
    this.selectActivity(proposalSection.activity);
    this.selectTargetMarket(proposalSection.market);
    this.click(this.radFirstTimeOutsideSGYes);
    this.uploadImage(this.fileSupportingDocuments);
    this.typeVal(this.txtRemarks, proposalSection.remarks);
  }
  selectActivity(activity) {
    this.click(
      "#react-select-project-activity--value + span.Select-arrow-zone"
    );
    this.typeValAndEnter(
      "#react-select-project-activity--value input",
      activity
    );
  }

  selectTargetMarket(market) {
    this.click(
      "#react-select-project-primary_market--value + span.Select-arrow-zone"
    );
    this.typeValAndEnter(
      "#react-select-project-primary_market--value input",
      market
    );
  }

  verifyPreFilledReadonly(proposalSection) {
    this.log("Checking if the Proposal section contains entered values...");
    this.haveText(this.txtTitle, proposalSection.title);
    this.haveText(this.txtStartDate, proposalSection.startDate);
    this.haveText(this.txtEndDate, proposalSection.endDate);
    this.haveText(this.txtDescription, proposalSection.description);
    this.haveText(this.txtActivity, proposalSection.activity);
    this.haveText(this.txtTargetMarket, proposalSection.market);
    this.haveText(this.txtFirstTimeOutsideSG, "Yes");
    this.haveText(this.txtRemarks, proposalSection.remarks);
  }
}
