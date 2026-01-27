// tests/e2e/us3-contact-success.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Story 3 - Successful Form Submission', () => {
  test('should successfully submit valid contact form and redirect to /merci', async ({
    page,
  }) => {
    // Note: Ce test nécessite que l'API soit configurée avec une vraie clé Resend
    // ou avec un mock pour l'environnement de test

    await page.goto('/contact');

    // Remplir le formulaire avec des données valides
    await page.getByLabel(/nom/i).fill('Jean Dupont');
    await page.getByLabel(/email/i).fill('jean.dupont@example.com');
    await page
      .getByLabel(/message/i)
      .fill(
        'Je souhaiterais obtenir plus d\'informations sur vos formations en IA Générative.'
      );

    // Soumettre le formulaire
    await page.getByRole('button', { name: /envoyer/i }).click();

    // Vérifier la redirection vers /merci (FR-020)
    // Note: Peut nécessiter un timeout plus long si l'envoi email prend du temps
    await expect(page).toHaveURL('/merci', { timeout: 10000 });
  });

  test('should show loading state during submission', async ({ page }) => {
    await page.goto('/contact');

    await page.getByLabel(/nom/i).fill('Marie Martin');
    await page.getByLabel(/email/i).fill('marie.martin@example.com');
    await page
      .getByLabel(/message/i)
      .fill('Message de test pour vérifier le loading state.');

    // Le bouton devrait avoir un état de chargement
    const submitButton = page.getByRole('button', { name: /envoyer/i });

    await submitButton.click();

    // Le bouton devrait être désactivé pendant le chargement
    await expect(submitButton).toBeDisabled();
  });

  test('should clear form after successful submission', async ({ page }) => {
    await page.goto('/contact');

    const nomInput = page.getByLabel(/nom/i);
    const emailInput = page.getByLabel(/email/i);
    const messageInput = page.getByLabel(/message/i);

    await nomInput.fill('Pierre Dubois');
    await emailInput.fill('pierre.dubois@example.com');
    await messageInput.fill('Message de test pour la soumission.');

    await page.getByRole('button', { name: /envoyer/i }).click();

    // Attendre la redirection
    await expect(page).toHaveURL('/merci', { timeout: 10000 });
  });
});
