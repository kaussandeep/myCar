import { test, expect, page } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    // add comments
  }

  async goto() {
    await this.page.goto(
      "https://www.volvocars.com/intl/v/car-safety/a-million-more",
      { waitUntil: "networkidle" }
    );
    await this.page.click('button:text("ACCEPT")');
  }
}
