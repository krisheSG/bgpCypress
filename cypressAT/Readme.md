# BGP automation using Cypress.

## BPG test requirement

|positive functionalities | negative functionalities |
| enter valid values | enter invalid vaues |
| verify saved values | verify saved values |
| verify reload values | verify reloaded values |
| verify prefilled values | verify prefilled values |

## BDD Framework layers

1. Features
2. Step definitions
3. page objects & test data
4. reusable methods
5. reports

## Dependencies

"cypress": "^7.3.0",
"cypress-cucumber-preprocessor": "^4.1.0",
"numeral": "^2.0.6",
"cypress-file-upload": "^5.0.7",
"multiple-cucumber-html-reporter": "^1.18.0",

### To-do before running the test.

- Please fill / modify the required input in the cypress/fixtures/loginData.json

### To run the test

```
./node_modules/.bin/cypress run --spec **/features/*.feature --browser chrome
```

Generate HTML report
node .\cucumber-html-report.js

View HTML Report
"./htmlreports/report.html"
