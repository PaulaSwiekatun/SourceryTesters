# Swag Labs E2E Tests

## Task Description

You will be asked to imagine that you are working on a project that develops an application to buy swag. The main task is to cover the functionality described in two user stories with automated e2e tests.

## Application
The application we will be testing: [Swag Labs](https://www.saucedemo.com) 


## User Stories

### User Story 1
As a standard user, I want to be able to log into the application and see the list of available products so that I can browse and add them to the cart.

### User Story 2
As a locked-out user, I want to receive an error message when attempting to log in so that I know my account is locked.

## Tools and Technologies
- **Browser:** Google Chrome
- **Testing Tool:** Playwright
- **Programming Language:** JavaScript
- **Design Pattern:** Page Object Model (POM)

## Test Execution Instructions
1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Run the tests**:
    ```bash
    npx playwright test
    ```
#### Either open in Visual Studio Code
**Menu**: Select `Terminal` > `New Terminal` from the top menu.
1. **Run the tests**  ```visual studio code terminal
    npx playwright test ```

## Test Results
Test results will be displayed in the terminal upon completion.

##Example output:
- ✓ 1 tests\swag.test.js:6:5 › Swag Labs E2E Tests › should login as standard_user and see inventory (645ms)
- ✓ 2 tests\swag.test.js:15:5 › Swag Labs E2E Tests › should fail to login as locked_out_user (561ms)
