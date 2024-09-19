import { mountSuspended } from "@nuxt/test-utils/runtime";
import { expect, test } from "vitest";
import { useCallApi } from "~/composables/callApi";
import ApiTest from "../pages/api-test.vue";

test("snapshot", async () => {
  const component = await mountSuspended(ApiTest);
  expect(component.html()).toMatchSnapshot();
});

test("should first", async () => {
  const { data } = await useCallApi();
  expect(data.value?.firstName).toBe("John");
});
