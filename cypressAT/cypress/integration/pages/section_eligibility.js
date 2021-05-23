import reusable from "./reusable";

export default class form_eligibility extends reusable {
  constructor() {
    super();
    this.true_SGregistered = "#react-eligibility-sg_registered_check-true";
    this.true_turnover_check = "#react-eligibility-turnover_check-true";
    this.true_localequity = "#react-eligibility-global_hq_check-true";
    this.true_newMarket = "#react-eligibility-new_target_market_check-true";
    this.true_ProjectStarted =
      'input[id="react-eligibility-started_project_check-true"]';

    this.false_SGregistered = "#react-eligibility-sg_registered_check-false";
    this.false_turnover_check = "#react-eligibility-turnover_check-false";
    this.false_localequity = "#react-eligibility-global_hq_check-false";
    this.false_newMarket = "#react-eligibility-new_target_market_check-false";
    this.false_ProjectStarted =
      'input[id="react-eligibility-started_project_check-false"]';

    // 'input[id="react-eligibility-new_target_market_check-true"] + .radiobutton';
    // this.true_ProjectStarted =
    //   "#react-eligibility-new_target_market_check-true + .radiobutton";

    this.radSGRegisteredNo = "#react-eligibility-sg_registered_check-false";
    this.txtWarningMessage = ".eligibility-advice";
    this.txtWarningMessageFAQ = ".eligibility-advice span a";
    this.section_save = "#save-btn";
    this.growl_DraftSaved = ".growl-title";

    // Read only check
    this.txtSGRegistered = "#react-eligibility-sg_registered_check";
    this.txtSalesTurnover = "#react-eligibility-turnover_check";
    this.txtLocalEquity = "#react-eligibility-global_hq_check";
    this.txtNewMarket = "#react-eligibility-new_target_market_check";
    this.txtProjectStarted = "#react-eligibility-started_project_check";
  }

  save_eligbility(answer = true) {
    this.log("Filling valid values in the Eligibility section...");
    if (answer) {
      this.click(this.true_SGregistered);
      this.click(this.true_turnover_check);
      this.click(this.true_localequity);
      this.click(this.true_newMarket);
      this.click(this.true_ProjectStarted);
    } else {
      this.click(this.false_SGregistered);
      this.click(this.false_turnover_check);
      this.click(this.false_localequity);
      this.click(this.false_newMarket);
      this.click(this.false_ProjectStarted);
    }
    this.click(this.section_save);
    this.getLoc(this.growl_DraftSaved).contains("Draft Saved");
  }

  verifyPreFilledReadonly(answer = true) {
    this.log(
      "Checking if the Eligibility section contains the entered values..."
    );
    if (answer) {
      this.haveText(this.txtSGRegistered, "Yes");
      this.haveText(this.txtSalesTurnover, "Yes");
      this.haveText(this.txtLocalEquity, "Yes");
      this.haveText(this.txtNewMarket, "Yes");
      this.haveText(this.txtProjectStarted, "Yes");
    } else {
      this.haveText(this.txtSGRegistered, "No");
      this.haveText(this.txtSalesTurnover, "No");
      this.haveText(this.txtLocalEquity, "No");
      this.haveText(this.txtNewMarket, "No");
      this.haveText(this.txtProjectStarted, "No");
    }
  }

  reloadSavedValues(answer = true) {
    if (answer) {
      this.beChecked(this.true_SGregistered);
      this.beChecked(this.true_turnover_check);
      this.beChecked(this.true_localequity);
      this.beChecked(this.true_newMarket);
      this.beChecked(this.true_ProjectStarted);
    } else {
      this.beChecked(this.false_SGregistered);
      this.beChecked(this.false_turnover_check);
      this.beChecked(this.false_localequity);
      this.beChecked(this.false_newMarket);
      this.beChecked(this.false_ProjectStarted);
    }
  }
  validateMsg(count, msg) {
    var ele = this.txtWarningMessage;
    this.haveLength(ele, count);
    this.containstext(ele, msg);
  }
  validateAttributesValues(val) {
    var ele = this.txtWarningMessageFAQ;
    this.haveAttribute(ele, "href", val);
  }
}
