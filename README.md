# CI/CD Practice — GitHub Actions

A minimal Node.js project demonstrating a full **CI/CD pipeline** using **GitHub Actions**, triggered on every push or pull request to `main`.

---

## 📁 Project Structure

```
ci-cd_practice/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions pipeline
├── src/
│   ├── index.js            # App entry point
│   └── app.js              # Core logic
├── tests/
│   └── app.test.js         # Unit tests (Jest)
├── .eslintrc.json          # ESLint config
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ CI/CD Pipeline Overview

File: `.github/workflows/ci.yml`

| Trigger | Branch |
|---------|--------|
| `push` | `main` |
| `pull_request` | `main` |

### Jobs

#### 1. `build-and-test`
Runs on every push and pull request to `main`.

| Step | Description |
|------|-------------|
| Checkout code | Pulls the repo |
| Set up Node.js 20 | Installs Node with npm cache |
| Install dependencies | `npm ci` or `npm install` |
| Run lint | `npm run lint` (ESLint) |
| Run tests | `npm test` (Jest + coverage) |
| Build app | `npm run build` → outputs to `dist/` |
| Upload artifacts | Uploads `dist/` or `build/` folder |

#### 2. `deploy`
Runs **only on push to `main`** after `build-and-test` succeeds.

| Step | Description |
|------|-------------|
| Checkout code | Pulls the repo |
| Download artifacts | Gets the build output |
| Deploy | Placeholder — replace with your deploy command |

---

## 🚀 Getting Started Locally

```bash
# Install dependencies
npm install

# Run the app
npm start

# Run tests
npm test

# Run lint
npm run lint

# Build
npm run build
```

---

## 🔧 Customising the Deploy Step

Open `.github/workflows/ci.yml` and replace the deploy step with your actual command:

```yaml
# SSH
ssh user@server "cd /app && git pull && npm ci && pm2 restart app"

# Docker
docker build -t myapp . && docker push myrepo/myapp

# AWS S3
aws s3 sync ./dist s3://my-bucket --delete

# Heroku
git push heroku main
```

Add any required secrets via **GitHub → Settings → Secrets and variables → Actions**.

---

## 📝 License

MIT
