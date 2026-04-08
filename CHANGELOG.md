# Changelog — Clé Performance 66

Historique des modifications du site vitrine [cleperformance66.fr](https://cleperformance66.fr).

---

## [2.3.0] — 2026-04-08

### UX & cohérence — icône clim, CTA multi-services, contact & footer

#### Hero

- **Icône climatisation** : `Thermometer` → `Wind` (lucide-react) — cohérente avec les autres sections du site

#### Section CTA (toutes pages)

- **Titre** : "Besoin d'une clé ? Contactez-nous maintenant" → "Besoin d'une intervention ? Contactez-nous maintenant"
- **Description** : ajout des 3 services en toutes lettres — "Reprogrammation de clés · Reprog moteur ECU · Climatisation PL & Agricole" — au lieu de ne mentionner que les clés

#### Page `/contact`

- **Téléphone & email** : suppression de `text-lg` sur les deux liens — taille de police uniformisée avec les autres lignes de coordonnées (adresse, horaires)

#### Footer — section "Nos Services"

- **Réorganisation** : 5 liens clés individuels → 2 liens groupés ("Clés auto & moto", "Clés PL, agricole & chantier") — équilibre 2:1:1 entre clés, reprog moteur et climatisation (était 5:1:1)

---

## [2.2.0] — 2026-04-07

### UX & cohérence — Hero, services, navigation, CTA

#### Hero

- **H1 élargi aux 3 services** : "Reproduction & Programmation de clés…" → "Clés, Reprog Moteur & Climatisation à Perpignan et dans le 66" — le titre reflète désormais l'ensemble de l'offre
- **3 pills de service** ajoutées sous le H1 (icônes Key / Wrench / Thermometer) : "Clés auto · moto · PL · agricole", "Reprogrammation moteur ECU", "Climatisation PL & Agricole"
- **Badge "Rapide"** → "Réactif" / sous-titre "RDV dans les meilleurs délais" (supprime la promesse non tenue "Dépannage le jour même")
- **Badge "-50%"** → sous-titre "par rapport au concessionnaire" (plus explicite que "vs concessionnaire")

#### Page `/services`

- **Grande card unifiée** pour "Reproduction & Programmation de Clés" : remplace les 5 cards individuelles (voiture, moto, PL, agricole, engin de chantier) par une seule card avec 5 icônes cliquables
  - Mobile : layout ligne compact (icône + label + flèche)
  - `sm` : grille 2 colonnes avec description par type de véhicule
  - `lg` : grille 5 colonnes
- **Reprog Moteur & Climatisation** : 2 cards en 2 colonnes (inchangées dans leur contenu)

#### Section services (landing & pages villes)

- **`ServicesSection`** entièrement réécrit pour reproduire le même pattern que `/services` : grande card clés + 2 cards reprog/clim — appliqué automatiquement à la landing et aux 16 pages de villes

#### Pages détail — cohérence CTA

- **`/services/[slug]`** : hero avec 2 boutons (téléphone + "Demander un devis" → `/contact`) ; sidebar réordonnée : CTA d'abord, "Autres services" dessous
- **`/marques/[slug]`** : hero avec 2 boutons (téléphone + "Demander un devis") ; libellé "Devis gratuit en ligne" → "Demander un devis"
- **`/zone/[slug]`** : hero avec 2 boutons identiques ; libellé harmonisé ; "Nos services" étendu aux 3 expertises (ECU reprog + climatisation ajoutés en plus des clés)
- **Grille contenu / sidebar** : `lg:grid-cols-3` → `sm:grid-cols-[3fr_2fr]` sur les 3 types de pages — sidebar visible dès `sm` (640px) au lieu de `lg` (1024px)

#### Carte OpenStreetMap

- **Boutons de zoom masqués** (`zone-section.tsx` + `app/zone/page.tsx`) : `margin-left: -4rem` + `width: calc(100% + 4rem)` sur l'iframe avec `overflow-hidden` sur le conteneur — les contrôles +/− sont coupés sans altérer la lecture de la carte

#### Header

- **Nav tablette étagée** :
  - `sm → md` : Services · Marques · Contact
  - `md → lg` : Services · Marques · Zone d'intervention · Contact
  - `lg+` : nav complète + numéro de téléphone complet
- Icône téléphone visible jusqu'à `lg` ; numéro textuel réservé à `lg+`

#### Logos SVG

- **`unoptimized`** ajouté sur tous les `<Image>` utilisant des logos `.svg` (`marques/[slug]`, `brands-section`, `marques/page`, `brand-search-client`) — supprime le warning Next.js sur les dimensions des SVGs non carrés (ex. Dacia)

---

## [2.1.0] — 2026-03-22

### Correctifs UX & conformité

#### Recherche de véhicule

- **Insensibilité aux accents** : normalisation NFD dans `BrandSearchClient` — "serie 7", "Serie 7" ou "série 7" trouvent tous "Série 7"

#### Logos

- **Mercedes & Mercedes Trucks** : remplacement du logo 4 branches (incorrect) par l'étoile 3 branches dans un anneau (`polygon` + `circle` SVG) — les deux fichiers `mercedes.svg` et `mercedes-trucks.svg` sont corrigés

#### Footer

- **Disclaimer marques** : ajout d'une ligne de bas de page — _"Les marques et logos mentionnés sur ce site sont la propriété de leurs détenteurs respectifs. Clé Performance 66 est un prestataire indépendant, non affilié ni agréé par ces marques."_ — couvre l'usage nominatif

#### Carte interactive

- **Scroll parasite** : ajout de `pointer-events-none` sur les deux iframes OpenStreetMap (`ZoneSection` landing + page `/zone`) — la carte est désormais figée et ne capture plus le scroll/zoom de la page

#### Horaires & astreinte

- **`site-config.ts`** : `hours.saturday` mis à jour de "Week-end : Fermé" vers "Après 19h et week-end : astreinte" — se propage automatiquement au footer
- **Page contact** : ligne ajoutée sous les horaires — _"Intervention possible 7j/7 — supplément tarifaire applicable hors horaires"_ (en or `#F0B800`)
- **Section Tarifs** : note `**` ajoutée — _"Interventions disponibles après 19h et le week-end en astreinte — supplément tarifaire applicable"_

#### Pages marques & villes — sidebar CTA

- **Bouton "Devis gratuit en ligne"** ajouté dans la card sidebar de `/marques/[slug]` et `/zone/[slug]` — `variant="outline-light"` avec icône `Mail`, aligné sur le pattern hero/CTA section (duo téléphone + formulaire sur fond sombre)
- Espacement `gap-3` entre les deux boutons via `flex flex-col`

#### Section "Comment ça marche" (nouvelle)

- **`how-it-works-section.tsx`** : nouvelle section ajoutée à la landing entre `AdvantagesSection` et `PricingSection`
- 4 étapes en grille (`lg:grid-cols-4`) : Contactez-nous → Devis immédiat → Intervention sur site → Clés remises & testées
- Icône dans carré rouge arrondi + badge numéroté en or, ligne tiretée reliant les étapes sur desktop
- CTA duo centré sous les étapes : `variant="default"` (téléphone) + `variant="outline"` (devis en ligne) — adapté au fond clair `#FFFBF5`

---

## [2.0.0] — 2026-03-22

### Refonte visuelle complète — palette rouge/or + nouveau logo

#### Identité visuelle

- **Nouveau logo** `logo-identitaire.png` (fond transparent) — remplace l'ancien `logo-minimaliste-only.png` partout
- **Logo icône seule** `logo-identitaire-only.png` (546×546px, fond transparent, carré parfait) — créé par recadrage précis pixel-à-pixel avec ImageMagick pour exclure le texte et l'accent de "CLÉ"
- **Logo icône fond blanc** `logo-identitaire-only-white.png` (666×666px, centré optiquement à -12px) — pour usage sur fond clair (footer)
- **"66" en rouge** (`text-[#C82020]`) dans le texte du header (desktop + menu mobile) et du footer

#### Palette de couleurs

Remplacement intégral de la palette bleue/navy/cyan par rouge/bordeaux/or — **39 fichiers modifiés** :

| Avant     | Après     | Usage               |
| --------- | --------- | ------------------- |
| `#0A2A4A` | `#1C0A08` | Fond sombre, textes |
| `#1A6FAF` | `#C82020` | Rouge principal     |
| `#3AAFDE` | `#F0B800` | Or accent           |
| `#F8F9FB` | `#FFFBF5` | Fond clair          |
| `#D8E4EF` | `#F0D898` | Bordures            |

Fichiers concernés :

- `app/globals.css` — CSS variables `:root`
- `src/components/ui/button.tsx` — variants default, accent, outline, secondary
- `src/data/site-config.ts` — objet `colors`
- `src/components/layout/` — header, footer, floating-cta
- `src/components/sections/` — hero, advantages, brand-search, brands, cta, faq, pricing, services, testimonials, zone (+ brand-search-client)
- `app/` — a-propos, contact (page + form + actions), marques (index + [slug]), mentions-legales, not-found, services (index + [slug]), zone (index + [slug])
- `src/lib/json-ld.ts` — couleurs du schéma JSON-LD

#### Image OG

- `app/opengraph-image.tsx` : gradient `#1C0A08 → #6B1010 → #C82020`, badge/séparateur/labels services en or `#F0B800`
- Suppression de "F-Gaz" dans la card Climatisation

#### Sécurité & confidentialité

- **Téléphone et email** déplacés en variables d'environnement : `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_PHONE_HREF`, `NEXT_PUBLIC_EMAIL` — `site-config.ts` lit depuis `process.env`
- **`.claude/`** ajouté au `.gitignore` — évite l'exposition des credentials de dev locaux
- `PROJECT.md` et `CHANGELOG.md` nettoyés de toute donnée personnelle (téléphone, email)

---

## [1.9.0] — 2026-03-20

### Sécurité

- **Protection aperçu client** (`middleware.ts`) : HTTP Basic Auth activée si la variable d'environnement `PREVIEW_PASSWORD` est définie — aucune protection si absente (production). Permet de partager un aperçu Vercel sans exposer le site publiquement.

---

## [1.8.0] — 2026-03-18

### Ajouté

- **Image OG dynamique** (`app/opengraph-image.tsx`) : générée via `next/og` — dégradé navy, badge localisation, nom, tagline, séparateur cyan et 3 cards services (Clés / Reprog Moteur ECU / Climatisation) — remplace l'ancien PNG statique

### Modifié

- `siteConfig.ogImage` mis à jour vers `/opengraph-image`
- **Formulaire contact** : champ email rendu obligatoire (`required`)
- **Page contact** : email affiché avec `break-all` pour éviter le scroll horizontal sur mobile

### Supprimé

- `public/og-image-cleperf.png` : remplacé par la génération dynamique

---

## [1.7.0] — 2026-03-18

### Ajouté

- **Page 404 personnalisée** (`app/not-found.tsx`) : retour accueil, bouton appel direct et liens rapides vers les 4 sections principales — remplace la page Next.js générique

### Corrigé

- **Accessibilité** : suppression de `aria-hidden="true"` sur la liste `sr-only` de `BrandSearchSection` — les deux attributs s'annulaient, la liste était invisible partout
- **CLS images marques** : `width={20} height={20}` aligné sur `h-6 w-6` (24px) dans `brands-section.tsx` — élimine le décalage de mise en page
- **Logo mobile** : div `hidden lg:flex` → visible sur tous les écrans avec tailles responsives (160 / 224 / 320px)
- **`key={index}`** : remplacé par `key={paragraph}` dans les 3 pages dynamiques (`/marques/[slug]`, `/services/[slug]`, `/zone/[slug]`)

### Performance

- **Logo compressé** : `logo-minimaliste-only.png` 2352×2352px / 2 Mo → 512×512px / 106 Ko (×20) — améliore le LCP sans perte visuelle
- **Debounce recherche** : délai 300 ms ajouté sur l'input de `BrandSearchClient` via `useEffect` — évite un recalcul `useMemo` à chaque frappe

### Modifié

- **Hero** : sous-titre mis à jour pour mentionner les 3 services (clés, reprog ECU, climatisation) + badge "seul opérateur itinérant à combiner les 3 services"
- **Hero badges** : `Mobile / Rapide / -50%` responsifs — empilés et centrés sous `sm`, horizontaux alignés à gauche à partir de `lg`
- **README** : remplacé le boilerplate `create-next-app` par une doc projet (stack, démarrage, env vars, lien vers `PROJECT.md`)

### Supprimé

- Assets Next.js par défaut inutilisés : `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`
- Ancien logo sans fond transparent : `logo-minimaliste.png`

---

## [1.6.0] — 2026-03-17

### Ajouté

- **2 nouveaux services** : Reprogrammation Moteur ECU (`/services/reprogrammation-moteur`) et Climatisation PL & Agricole (`/services/climatisation-pl-agricole`) — seed, pages, pricing, json-ld, footer, nav
- **Recherche rapide marque** : composant client `BrandSearchSection` avec filtre par nom/modèle, estimation de prix et liste `sr-only` pour l'indexation Google
- **Formulaire de contact fonctionnel** : intégration Resend via Server Action (`useActionState` React 19), état de chargement, succès et erreur inline — remplace l'ancien form statique mort
- **3 nouvelles questions FAQ** : reprogrammation moteur ECU, climatisation PL & tracteurs, interventions pro (transporteurs, agriculteurs, MRA)
- "À propos" ajouté dans le header (nav desktop + menu mobile) et en bas du footer

### Modifié

- **Page À propos** : réécriture avec profil technicien, callout "Avantage unique dans le 66" (3 stats), section "Nos engagements" en 5 cards (expertise, 3 services, F-Gaz, réactivité, couverture 66)
- **Page Services** : regroupement en 2 catégories visuelles + bouton "En savoir plus" sur chaque card (page index et section homepage)
- **Section Tarifs** : 4 → 6 catégories, grille 3 colonnes
- **Footer** : 2 nouveaux services, description couvrant les 3 expertises, lien "À propos"
- **Horaires** : suppression du samedi dans `site-config`, JSON-LD, footer, page contact et FAQ

### SEO

- Title global : `"Clés, Reprog Moteur & Climatisation — Perpignan 66"`
- Meta description racine : réduite à 155 chars, couvre les 3 services
- JSON-LD `serviceType` : 10 → 14 entrées ; `hasOfferCatalog` : 5 → 7 offres
- `openingHoursSpecification` : lundi-vendredi uniquement (suppression samedi)

### Corrigé

- Logo Opel : couleur SVG `#F7FF14` (jaune invisible sur blanc) → `#0A2A4A` (navy)
- FAQ urgences : suppression de "y compris le samedi"

### Documentation

- `PROJECT.md` entièrement réorganisé en 11 sections (services avec tableaux de prix, profil client, déploiement Vercel + Neon)
- `CHANGELOG.md` mis à jour

---

## [1.5.0] — 2026-03-15

### Logos, tarifs & migration base de données Prisma 7

#### Ajouté

- **23 nouvelles marques** (49 au total) :
  - PL (8) : Renault Trucks, Mercedes Trucks, MAN, Iveco, DAF, Scania, Volvo Trucks, PSA Utilitaires
  - Agricole (9) : John Deere, New Holland, Case IH, Fendt, Massey Ferguson, Deutz-Fahr, Claas, Kubota, Valtra
  - Auto (6) : Jaguar, Land Rover, DS, Alpine, Cupra, Seat
- **13 logos SVG réels** remplaçant les placeholders : Jaguar, Land Rover, Kawasaki, Triumph, PSA Utilitaires, New Holland, Case IH, Fendt, Massey Ferguson, Deutz-Fahr, Claas, Kubota, Valtra
- **Section Tarifs** sur la landing page : 4 catégories (auto dès 79€, moto dès 79€, PL dès 129€, agricole dès 139€) avec features et CTA
- **Prix par marque** : affichage "dès X€" sur les pages index et détail marque (sidebar CTA)
- **Base de données PostgreSQL** avec Prisma 7 :
  - Schema avec 5 modèles : Brand (avec enum BrandCategory), City, Service, FaqItem, Testimonial
  - Script de seed complet (`prisma/seed.ts`) avec les 49 marques, 16 villes, 5 services, 8 FAQ, 5 témoignages
  - Configuration Prisma 7 (`prisma/prisma.config.ts`) avec `datasource.url` et adapter `@prisma/adapter-pg`
  - Singleton PrismaClient (`src/lib/db.ts`) avec Pool pg
  - Couche d'accès données (`src/lib/queries.ts`) : fonctions async pour toutes les entités
  - Scripts npm : `db:generate`, `db:push`, `db:seed`, `db:studio`, `db:reset`

#### Modifié

- **Migration données statiques → Prisma** : les 14 fichiers qui importaient depuis `@/data/*` utilisent désormais `@/lib/queries` (seul `site-config` reste statique)
- Tous les composants sections (`BrandsSection`, `ZoneSection`, `ServicesSection`, `FaqSection`, `TestimonialsSection`) sont désormais des **async server components**
- Le sitemap, les `generateStaticParams` et les `generateMetadata` sont désormais async et interrogent la BDD
- **82 pages SSG** générées depuis la base de données (vs 59 avant)

#### Supprimé

- Champ `population` supprimé du modèle City et des données (non pertinent pour le client)
- Badge "Populaire" retiré de la card PL dans la section tarifs

#### Corrigé

- Alignement des boutons "Devis gratuit" en bas des cards tarifs (flex-col + mt-auto)
- Classes Tailwind v4 canoniques (`bg-linear-to-br`, `supports-backdrop-filter`, `translate-y-10`)

---

## [1.4.0] — 2026-03-10

### Menu mobile & finitions

#### Amélioré

- Refonte complète du menu mobile (Sheet) : logo agrandi, séparateurs visuels, liens avec hover arrondi (`rounded-lg` + `bg-[#EBF4FB]`), bouton téléphone calé en bas du panneau avec `mt-auto`
- Le nom "Clé Performance 66" est désormais visible dans le header sur **toutes les tailles d'écran** (plus uniquement `lg:`)
- Tous les logos utilisent `next/image` avec `fill` et un conteneur de dimensions fixes — suppression définitive du warning "width or height modified"
- Logo du hero en dimensions carrées fixes (`width={320} height={320}`) avec `priority` pour le preload

#### Corrigé

- Résolution des erreurs d'hydratation causées par le cache corrompu de Turbopack (base de données SST corrompue) — nettoyage complet de `.next` et `node_modules/.cache`
- Suppression de toutes les références résiduelles à l'ancien fichier `logo-minimaliste.png` (remplacé partout par `logo-minimaliste-only.png`)
- Correction du warning de preload `sw.js` 404 (service worker fantôme du navigateur)

#### Modifié

- Mise à jour des coordonnées réelles dans `site-config.ts` :
  - Téléphone : `NEXT_PUBLIC_PHONE` / `NEXT_PUBLIC_PHONE_HREF`
  - Email : `NEXT_PUBLIC_EMAIL`

---

## [1.3.0] — 2026-03-09

### Zone d'intervention, carte & marques moto

#### Ajouté

- Intégration d'une carte **OpenStreetMap** (iframe) sur la page d'accueil dans la section zone d'intervention — layout 5 colonnes (`lg:col-span-3` pour la carte, `lg:col-span-2` pour les villes)
- Ajout de la même carte OpenStreetMap sur la page `/zone` (au-dessus de la grille de villes)
- **8 marques moto** ajoutées dans `brands.ts` : Yamaha, Honda Moto, Kawasaki, Suzuki Moto, BMW Motorrad, Ducati, Triumph, KTM
- Système de catégories de marques (`auto` / `moto`) avec `getBrandsByCategory()`
- Section "Moto & Scooter" dans `brands-section.tsx` et sur la page `/marques`

#### Supprimé

- Retrait du nombre d'habitants sur les cartes de villes (`/zone` et `/zone/[slug]`) — demande client : "inutile de mettre le nombre d'habitants par ville"

#### Corrigé

- Correction de l'erreur de syntaxe dans `brands.ts` (tableau fermé prématurément avant les marques moto)
- Correction du layout de la carte à partir de `lg` (passage de 2 colonnes à un ratio 3/2 sur 5 colonnes)

---

## [1.2.0] — 2026-03-08

### Design system, thème clair & corrections visuelles

#### Ajouté

- Composant `floating-cta.tsx` : bouton téléphone flottant visible uniquement sur mobile
- Pages dynamiques `/zone/[slug]` avec `generateStaticParams` pour les 16 villes du 66
- Pages dynamiques `/marques/[slug]` pour les 26 marques (auto + moto)
- Pages dynamiques `/services/[slug]` pour les 5 types de services
- Page `/contact` avec formulaire (nom, email, téléphone, véhicule, message)
- Page `/mentions-legales`
- Page `/a-propos`
- `sitemap.ts` : génération automatique de toutes les 59 URLs
- `robots.ts` : configuration standard

#### Amélioré

- Réécriture complète de `button.tsx` avec **variants shadcn** utilisant les couleurs du projet :
  - `default` : `bg-[#1A6FAF]` / hover `bg-[#0A2A4A]`
  - `outline` : bordure `[#D8E4EF]` / hover `bg-[#EBF4FB]`
  - `secondary` : `bg-[#EBF4FB]`
  - `ghost`, `destructive`, `link`
- Support du prop `asChild` via `@radix-ui/react-slot` (le composant base-ui de shadcn ne le supportait pas nativement)
- Correction de tous les boutons du site pour utiliser les **variants** au lieu de surcharges CSS manuelles

#### Corrigé

- **Formulaire contact noir** : suppression du media query `prefers-color-scheme: dark` dans `globals.css` qui forçait `--background: #0a0a0a` — le site est exclusivement en thème clair
- **Boutons noirs** : `--primary` était `oklch(0.205 0 0)` (noir) au lieu de `#1A6FAF` — réécriture complète des CSS variables dans `:root`
- **Badges quasi invisibles** : passage à `bg-[#EBF4FB] text-[#0A2A4A]` explicite sur les badges `variant="secondary"`
- **Inputs du formulaire** : ajout explicite de `bg-white`, `border-[#D8E4EF]`, `text-[#0A2A4A]` pour éviter les héritages sombres
- Remplacement de la taille `icon-sm` inexistante par `icon` dans `dialog.tsx`, `sheet.tsx`, `carousel.tsx`
- Fond transparent du logo PNG : suppression du fond blanc cassé (#F8F8FA) avec ImageMagick (`convert -fuzz 15% -transparent`)

---

## [1.1.0] — 2026-03-06

### Initialisation du projet & architecture

#### Ajouté

- Initialisation **Next.js 16** (App Router) avec Turbopack, Tailwind CSS v4, TypeScript
- Installation et configuration de **shadcn/ui** (variante base-ui) : accordion, avatar, badge, button, card, carousel, dialog, input, navigation-menu, scroll-area, separator, sheet, tabs, textarea
- Configuration des alias de chemin dans `tsconfig.json` : `@/*` → `./src/*`, `@app/*` → `./app/*`
- Palette de couleurs extraite du logo :
  - Navy : `#0A2A4A`
  - Bleu : `#1A6FAF`
  - Cyan : `#3AAFDE`
  - Fond : `#F8F9FB`
  - Bordures : `#D8E4EF`

#### Données métier (`src/data/`)

- `site-config.ts` : coordonnées, horaires, liens sociaux, infos légales
- `services.ts` : 5 services (clé voiture, moto, poids lourd, agricole, engin de chantier) avec titres SEO, descriptions, features, contenu
- `brands.ts` : 18 marques automobiles (Renault, Peugeot, Citroën, Dacia, Volkswagen, Audi, BMW, Mercedes, Toyota, Nissan, Hyundai, Kia, Ford, Opel, Fiat, Seat, Skoda, Volvo)
- `cities.ts` : 16 villes du 66 (Perpignan, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Cabestany, Thuir, Elne, Argelès-sur-Mer, Céret, Prades, Ille-sur-Têt, Saint-Cyprien, Le Soler, Pia, Toulouges, Pollestres) avec codes postaux, distances, contenus SEO
- `faq.ts` : 8 questions/réponses fréquentes
- `testimonials.ts` : 5 témoignages clients (placeholder)

#### SEO & métadonnées

- `src/lib/metadata.ts` : helper `generatePageMetadata()` pour Open Graph et Twitter Cards cohérents
- `src/lib/json-ld.ts` : schémas structurés Schema.org — `LocalBusiness`, `Service`, `FAQ`, `BreadcrumbList`
- Image OG personnalisée (`og-image-cleperf.png`)

#### Layout & composants

- `header.tsx` : navigation desktop + menu mobile (Sheet), logo, bouton téléphone CTA
- `footer.tsx` : 4 colonnes (infos, services, villes, contact), copyright, mentions légales
- `hero.tsx` : gradient navy/bleu, headline H1 optimisé SEO, 2 CTA (appel + devis), 3 indicateurs (Rapide, Expert, -50%)
- `brands-section.tsx` : grille de badges cliquables par marque
- `zone-section.tsx` : liste des villes avec liens et distances
- `services-section.tsx` : grille de cartes par service
- `faq-section.tsx` : accordéon des questions fréquentes
- `testimonials-section.tsx` : carousel de témoignages
- `cta-section.tsx` : bannière d'appel à l'action

#### Pages

- `/` : page d'accueil avec toutes les sections
- `/services` : liste de tous les services
- `/marques` : liste de toutes les marques
- `/zone` : zone d'intervention avec toutes les villes
- `/contact` : formulaire de contact

---

## [1.0.0] — 2026-03-06

### Initialisation

- `create-next-app` avec Next.js 16, TypeScript, Tailwind CSS v4, App Router
- Configuration initiale du repository Git
