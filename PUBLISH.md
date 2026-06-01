# Publishing to npmjs

This guide explains how to publish `kitvue-public` to the npm registry.

## Prerequisites

1. **npmjs account** - Create an account at [npmjs.com](https://www.npmjs.com/)
2. **Logged in locally** - Run `npm login` to authenticate
3. **Version updated** - Update the version in `package.json` following [semver](https://semver.org/)

## Build Process

Before publishing, ensure the distribution files are built:

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Run linting
pnpm lint

# Preview exactly what will be published
npm pack --dry-run
```

## Publishing

### First Time Publishing

```bash
npm publish
```

### Subsequent Publishes

```bash
# Update version in package.json (e.g., 0.9.73)
npm version patch  # for patch release (0.9.72 -> 0.9.72-3)
npm version minor  # for minor release (0.9.72 -> 0.10.0)
npm version major  # for major release (0.9.72 -> 1.0.0)

# Or manually update package.json and then publish
npm publish
```

## Consumer Smoke Test

Before publishing a new version, test the generated tarball in a clean Vue 3 app:

```bash
# From this repository
pnpm build
npm pack --pack-destination /tmp

# From a separate Vue 3 project
npm install /tmp/kitvue-public-<version>.tgz
```

Use the plugin and CSS in the consumer app:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import KitVue from 'kitvue-public'
import 'kitvue-public/dist/kitvue-public.css'

createApp(App).use(KitVue).mount('#app')
```

## GitHub Release

After publishing to npm, create a release on GitHub:

1. Go to [https://github.com/ifatich/kitvue-public/releases](https://github.com/ifatich/kitvue-public/releases)
2. Click "Create a new release"
3. Tag version: `v0.9.73` (matching the version in package.json)
4. Title: `Release 0.9.73`
5. Describe the changes
6. Publish the release

## Verification

Verify the package is published correctly:

```bash
# Check npm registry
npm view kitvue-public

# Install from npm to test
npm install kitvue-public

# View all versions
npm view kitvue-public versions
```

## Troubleshooting

### Already published error
- Check if version in `package.json` matches published version
- Update to a new version number

### Authentication errors
- Ensure you're logged in: `npm login`
- Check npm credentials: `npm whoami`

### Package name unavailable
- The name must be unique on npmjs
- Check [npmjs.com](https://www.npmjs.com/package/kitvue-public)

## Additional Resources

- [npm Publishing Documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [npm CLI Commands](https://docs.npmjs.com/cli)
