# Clé Performance 66 — Projet Site Vitrine

## 1. Infos Client

| Champ              | Valeur                                |
| ------------------ | ------------------------------------- |
| **Nom commercial** | Clé Performance 66                    |
| **Forme**          | Entrepreneur itinérant (solo)         |
| **Zone**           | Perpignan + Pyrénées-Orientales (66)  |
| **Téléphone**      | `NEXT_PUBLIC_PHONE`                   |
| **Email**          | `NEXT_PUBLIC_EMAIL`                   |
| **Domaine**        | cleperformance66.fr (à confirmer)     |
| **Objectif SEO**   | Dominer les recherches locales sur 66 |

### Profil du porteur de projet

Technicien expérimenté dans l'automobile, les véhicules industriels et le machinisme agricole, maîtrisant les outils de diagnostic et de programmation électronique.

**Compétences clés :**

- Systèmes de verrouillage et programmation de clés (OBD, EEPROM, transpondeur, keyless)
- Gestion moteur (ECU) : Stage 1, FAP/EGR/AdBlue, correction logicielle
- Manipulation des fluides frigorigènes R134a / R1234yf (attestation F-Gaz obligatoire)
- Sens du relationnel et organisation en itinérance

**Avantage concurrentiel :** Seul opérateur itinérant dans les Pyrénées-Orientales combinant les 3 services (clés + reprog moteur + climatisation). Aucun des ateliers mobiles identifiés ne couvre les clés PL ni le matériel agricole.

---

## 2. Services proposés

### 2.1 Reproduction & Programmation de Clés

| Catégorie           | Slug                 | Prix moyen |
| ------------------- | -------------------- | ---------- |
| Automobile          | `cle-voiture`        | dès 129€   |
| Moto & Scooter      | `cle-moto`           | dès 119€   |
| Poids Lourd & Util  | `cle-poids-lourd`    | dès 239€   |
| Tracteur & Agricole | `cle-agricole`       | dès 139€   |
| Engins de Chantier  | `cle-engin-chantier` | devis      |

Équipement : découpeuse Dolphin, programmateurs OBD/EEPROM, valise diagnostic multi-marques, lecteur de transpondeur.

Protocoles couverts : OBD, EEPROM, CAN J1939, HISS (Honda), YIM (Yamaha), KIPASS (Kawasaki), BMS-C (BMW Moto), DES (Ducati), TIS (Triumph).

### 2.2 Reprogrammation Moteur ECU

| Prestation                       | Fourchette  | Prix moyen |
| -------------------------------- | ----------- | ---------- |
| Stage 1 voiture (diesel/essence) | 280 – 450 € | ~365 €     |
| Stage 1 poids lourd              | 400 – 650 € | ~525 €     |
| Désactivation FAP / EGR          | 200 – 380 € | ~290 €     |
| Désactivation AdBlue / SCR       | 350 – 600 € | ~475 €     |
| Correction logicielle ECU        | 150 – 300 € | ~225 €     |
| Reprog moteur agricole           | devis       | —          |

Cibles : agriculteurs (optimisation tracteurs), transporteurs diesel, propriétaires VP diesel.

> ⚠️ Désactivation FAP/EGR/AdBlue : légal uniquement pour usage hors homologation route (compétition, engins non immatriculés, export).

### 2.3 Recharge & Diagnostic Climatisation PL & Agricole

| Prestation                           | Fourchette      | Prix moyen |
| ------------------------------------ | --------------- | ---------- |
| Diagnostic + contrôle étanchéité     | 60 – 100 €      | ~80 €      |
| Recharge R134a (PL / tracteur)       | 120 – 220 €     | ~170 €     |
| Recharge R1234yf (véhicules récents) | 180 – 320 €     | ~250 €     |
| Recharge tracteur agricole           | 130 – 230 €     | ~180 €     |
| Remplacement filtre déshydrateur     | inclus ou +40 € | —          |

Équipement : station bi-gaz (R134a + R1234yf). Attestation F-Gaz requise.
Cibles : chauffeurs PL, agriculteurs/viticulteurs, transporteurs.

---

## 3. Stack Technique

| Outil           | Version / Config                            |
| --------------- | ------------------------------------------- |
| Framework       | Next.js 16 (App Router) + Turbopack         |
| UI              | shadcn/ui + Tailwind CSS v4                 |
| Package manager | pnpm                                        |
| Base de données | PostgreSQL + Prisma 7 (adapter pg)          |
| Déploiement     | Vercel (SSG) + Neon PostgreSQL (free tier)  |
| Langue          | Français uniquement, thème clair uniquement |

**Alias path :** `@/*` → `./src/*`, `@app/*` → `./app/*`

**Commande seed :** `pnpm db:seed` = `tsx --env-file=.env prisma/seed.ts`

---

## 4. Palette de Couleurs

| Variable   | Hex       | Usage                             |
| ---------- | --------- | --------------------------------- |
| `--navy`   | `#0A2A4A` | Texte, titres, header, footer     |
| `--blue`   | `#1A6FAF` | Boutons default, liens, accents   |
| `--cyan`   | `#3AAFDE` | Boutons accent, highlights, hover |
| `--bg`     | `#F8F9FB` | Background général                |
| `--white`  | `#FFFFFF` | Cards, sections alternées         |
| `--border` | `#D8E4EF` | Bordures, séparateurs             |
| `--muted`  | `#4A6A8A` | Texte secondaire                  |
| `--light`  | `#EBF4FB` | Background secondaire, hover      |

### Variants Button (shadcn)

| Variant         | Rendu                                           |
| --------------- | ----------------------------------------------- |
| `default`       | Bleu `#1A6FAF`, texte blanc                     |
| `accent`        | Cyan `#3AAFDE`, texte navy, font-semibold       |
| `outline`       | Bordure, fond blanc, hover bleu clair           |
| `outline-light` | Bordure blanche/30, transparent, hover blanc/10 |
| `secondary`     | Fond `#EBF4FB`, texte navy                      |
| `ghost`         | Transparent, hover fond bleu clair              |
| `link`          | Texte bleu, underline au hover                  |

---

## 5. Structure du Projet

```
app/
  layout.tsx                        → Layout racine (metadata, fonts, JSON-LD LocalBusiness)
  page.tsx                          → Page d'accueil
  globals.css                       → Styles globaux + variables CSS
  a-propos/page.tsx                 → Page À propos (profil technicien, 3 services, F-Gaz)
  services/
    page.tsx                        → Page Services (index — 7 services)
    [slug]/page.tsx                 → Pages dynamiques par service
  marques/
    page.tsx                        → Page Marques (index, catégories auto/moto/PL/agri)
    [slug]/page.tsx                 → Pages dynamiques par marque (49 marques)
  zone/
    page.tsx                        → Page Zone d'intervention
    [slug]/page.tsx                 → Pages dynamiques par ville (16 villes)
  contact/page.tsx                  → Page Contact (formulaire)
  mentions-legales/page.tsx         → Mentions légales
  not-found.tsx                     → Page 404 personnalisée
  sitemap.ts                        → Sitemap dynamique
  robots.ts                         → Robots.txt
src/
  components/
    ui/                             → Composants shadcn (button, card, badge, sheet, etc.)
    sections/                       → Hero, Services, Pricing, BrandSearch, CTA, FAQ, etc.
    layout/                         → Header, Footer, FloatingCTA
  lib/
    utils.ts                        → cn() + utilitaires
    metadata.ts                     → Helper metadata SEO (OG, Twitter Cards)
    json-ld.ts                      → Schema.org (LocalBusiness+AutomotiveBusiness, Service, FAQ, Breadcrumb)
    db.ts                           → Singleton PrismaClient avec adapter pg
    queries.ts                      → Couche d'accès données (brands, cities, services, faq, testimonials)
  data/
    site-config.ts                  → Coordonnées, horaires, liens (seul fichier statique)
prisma/
  schema.prisma                     → Schema BDD (Brand, City, Service, FaqItem, Testimonial)
  seed.ts                           → Script seed (49 marques, 16 villes, 7 services, 8 FAQ, 5 témoignages)
public/
  logos/                            → SVG logos marques (49 fichiers)
  logo-identitaire.png              → Logo complet avec texte (fond transparent)
  logo-identitaire-only.png        → Logo icône seule, carré 546×546px (fond transparent)
  logo-identitaire-only-white.png  → Logo icône seule, carré 546×546px (fond blanc)
```

---

## 6. Pages & Contenu

### Pages statiques

| Page                | Route               | Statut |
| ------------------- | ------------------- | ------ |
| Accueil             | `/`                 | ✅     |
| Services (index)    | `/services`         | ✅     |
| À propos            | `/a-propos`         | ✅     |
| Contact             | `/contact`          | ✅     |
| Mentions légales    | `/mentions-legales` | ✅     |
| 404                 | `not-found`         | ✅     |
| Marques (index)     | `/marques`          | ✅     |
| Zone d'intervention | `/zone`             | ✅     |

### Pages dynamiques — Services (`/services/[slug]`) — 7 pages

| Service                     | Slug                        |
| --------------------------- | --------------------------- |
| Clé voiture                 | `cle-voiture`               |
| Clé moto                    | `cle-moto`                  |
| Clé poids lourd             | `cle-poids-lourd`           |
| Clé tracteur & agricole     | `cle-agricole`              |
| Clé engin de chantier       | `cle-engin-chantier`        |
| Reprogrammation moteur ECU  | `reprogrammation-moteur`    |
| Climatisation PL & Agricole | `climatisation-pl-agricole` |

### Pages dynamiques — Marques (`/marques/[slug]`) — 49 pages

**Auto (24) :** Renault, Peugeot, Citroën, Dacia, Volkswagen, Audi, BMW, Mercedes,
Toyota, Nissan, Hyundai, Kia, Ford, Opel, Fiat, Seat, Skoda, Volvo, Jaguar, Land Rover, DS, Alpine, Cupra, Mini

**Moto (8) :** Yamaha, Honda Moto, Kawasaki, Suzuki Moto, BMW Motorrad, Ducati, Triumph, KTM

**PL (8) :** Renault Trucks, Mercedes Trucks, MAN, Iveco, DAF, Scania, Volvo Trucks, PSA Utilitaires

**Agricole (9) :** John Deere, New Holland, Case IH, Fendt, Massey Ferguson, Deutz-Fahr, Claas, Kubota, Valtra

### Pages dynamiques — Villes (`/zone/[slug]`) — 16 pages

Perpignan, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Cabestany,
Thuir, Elne, Pollestres, Le Soler, Pia, Toulouges, Saint-Cyprien,
Argelès-sur-Mer, Le Boulou, Céret, Prades

---

## 7. Sections Page d'Accueil

- [x] Hero (H1 SEO avec localisation, 2 CTA, 3 indicateurs : Mobile / Rapide / -50%)
- [x] Services (grille de cards → 7 services dynamiques depuis BDD)
- [x] Tarifs (6 catégories : auto/moto/PL/agri/reprog/clim)
- [x] Recherche rapide par marque (client component, sr-only SEO)
- [x] Marques (badges par catégorie → 49 marques)
- [x] Zone d'intervention (OpenStreetMap + liens villes)
- [x] Témoignages (carousel)
- [x] FAQ (accordion)
- [x] CTA final

---

## 8. SEO

- [x] H1 avec localisation : "Reproduction & Programmation de clés à Perpignan et dans le 66"
- [x] Metadata dynamique par page (title, description, OG, Twitter Cards, canonical)
- [x] Schema.org JSON-LD : `LocalBusiness` + `AutomotiveBusiness`, `hasOfferCatalog` (7 offres), `serviceType` (14 entrées), `areaServed` (Perpignan + Pyrénées-Orientales)
- [x] Sitemap.xml automatique
- [x] Robots.txt
- [x] Balises Hn hiérarchisées
- [x] Prix "Prix moyen constaté / ~X€" (pas "à partir de") sur pages marques
- [x] Section recherche marque avec liste sr-only pour crawlabilité

---

## 9. Composants shadcn installés

accordion, avatar, badge, button, card, carousel, dialog, input,
navigation-menu, scroll-area, separator, sheet, tabs, textarea

---

## 10. Déploiement

### Architecture de production

Le site est **100 % statique en prod** (SSG). La DB n'est sollicitée qu'au build :

```
git push main
  → Vercel lance "pnpm build"
    → Prisma se connecte à Neon (DATABASE_URL)
    → generateStaticParams() lit la DB → génère 84 pages HTML
    → Déploiement sur le CDN Vercel
       ↓
    En prod : DB jamais touchée, 0 coût runtime
```

### Mise en place (première fois)

**1. Neon (DB)**

- Créer un compte sur [neon.tech](https://neon.tech) (gratuit)
- Nouveau projet → copier la `DATABASE_URL` (format `postgresql://...`)

**2. Vercel (hébergement)**

- Importer le repo GitHub sur [vercel.com](https://vercel.com)
- Settings → Environment Variables → ajouter :
  ```
  DATABASE_URL=postgresql://...   (depuis Neon)
  RESEND_API_KEY=re_...           (depuis resend.com)
  ```
- **OU** : Vercel Dashboard → Storage → Connect Database → Neon
  → `DATABASE_URL` injectée automatiquement sans copier-coller

**3. Seed initial (une seule fois)**

Depuis ton poste local avec la `DATABASE_URL` de production dans `.env.local` :

```bash
pnpm db:seed
```

Puis déclencher un redéploiement Vercel (ou `git commit --allow-empty -m "chore: trigger build"`).

### Mises à jour de contenu

Toute modification de données (prix, services, marques, FAQ) suit ce flux :

```
1. Modifier prisma/seed.ts
2. pnpm db:seed  (avec DATABASE_URL prod dans .env.local)
3. git push  →  Vercel rebuilde automatiquement → nouvelles pages
```

### Transition Resend (quand le domaine est prêt)

1. Vérifier `cleperformance66.fr` sur resend.com (DNS TXT record)
2. Créer une nouvelle clé API Resend (compte client)
3. Mettre à jour dans `app/contact/actions.ts` :
   ```ts
   from: "Clé Performance 66 <noreply@cleperformance66.fr>",
   ```
4. Remplacer `RESEND_API_KEY` dans les variables Vercel

---

## 11. À Confirmer avec le Client

- [x] Logo
- [x] Image OpenGraph
- [x] Favicon
- [x] Téléphone
- [x] Email
- [x] Tarifs indicatifs
- [ ] Adresse exacte (rue — actuellement "À confirmer")
- [ ] Horaires d'ouverture exacts
- [ ] Photos réelles (intervention, équipement)
- [ ] Témoignages clients réels (5 placeholders)
- [ ] Réseaux sociaux (Facebook, Instagram, Google Business)
- [ ] Mentions légales complètes (SIRET, forme juridique)
- [ ] Nom de domaine final (cleperformance66.fr recommandé)
- [ ] Attestation F-Gaz à mentionner explicitement sur le site ?
