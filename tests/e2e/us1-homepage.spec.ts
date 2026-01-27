// tests/e2e/us1-homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 1 - Homepage Hero Section', () => {
  test('should display hero section with photo, title, and subtitle', async ({
    page,
  }) => {
    await page.goto('/');

    // Vérifier que la photo de Franck Petretto est affichée
    const photo = page.getByAltText(/franck petretto/i);
    await expect(photo).toBeVisible();

    // Vérifier le titre principal (FR-002)
    const heading = page.getByRole('heading', {
      name: /maîtrisez l'ia au-delà du simple prompt/i,
    });
    await expect(heading).toBeVisible();

    // Vérifier le sous-titre avec les expertises (FR-003)
    const subtitle = page.getByText(/expert en art du prompting/i);
    await expect(subtitle).toBeVisible();

    // Vérifier que le nom Franck Petretto est présent
    const name = page.getByText(/franck petretto/i);
    await expect(name).toBeVisible();
  });

  test('should have proper page structure and semantics', async ({ page }) => {
    await page.goto('/');

    // Vérifier la présence de la navigation
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Vérifier les liens de navigation (FR-026)
    await expect(page.getByRole('link', { name: 'Accueil' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'À propos' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Services & Offres' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Vérifier que le contenu est visible sur mobile
    const heading = page.getByRole('heading', {
      name: /maîtrisez l'ia/i,
    });
    await expect(heading).toBeVisible();

    // Le menu mobile devrait être accessible via le bouton burger
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();
  });
});
