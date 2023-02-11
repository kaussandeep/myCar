import { test, expect } from "@playwright/test";
import { HomePage } from "./page/homePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

//test.describe.configure({ retries: 3 });
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

test("Verify Safety:Research", async ({ page }) => {
  const landingStringResearch =
    "We've always approached safety through research and used data to inform our decisions. Since the 1970s, we have analysed over 43,000 cars from real-life collisions involving over 72,000 occupants.";
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Research" }).click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByTestId("ModelIntro-2")).toHaveText(
    landingStringResearch
  );
});

test("Verify Safety:Heritage", async ({ page }) => {
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Heritage" }).click();
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByTestId("imageWithText:image").first()
  ).toHaveScreenshot("safetyHeritage.png");
});

test("Verify Safety:Features", async ({ page }) => {
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Features" }).click();
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByTestId("imageWithText:image").first()
  ).toHaveScreenshot("safetyFeatures.png");
});
