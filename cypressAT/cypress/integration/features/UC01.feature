Feature: Feature name

    Feature Description
 Background: login the bgp
    Given user logged in BGP portal     
    And logged in CorpPass with given authentication
    When user launched the "MY GRANT" application to get new grant 
    And started and proceed to submit application form with "IT", Bring my business overseas, Market Readiness Assistance

 Scenario: EPIC - E2E apply and verify application
     Given user saved the eligibility with input with "Yes"
     And navigate to next section
     Given saved the contact details with "alternate" address and contact
     And navigate to next section
     And saved the proposal with valid input
     And navigate to next section
     And saved the Business Impact with valid input
     And navigate to next section
     And saved cost with valid input
     And navigate to next section
     And entered the declartion with valid input
     And review the form
     Then verify eligibility prefilled values with "Yes" in read-only in summary page
     Then verify contact details with "alternate" address and contact in read-only state 
     Then verify proposal prefilled values in read-only state
     Then verify Business Impact prefilled values in read-only state
     Then verify Cost prefilled values in read-only state
     Then verify declartion prefilled values in read-only state
     When submit the application
     Then the application should be submitted
     And the company profile should be displayed
     When they goto their My Grants dashboard
     Then they should be able to see the application under Processing tab

 Scenario: User Story 001 - eligibility section 
     When user saved the eligibility with input with "No"
     And refresh the page
     Then verify reload the saved eligibility values with "No"
     And "5" warn messages should displayed with "The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants."
     And warn messages FAQ URL with "https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145"

Scenario: User Story 2 – Contact Details Section        
    Given saved the contact details with "same" address and contact
     And refresh the page
     Then verify reload the saved contact details with "same" address and contact

 Scenario: verify error message and count when there are no mandatory  fields data
     And navigate to Declar & review section
      And review the form
      Then verify "5" error message should display for "eligibility"
      Then verify "8" error message should display for "Contact Deatils"
      Then verify "7" error message should display for "Proposal"
      Then verify "11" error message should display for "Business Impact"
      Then verify "1" error message should display for "Cost"
      Then verify "10" error message should display for "Declare & Review"









    




