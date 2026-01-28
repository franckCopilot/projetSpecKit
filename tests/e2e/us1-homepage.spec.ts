// tests/e2e/us1-homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 1 - Homepage Hero Section', () => {
  test('should display hero section with photo, title, and subtitle', async ({
    page,
  }) => {
    await page.goto('/');

    // Vérifier que la photo de Franck Petretto est affichée (utiliser toBeInViewport pour Next.js Image)
    const photo = page.getByAltText(/franck petretto/i);
    await expect(photo).toBeInViewport();

    // Vérifier le titre principal (FR-002) - c'est le tagline qui contient ce texte
    const heading = page.getByText(/maîtrisez l'ia au-delà du simple prompt/i);
    await expect(heading).toBeVisible();

    // Vérifier le sous-titre avec les expertises (FR-003)
    const subtitle = page.getByText(/expert en art du prompting|microsoft copilot|copilot studio/i).first();
    await expect(subtitle).toBeVisible();

    // Vérifier que le nom Franck Petretto est présent
    const name = page.getByText(/franck petretto/i).first();
    await expect(name).toBeVisible();
  });

  test('should have proper page structure and semantics', async ({ page }) => {
    await page.goto('/');

    // Vérifier la présence de la navigation
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Vérifier les liens de navigation (FR-026) - certains peuvent être dans le menu burger sur mobile
    // Utiliser locator plus flexible qui marche desktop ou mobile
    await expect(page.locator('a:has-text("Accueil")').first()).toBeAttached();
    await expect(page.locator('a:has-text("À propos")').first()).toBeAttached();
    await expect(page.locator('a:has-text("Services & Offres")').first()).toBeAttached();
    await expect(page.locator('a:has-text("Contact")').first()).toBeAttached();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Vérifier que le contenu est visible sur mobile
    const heading = page.getByText(/maîtrisez l'ia/i).first();
    await expect(heading).toBeVisible();

    // Le menu mobile devrait être accessible via le bouton burger
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();
  });
});
