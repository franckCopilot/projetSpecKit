// tests/e2e/us2-services-filter.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 2 - Filtering by Public Cible', () => {
  test('should identify offres by public cible - débutant', async ({
    page,
  }) => {
    await page.goto('/services');

    // Vérifier les offres pour débutants
    const debutantOffres = page.getByText(/débutant/i);
    await expect(debutantOffres.first()).toBeVisible();

    // Devrait afficher "Découvrir l'IA Générative" (débutant)
    await expect(
      page.getByText(/découvrir l'ia générative/i)
    ).toBeVisible();
  });

  test('should identify offres by public cible - intermédiaire', async ({
    page,
  }) => {
    await page.goto('/services');

    // Offre Copilot Studio pour niveau intermédiaire
    const intermediaire = page.getByText(/intermédiaire/i);
    await expect(intermediaire.first()).toBeVisible();

    await expect(
      page.getByText(/formateur microsoft copilot studio/i)
    ).toBeVisible();
  });

  test('should identify offres by public cible - confirmé/développeur', async ({
    page,
  }) => {
    await page.goto('/services');

    // Offre IA Dev pour développeurs confirmés
    await expect(page.getByText(/confirmé\/développeur/i)).toBeVisible();

    await expect(
      page.getByText(/intégrer l'ia dans le cycle de développement/i)
    ).toBeVisible();
  });

  test('should display visual distinction for different levels', async ({
    page,
  }) => {
    await page.goto('/services');

    // Chaque niveau devrait être visible et distinguable
    const niveaux = [
      /débutant/i,
      /intermédiaire/i,
      /confirmé/i,
      /développeur/i,
    ];

    for (const niveau of niveaux) {
      const element = page.getByText(niveau).first();
      await expect(element).toBeVisible();
    }
  });
});
