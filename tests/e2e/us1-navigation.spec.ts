// tests/e2e/us1-navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 1 - Navigation to À propos', () => {
  test('should navigate from homepage to À propos page', async ({ page }) => {
    await page.goto('/');

    // Cliquer sur le lien "À propos" (FR-004)
    await page.getByRole('link', { name: 'À propos' }).click();

    // Vérifier que nous sommes sur la page À propos
    await expect(page).toHaveURL('/a-propos');

    // Vérifier le titre de la page
    await expect(page).toHaveTitle(/à propos/i);
  });

  test('should have working navigation links on all pages', async ({
    page,
  }) => {
    await page.goto('/');

    // Tester tous les liens de navigation
    const links = [
      { name: 'Accueil', url: '/' },
      { name: 'À propos', url: '/a-propos' },
      { name: 'Services & Offres', url: '/services' },
      { name: 'Contact', url: '/contact' },
    ];

    for (const link of links) {
      await page.goto('/');
      await page.getByRole('link', { name: link.name }).click();
      await expect(page).toHaveURL(link.url);
    }
  });

  test('should maintain navigation visibility across pages', async ({
    page,
  }) => {
    // Vérifier que la navigation est présente sur toutes les pages
    const pages = ['/', '/a-propos', '/services', '/contact'];

    for (const url of pages) {
      await page.goto(url);
      const nav = page.getByRole('navigation');
      await expect(nav).toBeVisible();
    }
  });
});
