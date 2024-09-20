export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV !== "development") return; // NOTE: test実行時にworker.startしているとエラーになる

  const { worker } = await import("~/mocks/browser"); // NOTE: workerをimportしてtest実行するとエラー表示が出るので、必要な時だけimportしている
  await worker.start();
});
