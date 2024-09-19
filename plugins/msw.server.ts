export default defineNuxtPlugin(async () => {
  const { server } = await import("~/mocks/node");
  server.listen();
});
