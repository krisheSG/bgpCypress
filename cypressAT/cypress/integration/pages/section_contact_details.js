import reusable from "./reusable";

export default class contact_details extends reusable {
  constructor() {
    super();
    this.mnuProposal = "li:nth-child(3) .menu-text";
    this.txtName = "#react-contact_info-name";
    this.txtJobTitle = "#react-contact_info-designation";
    this.txtPhone = "#react-contact_info-phone";
    this.txtPrimaryEmail = "#react-contact_info-primary_email";
    this.txtSecondaryEmail = "#react-contact_info-secondary_email";
    this.chkSameAddress = "#react-contact_info-correspondence_address-copied";
    this.chkSameContact = "#react-contact_info-copied";

    this.txtPostalCode = "#react-contact_info-correspondence_address-postal";
    this.txtUnit = "#react-contact_info-correspondence_address-unit";
    this.txtLevel = "#react-contact_info-correspondence_address-level";
    this.buildingname =
      "react-contact_info-correspondence_address-building_name";

    // Manual entry of offeree
    this.txtContactName = "#react-contact_info-offeree_name";
    this.txtContactJobTitle = "#react-contact_info-offeree_designation";
    this.txtContactEmail = "#react-contact_info-offeree_email";

    // Read only check
    this.txtAddress = "#react-contact_info-correspondence_address";

    this.txtError = "#react-contact_info-name-alert";

    this.section_save = "#save-btn";
    this.growl_DraftSaved = ".growl-title";
  }

  save_contactdetails(contactSection, addressState = true) {
    this.log("Filling in values in the Contact section...");
    this.click(this.mnuProposal);
    this.typeVal(this.txtName, contactSection.name);
    this.typeVal(this.txtJobTitle, contactSection.jobTitle);
    this.typeVal(this.txtPhone, contactSection.phone);
    this.typeVal(this.txtPrimaryEmail, contactSection.primaryEmail);
    this.typeVal(this.txtSecondaryEmail, contactSection.secondaryEmail);

    if (addressState) {     
     
      this.check(this.chkSameContact);
      cy.log("enter contacts");
      this.check(this.chkSameAddress);
    } else {
      this.enterSecondaryAddress(contactSection.secondaryAddress);
      this.enterAlternateContact(contactSection.alternateContacts);
    }
    this.click(this.section_save);
    this.getLoc(this.growl_DraftSaved).contains("Draft Saved");
  }
  // contactSection.sameasregisteredaddressinCompanyProfile === "true"?
  // ? this.check(this.chkSameAddress)
  // : this.enterSecondaryAddress(contactSection.secondaryAddress);
  //   contactSection.sameasmaincontactperson === "true"
  //     ? this.check(this.chkSameContact)
  //     : this.enterAlternateContact(contactSection.alternateContacts);
  // }

  enterSecondaryAddress(contactSection) {
    this.log("Enter secodary registered address...");
    this.typeVal(this.txtPostalCode, contactSection.postalCode);
    this.typeVal(this.txtLevel, contactSection.level);
    this.typeVal(this.txtUnit, contactSection.unit);
  }

  enterAlternateContact(contactSection) {
    this.log("Entering custom Letter of Addressee details...");
    this.typeVal(this.txtContactName, contactSection.name);
    this.typeVal(this.txtContactJobTitle, contactSection.jobTitle);
    this.typeVal(this.txtContactEmail, contactSection.email);
  }

  verifyPreFilledReadonly(contactSection, addressState = true) {
    this.log("Checking if the entered values are present...");
    // if (readOnly) {
    // this.click(this.mnuProposal);
    this.containstext(this.txtName, contactSection.name);
    this.containstext(this.txtJobTitle, contactSection.jobTitle);
    this.containstext(this.txtPhone, contactSection.phone);
    this.containstext(this.txtPrimaryEmail, contactSection.primaryEmail);
    this.containstext(this.txtSecondaryEmail, contactSection.secondaryEmail);

    if (addressState) {
      this.verifyAddress(contactSection.mailingAddress);
      this.verifyContact(contactSection.sameContacts);
    } else {
      this.verifyAddress(contactSection.secondaryAddress);
      this.verifyContact(contactSection.alternateContacts);
    }
  }

  verifyAddress(contactSection) {
    this.log("Checking if Correspondence address is present...");
    // var address =
    //   contactSection.sameasregisteredaddressinCompanyProfile === "true"
    //     ? contactSection.mailingAddress
    //     : contactSection.secondaryAddress;
    // //  if (readOnly) {
    this.containstext(
      this.txtAddress,
      `${contactSection.houseNo} ${contactSection.street}`
    );
    this.containstext(
      this.txtAddress,
      `#${contactSection.level}-${contactSection.unit}`
    );
    this.containstext(
      this.txtAddress,
      `SINGAPORE ${contactSection.postalCode}`
    );
  }

  verifyContact(contactSection) {
    this.log("Checking if Offeree details are present...");
    // var contact =
    //   contactSection.sameContact === "true"
    //     ? contactSection.sameContacts
    //     : contactSection.alternateContacts;

    this.containstext(this.txtContactName, contactSection.name);
    this.containstext(this.txtContactJobTitle, contactSection.jobTitle);
    this.containstext(this.txtContactEmail, contactSection.email);
  }

  reloadSavedValues(contactSection, addressState = true) {
    this.haveVal(this.txtName, contactSection.name);
    this.haveVal(this.txtJobTitle, contactSection.jobTitle);
    this.haveVal(this.txtPhone, contactSection.phone);
    this.haveVal(this.txtPrimaryEmail, contactSection.primaryEmail);
    this.haveVal(this.txtSecondaryEmail, contactSection.secondaryEmail);

    if (addressState) {
      var addr_data = contactSection.mailingAddress;
      var contact_data = contactSection.sameContacts;
    } else {
      var addr_data = contactSection.secondaryAddress;
      var contact_data = contactSection.alternateContacts;
    }

    this.haveVal(this.txtPostalCode, addr_data.postalCode);
    this.haveVal(this.txtUnit, addr_data.unit);
    this.haveVal(this.txtLevel, addr_data.level);

    this.haveVal(this.txtContactName, contact_data.name);
    this.haveVal(this.txtContactJobTitle, contact_data.jobTitle);
    this.haveVal(this.txtContactEmail, contact_data.email);
  }
}
