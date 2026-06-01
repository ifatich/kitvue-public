# kitvue-public - Vue 3 Design System

A modern Vue 3 component library built with Bootstrap for enterprise applications.

## Installation

Install from npm:

```bash
npm install kitvue-public
```

Or using yarn:

```bash
yarn add kitvue-public
```

Or using pnpm:

```bash
pnpm add kitvue-public
```

## Getting Started

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import KitVue from 'kitvue-public'
import 'kitvue-public/dist/kitvue-public.css'

const app = createApp(App)
app.use(KitVue)
app.mount('#app')
```

# Configuration
Add sass plugin

```
vue add style-resource-loader
```

On your vue config add

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['bootstrap-vue'],

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
})
```

Spesific on line 
```
transpileDependencies: ['bootstrap-vue'],

pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
    }
}
```

# Contributing

We welcome contributions! Here's how you can help:

## Development Setup

1. **Fork and Clone Repository**
   ```bash
   git clone https://github.com/ifatich/kitvue-public.git
  cd kitvue-public
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Development Commands**
   - Start dev server: `pnpm serve`
   - View Storybook: `pnpm storybook`
   - Build: `pnpm build`
   - Lint: `pnpm lint`

## Branch Strategy

- **`main`:** Stable release branch
- **`develop`:** Development branch for new features
- **`feature/*`:** Feature branches
- **`fix/*`:** Bug fix branches

3. **Buat Branch Baru dari `dev-update-component`**
   - **Untuk Penambahan Komponen Baru:**
     - Buat branch baru dengan penamaan `dev-add-(nama-komponen)`:
     - Contoh jika kamu melakukan penambahan komponen button : 
       ```bash
       git checkout -b dev-add-button
       ```

   - **Untuk Update atau Bug Fixing Komponen yang Ada:**
     - Buat branch baru dengan penamaan `dev-update-(nama-komponen)`:
     - Contoh jika kamu melakukan penambahan komponen button : 
       ```bash
       git checkout -b dev-update-button
       ```

4. **Mulai Pengembangan**
   - **Penambahan Komponen Baru:**
     - Tambahkan komponen baru sesuai dengan standar kode yang telah disepakati.
     - Pastikan untuk menulis komentar dan menambahkan dokumentasi yang relevan.
  
   - **Update atau Bug Fixing:**
     - Perbaiki bug atau update styling komponen yang ada.
     - Tambahkan komentar untuk memastikan perubahan tersebut.

5. **Commit dan Push**
   - Buat commit yang jelas dan deskriptif:
     ```bash
     git commit -m "Add Button component with primary and secondary variants"
     git push origin dev-add-button
     ```

6. **Buka Merge Request (PR)**
   - Setelah selesai, buka Merge Request ke branch `dev-update-component`.
   - Tambahkan deskripsi mengenai perubahan yang kamu lakukan.

7. **Code Review**
   - Merge Request kamu akan di-review oleh maintainer proyek.
   - Lakukan perbaikan berdasarkan umpan balik yang diberikan.

8. **Merge ke `dev-update-component`**
   - Setelah review selesai, request akan di-merge ke `dev-update-component`.

# Penting Diperhatikan 
## Penamaan Branch

- **Penambahan Komponen Baru:**
  - Branch name: `dev-add-(nama-komponen)`
  - Contoh: `dev-add-button`, `dev-add-modal`

- **Perbaikan atau Update Komponen yang Ada:**
  - Branch name: `dev-update-(nama-komponen)`
  - Contoh: `dev-update-button`, `dev-update-card`

### Praktik Terbaik

- **Coding Style:** Ikuti pedoman coding style yang ada dalam proyek ini.
- **Test:** Selalu tambahkan atau perbarui unit tests untuk memastikan kode yang kamu tambahkan atau ubah berfungsi dengan baik.
- **Dokumentasi:** Jangan lupa untuk menambahkan atau memperbarui dokumentasi jika kamu menambahkan fitur baru atau mengubah yang sudah ada.
- **Jaga Kualitas:** Semua kode harus melalui proses review dan testing sebelum di-merge ke branch `dev-update-component`.

---

Terima kasih telah berkontribusi ke `kitvue`! Kami sangat menghargai usaha dan waktu yang kamu luangkan untuk membuat proyek ini menjadi lebih baik.

## Love, Regard and Cheers. Happy Development 
### <3 Pegadaian Design <3
