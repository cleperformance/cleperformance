# Clé Performance 66

Site vitrine pour **Clé Performance 66** — technicien itinérant spécialisé en reproduction de clés, reprogrammation moteur ECU et climatisation PL & Agricole à Perpignan et dans les Pyrénées-Orientales (66).

> La documentation complète du projet est dans [`PROJECT.md`](./PROJECT.md).

## Stack

- Next.js 16 (App Router) + Turbopack
- Tailwind CSS v4 + shadcn/ui
- Prisma 7 + PostgreSQL (Neon)
- Resend (emails)
- Déploiement : Vercel (SSG)

## Démarrage

```bash
pnpm install
pnpm db:seed   # seed la base de données (DATABASE_URL dans .env.local)
pnpm dev
```

## Variables d'environnement

```
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
```
