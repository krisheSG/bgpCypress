import reusable from "./reusable";

export default class section_common_loc extends reusable {
  constructor() {
    super();
    this.section_save = "#save-btn";
    this.section_next = "#next-btn";
    this.section_previous = "#back-btn";
    this.btnReviewApplication = "#review-btn";
    this.mnuitem_decReview = "li:nth-child(7) .menu-text";
    this.eligbility_err_count = "li:nth-child(2) .label.label-error";
    this.contact_details_err_count = "li:nth-child(3) .label.label-error";
    this.proposal_err_count = "li:nth-child(4) .label.label-error";
    this.business_impact_err_count = "li:nth-child(5) .label.label-error";
    this.cost_err_count = "li:nth-child(6) .label.label-error";
    this.declare_review_err_count = "li:nth-child(7) .label.label-error";
  }
  clicknext() {
    this.click(this.section_next);
  }

  reviewApplication() {
    this.log("Reviewing the application before submission...");
    // this.click(this.mnuitem_decReview);
    this.click(this.btnReviewApplication);
  }

  refershApplication() {
    cy.reload();
  }
  navigateToSection() {
    this.click(this.mnuitem_decReview);
  }
  findErrormessageCount(count, section) {
    if (section == "eligibility") {
      this.containstext(this.eligbility_err_count, count);
    } else if (section == "Contact Deatils") {
      this.containstext(this.contact_details_err_count, count);
    } else if (section == "Proposal") {
      this.containstext(this.proposal_err_count, count);
    } else if (section == "Business Impact") {
      this.containstext(this.business_impact_err_count, count);
    } else if (section == "Cost") {
      this.containstext(this.cost_err_count, count);
    } else if (section == "Declare & Review") {
      this.containstext(this.declare_review_err_count, count);
    }
  }
}
