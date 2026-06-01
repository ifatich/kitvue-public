# kitvue-public - Vue 3 Design System

A modern Vue 3 component library built with Bootstrap and Tailwind utilities for enterprise applications at Pegadaian.

---

## 🚀 Installation

Install the library and its required peer dependency (`jquery`) using your preferred package manager:

```bash
# Using pnpm (Recommended)
pnpm add kitvue-public jquery

# Using npm
npm install kitvue-public jquery

# Using yarn
yarn add kitvue-public jquery
```

> [!NOTE]
> `jquery` is a required peer dependency for certain legacy Bootstrap dropdowns and overlay components.

---

## 🛠️ Getting Started

You can integrate `kitvue-public` in two ways:

### Option A: Global Registration (Plugin)
Registers all 80+ components globally in your Vue app so you can use them anywhere without importing them individually.

```javascript
// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import PegadaianUIKit from 'kitvue-public'
import 'kitvue-public/style.css'

const app = createApp(App)
app.use(PegadaianUIKit)
app.mount('#app')
```

Then in any Vue file:
```vue
<template>
  <Button label="Simpan Transaksi" type="primary" size="lg" />
  <Badge label="Disetujui" type="primary" />
</template>
```

### Option B: Individual Tree-shakeable Imports (Recommended)
Allows you to import only the components you need, optimizing your final production build size.

```vue
<script setup>
import { Button, Badge, CardProduct } from 'kitvue-public'
import 'kitvue-public/style.css'
</script>

<template>
  <Button label="Simpan Transaksi" type="primary" size="lg" />
  <Badge label="Disetujui" type="primary" />
  <CardProduct title="Gadai Emas Premium" body="Proses cair cepat 15 menit..." />
</template>
```

---

## ⚡ Vite Production Build Configuration

Due to pre-compiled nested pseudo-elements in certain Bootstrap style overrides (e.g. `.list-group-item::before .active`), modern CSS minifiers like **LightningCSS** (default in Vite 6+) will fail to build. 

To ensure your production build compiles seamlessly, **disable CSS minification** or configure it to use **esbuild** in your `vite.config.ts`:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Disable CSS minifier to bypass LightningCSS pseudo-element parser errors
    cssMinify: false
  }
})
```

---

## 🏗️ Information Architecture (Component Index)

Here is a quick reference guide to the key components exported by this library:

| Category | Component Name | Description |
| :--- | :--- | :--- |
| **Buttons & Badges** | `Button`, `ButtonSize`, `Badge`, `AddAmount` | Interactive actions, spinners, counters, and status badges. |
| **Forms & Fields** | `Input` *(SmallText)*, `InputText`, `TextArea`, `InputPhone`, `InputNIK` | Standard text, numbers, phones, and NIK inputs with error handling. |
| **Pickers & Dropdowns** | `DatePicker`, `DateRangePicker`, `Dropdown`, `InputDropdownMultiple` | Date range inputs, calendar dropdowns, and selectable menus. |
| **Overlays & Modals** | `ModalComponent`, `CustomModal`, `BottomSheet` | AlertVarian containers, confirmation slide-ins, and popups. |
| **Cards** | `CardProduct`, `CardAccount`, `CardArticle`, `CardPromoCode` | Information tiles, tabungan emas indicators, and click-to-copy code blocks. |
| **Data Display** | `DataTable`, `TableSticky`, `ListOrdered`, `ListGroupUnordered` | Dynamic grids, pagination modules, list bullets, and stepper indicators. |
| **Navigation** | `Breadcrumb`, `NavbarCorporate`, `BerandaHeader`, `SideNavCMS` | Link navigators, headers, sidebars, and tab groups. |

---

## 🔧 Legacy Vue CLI Configuration

If you are using `@vue/cli` (Webpack), add `style-resources-loader` and configure `vue.config.js` to transpile dependency styles properly:

```javascript
// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['bootstrap-vue-next'],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
})
```

---

## 🤝 Contributing

We welcome contributions to make the Pegadaian Design System even stronger!

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ifatich/kitvue-public.git
   cd kitvue-public
   ```
2. **Install dependencies**:
   ```bash
   pnpm install
   ```
3. **Common CLI Commands**:
   * Start local Storybook environment: `pnpm storybook`
   * Compile and build library bundles: `pnpm build`
   * Lint and style checks: `pnpm lint`

### Naming Conventions for Branches

* **Add New Components**: `dev-add-(nama-komponen)` (e.g. `dev-add-tooltip`)
* **Bug Fix / Update Component**: `dev-update-(nama-komponen)` (e.g. `dev-update-button`)

---

## Love, Regard and Cheers. Happy Development!
💚 **Pegadaian Design System Team** 💚
