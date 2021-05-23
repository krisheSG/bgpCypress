import reusable from "./reusable";

export default class cost extends reusable {
  constructor() {
    super();
    this.mnuitem = "li:nth-child(6) .menu-text";
    this.txtCostRemarks = "#react-project_cost-remarks";

    // Third Party Vendors
    this.cntVendors = "#react-project_cost-vendors-accordion-header";
    this.btnAddVendor = "#react-project_cost-vendors-add-item";
    this.radlocalvendor = "#react-project_cost-vendors-0-local_vendor-true";
    this.radOverseasvendor = "#react-project_cost-vendors-0-local_vendor-false";
    this.txtVendorName = "#react-project_cost-vendors-0-vendor_name";
    this.lstVendorname = "#vendor-row-sub";
    this.fileVendorDoc = "#react-project_cost-vendors-0-attachments-input";
    this.txtVendorBillAmount =
      "#react-project_cost-vendors-0-amount_in_billing_currency";
    this.vendorremarks = "#react-project_cost-vendors-0-remarks";

    // Office Space Rental
    this.cntRental = "#react-project_cost-office_rentals-accordion-header";
    this.btnAddRental = "#react-project_cost-office_rentals-add-item";
    this.txtRentalDescription =
      "#react-project_cost-office_rentals-0-description";
    this.txtRentalDuration =
      "#react-project_cost-office_rentals-0-rental_duration";
    this.txtRentalBillAmount =
      "#react-project_cost-office_rentals-0-amount_in_billing_currency";
    this.fileRentalDoc =
      "#react-project_cost-office_rentals-0-attachments-input";
    this.txtRentalRemarks = "#react-project_cost-office_rentals-0-remarks";

    // Salary
    this.cntSalary = "#react-project_cost-salaries-accordion-header";
    this.btnAddSalary = "#react-project_cost-salaries-add-item";
    this.txtStaffName = "#react-project_cost-salaries-0-name";
    this.txtStaffDesignation = "#react-project_cost-salaries-0-designation";
    this.txtStaffIdentification = "#react-project_cost-salaries-0-nric";
    this.lstStaffNationality =
      "#react-select-project_cost-salaries-0-nationality--value + span.Select-arrow-zone";
    this.lstNationalityType =
      "#react-select-project_cost-salaries-0-nationality--value input";
    this.txtStaffRole = "#react-project_cost-salaries-0-project_role";
    this.txtProjectInvolvement =
      "#react-project_cost-salaries-0-involvement_months";
    this.txtMonthlySalaryinBillingCurrency =
      "#react-project_cost-salaries-0-salary_in_billing_currency";
    this.fileStaffDoc = "#react-project_cost-salaries-0-attachments-input";
    this.txtSalaryremarks = "#react-project_cost-salaries-0-remarks";

    // Read only check
    this.txtVendorRegisteredLocation =
      "#react-project_cost-vendors-0-local_vendor";
    this.txtStaffNationality = "#react-project_cost-salaries-0-nationality";

    this.txtTotalCost = "#react-project_cost-total_cost";

    this.txtError = "#react-project_cost-vendors-0-vendor_name-alert";
  }
  savecost(data) {
    this.log("Filling in values in the Cost section...");
    // this.click(this.mnuitem);
    this.addNewVendorItem(data.vendor);
    this.addNewRentalItem(data.rental);
    this.addNewSalaryItem(data.salary);
    // this.typeVal(this.txtCostRemarks, data.remarks);
  }

  addNewVendorItem(data) {
    this.log("Adding a new vendor item...");
    this.click(this.cntVendors);
    this.click(this.btnAddVendor);
    this.click(this.radlocalvendor);
    this.typeEnter(this.txtVendorName, data.name);
    this.clickcontains(this.lstVendorname, data.name);
    this.uploadImage(this.fileVendorDoc);
    this.typeVal(this.txtVendorBillAmount, data.amount);
    this.typeVal(this.vendorremarks, data.remarks);
  }

  addNewRentalItem(data) {
    this.log("Adding a new rental item...");
    this.click(this.cntRental);
    this.click(this.btnAddRental);
    this.typeVal(this.txtRentalDescription, data.description);
    this.typeVal(this.txtRentalDuration, data.duration);
    this.typeVal(this.txtRentalBillAmount, data.amount);
    this.uploadImage(this.fileRentalDoc);
    this.typeVal(this.txtRentalRemarks, data.remarks);
  }

  addNewSalaryItem(data) {
    this.log("Adding a new salary item...");
    this.click(this.cntSalary);
    this.click(this.btnAddSalary);
    this.typeVal(this.txtStaffName, data.name);
    this.typeVal(this.txtStaffDesignation, data.designation);
    this.typeVal(this.txtStaffIdentification, data.identification);
    this.click(this.lstStaffNationality);
    // this.typeValAndEnter(this.lstStaffNationality, data.nationality);
    this.selectStaffNationality(data.nationality);
    this.typeVal(this.txtStaffRole, data.role);
    this.typeVal(this.txtProjectInvolvement, data.duration);
    this.typeVal(this.txtMonthlySalaryinBillingCurrency, data.amount);
    this.uploadImage(this.fileStaffDoc);
    this.typeVal(this.txtSalaryremarks, data.remarks);
  }

  selectStaffNationality(nationality) {
    this.click(
      "#react-select-project_cost-salaries-0-nationality--value + span.Select-arrow-zone"
    );
    this.typeValAndEnter(
      "#react-select-project_cost-salaries-0-nationality--value input",
      nationality
    );
  }

  verifyPreFilledReadonly(cost) {
    // this.log(
    //   "Checking if the entered values are displayed in the Cost section..."
    // );
    // this.haveText(this.txtVendorRegisteredLocation, "Singapore");
    // this.haveText(this.txtVendorName, cost.vendor.name);
    // this.haveText(
    //   this.txtVendorBillAmount,
    //   this.formatCurrencyValue(cost.vendor.amount, true)
    // );

    // this.haveText(this.txtRentalDescription, cost.rental.description);
    this.haveText(this.txtRentalDuration, `${cost.rental.duration}.0 months`);
    this.haveText(
      this.txtRentalBillAmount,
      this.formatCurrencyValue(cost.rental.amount, true)
    );
    this.haveText(this.txtRentalRemarks, cost.rental.remarks);

    this.haveText(this.txtStaffName, cost.salary.name);
    this.haveText(this.txtStaffDesignation, cost.salary.designation);
    this.haveText(this.txtStaffNationality, cost.salary.nationality);
    this.haveText(this.txtStaffRole, cost.salary.role);
    this.haveText(
      this.txtProjectInvolvement,
      `${cost.salary.duration}.0 months`
    );
    this.haveText(
      this.txtMonthlySalaryinBillingCurrency,
      this.formatCurrencyValue(cost.salary.amount, true)
    );
    this.haveText(this.txtSalaryremarks, cost.salary.remarks);
  }
}
