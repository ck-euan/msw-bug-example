export async function register() {
  // Mock only in development and test environments
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.NODE_ENV === "development"
  ) {
    const { server } = await import("../tests/mocks/node");

    console.log("🚧 Mocking server");

    server.listen({
      onUnhandledRequest: "bypass",
    });
  }
}
