type LogLevel = "info" | "error" | "warn" | "debug";

interface EnvironmentConfig {
  env: string;
  baseUrl: string;
  logLevel: LogLevel;
}

const Environments: Record<string, EnvironmentConfig> = {
  dev: {
    env: "dev",
    baseUrl: "https://billpay-api.gauravkhurana-practice-api.workers.dev",
    logLevel: "info",
  },
};

type Environment = keyof typeof Environments;

function getEnvironment(env: Environment): EnvironmentConfig {
  const config = Environments[env];

  if (!config) {
    throw new Error(
      `Incorrect Test Environment provided: ${env}, Valid Test Environment: ${Object.keys(Environments).join(",")}`,
    );
  }

  return config;
}

export { getEnvironment, type EnvironmentConfig };
