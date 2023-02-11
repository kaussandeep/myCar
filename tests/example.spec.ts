import { test, expect } from "@playwright/test";
import { HomePage } from "./page/homePage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});
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
  await expect(page.getByTestId("hero:image").first()).toHaveScreenshot(
    "safetyCulture.png"
  );
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
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Child safety" }).click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByTestId("hero:image").first()).toHaveScreenshot(
    "safetyChildSafety.png"
  );
});

test("Verify Safety:Research", async ({ page }) => {
  await page.getByRole("link", { name: "Learn more about car safety" }).click();
  await page.getByRole("link", { name: "Research" }).click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByTestId("hero:image").first()).toHaveScreenshot(
    "safetyResearch.png"
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

/*

// API test
  const _response = await request.get(baseURL);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  console.log(await _response.json());
  let _repost = await _response.json();
  
  expect(_repost.age).toBe(48);*/
