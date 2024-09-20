import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "~/mocks/node";
import { createFetch } from "ofetch";

beforeAll(() => {
  server.listen();

  // NOTE: createFetchを使わないとMSWのモック化の対象にならず、testでモックAPIが使えない
  globalThis.$fetch = createFetch({
    fetch: globalThis.fetch,
    Headers: globalThis.Headers,
  });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
