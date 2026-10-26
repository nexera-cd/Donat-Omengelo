import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppUrl,
  isValidProjectSlug,
  validateContactForm,
  generatePersonJsonLd,
} from './portfolio-utils';

test('buildWhatsAppUrl generates valid wa.me URL with phone and encoded query', () => {
  const url = buildWhatsAppUrl();
  assert.ok(url.startsWith('https://wa.me/243832579179?text='));
  assert.ok(url.includes('Bonjour%20Mr%20Dosh'));
});

test('isValidProjectSlug confirms existing and rejects missing slugs', () => {
  assert.equal(isValidProjectSlug('accueil-isau', 'fr'), true);
  assert.equal(isValidProjectSlug('conference-dl-community', 'fr'), true);
  assert.equal(isValidProjectSlug('digital-impact', 'fr'), true);
  assert.equal(isValidProjectSlug('non-existent-project', 'fr'), false);
});

test('validateContactForm checks required fields and email format', () => {
  const invalid = validateContactForm({
    name: '',
    email: 'not-an-email',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Jean-Paul Mukendi',
    email: 'contact@mukendi.cd',
    subject: 'Stratégie marketing',
    message: 'Bonjour Mr Dosh, nous souhaitons planifier un accompagnement en IA.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generatePersonJsonLd outputs valid Schema.org structure', () => {
  const jsonLd = generatePersonJsonLd('https://donatomengelo.com');
  assert.equal(jsonLd['@type'], 'Person');
  assert.equal(jsonLd.name, 'Donat Omengelo');
  assert.equal(jsonLd.telephone, '+243 832 579 179');
  assert.equal(jsonLd.address.addressLocality, 'Kinshasa');
  assert.ok(Array.isArray(jsonLd.sameAs));
  assert.ok(jsonLd.sameAs.length >= 5);
});
