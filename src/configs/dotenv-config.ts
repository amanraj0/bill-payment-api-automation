import dotenv from "dotenv";

dotenv.config();

const TEST_ENV = process.env.TEST_ENV!;
const API_KEY = process.env.API_KEY!;

export { TEST_ENV, API_KEY };
