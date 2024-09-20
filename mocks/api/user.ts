import { http, HttpResponse } from "msw";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const users = [
  // Intercept "GET https://example.com/user" requests...
  http.get("/user", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
