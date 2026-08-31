# Suivi des conversions Umami

Les événements de conversion passent par `src/utils/analytics.ts`. Cette couche n'envoie que des propriétés non personnelles, ignore silencieusement l'absence d'Umami et retire les paramètres d'URL de `page_path`. Le tracker exclut également query string et fragment des pages vues, respecte `Do Not Track` et ne s'exécute que sur `nicodev.fr`.

## Entonnoir

| Événement                   | Déclenchement                                        | Propriétés                                           |
| --------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `lead_click_diagnostic`     | Clic sur un CTA vers le diagnostic                   | `location`, `page_type`, `page_path`, `cta`          |
| `lead_start_diagnostic`     | Première saisie ou modification réelle du formulaire | `form`                                               |
| `lead_submit_diagnostic`    | Réponse HTTP réussie de Formspree                    | `form`                                               |
| `lead_start_devis`          | Première saisie ou modification réelle du formulaire | `form`                                               |
| `lead_submit_devis`         | Réponse HTTP réussie de Formspree                    | `form`                                               |
| `lead_start_contact`        | Première saisie ou modification réelle du formulaire | `form`                                               |
| `lead_submit_contact`       | Réponse HTTP réussie de Formspree                    | `form`                                               |
| `lead_click_whatsapp`       | Clic sur un lien WhatsApp instrumenté                | `location`, `page_type`, `page_path`, `cta`          |
| `lead_click_email`          | Clic sur un lien `mailto:`                           | `location`, `page_type`, `page_path`, `cta`          |
| `lead_click_phone`          | Clic sur un lien `tel:`                              | `location`, `page_type`, `page_path`, `cta`          |
| `stripe_payment_link_click` | Clic vers Stripe, sans l'assimiler à un paiement     | `location`, `page_type`, `page_path`, `cta`, `offer` |

## Migration des anciens événements

Les CTA de diagnostic et WhatsApp utilisent désormais un nom stable et portent leur origine en propriété. Dans Umami, comparer les nouvelles séries séparément des anciennes ; les anciens événements restent dans l'historique mais ne sont plus émis par les CTA migrés.

| Ancien motif                          | Nouveau nom             | Origine                                                                        |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| `lead_click_diagnostic_from_<source>` | `lead_click_diagnostic` | `location: <source>`                                                           |
| `lead_click_whatsapp_from_<source>`   | `lead_click_whatsapp`   | `location: <source>`                                                           |
| `lead_start_contact_simple`           | `lead_start_contact`    | `form: contact`                                                                |
| `lead_submit_contact_simple`          | `lead_submit_contact`   | `form: contact`                                                                |
| `lead_success_*`, `*_form_success`    | supprimé                | Les pages de remerciement ouvertes directement ne prouvent pas une soumission. |

Un paiement réussi ne peut pas être mesuré depuis le navigateur. Il nécessite un webhook Stripe vérifié côté serveur, avec déduplication par identifiant d'événement Stripe.
