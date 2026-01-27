// tests/e2e/us3-contact-validation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 3 - Contact Form Validation', () => {
  test('should show validation errors for empty fields', async ({ page }) => {
    await page.goto('/contact');

    // Essayer de soumettre le formulaire vide
    await page.getByRole('button', { name: /envoyer/i }).click();

    // Vérifier les messages d'erreur (FR-022)
    await expect(
      page.getByText(/le nom doit contenir au moins 2 caractères/i)
    ).toBeVisible();
    await expect(page.getByText(/adresse email invalide/i)).toBeVisible();
    await expect(
      page.getByText(/le message doit contenir au moins 10 caractères/i)
    ).toBeVisible();
  });

  test('should show error for invalid email format', async ({ page }) => {
    await page.goto('/contact');

    // Remplir avec un email invalide
    await page.getByLabel(/nom/i).fill('Jean Dupont');
    await page.getByLabel(/email/i).fill('email-invalide');
    await page.getByLabel(/message/i).fill('Message de test valide');

    await page.getByRole('button', { name: /envoyer/i }).click();

    // Vérifier l'erreur email (FR-019)
    await expect(page.getByText(/adresse email invalide/i)).toBeVisible();
  });

  test('should show error for too short name', async ({ page }) => {
    await page.goto('/contact');

    await page.getByLabel(/nom/i).fill('A'); // Trop court (< 2)
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/message/i).fill('Message valide');

    await page.getByRole('button', { name: /envoyer/i }).click();

    await expect(
      page.getByText(/le nom doit contenir au moins 2 caractères/i)
    ).toBeVisible();
  });

  test('should show error for too short message', async ({ page }) => {
    await page.goto('/contact');

    await page.getByLabel(/nom/i).fill('Jean Dupont');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/message/i).fill('Court'); // < 10 caractères

    await page.getByRole('button', { name: /envoyer/i }).click();

    await expect(
      page.getByText(/le message doit contenir au moins 10 caractères/i)
    ).toBeVisible();
  });

  test('should display inline validation messages in French', async ({
    page,
  }) => {
    await page.goto('/contact');

    // Soumettre formulaire vide
    await page.getByRole('button', { name: /envoyer/i }).click();

    // Tous les messages doivent être en français (FR-022)
    const frenchErrors = await page.locator('text=/caractères|invalide/i');
    const count = await frenchErrors.count();
    expect(count).toBeGreaterThan(0);
  });
});
