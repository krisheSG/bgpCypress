import reusable from "./reusable";

export default class declarereview extends reusable {
  constructor() {
    super();
    this.mnuitem = "li:nth-child(7) .menu-text";
    this.optCriminalLiabilityNo =
      "#react-declaration-criminal_liability_check-false";
    this.optCivilProceedingNo =
      "#react-declaration-civil_proceeding_check-false";
    this.optInsolvencyNo =
      "#react-declaration-insolvency_proceeding_check-false";
    this.optIncentivesNo = "#react-declaration-project_incentives_check-false";
    this.optOtherIncentivesNo =
      "#react-declaration-other_incentives_check-false";
    this.optProjectCommencedNo =
      "#react-declaration-project_commence_check-false";
    this.optRelatedPartyNo = "#react-declaration-related_party_check-false";
    this.optCovidComplianceYes = "#react-declaration-covid_safe_check-true";
    this.optCovidFurtherComplianceYes =
      "#react-declaration-covid_safe_ques_check-true";
    this.chkAcknowledgement =
      "#react-declaration-consent_acknowledgement_check";

    // Read only check
    this.txtCriminalLiability = "#react-declaration-criminal_liability_check";
    this.txtCivilProceeding = "#react-declaration-civil_proceeding_check";
    this.txtInsolvency = "#react-declaration-insolvency_proceeding_check";
    this.txtIncentives = "#react-declaration-project_incentives_check";
    this.txtOtherIncentives = "#react-declaration-other_incentives_check";
    this.txtProjectCommenced = "#react-declaration-project_commence_check";
    this.txtRelatedParty = "#react-declaration-project_commence_check";
    this.txtCovidCompliance = "#react-declaration-covid_safe_check";
    this.txtCovidFurtherCompliance = "#react-declaration-covid_safe_ques_check";

    // Page objects
    this.chkAgree = '#react-declaration-info_truthfulness_check';
    this.btnSubmit = '#submit-btn';
    this.txtRefId = 'td:contains("Ref ID:") + td.value';
    this.txtAgencyDetails = 'td:contains("Agency Details:") + td.value';

    // Read only check
    this.cntCompanyProfile = '.company-profile-container-readonly';
    this.txtAgree = '#react-declaration-info_truthfulness_check';
  }

  saveDeclaration() {
    this.log("Completing the declaration...");
    this.click(this.mnuitem);
    this.click(this.optCriminalLiabilityNo);
    this.click(this.optCivilProceedingNo);
    this.click(this.optInsolvencyNo);
    this.click(this.optIncentivesNo);
    this.click(this.optOtherIncentivesNo);
    this.click(this.optProjectCommencedNo);
    this.click(this.optRelatedPartyNo);
    this.click(this.optCovidComplianceYes);
    this.click(this.optCovidFurtherComplianceYes);
    this.check(this.chkAcknowledgement);
  }

  verifyPreFilledReadonly() {
    this.log("Checking if the Declaration section has entered values...");
    this.haveText(this.txtCriminalLiability, "No");
    this.haveText(this.txtCivilProceeding, "No");
    this.haveText(this.txtInsolvency, "No");
    this.haveText(this.txtIncentives, "No");
    this.haveText(this.txtOtherIncentives, "No");
    this.haveText(this.txtProjectCommenced, "No");
    this.haveText(this.txtRelatedParty, "No");
    this.haveText(this.txtCovidCompliance, "Yes");
    this.haveText(this.txtCovidFurtherCompliance, "Yes");
    this.haveText(this.chkAcknowledgement, "Yes");
  }

  agreeAndSubmitApplication() {
    this.log('Agree and submit the application...');
    this.check(this.chkAgree);
    this.click(this.btnSubmit);
  }

  checkIfSubmitted() {
    this.log('Checking if the application is successfully submitted...');
    this.containstext(this.txtAgencyDetails, 'Enterprise Singapore');
    this.haveText(this.txtAgree, 'Yes');
  }

  checkIfCompanyProfileIsDisplayed() {
    this.log('Checking if Company Profile is displayed...');
    this.beVisible(this.cntCompanyProfile);
  }
}
