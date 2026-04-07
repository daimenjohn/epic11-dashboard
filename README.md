# Epic 22 Platform

Internal M4E operations platform for Epic Nation.

---

## What's in here

```
epic22-platform/
├── public/
│   ├── index.html      ← Landing page (the hub)
│   ├── lineup.html     ← Epic Nation Lineup (player roster)
│   └── deals.html      ← Deal Scorecard (placeholder — add your file)
├── server.js           ← Express server
├── package.json
├── railway.toml        ← Railway config
└── .gitignore
```

## Adding the Deal Scorecard

If you have the deal scoring dashboard from a previous build:
1. Rename it `deals.html`
2. Drop it into the `public/` folder
3. Push to GitHub — Railway auto-deploys

---

## Deploy to Railway (5 minutes)

### Step 1 — Create a GitHub repo

Go to [github.com/new](https://github.com/new) and create a **private** repo called `epic22-platform`.

### Step 2 — Push this folder

Open Terminal in this folder and run:

```bash
git init
git add .
git commit -m "Epic 22 Platform — initial deploy"
git remote add origin https://github.com/YOUR_USERNAME/epic22-platform.git
git push -u origin main
```

### Step 3 — Deploy on Railway

1. Go to [railway.app](https://railway.app) and sign in
2. Click **New Project → Deploy from GitHub repo**
3. Select `epic22-platform`
4. Railway detects Node.js automatically and deploys
5. Click **Settings → Domains → Generate Domain**
6. You get a URL like `epic22-platform-production.up.railway.app`

### Step 4 — Share

Send that URL to whoever needs access. It's private by default (no auth) — add a password layer if needed.

---

## To update the platform

Any push to GitHub auto-redeploys. Workflow:

```bash
# Edit a file, then:
git add .
git commit -m "update: what you changed"
git push
```

Railway picks it up within ~30 seconds.

---

## Adding new modules

1. Build the new tool as an HTML file
2. Drop it in `public/` (e.g. `public/negotiation.html`)
3. Add a route in `server.js`: `app.get('/negotiation', ...)`
4. Add a card to `public/index.html`
5. Push

---

*Private & Confidential — Epic 22 Internal Use Only*
