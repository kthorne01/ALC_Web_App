# New Project Setup Checklist

Follow these steps every time you start a project from this template. **Hostinger setup is not needed on Day 1** — you can get staging working immediately and add production when you're ready to go live.

---

## Phase 1 — Day 1 Setup (Staging First)

### Step 1: Create the Repo from This Template
- On GitHub, click **Use this template → Create a new repository**
- Name the repo, set visibility, then clone it locally

### Step 2: Replace Placeholders
Search for and replace these strings throughout the project:

| Placeholder | Replace with |
|---|---|
| `PROJECT_NAME` | Your project/business name (e.g., `Acme Corp`) |
| `PROJECT_DESCRIPTION` | One-sentence site description for SEO |
| `YOUR_DOMAIN` | Your live domain (e.g., `acmecorp.com`) — use a placeholder if unknown yet |

Files to update:
- `apps/web/index.html` — title, description, OG tags, domain URLs
- `apps/web/src/pages/HomePage.jsx` — title, description
- `package.json` — `"name"` field

### Step 3: Add Your UI Code

**If starting from Hostinger Horizons:**
- Export/pull your Horizons project code
- Copy your components and pages into `apps/web/src/`
- Replace `HomePage.jsx` and add components as needed

**If building from scratch:**
- Start editing `apps/web/src/pages/HomePage.jsx` directly
- Add components to `apps/web/src/components/` as you build

### Step 4: Add Assets (Optional)
- Drop your `logo.png` into `apps/web/public/`
- Drop your OG preview image as `apps/web/public/og-image.png` (1200×630px)

### Step 5: Set Up Branches
```bash
git checkout -b develop
git push -u origin develop
```

### Step 6: Connect to Netlify (Staging)
1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
2. Connect your GitHub repo, select the **develop** branch
3. Build command: `npm run build` | Publish directory: `dist/apps/web`
4. Save and grab the **Site ID** from Site Settings → General
5. Get your **Netlify Auth Token** from User Settings → Applications

### Step 7: Add Staging Secrets to GitHub
Go to **Settings → Environments → New environment** → name it `staging`

Add these secrets:
- `NETLIFY_AUTH_TOKEN` — from Netlify user settings
- `NETLIFY_SITE_ID` — from Netlify site settings

Push to `develop` — staging should deploy automatically. ✓

---

## Phase 2 — Going Live (Production Setup)

Do this when you're ready to deploy to a real domain on Hostinger. You'll need the Hostinger SSH Access page open (Advanced → SSH Access).

### Step 8: Create a Hostinger Website
- Create a new website in Hostinger, enable SSH Access
- Note the **server IP** and **SSH username** (e.g., `u815171420`)
- SSH port is always **65002** (not 22)

### Step 9: Generate SSH Deploy Keys
1. In GitHub, go to **Actions → Generate SSH Deploy Keys → Run workflow**
2. Once it finishes, open the run logs
3. Copy the **PUBLIC KEY** → paste into Hostinger **SSH Access → Authorized Keys**
4. Copy the **PRIVATE KEY** (all lines including `-----BEGIN/END OPENSSH PRIVATE KEY-----`) — use in Step 10

### Step 10: Add Production Secrets to GitHub
Go to **Settings → Environments → New environment** → name it `production`

Add these secrets:
- `SSH_KEY` — the full private key from Step 9
- `FTP_SERVER` — your Hostinger server IP
- `FTP_USERNAME` — your Hostinger SSH username
- `DEPLOY_PATH` — full path on server (e.g., `/home/u815171420/domains/yourdomain.com/public_html/`)

Merge `develop` → `main` — production should deploy automatically. ✓

---

## Day-to-Day Workflow

```
feature/branch  →  develop (Netlify staging)  →  main (Hostinger live)
```

1. Create a feature branch from `develop`
2. Make changes, push to feature branch
3. Open PR → `develop`, CI runs (lint + build)
4. Merge to `develop` → auto-deploys to Netlify staging
5. When ready to go live, open PR → `main`
6. Merge to `main` → auto-deploys to Hostinger production

---

## Important Hostinger Notes
- SSH port is **65002** — port 22 times out
- SFTP root is chrooted — use `public_html/` not `/home/user/public_html/`
- Do NOT use SamKirkland/FTP-Deploy-Action — it doesn't support SFTP; rsync is already configured
- Use `$HOME` not `~` in bash scripts (tilde doesn't expand in double quotes)
- Private key must include the full `-----BEGIN/END OPENSSH PRIVATE KEY-----` lines
- Netlify publish dir is `dist/apps/web` (not `apps/web/dist`)
- `netlify.toml` must stay in the repo root

---

## Project Structure

```
project-root/
├── .github/
│   └── workflows/
│       ├── ci.yml                  # Lint + build on PRs
│       ├── deploy-staging.yml      # develop → Netlify
│       ├── deploy-production.yml   # main → Hostinger
│       └── generate-keys.yml       # One-time SSH key setup
├── apps/
│   └── web/
│       ├── public/                 # Static assets (logo.png, og-image.png)
│       ├── src/
│       │   ├── components/         # Shared UI components
│       │   ├── pages/              # Route-level page components
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css           # Tailwind + CSS variables
│       ├── index.html
│       ├── vite.config.js
│       ├── tailwind.config.js
│       ├── postcss.config.js
│       ├── eslint.config.mjs
│       └── jsconfig.json
├── .nvmrc                          # Node version (20)
├── netlify.toml
├── package.json                    # Monorepo root
└── SETUP.md                        # This file
```
