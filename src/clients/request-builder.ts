import request, { type Test } from "supertest";
import { config, API_KEY } from "../configs/index.js";
import { TestExecutionContext } from "../context/index.js";

class RequestBuilder {
  private readonly client;
  private request!: Test;

  constructor() {
    this.client = request.agent(config.baseUrl);
  }

  public get(endpoint: string): this {
    this.request = this.client.get(endpoint);
    return this;
  }

  public post(endpoint: string): this {
    this.request = this.client.post(endpoint);
    return this;
  }

  public put(endpoint: string): this {
    this.request = this.client.put(endpoint);
    return this;
  }

  public delete(endpoint: string): this {
    this.request = this.client.delete(endpoint);
    return this;
  }

  public setHeaders(
    headers: Record<string, any>,
    isAuthRequired: boolean,
  ): this {
    const finalHeaders = {
      ...headers,
      "x-request-id": TestExecutionContext.get()?.traceId,
      ...(isAuthRequired && {
        "X-API-Key": API_KEY,
      }),
    };

    this.request.set(finalHeaders);
    return this;
  }

  public setJsonPayload(payload: Record<string, any>): this {
    this.request.send(payload);
    return this;
  }

  public build(): Test {
    return this.request;
  }
}

export default RequestBuilder;
