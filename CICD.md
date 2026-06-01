# CI/CD Setup for npm Publishing

This document explains how to set up and use GitHub Actions for automated npm publishing.

## 📋 Quick Setup (5 minutes)

### 1. Create npm Token

```bash
# At npmjs.com:
# Profile → Access Tokens → Generate New Token
# Type: Automation (or Granular)
# Scope: publish (or full access)
```

### 2. Add GitHub Secret

```
GitHub → Settings → Secrets and variables → Actions
→ New repository secret
  Name: NPM_TOKEN
  Value: <your-npm-token>
```

### 3. Test Publish

```bash
# Locally update version
npm version patch

# Push with tag
git tag v0.9.72-3
git push origin v0.9.72-3

# Watch GitHub Actions → Publish to npm workflow
```

---

## 🔄 Workflows Overview

### **ci.yml** - Runs on every push/PR
```
Triggers: push to main/develop, pull_request
Runs on: Node 18, 20
Does:
  ✓ Lint code
  ✓ Build
  ✓ Upload artifacts
```

### **publish.yml** - Runs on git tags
```
Triggers: git tag v*.*.* (e.g., v1.0.0)
Runs on: Node 18
Does:
  ✓ Lint & build
  ✓ Verify version matches tag
  ✓ Publish to npm
  ✓ Create GitHub Release
```

---

## 📖 Publishing Workflow

### Option 1: Automated (Recommended)

```bash
# 1. Update version and create tag
npm version patch  # Updates package.json & creates tag

# 2. Push
git push origin --tags

# 3. Done! GitHub Actions handles:
#    - Building
#    - Linting
#    - Publishing to npm
#    - Creating Release
```

### Option 2: Manual Tag

```bash
# 1. Update package.json version manually
# package.json: "version": "0.10.0"

# 2. Create and push tag
git tag v0.10.0
git push origin v0.10.0

# 3. GitHub Actions publishes automatically
```

### Option 3: Manual Publish (Not Recommended)

```bash
npm login
npm publish
```

---

## 🔐 GitHub Secrets Setup

### Required Secrets

| Secret Name | Source | Scope |
|------------|--------|-------|
| `NPM_TOKEN` | npmjs.com | Publish packages |

### How to Get NPM_TOKEN

1. **Sign in to npmjs.com**
2. **Click your profile → Access Tokens**
3. **Create new token:**
   - Type: `Automation` (Classic) or `Granular`
   - Scope: `publish` (or `automation` for Classic)
   - Expiration: Never (or preferred duration)
4. **Copy and save securely** (you won't see it again)
5. **Add to GitHub:**
   - Repo → Settings → Secrets and variables → Actions
   - New secret: `NPM_TOKEN` = `<token>`

---

## ✅ Pre-Flight Checklist

Before pushing your first release, verify:

- [ ] `package.json` has `"private": false`
- [ ] `package.json` has `"license": "MIT"`
- [ ] `package.json` has `"main": "dist/index.js"`
- [ ] `package.json` has valid `"repository"` field
- [ ] `NPM_TOKEN` is set in GitHub Secrets
- [ ] `.npmignore` is configured
- [ ] `pnpm-lock.yaml` is committed
- [ ] Build script generates `dist/` folder
- [ ] Package name is available on npmjs

### Verify Build

```bash
pnpm install
pnpm build
ls -la dist/  # Should show output files
```

### Verify Package Name

```bash
npm view kitvue  # Replace with your package name
```

---

## 🚀 First Release Example

```bash
# 1. Make sure everything is committed
git status  # Should be clean

# 2. Update version (automatically commits and creates tag)
npm version minor
# Output: v0.10.0

# 3. Push both commits and tags
git push origin main
git push origin --tags

# 4. Monitor on GitHub
# Go to: Repo → Actions → "Publish to npm"
# Watch the workflow complete

# 5. Verify on npmjs
# https://www.npmjs.com/package/kitvue
```

---

## 📊 Workflow Status

### CI Workflow

```
┌─ Push to main/develop/PR ─────────────────────┐
│                                              │
├─ [Lint & Build on Node 18]                 │
├─ [Lint & Build on Node 20]                 │
├─ [Upload dist artifacts]                    │
│                                              │
└─ ✓ Results in Actions tab              │
```

### Publish Workflow

```
┌─ git tag v*.*.* ─────────────────────────────┐
│                                              │
├─ [Build & Lint]                             │
├─ [Verify version matches tag]               │
├─ [Publish to npm]                           │
├─ [Create GitHub Release]                    │
│                                              │
└─ ✓ Published on npmjs.com            │
```

---

## 🔧 Troubleshooting

### Publish Fails: "Version mismatch"

**Problem:** `package.json` version doesn't match git tag

**Solution:**
```bash
# package.json must match tag exactly
# If tag is v1.0.0, package.json must have "version": "1.0.0"

npm version patch  # Auto-creates matching tag
```

### Publish Fails: "dist directory not found"

**Problem:** Build script doesn't generate `dist/`

**Solution:**
```bash
# Test locally
pnpm build
ls dist/

# If empty, check:
# 1. package.json "main" field
# 2. build script in package.json
# 3. vue.config.js output path
```

### Publish Fails: "Authentication failed"

**Problem:** NPM_TOKEN not set or expired

**Solution:**
```bash
# 1. Check GitHub Secrets
# Repo → Settings → Secrets → NPM_TOKEN exists?

# 2. Check token on npmjs.com
# Profile → Access Tokens → Is it expired?

# 3. Create new token if needed:
npm logout
npm login
npm token create [--read-only|--cidr=1.2.3.4/32]
```

### CI Workflow Fails: "pnpm install failed"

**Problem:** `pnpm-lock.yaml` is outdated

**Solution:**
```bash
# Ensure lock file is committed
git add pnpm-lock.yaml
git commit -m "Update pnpm lock file"
git push origin main
```

---

## 📚 Additional Configuration

### Customize Node Versions

Edit `.github/workflows/ci.yml`:

```yaml
strategy:
  matrix:
    node-version: [18, 20]  # Add or remove versions
```

### Change Publish Trigger

Edit `.github/workflows/publish.yml`:

```yaml
on:
  push:
    tags:
      - 'v*.*.*'     # Current: any version tag
      - 'v*.*.*-*'   # Pre-releases like v1.0.0-beta
```

### Change Branches for CI

Edit `.github/workflows/ci.yml`:

```yaml
on:
  push:
    branches:
      - main        # Add your branch names
      - develop
      - 'feature/**'
```

---

## 🔒 Security Best Practices

1. **Use Granular Tokens:** Limited permissions
2. **Set Expiration:** 90 days or annual review
3. **Rotate Tokens:** Change annually
4. **Monitor Publishes:** Check npm for unauthorized releases
5. **Use OIDC (Optional):** For enhanced security

### OIDC Token (Advanced)

Instead of NPM_TOKEN, use OIDC for passwordless authentication:

```yaml
# In publish.yml, use:
permissions:
  contents: read
  id-token: write

# Instead of:
env:
  NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

# Use:
env:
  NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 📞 Support & Links

- [npm Publishing Docs](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
- [npm CLI Reference](https://docs.npmjs.com/cli)

---

## 📝 Workflow Files

| File | Purpose |
|------|---------|
| [.github/workflows/ci.yml](.github/workflows/ci.yml) | Test & lint on every push |
| [.github/workflows/publish.yml](.github/workflows/publish.yml) | Publish on git tags |
| [.github/workflows/README.md](.github/workflows/README.md) | Workflow setup guide |
