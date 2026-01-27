// tests/e2e/us2-services.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 2 - Services Display', () => {
  test('should display all 5 offres de formation', async ({ page }) => {
    await page.goto('/services');

    // Vérifier le titre de la page
    const heading = page.getByRole('heading', {
      name: /services & offres/i,
    });
    await expect(heading).toBeVisible();

    // Vérifier que les 5 offres sont affichées avec les bons titres
    const offres = [
      /sensibilisation à l'ia générative/i,
      /maîtriser l'art de la rédaction de prompts/i,
      /formateur microsoft copilot.*m365/i,
      /formateur microsoft copilot studio/i,
      /intégrer l'ia dans le cycle de développement/i,
    ];

    for (const offre of offres) {
      await expect(page.getByText(offre)).toBeVisible();
    }
  });

  test('should display correct data for each offre (titre, public, prix)', async ({
    page,
  }) => {
    await page.goto('/services');

    // Test offre 1 : Sensibilisation à l'IA Générative
    const offre1 = page.getByText(/sensibilisation à l'ia générative/i);
    await expect(offre1).toBeVisible();
    await expect(page.getByText(/débutant/i).first()).toBeVisible();
    await expect(page.getByText(/400\s*€/i).first()).toBeVisible();

    // Test offre 5 : IA Dev (plus chère)
    await expect(
      page.getByText(/intégrer l'ia dans le cycle de développement/i)
    ).toBeVisible();
    await expect(page.getByText(/confirmé\/développeur/i)).toBeVisible();
    await expect(page.getByText(/600\s*€/)).toBeVisible();
  });

  test('should display offres in cards with proper structure', async ({
    page,
  }) => {
    await page.goto('/services');

    // Il devrait y avoir exactement 5 cartes d'offres
    const cards = page.locator('[data-testid="service-card"]');
    await expect(cards).toHaveCount(5);
  });
});
