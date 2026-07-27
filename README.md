# Bill Payment API Automation Framework

A production-inspired API automation framework built using **TypeScript**, **Mocha**, **Chai**, **Supertest**, and **AJV**. The framework follows a modular architecture with reusable components for request execution, assertions, schema validation, logging, and reporting.

---

## Features

- API automation using Supertest
- TypeScript support
- Modular controller-based architecture
- Centralized request builder
- Reusable assertion helpers
- JSON Schema validation using AJV
- Assertion reporting
- Request & response logging
- AsyncLocalStorage based test context
- Mochawesome HTML reports
- Environment configuration support

---

## Tech Stack

| Technology        | Purpose                |
| ----------------- | ---------------------- |
| TypeScript        | Programming Language   |
| Mocha             | Test Runner            |
| Chai              | Assertions             |
| Supertest         | API Testing            |
| AJV               | JSON Schema Validation |
| Mochawesome       | HTML Reporting         |
| Winston           | Logging                |
| AsyncLocalStorage | Test Context           |

---

# Project Structure

```text
src
│
├── config
│
├── controllers
│
├── core
│   ├── assertion
│   ├── context
│   ├── hooks
│   ├── logger
│   ├── reporting
│   ├── request
│   └── validation
│
├── schemas
│
├── services
│
├── tests
│
└── utils
```

---

# High Level Architecture

```text
                  Test Suites
                       │
                       ▼
                 API Controllers
                       │
                       ▼
                Request Builder
                       │
                       ▼
                  Supertest Client
                       │
                       ▼
                    REST API
                       │
                       ▼
                    Response
                       │
         ┌─────────────┼──────────────┐
         ▼             ▼              ▼
   Status Code     Response Body   JSON Schema
   Assertions      Assertions      Validation
         │             │              │
         └─────────────┼──────────────┘
                       ▼
              Assertion Collector
                       │
                       ▼
              Mochawesome Report
```

---

# Request Execution Flow

```text
Test

↓

Controller

↓

Request Builder

↓

Supertest

↓

REST API

↓

HTTP Response

↓

Assertion Helper

↓

Assertion Collector

↓

Mochawesome Report
```

---

# Schema Validation Flow

```text
Response

↓

AssertionHelper.assertJsonSchema()

↓

SchemaValidator

↓

WeakMap Cache

        │
        ├───────────────┐
        │               │
    Found          Not Found
        │               │
        │        Compile Schema
        │               │
        └───────┬───────┘
                ▼
       Compiled Validator

                │

                ▼

      validator(response)

                │

        true / false

                │

                ▼

      Assertion Collector
```

---

# Logging Flow

```text
Mocha Hook

↓

TestExecutionContext

↓

AsyncLocalStorage

↓

Request Builder

↓

Logger

↓

Console
File
Mochawesome
```

---

# Assertion Architecture

```text
                 Assertion Helper

        ┌────────────┬────────────┬────────────┐
        │            │            │
        ▼            ▼            ▼
 Status Code     Equal      JSON Schema
 Assertion     Assertion     Assertion
        │            │            │
        └────────────┼────────────┘
                     ▼
           Assertion Collector
                     │
                     ▼
            Mochawesome Report
```

---

# Running the Tests

```bash
npm install
```

```bash
npm test
```

Generate Mochawesome Report

```bash
npm run report
```

---

# Design Principles

- Separation of Concerns
- Reusable Components
- Modular Architecture
- Centralized Logging
- Schema Driven Validation
- Clean Test Design
- Type Safety
- Maintainability

---

# Future Enhancements

- OpenAPI Contract Validation
- Request Interceptors
- Response Interceptors
- Retry Mechanism
- Parallel Execution
- Allure Reporting
- Docker Integration
- CI/CD Pipeline

---

# Author

**Aman Raj**

Senior Software Development Engineer in Test (SDET)

## Practice API

This framework is built against the practice API developed by **Gaurav Khurana**.

API Reference:

https://gauravkhurana.com/practise-api/

---

## License

This project is licensed under the ISC License.
