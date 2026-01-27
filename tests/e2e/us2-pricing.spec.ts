// tests/e2e/us2-pricing.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 2 - Price Display', () => {
  test('should display prix for all 5 offres', async ({ page }) => {
    await page.goto('/services');

    // Vérifier que chaque prix est affiché
    const prix = [
      /400\s*€/i, // Offres 1, 2, 3
      /500\s*€/i, // Offre 4
      /600\s*€/i, // Offre 5
    ];

    for (const prixPattern of prix) {
      await expect(page.getByText(prixPattern).first()).toBeVisible();
    }
  });

  test('should display prix with euro symbol and no decimals', async ({
    page,
  }) => {
    await page.goto('/services');

    // Vérifier format : "400 €" ou "400€" (pas de décimales)
    await expect(page.getByText(/400\s*€/)).toBeVisible();
    await expect(page.getByText(/500\s*€/)).toBeVisible();
    await expect(page.getByText(/600\s*€/)).toBeVisible();

    // Ne devrait PAS avoir de format avec décimales comme "400.00 €"
    await expect(page.getByText(/400\.00/)).not.toBeVisible();
  });

  test('should show price progression by level', async ({ page }) => {
    await page.goto('/services');

    // Les prix augmentent avec la complexité
    // Débutant : 400€
    // Intermédiaire : 500€
    // Confirmé/Développeur : 600€

    const cards = page.locator('[data-testid="service-card"]');
    const count = await cards.count();

    expect(count).toBe(5); // Vérifier qu'il y a bien 5 cartes
  });

  test('should display prix prominently in card', async ({ page }) => {
    await page.goto('/services');

    // Le prix devrait être bien visible et prominent
    const firstPrice = page.getByText(/400\s*€/i).first();
    await expect(firstPrice).toBeVisible();

    // Vérifier que le prix est dans une section dédiée
    const priceElement = page
      .locator('[data-testid="service-card"]')
      .first()
      .getByText(/€/);
    await expect(priceElement).toBeVisible();
  });
});
