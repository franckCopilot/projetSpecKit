// tests/e2e/us3-contact-error.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 3 - Failed Submission Error Handling', () => {
  test('should display error message when API fails', async ({ page }) => {
    // Mock l'API pour forcer une erreur 500
    await page.route('**/api/contact', (route) => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          error: 'Une erreur est survenue lors de l\'envoi du message.',
          fallbackEmail: 'contact.masterclass.ia@gmail.com',
        }),
      });
    });

    await page.goto('/contact');

    await page.getByLabel(/nom/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/sujet/i).selectOption('Formation IA Générative et masterclass IA');
    await page.getByLabel(/message/i).fill('Message de test pour erreur');

    await page.getByRole('button', { name: /envoyer/i }).click();

    // Vérifier le message d'erreur (FR-021)
    await expect(
      page.getByText(/une erreur est survenue/i)
    ).toBeVisible();

    // Vérifier l'affichage de l'email alternatif (FR-021)
    // Utiliser .first() car l'email peut apparaître plusieurs fois (footer, erreur)
    await expect(
      page.getByText(/contact\.masterclass\.ia@gmail\.com/i).first()
    ).toBeVisible();
  });

  test('should display alternative email on server error', async ({ page }) => {
    await page.route('**/api/contact', (route) => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          error: 'Erreur serveur',
          fallbackEmail: 'contact.masterclass.ia@gmail.com',
        }),
      });
    });

    await page.goto('/contact');

    await page.getByLabel(/nom/i).fill('Error Test');
    await page.getByLabel(/email/i).fill('error@example.com');
    await page.getByLabel(/sujet/i).selectOption('Autre demande');
    await page.getByLabel(/message/i).fill('Test error handling');

    await page.getByRole('button', { name: /envoyer/i }).click();

    // L'email alternatif devrait être cliquable
    // Utiliser .first() car il peut y avoir plusieurs liens (footer, erreur)
    const emailLink = page.getByRole('link', {
      name: /contact\.masterclass\.ia@gmail\.com/i,
    }).first();
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:contact.masterclass.ia@gmail.com');
  });

  test('should allow retry after error', async ({ page }) => {
    let attempt = 0;

    await page.route('**/api/contact', (route) => {
      attempt++;
      if (attempt === 1) {
        // Première tentative : erreur
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({
            success: false,
            error: 'Erreur temporaire',
            fallbackEmail: 'contact.masterclass.ia@gmail.com',
          }),
        });
      } else {
        // Deuxième tentative : succès
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            success: true,
            message: 'Message envoyé avec succès',
          }),
        });
      }
    });

    await page.goto('/contact');

    await page.getByLabel(/nom/i).fill('Retry Test');
    await page.getByLabel(/email/i).fill('retry@example.com');
    await page.getByLabel(/sujet/i).selectOption('Développement Web');
    await page.getByLabel(/message/i).fill('Test retry functionality');

    // Première soumission (échoue)
    await page.getByRole('button', { name: /envoyer/i }).click();
    await expect(page.getByText(/erreur temporaire/i)).toBeVisible();

    // Réessayer (succès)
    await page.getByRole('button', { name: /envoyer/i }).click();
    await expect(page).toHaveURL('/merci', { timeout: 10000 });
  });
});
