# Bill Payment API Automation Framework

A scalable and production-style API automation framework built with **TypeScript**, **Node.js**, **Mocha**, **Chai** and **Supertest**. This project demonstrates best practices for designing maintainable API test automation frameworks using a layered architecture.

---

## Overview

This framework is designed to automate testing of the **Bill Payment / User Management Practice API** while showcasing clean architecture, reusable components, and maintainable test design.

The framework includes:

- Reusable HTTP request builder
- Environment-based configuration
- Centralized API endpoint definitions
- Service layer abstraction
- Modular test organization
- Logging with Winston
- TypeScript support
- Mocha test runner

---

## Why This Project?

This project demonstrates:

- Clean and scalable framework architecture
- Separation of concerns
- Reusable API client design
- Service-oriented automation approach
- Type-safe automation using TypeScript
- Production-style project organization
- Interview-ready API automation framework

---

## Tech Stack

- TypeScript
- Node.js
- Mocha
- TSX
- Supertest
- dotenv
- Winston
- Chai

---

## Project Structure

```text
src
├── clients
│   ├── requestBuilder.ts
│   └── requestExecutor.ts
│
├── configs
│   └── config.ts
│
├── endpoints
│   └── userManagementEndpoints.ts
│
├── services
│   └── userManagementService.ts
│
├── tests
│   └── user-management-api-test.spec.ts
│
└── utils
    ├── logger.ts
    └── helpers.ts

logs
.env
package.json
README.md
```

---

## Framework Architecture

The framework follows a layered architecture that separates responsibilities into independent modules.

### Clients

Responsible for sending HTTP requests.

- Builds requests
- Adds headers
- Handles query parameters
- Executes API calls

---

### Configs

Loads configuration from environment variables.

Examples:

- Base URL
- API keys
- Test environment

---

### Endpoints

Stores API endpoint paths in a centralized location.

Example:

```ts
export const UserEndpoints = {
    createUser: "/users",
    getUser: "/users/:id"
};
```

---

### Services

Encapsulates business operations and API interactions.

Instead of writing requests directly inside test files:

```ts
await request.post("/users");
```

Tests interact with services:

```ts
await userManagementService.createUser(payload);
```

This keeps tests clean and reusable.

---

### Tests

Contains Mocha test suites.

Responsibilities include:

- Calling service methods
- Validating responses
- Assertions
- End-to-end API scenarios

---

### Utils

Contains reusable utilities such as:

- Logger
- Helper methods
- Common utilities

---

## Features

- Layered architecture
- Environment-based configuration
- Reusable request builder
- Centralized endpoint management
- Service layer abstraction
- Winston logging
- Modular and maintainable codebase
- Easy to extend for additional APIs

---

# Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js 18+
- npm

---

## Installation

Clone the repository.

```bash
git clone https://github.com/your-username/bill-payment-api-automation.git
```

Move into the project directory.

```bash
cd bill-payment-api-automation
```

Install dependencies.

```bash
npm install
```

---

## Environment Configuration

Create a `.env` file in the project root.

```env
TEST_ENV=dev
API_KEY=your_api_key
```

The framework automatically loads these values using `dotenv`.

---

## Running Tests

Run all tests.

```bash
npm test
```

Run smoke tests.

```bash
npm run smoke-user-management-api-test
```

---

## Example Test Scenario

A sample test is available at:

```text
src/tests/user-management-api-test.spec.ts
```

The test demonstrates:

- Creating a new user
- Sending requests through the service layer
- Validating response status
- Verifying response payload

---

## Logging

The framework uses **Winston** for logging.

Logs are written to:

- Console
- `logs/` directory

This helps with debugging, request tracing, and execution analysis.

---

## Future Improvements

Some enhancements planned for the framework include:

- Request & Response logging
- JSON Schema validation
- Custom assertions
- API retry mechanism
- Test data builders
- HTML reporting
- CI/CD integration with GitHub Actions
- Parallel test execution
- Authentication utilities
- Database validation helpers

---

## Learning Objectives

This project demonstrates concepts commonly expected from an Automation Engineer or SDET, including:

- API automation framework design
- TypeScript best practices
- Clean code principles
- Reusable HTTP client implementation
- Service layer abstraction
- Modular architecture
- Environment management
- Logging and debugging

---

## Practice API

This framework is built against the practice API developed by **Gaurav Khurana**.

API Reference:

https://gauravkhurana.com/practise-api/

---

## License

This project is licensed under the ISC License.
