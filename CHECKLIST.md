# Pre-Publication Checklist

## Before Publishing to npmjs & GitHub

### 1. **Repository Setup** ✓
- [ ] GitHub repository created and public
- [ ] Repository URL: `https://github.com/ifatich/kitvue-public`
- [ ] README.md updated with public installation instructions
- [ ] LICENSE file added (MIT)

### 2. **Package Configuration** ✓
- [ ] `package.json` updated with:
  - [ ] `"private": false`
  - [ ] `"license": "MIT"`
  - [ ] `"repository"` field set
  - [ ] `"homepage"` field set
  - [ ] `"description"` provided
  - [ ] `"keywords"` array populated
  - [ ] `"main"`, `"module"`, `"types"` entry points
  - [ ] `"files"` array specifies distribution files
- [ ] Invalid dependencies removed (e.g., "user": "^0.0.0")

### 3. **Security & Credentials** ✓
- [ ] `.gitignore` updated to exclude:
  - [ ] `.npmrc`
  - [ ] `.env` files
  - [ ] `.npm` directory
- [ ] `.npmignore` created to exclude development files
- [ ] No credentials, tokens, or API keys in any files
- [ ] Internal URLs replaced with public URLs
- [ ] `.gitlab-ci.yml` removed or kept for internal CI/CD only

### 4. **Documentation** ✓
- [ ] README.md has clear installation instructions
- [ ] README.md has usage examples
- [ ] CODE_STYLE_GUIDE.md is for contributors (can be public)
- [ ] WARNINGS_AND_SOLUTIONS.md is available for reference
- [ ] PUBLISH.md created with publishing instructions

### 5. **Build & Distribution** ⚠️
- [ ] Build process configured and tested
- [ ] `dist/` directory will be generated before publish
- [ ] Verify build outputs exist in expected locations
- [ ] `main` entry point in package.json targets correct file

### 6. **GitHub Workflow Setup** ✓
- [ ] GitHub Actions workflow created for CI/CD (optional)
- [ ] NPM_TOKEN secret configured in GitHub if using automation

### 7. **Version Management**
- [ ] Current version: `0.9.72-3`
- [ ] Decide on first public version (can reset to `1.0.0` if desired)
- [ ] Semantic versioning plan established

### 8. **Final Steps Before Publish**
- [ ] `npm login` - Authenticate with npmjs
- [ ] `pnpm install` - Install dependencies
- [ ] `pnpm build` - Build distribution files
- [ ] `pnpm lint` - Run linting checks
- [ ] `npm publish` - Publish to npmjs
- [ ] Verify on [npmjs.com/package/kitvue-public](https://www.npmjs.com/package/kitvue-public)
- [ ] Push to GitHub with git tags
- [ ] Create Release on GitHub

## Important Notes

1. **First Time Setup**
   - If package name "kitvue-public" is already taken on npmjs, you'll need to choose a different name
   - Check with: `npm view kitvue-public`

2. **Publishing from CI/CD**
   - Set `NPM_TOKEN` in GitHub Secrets for automated publishing
   - Add token to `.github/workflows/publish.yml`

3. **Maintenance After Publication**
   - Keep `CHANGELOG.md` updated
   - Follow semantic versioning
   - Tag releases on GitHub

## Commands Reference

```bash
# Local development
pnpm install          # Install dependencies
pnpm serve            # Start dev server
pnpm storybook        # View Storybook
pnpm build            # Build distribution
pnpm lint             # Run linting
pnpm build-storybook  # Build Storybook static files

# Publishing
npm login             # Authenticate with npmjs
npm publish           # Publish package
npm version patch     # Bump patch version
npm version minor     # Bump minor version
npm version major     # Bump major version
```
