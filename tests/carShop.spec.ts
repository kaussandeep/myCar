import { test, expect } from "@playwright/test";
import { HomePage } from "./page/homePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test.describe.configure({ retries: 3 });
test("Car Configurator flow: ", async ({ page }) => {
  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("button", { name: "Buy" }).isVisible();
  await page.getByRole("button", { name: "Buy" }).click();
  await page.getByRole("link", { name: "Car Configurator" }).isVisible();
  await page.getByRole("link", { name: "Car Configurator" }).click();
  const configuratorLandingPageHeading = await page
    .getByRole("heading", { name: "Design your Volvo" })
    .textContent();
  expect(configuratorLandingPageHeading).toBe("Design your Volvo");
});
