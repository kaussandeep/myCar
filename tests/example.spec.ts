import { test, expect } from "@playwright/test";
import { HomePage } from "./page/homePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test.describe.configure({ retries: 3 });
test("Verify all car types with screen comparison", async ({ page }) => {
  await page.getByRole("button", { name: "Our Cars" }).click();
  await page.getByRole("tab", { name: "Electric Pure electric" }).click();
  await expect(page).toHaveScreenshot("electricCars.png");
  await page.getByRole("tab", { name: "Hybrids Plug-in hybrids" }).click();
  await expect(page).toHaveScreenshot("HybridCars.png");
  await page
    .getByRole("tab", { name: "Mild hybrids Mild hybrids | Micro hybrids" })
    .click();
  await expect(page).toHaveScreenshot("MildHybrid.png");
});

test("Verify safety information: Highlights", async ({ page }) => {
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.waitForLoadState("networkidle");
  const safetyPageHeader = await page
    .getByTestId("ModelIntro")
    .first()
    .textContent();
  expect(safetyPageHeader).toEqual("Safety");
  await page.waitForLoadState("networkidle");
  await expect(page.getByTestId("hero:image").first()).toHaveScreenshot(
    "CarSafetyManLeaning.png"
  );
});

test("Verify Safety: Culture & Vision", async ({ page }) => {
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Culture & vision" }).click();
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByTestId("imageWithText:image").first()
  ).toHaveScreenshot("safetyCulture.png");
});

test("Verify Safety:Features", async ({ page }) => {
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Features" }).click();
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByTestId("imageWithText:image").first()
  ).toHaveScreenshot("safetyFeatures.png");
});

test("Verify Safety:Child Safety", async ({ page }) => {
  const landingString =
    "From child seats to booster cushions, at Volvo Cars, we’ve been delivering child safety products since the 1970s, constantly seeking to improve safety for children when they travel in our cars.";
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Child safety" }).click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByTestId("ModelIntro-2")).toHaveText(landingString);
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
