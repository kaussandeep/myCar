import { test, expect } from "@playwright/test";

test("Example API test: verify age", async ({ request }) => {
  const baseURL = "https://api.agify.io/?name=";
  const _response = await request.get(`${baseURL}sandeep`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  let _repost = await _response.json();
  //works
  expect(_repost.age).toBe(48);
});
