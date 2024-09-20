import { http, HttpResponse } from "msw";

export const todos = [
  http.post("/todos", () => {
    return HttpResponse.json({
      title: "asdf",
      checked: true,
    });
  }),
];
