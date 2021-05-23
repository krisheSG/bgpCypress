import reusable from "./reusable";

export default class myGrant extends reusable {
  constructor() {
    super();
    this.lblMyGrant = ".dashboard-container h2";
    this.lblGetnewgrant = "#dashboard-menubox-app-apply-grant h4";
    this.lnkDashboard = 'a[alt="Dashboard"]';
    this.tabDrafts = '#grants .dashboard-tabs a[href="#drafts"]';
    this.tabProcessing = '#grants .dashboard-tabs a[href="#processing"]';
  }
  clickNewGrant(val) {
    this.getLoc(this.lblMyGrant).contains(val, { matchCase: false });
    this.click(this.lblGetnewgrant);
  }

  openDashboard() {
    this.log("Opening the Grants dashboard...");
    this.click(this.lnkDashboard);
  }

  openDraftsTab() {
    this.log("Opening the Drafts tab...");
    this.click(this.tabDrafts);
  }

  openProcessingTab() {
    this.log("Opening the Processing tab...");
    this.click(this.tabProcessing);
  }

  checkIfApplicationExists(proposalSection) {
    this.log("Checking if the application exists in the dashboard...");
    var projectTitle =
      'div.title-div:contains("' + proposalSection.title + '")';
    this.beVisible(projectTitle);
  }
  
}
