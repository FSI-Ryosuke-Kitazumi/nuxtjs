import { expect, test } from "vitest";
import Sample from "../components/Sample.vue";
import { mount } from "@vue/test-utils";

test("my test", () => {
  const component = mount(Sample);
  expect(component.html()).toMatchSnapshot();
});
