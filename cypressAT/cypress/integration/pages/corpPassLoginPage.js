import reusable from "./reusable";

export default class corpPassLoginPage extends reusable {
  constructor() {
    super();
    this.txtNRIC = 'input[name="CPUID"]';
    this.txtFullName = 'input[name="CPUID_FullName"]';
    this.txtUEN = 'input[name="CPEntID"]';
    this.drpRole = 'select[name="CPRole"]';
    this.btnLogin = 'select[name="CPRole"] + button';
  }

  loginCorpPass(userdetails) {
    this.log("login CorpPass using specified authentication");
    this.typeVal(this.txtNRIC, userdetails.nric);
    this.typeVal(this.txtFullName, userdetails.CPUID_FullName);
    this.typeVal(this.txtUEN, userdetails.uen);
    this.select(this.drpRole, userdetails.role);
    this.click(this.btnLogin);
  }
}
