# Build & Development Warnings Report
**Project:** @pegadaian/kitvue v0.1.13-5  
**Date:** April 14, 2026  
**Tests Run:** `pnpm build`, `pnpm build-storybook`, `pnpm serve`, `pnpm storybook`

---

## Summary

| Category | Count | Severity | Status |
|----------|-------|----------|--------|
| **Browserlist Outdated** | 1 | ⚠️ Low | Quick fix available |
| **Sass Deprecations** | ~80+ | ⚠️ Medium | Requires Bootstrap/dependency update |
| **Vue Compiler Macros** | 5 | ℹ️ Info | Can be auto-fixed |
| **Vue Deep Combinator** | 2 | ⚠️ Medium | Migration available |
| **Asset Size Limit** | 4 | ⚠️ Medium | Performance impact |
| **Storybook Deprecation** | 1 | ℹ️ Info | Non-blocking |
| **Node Deprecation** | 1 | ℹ️ Info | Non-blocking |

**Status:** ✅ All builds **successful** - warnings are non-blocking

---

## Detailed Warnings & Solutions

### 1. 📦 Browserlist Database Outdated
**Severity:** ⚠️ Low  
**Appears In:** All test runs (build, serve, storybook, build-storybook)

#### Warning Message
```
Browserslist: browsers data (caniuse-lite) is 8 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
```

#### Root Cause
The `caniuse-lite` database used by Browserslist for polyfill/feature detection is outdated.

#### Impact
- ⚠️ Might generate incorrect polyfills for newer browser features
- 🟢 Non-blocking for current production use

#### Solution
Run the following command:
```bash
npx update-browserslist-db@latest
```

**Priority:** 🟡 Medium - Update within next 1-2 weeks

---

### 2. 🎨 Sass @import Deprecation
**Severity:** ⚠️ Medium  
**Appears In:** build, serve (10+ warnings each)

#### Warning Details
```
Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
Use map.keys instead.
```

**Affected Files:**
- `src/assets/scss/g-kit.scss` (lines 3-7+)
- `src/assets/scss/bootstrap-override/forms/_input-group.scss`
- `src/assets/scss/bootstrap-override/_pagination.scss`

#### Root Cause
Dart Sass is transitioning from `@import` to `@use` and `@forward` statements. Bootstrap and custom SCSS still use old `@import` syntax.

#### Impact
- 🟢 Works today
- 🟠 Will break in Dart Sass 3.0.0 (estimated 2025-2026)
- Can suppress warnings: 76+ repetitive deprecation warnings omitted

#### Solution

**Option A: Migrate to @use (Recommended)**
```scss
// OLD
@import "g-kit/colors";

// NEW
@use "colors" as *;
```

**Option B: Suppress Warnings (Temporary)**
Update `vue.config.js` to suppress warnings:
```javascript
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quietDeps: true, // Silence warnings from node_modules
                  silenceDeprecations: ['import'],
                }
              }
            }
          ]
        }
      ]
    }
  }
}
```

**Timeline:**
- 🟢 **Now:** Current system works fine
- 🟡 **2026:** Update SCSS files to `@use/@forward`
- 🔴 **2027+:** Dart Sass 3.0 will not support `@import`

**Priority:** 🟡 Medium - Plan migration for Q3 2026

---

### 3. 🟨 Sass Global Built-in Functions Deprecated
**Severity:** ⚠️ Medium  
**Appears In:** build, serve (5+ warnings)

#### Warning Details
```
Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.keys instead.
Use string.unquote instead.
```

**Locations:**
- `src/assets/scss/bootstrap-override/forms/_input-group.scss:5:16`
- `src/assets/scss/bootstrap-override/forms/_input-group.scss:6:59`

#### Root Cause
Sass 3.0+ requires namespaced function calls instead of global functions.

#### Impact
- 🟢 Works now
- 🔴 Will break in Dart Sass 3.0.0

#### Solution

**Migration Examples:**
```scss
// OLD - Global functions
map-keys($validation-states)
unquote($state)

// NEW - Namespaced functions
map.keys($validation-states)
string.unquote($state)
```

**Automation:**
Dart Sass provides an automated migrator:
```bash
npm install -D sass-migrator
npx sass-migrator division lib/
```

**Priority:** 🟡 Medium - Include in SCSS migration plan (Q3 2026)

---

### 4. 📝 Mixed Declarations Warning
**Severity:** ⚠️ Low  
**Appears In:** build, serve (1 warning)

#### Warning Details
```
Sass's behavior for declarations that appear after nested rules will be changing 
to match the behavior specified by CSS in an upcoming version.
```

**Location:**
- `src/assets/scss/bootstrap-override/_pagination.scss:43:4`

#### Root Cause
```scss
.pagination-item {
  &:hover { ... }
  padding: unset !important;  // ← Declaration after nested rule
}
```

#### Solution

**Fix:**
```scss
.pagination-item {
  padding: unset !important;  // ← Move above nested rules
  
  &:hover { ... }
}

// OR use new syntax:
.pagination-item {
  & {
    padding: unset !important;
  }
  
  &:hover { ... }
}
```

**Priority:** 🟢 Low - Minor formatting issue

---

### 5. 🧬 Vue Compiler Macros Auto-Import
**Severity:** ℹ️ Info  
**Appears In:** all dev runs

#### Warning Details
```
[@vue/compiler-sfc] `defineEmits` is a compiler macro and no longer needs to be imported.
[@vue/compiler-sfc] `defineOptions` is a compiler macro and no longer needs to be imported.
[@vue/compiler-sfc] `defineProps` is a compiler macro and no longer needs to be imported.
[@vue/compiler-sfc] `defineExpose` is a compiler macro and no longer needs to be imported.
[@vue/compiler-sfc] `defineModel` is a compiler macro and no longer needs to be imported.
```

#### Root Cause
Vue 3.3+ auto-imports these macros when using `<script setup>`. Explicit imports are no longer needed.

#### Impact
- 🟢 Code still runs
- 💡 Unnecessary imports increase verbosity

#### Solution

**Find and remove these imports** from `.vue` files:

**Search pattern:**
```regex
import\s*{\s*defineProps,\s*defineEmits,\s*defineOptions,\s*defineExpose,\s*defineModel\s*}\s*from\s*['"](vue|@vue\/composition-api)['"]\s*;
```

**Example - Before:**
```vue
<script setup>
import { defineProps, defineEmits, defineOptions } from 'vue'

const props = defineProps({...})
const emit = defineEmits({...})
</script>
```

**Example - After:**
```vue
<script setup>
const props = defineProps({...})
const emit = defineEmits({...})
</script>
```

**Automated Fix:**
Create a codemod or use Find & Replace in VS Code:
- Find: `import\s*{\s*(?:defineProps|defineEmits|defineOptions|defineExpose|defineModel),?\s*}\s*from\s*['"]vue['"]\s*;\n`
- Replace: (empty)

**Priority:** 🟢 Low - Refactor opportunity for code quality

---

### 6. 📍 Vue Deep Pseudo-Selector Deprecation
**Severity:** ⚠️ Medium  
**Appears In:** all dev runs (2 components)

#### Warning Details
```
[@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. 
Use :deep(<inner-selector>) instead of ::v-deep <inner-selector>.
```

#### Root Cause
Vue 2 syntax `::v-deep .class` is deprecated. Vue 3 uses function syntax `:deep(.class)`.

#### Impact
- 🟢 Works in Vue 3.5+
- 🔴 Will not work in Vue 3.6+
- 🟠 Performance implications (CSS parser complexity)

#### Solution

**Find affected files:**
```bash
grep -r "::v-deep" src/components/ --include="*.vue"
```

**Migration - Before:**
```vue
<style scoped>
  ::v-deep .btn-primary {
    color: red;
  }
</style>
```

**Migration - After:**
```vue
<style scoped>
  :deep(.btn-primary) {
    color: red;
  }
</style>
```

**Bulk Find & Replace:**
- Find: `::v-deep\s+(.+?)\s*{`
- Replace: `:deep($1) {`

**Priority:** 🟡 Medium - Update within next 2 releases

---

### 7. 📦 Asset Size Limit Exceeded
**Severity:** ⚠️ Medium  
**Appears In:** build, build-storybook

#### Warning Details
```
asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.

Assets:
  js/chunk-vendors.72db9f86.js      885.94 KiB        280.98 KiB  
  js/app.ab4139a6.js                611.02 KiB        147.47 KiB  
  css/app.282917b8.css              408.62 KiB        58.25 KiB   
  css/chunk-vendors.15c8a744.css    271.14 KiB        37.40 KiB   

Total bundle: 2.13 MiB (production)
```

#### Root Cause
- Large Bootstrap Vue library
- Multiple chart libraries (Chart.js)
- Bootstrap framework itself (~650KB uncompressed)
- Custom SCSS compilation

#### Impact
- 🟡 Slower initial load time (147-280KB gzipped is acceptable for enterprise app)
- 🟡 Network latency on slower connections
- 🟡 Cache efficiency issues

#### Solutions

**Option 1: Code Splitting (Recommended)**
```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          bootstrap: {
            test: /[\\/]node_modules[\\/]bootstrap/,
            name: 'bootstrap',
            priority: 20,
          },
          charts: {
            test: /[\\/]node_modules[\\/](chart\.js|vue-chartjs)/,
            name: 'charts',
            priority: 20,
          }
        }
      }
    }
  }
}
```

**Option 2: Lazy Load Heavy Components**
```vue
<script>
const Charts = () => import(/* webpackChunkName: "charts" */ './Charts.vue')
const DataTable = () => import(/* webpackChunkName: "tables" */ './DataTable.vue')
</script>
```

**Option 3: Minification & Compression**
- Ensure Gzip compression on server (✅ Already 147-280KB gzipped)
- Use Brotli compression for even better ratios
- Enable HTTP2 push

**Option 4: Dynamic Library Loading**
Consider moving chart libraries to CDN for library distribution:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

**Priority:** 🟡 Medium - Address after TypeScript migration complete

**Current Status:** 
- ✅ Gzipped sizes are reasonable (147-280KB)
- ⚠️ Uncompressed is large but acceptable for component library
- 🎯 Target: Reduce to <200KB gzipped

---

### 8. ℹ️ Node Deprecation Warning (Storybook)
**Severity:** ℹ️ Info  
**Appears In:** storybook

#### Warning Details
```
(node:12037) [DEP0190] DeprecationWarning: Passing args to a child process 
with shell option true can lead to security vulnerabilities, as the arguments 
are not escaped, only concatenated.
```

#### Root Cause
Storybook's internal CLI passes arguments unsafely to child processes.

#### Impact
- 🟢 Works fine for development
- 🟠 Potential security issue if untrusted input is used
- Not an issue for local/trusted development

#### Solution
Upstream issue - Storybook team needs to fix. Can suppress with:
```bash
node --no-deprecation /path/to/storybook
```

**Priority:** 🟢 Low - Storybook team responsibility

---

### 9. 📦 Storybook Version Update Available
**Severity:** ℹ️ Info  
**Appears In:** storybook

#### Message
```
A new version (10.3.5) is available!
Upgrade now: npx storybook@latest upgrade
```

**Current:** 8.6.14  
**Latest:** 10.3.5

#### Solution (Optional)
```bash
npx storybook@latest upgrade
```

⚠️ **Warning:** Major version upgrade, test thoroughly before deploying.

**Priority:** 🟢 Low - Optional for features/performance

---

## Summary Table

| Warning | Category | severity | Blocker | Fix Priority | Effort |
|---------|----------|----------|---------|--------------|--------|
| Browserlist outdated | Dependency | Low | No | High | Low |
| Sass @import | SCSS | Medium | No | Medium | High |
| Sass global functions | SCSS | Medium | No | Medium | Medium |
| Mixed declarations | SCSS | Low | No | Low | Low |
| Vue macros imports | Code Quality | Info | No | Low | Low |
| Vue ::v-deep syntax | Vue 3 | Medium | No | Medium | Low |
| Asset size limits | Performance | Medium | No | Medium | High |
| Node deprecation | Node | Info | No | Low | N/A |
| Storybook version | Tooling | Info | No | Low | High |

---

## Recommended Action Plan

### 🚀 Phase 1: Quick Wins (This Week)
- [ ] Run `npx update-browserslist-db@latest`
- [ ] Remove unused Vue macro imports (bulk find & replace)
  
### 🟡 Phase 2: Important (Next 2 Weeks)
- [ ] Update `::v-deep` to `:deep()` syntax
- [ ] Implement code splitting for asset optimization
- [ ] Document SCSS migration strategy

### 🔴 Phase 3: Strategic (Q3 2026)
- [ ] Migrate SCSS to `@use/@forward` syntax
- [ ] Update Sass global functions to namespaced versions
- [ ] Evaluate Storybook 10.x upgrade

### 📊 Phase 4: Monitoring
- [ ] Watch for Dart Sass 3.0 release
- [ ] Monitor bundle size trends
- [ ] Track Vue 3.6 release notes

---

## Testing Status

| Test | Status | Time | Issues |
|------|--------|------|--------|
| `pnpm build` | ✅ PASS | 13s | 13 warnings (non-blocking) |
| `pnpm build-storybook` | ✅ PASS | 14s | Bundle size warnings |
| `pnpm serve` | ✅ PASS | ~5-10s startup | 10 warnings (non-blocking) |
| `pnpm storybook` | ✅ PASS | ~9s startup | Info messages only |

**Overall Status:** ✅ All systems operational

---

## Resources

- [Sass Migration Guide](https://sass-lang.com/blog/sass-3-0-0-is-coming/)
- [Vue 3.3+ Changes](https://vuejs.org/guide/extras/vue-and-web-components.html)
- [Browserslist Setup](https://github.com/browserslist/browserslist)
- [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
- [Storybook Upgrade Guide](https://storybook.js.org/migration-guides/7-to-8)

---

**Generated:** April 14, 2026  
**Last Updated:** Initial Report  
**Review Schedule:** Every 2 weeks or after dependency updates
