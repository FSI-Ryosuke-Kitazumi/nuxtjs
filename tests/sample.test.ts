import { expect, test } from "vitest";
import Sample from "../components/Sample.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("my test", async () => {
  const component = await mountSuspended(Sample);
  expect(component.text()).toMatchInlineSnapshot(`"sample2"`);
});
