import reusable from "./reusable";

export default class bgpHomepage extends reusable {
  constructor() {
    super();
    this.btnCorpPassLogin = "#login-button";    
  }

  launchCorpPass() {
    this.click(this.btnCorpPassLogin);
  }
 
  
}
