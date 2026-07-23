# Bill Payment API Automation

This project is a TypeScript-based API automation framework for testing the Bill Payment API. It uses Mocha, TSX, Supertest, dotenv, chai and Winston to execute smoke and regression-style API tests.

## Overview

The framework is designed to:
- send HTTP requests to a hosted API
- build reusable request objects
- configure environment-specific values
- log test activity and API interactions
- execute tests with Mocha
- chai for assertion

## Tech Stack

- TypeScript
- Node.js
- Mocha
- TSX
- Supertest
- dotenv
- Winston
- chai

## Project Structure

- [src/clients](src/clients) - request building and execution logic
- [src/configs](src/configs) - environment and config handling
- [src/endpoints](src/endpoints) - API endpoint definitions
- [src/services](src/services) - controller/service layer for API operations
- [src/tests](src/tests) - test cases
- [src/utils](src/utils) - helper and logging utilities

## Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install

## Credits

This project uses the practice API designed by Gaurav Khurana for learning and automation purposes.  
API reference: https://gauravkhurana.com/practise-api/
