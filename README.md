# Automated Functional Tests Repository

This repository contains automated functional tests for the Wiley Online Library website. The tests are implemented using Playwright and TypeScript.
![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code)
![Playwright](https://img.shields.io/badge/-Playwright-00FFFF?style=flat-square&logo=playwright)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Test Scenarios

### 1. Load Links Test (loadLinksTest.spec.ts)
- **Objective**: Verify the functionality related to page titles and navigation links.
- **Test Cases**:
  - Verify the title of the Wiley Online Library page.
  - Navigate to "1,600+ Journals" and verify the page heading.
  - Navigate to "250+ Reference Works" and verify the page heading.
  - Navigate to "22,000+ Online Books" and verify the page heading.

### 2. Login Test (loginTest.spec.ts)
- **Objective**: Automate login scenarios with valid and invalid credentials.
- **Test Cases**:
  - Login with a valid email and password.
  - Click the "Forgot Password" link and verify the reset password functionality.
  - Attempt to login with an invalid email.
  - Attempt to login with an invalid password.

### 3. Register Test (registerTest.spec.ts)
- **Objective**: Verify the registration functionality by filling in the required fields.
- **Test Cases**:
  - Fill in valid registration details and verify successful registration.

### 4. Search Test (searchTest.spec.ts)
- **Objective**: Automate product search scenarios with valid and advanced options.
- **Test Cases**:
  - Search for a product with a valid query and verify search results.
  - Navigate to the advanced search page and fill in search criteria.
  - Search for a product using advanced search options.

## Tools and Technologies Used

- **Playwright**: A Node library to automate browsers (Chromium, Firefox, WebKit) with a single API.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
