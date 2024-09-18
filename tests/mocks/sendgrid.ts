import { http, type HttpHandler, HttpResponse } from "msw";

const { json } = HttpResponse;

export const sendgridHandlers: Array<HttpHandler> = [
  http.post("https://api.sendgrid.com/v3/mail/send", async ({ request }) => {
    const email = await request.json();

    console.info("🔶 mocked email contents:", email);

    return json({
      message: "mocked successfully",
    });
  }),
];
