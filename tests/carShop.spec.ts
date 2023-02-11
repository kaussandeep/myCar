import { test, expect } from "@playwright/test";
import { HomePage } from "./page/homePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test("Car Configurator flow: ", async ({ page }) => {
  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("button", { name: "Buy" }).click();
  await page.getByRole("link", { name: "Car Configurator" }).click();
  const configuratorLandingPageHeading = await page
    .getByRole("heading", { name: "Design your Volvo" })
    .textContent();
  console.log(configuratorLandingPageHeading);
  expect(configuratorLandingPageHeading).toBe("Design your Volvo");
});
