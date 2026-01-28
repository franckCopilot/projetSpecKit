// tests/e2e/us1-about.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 1 - Expert Biography Display', () => {
  test('should display expert biography on À propos page', async ({ page }) => {
    await page.goto('/a-propos');

    // Vérifier le nom de l'expert (FR-006)
    const name = page.getByRole('heading', { name: /franck petretto/i });
    await expect(name).toBeVisible();

    // Vérifier la biographie (FR-007)
    const biography = page.getByText(/passionné par les technologies/i).first();
    await expect(biography).toBeVisible();

    // Vérifier la mention de Grenoble (FR-008) - utiliser le heading spécifique
    const location = page.getByRole('heading', { name: /basé à grenoble/i });
    await expect(location).toBeVisible();

    // Vérifier que la photo est présente dans le viewport
    const photo = page.getByAltText(/franck petretto/i);
    await expect(photo).toBeInViewport();
  });

  test('should display expertise domains', async ({ page }) => {
    await page.goto('/a-propos');

    // Vérifier les domaines d'expertise principaux
    const expertiseDomains = [
      /intelligence artificielle générative/i,
      /art du prompting/i,
      /microsoft copilot/i,
    ];

    for (const domain of expertiseDomains) {
      const text = page.getByText(domain).first();
      await expect(text).toBeVisible();
    }
  });

  test('should display value proposition', async ({ page }) => {
    await page.goto('/a-propos');

    // Vérifier la proposition de valeur unique (FR-002)
    const valueProposition = page.getByText(
      /maîtrisez l'ia au-delà du simple prompt/i
    );
    await expect(valueProposition).toBeVisible();
  });

  test('should highlight Grenoble location as an asset', async ({ page }) => {
    await page.goto('/a-propos');

    // Vérifier que Grenoble est présenté comme un atout (FR-008)
    const grenobleHeading = page.getByRole('heading', { name: /basé à grenoble/i });
    await expect(grenobleHeading).toBeVisible();

    // Devrait mentionner l'écosystème ou la proximité
    const context = page.getByText(/écosystème|alpes|française/i).first();
    await expect(context).toBeVisible();
  });

  test('should be responsive on mobile and tablet', async ({ page }) => {
    // Test mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/a-propos');

    let biography = page.getByText(/passionné par les technologies/i);
    await expect(biography).toBeVisible();

    // Test tablette
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/a-propos');

    biography = page.getByText(/passionné par les technologies/i);
    await expect(biography).toBeVisible();
  });
});
