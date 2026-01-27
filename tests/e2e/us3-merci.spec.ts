// tests/e2e/us3-merci.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 3 - Thank You Page', () => {
  test('should display confirmation message on /merci page', async ({
    page,
  }) => {
    await page.goto('/merci');

    // Vérifier le message de confirmation (FR-023)
    const confirmationMessage = page.getByText(
      /votre message a été envoyé avec succès/i
    );
    await expect(confirmationMessage).toBeVisible();
  });

  test('should display return link to homepage', async ({ page }) => {
    await page.goto('/merci');

    // Vérifier le lien de retour (FR-025)
    const returnLink = page.getByRole('link', { name: /retour/i });
    await expect(returnLink).toBeVisible();

    // Cliquer et vérifier la navigation
    await returnLink.click();
    await expect(page).toHaveURL('/');
  });

  test('should display thank you message with proper styling', async ({
    page,
  }) => {
    await page.goto('/merci');

    // La page devrait avoir un titre H1
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();

    // Le message devrait mentionner Franck Petretto
    await expect(page.getByText(/franck petretto/i)).toBeVisible();
  });

  test('should display expected response time information', async ({
    page,
  }) => {
    await page.goto('/merci');

    // Devrait indiquer un délai de réponse (FR-024)
    const responseInfo = page.getByText(/24.*heures|sous 24h|rapidement/i);
    await expect(responseInfo).toBeVisible();
  });

  test('should be accessible directly via URL', async ({ page }) => {
    // La page /merci devrait être accessible directement
    // (par exemple, si quelqu'un rafraîchit la page)
    await page.goto('/merci');

    await expect(page).toHaveTitle(/merci/i);
    await expect(
      page.getByText(/votre message a été envoyé/i)
    ).toBeVisible();
  });

  test('should have navigation menu visible', async ({ page }) => {
    await page.goto('/merci');

    // La navigation devrait toujours être visible
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Les liens de navigation devraient fonctionner
    await page.getByRole('link', { name: 'Accueil' }).click();
    await expect(page).toHaveURL('/');
  });
});
