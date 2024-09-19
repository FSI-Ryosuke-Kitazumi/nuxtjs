import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "~/mocks/node";
import { createFetch } from "ofetch";

beforeAll(() => {
  server.listen();

  // createFetchを使わないとMSWのモック化の対象にならない
  globalThis.$fetch = createFetch({
    fetch: globalThis.fetch,
    Headers: globalThis.Headers,
  });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
