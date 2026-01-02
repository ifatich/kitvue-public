# Code Style Guide - Pegadaian UI Kit Vue

## 📖 Overview
Dokumen ini menjelaskan standar penulisan kode untuk proyek **Pegadaian UI Kit Vue**. Panduan ini membantu AI dan developer untuk memahami dan mengikuti conventions yang sudah diterapkan dalam proyek.

---

## 🏗️ Arsitektur Proyek

### Stack Teknologi
- **Vue.js**: 3.4.7 (Composition API dengan `<script setup>`)
- **Bootstrap**: 5.3.2
- **Bootstrap Vue Next**: 0.15.5
- **Build Tool**: Vue CLI 5.0.0
- **Styling**: SCSS/Sass
- **Package Manager**: npm/pnpm

### Struktur Folder
```
src/
├── components/          # Komponen UI reusable
│   ├── Input/          # Input components (InputText, InputSearchQR, etc.)
│   ├── Button/         # Button components
│   ├── Modal/          # Modal components
│   └── ...             # Komponen lainnya
├── assets/             # Static assets (images, icons, fonts)
├── router/             # Vue Router configuration
├── store/              # State management (jika ada)
└── stories/            # Storybook stories
```

---

## 🎨 Component Structure

### 1. Script Setup (Composition API)

#### ✅ **Standard Pattern**
```vue
<script setup>
    // 1. Import dependencies
    import { defineProps, defineModel, ref, computed, useAttrs } from 'vue';
    import ComponentName from './ComponentName.vue';
    
    // 2. Define model (jika menggunakan v-model)
    const modelValue = defineModel();
    
    // 3. Get attrs (jika perlu)
    const attrs = useAttrs();
    
    // 4. Define props
    const props = defineProps({
        error: {},
        label: {},
        color: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
    });
    
    // 5. Pass-through props computation (jika perlu)
    const passThroughProps = computed(() => ({
        ...attrs,
        ...props,
    }));
    
    // 6. Reactive variables
    const isOpen = ref(false);
    const selectedValue = ref('');
    
    // 7. Computed properties
    const computedValue = computed(() => {
        return someValue.value * 2;
    });
    
    // 8. Functions/Methods
    const handleClick = () => {
        isOpen.value = true;
    };
    
    function processData(data) {
        // Process logic here
        return data;
    }
</script>
```

#### 📌 **Props Definition Rules**
- Props tanpa type checking: `propName: {}`
- Props dengan type: Gunakan JavaScript types (`String`, `Number`, `Boolean`, `Array`, `Object`)
- Selalu berikan `default` value untuk props dengan type
- Boolean props default `false`
- String props default `'default'` atau string kosong `''`
- Gunakan camelCase untuk prop names

#### 📌 **Naming Conventions**
- **Variables**: camelCase (`isOpen`, `modelValue`, `facingMode`)
- **Functions**: camelCase dengan verb prefix (`handleClick`, `onDetect`, `switchCamera`)
- **Constants**: camelCase untuk local constants, UPPER_SNAKE_CASE untuk global constants
- **Computed**: camelCase dengan descriptive names (`passThroughProps`, `selectedBarcodeFormats`)

---

### 2. Template Structure

#### ✅ **Standard Pattern**
```vue
<template>
    <ComponentName class="custom-class-name" v-bind="passThroughProps" v-model="modelValue">
        <!-- Prefix slot (icon/text before main content) -->
        <template #prefix>
            <img style="margin-left: 12px;" src="../../assets/icon/icon-name.svg" />
        </template>
        
        <!-- Suffix slot (icon/text after main content) -->
        <template #suffix>
            <svg @click="handleAction()" style="margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <!-- SVG paths -->
            </svg>
        </template>
    </ComponentName>    

    <!-- Modal dengan Bootstrap Vue Next -->
    <BModal class="customModal" centered v-model="modalOpen" hide-footer>
        <template #header="{ close }">
            <svg :id="`${$attrs.id}_closeButton`" @click="close" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <!-- Close icon -->
            </svg>
            <div class="mx-2 fw-bolder">Modal Title</div>
        </template>

        <div class="modal-content-wrapper">
            <!-- Modal content here -->
        </div>
    </BModal>
</template>
```

#### 📌 **Template Rules**
- Gunakan **kebab-case** untuk component tags di template (`<ComponentName />` atau `<component-name />`)
- Self-closing tags untuk components tanpa children: `<Component />`
- Gunakan `v-bind="props"` untuk pass all props
- Event handlers menggunakan `@event` syntax: `@click="handler()"`
- Inline styles diperbolehkan untuk spacing sederhana: `style="margin-left: 12px;"`
- Complex styling harus di `<style>` section
- ID dinamis menggunakan template literals: `:id="\`${$attrs.id}_suffix\`"`

---

### 3. Styling (SCSS)

#### ✅ **Standard Pattern**
```vue
<style lang="scss">
    // Component wrapper class (BEM-like naming)
    .component-name {
        .child-element {
            property: value;
            
            &:hover:not(:disabled):not([readonly]):not(.is-invalid):not(.is-valid) {
                box-shadow: none;
            }
        }
    }

    // Modal styling
    .modal.customModal {
        border-width: 0px;

        .modal-dialog {
            margin: 0px;
            width: 100%;
            height: 100%;
            max-width: none;

            .modal-content {
                border-radius: 0px;
                background-color: var(--g-kit-broccoli-80);
                height: 100%;

                .modal-body {
                    background-color: var(--g-kit-black-80);
                    padding: 0px;
                    display: flex !important;
                    align-items: center !important;
                    overflow: hidden;
                }

                .modal-header {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    color: var(--g-kit-white);
                   
                    &::before {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background-image: url('../../assets/images/background.svg');
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                        background-position: center center;
                        opacity: 0.2;
                        z-index: -1;
                    }
                }
            }
        }   
    }
</style>
```

#### 📌 **SCSS Rules**
- **No scoped styles**: Gunakan `<style lang="scss">` tanpa `scoped`
- **CSS Variables**: Gunakan design tokens dengan prefix `--g-kit-*` untuk colors, fonts, spacing
  - Colors: `var(--g-kit-black-80)`, `var(--g-kit-white)`, `var(--g-kit-broccoli-80)`
  - Font sizes: `var(--g-kit-font-size-kappa)`, `var(--g-kit-font-size-sigma)`
  - Font weights: `var(--g-kit-font-weight-bold)`
- **Nesting**: Gunakan SCSS nesting untuk struktur yang clear
- **BEM-like naming**: Gunakan kebab-case untuk class names (`input-search-qr`, `camera-container`)
- **Units**: Gunakan `px` untuk fixed sizes, `%` untuk relative, `vh/vw` untuk viewport-based
- **Important**: Gunakan `!important` hanya jika diperlukan untuk override library styles

#### 📌 **Common Patterns**
```scss
// Absolute positioning with centering
.element {
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
}

// Flexbox centering
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

// Aspect ratio
.box {
    width: 100%;
    aspect-ratio: 16 / 10;
}

// Hover effects
.button {
    &:hover {
        cursor: pointer;
    }
}

// Pseudo-elements for overlays
&::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.2;
    z-index: -1;
}
```

---

## 🔧 Component Development Patterns

### 1. Props Pattern
```javascript
const props = defineProps({
    // Simple prop (any type)
    label: {},
    error: {},
    
    // Typed props with defaults
    color: {
        type: String,
        default: 'default'
    },
    type: {
        default: 'text' // String type inferred
    },
    disabled: {
        type: Boolean,
        default: false
    },
    
    // Props dengan validation
    variant: {
        type: String,
        default: 'default',
        validator(value) {
            return ['default', 'primary', 'secondary'].includes(value);
        }
    }
});
```

### 2. V-Model Pattern
```javascript
// Define model
const modelValue = defineModel();

// Usage in template
<input v-model="modelValue" />

// Update value
modelValue.value = newValue;
```

### 3. Pass-Through Props Pattern
```javascript
const attrs = useAttrs();

const passThroughProps = computed(() => ({
    ...attrs,
    ...props,
}));

// Usage in template
<ChildComponent v-bind="passThroughProps" />
```

### 4. Ref Pattern
```javascript
// Simple ref
const isOpen = ref(false);
const count = ref(0);

// Object ref
const user = ref({
    name: '',
    email: ''
});

// Access/update value
isOpen.value = true;
count.value++;
user.value.name = 'John';
```

### 5. Computed Pattern
```javascript
// Simple computed
const doubledValue = computed(() => count.value * 2);

// Computed from props
const formattedLabel = computed(() => {
    return props.label?.toUpperCase() || 'DEFAULT';
});

// Computed with complex logic
const filteredItems = computed(() => {
    return items.value.filter((item) => item.active === true);
});
```

### 6. Event Handler Pattern
```javascript
// Arrow function (preferred for simple handlers)
const handleClick = () => {
    isOpen.value = true;
};

// Regular function (untuk complex logic)
function processData(data) {
    const result = someComplexOperation(data);
    return result;
}

// Handler dengan parameters
const handleSelect = (item) => {
    selectedItem.value = item;
    emit('select', item);
};

// Async handlers
const handleSubmit = async () => {
    try {
        await submitData();
    } catch (error) {
        console.error(error);
    }
};
```

---

## 📦 Import Conventions

### Import Order
```javascript
// 1. Vue core imports
import { defineProps, defineModel, ref, computed, useAttrs } from 'vue';

// 2. Local component imports
import InputText from './InputText.vue';
import Button from '../Button/Button.vue';

// 3. Third-party library imports
import { QrcodeStream } from 'vue-qrcode-reader';
import { BModal, BSpinner } from 'bootstrap-vue-next';

// 4. Utility/Service imports (jika ada)
import { formatDate } from '@/utils/date';
```

### Import Path Rules
- **Relative imports** untuk components di folder yang sama: `./ComponentName.vue`
- **Parent folder**: `../FolderName/ComponentName.vue`
- **Assets**: `../../assets/icon/icon-name.svg` (relative path)
- **Alias @ untuk src**: Gunakan jika diperlukan, tapi relative path lebih diutamakan

---

## 🎯 Best Practices

### 1. Component Design
- ✅ **Single Responsibility**: Setiap component fokus pada satu fungsi
- ✅ **Reusability**: Design components agar bisa digunakan di berbagai context
- ✅ **Props over State**: Terima data via props, emit events untuk changes
- ✅ **Composition**: Compose complex components dari smaller components

### 2. Code Organization
- ✅ **Logical Grouping**: Group related code (imports, refs, computeds, functions)
- ✅ **Clear Naming**: Function names harus menjelaskan apa yang dilakukan
- ✅ **Comments**: Minimal comments, code should be self-explanatory
- ✅ **Formatting**: Consistent indentation (tabs), spacing

### 3. State Management
- ✅ **Local State**: Gunakan `ref()` untuk component-specific state
- ✅ **Props**: Untuk data dari parent
- ✅ **Computed**: Untuk derived state
- ✅ **Events**: Emit events untuk komunikasi ke parent

### 4. Performance
- ✅ **Computed vs Methods**: Gunakan computed untuk values yang di-cache
- ✅ **v-if vs v-show**: `v-if` untuk conditional rendering, `v-show` untuk toggle visibility
- ✅ **Key attribute**: Gunakan unique `:key` untuk v-for loops

---

## 🚨 Common Patterns & Examples

### Modal dengan Custom Styling
```vue
<template>
    <BModal class="customModalName" centered v-model="isOpen" hide-footer>
        <template #header="{ close }">
            <svg @click="close" width="24" height="24">
                <!-- Close icon -->
            </svg>
            <div class="mx-2 fw-bolder">Title</div>
        </template>
        
        <div class="content">
            <!-- Modal content -->
        </div>
    </BModal>
</template>

<style lang="scss">
.modal.customModalName {
    .modal-dialog {
        // Custom dialog styles
    }
    
    .modal-content {
        // Custom content styles
    }
}
</style>
```

### Input dengan Slots
```vue
<template>
    <InputText v-bind="passThroughProps" v-model="modelValue">
        <template #prefix>
            <img src="../../assets/icon/prefix-icon.svg" />
        </template>
        
        <template #suffix>
            <svg @click="handleAction()">
                <!-- Suffix icon -->
            </svg>
        </template>
    </InputText>
</template>
```

### Camera/QR Scanner Integration
```vue
<script setup>
import { QrcodeStream } from 'vue-qrcode-reader';

const cameraOpen = ref(false);
const facingMode = ref('environment'); // 'environment' or 'user'

const barcodeFormats = ref({
    qr_code: true,
    // Other formats set to false
});

const selectedBarcodeFormats = computed(() => {
    return Object.keys(barcodeFormats.value).filter((format) => 
        barcodeFormats.value[format]
    );
});

function onDetect(detectedCodes) {
    modelValue.value = detectedCodes.map((code) => code.rawValue)[0];
    cameraOpen.value = false;
}

function paintBoundingBox(detectedCodes, ctx) {
    for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode;
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#007bff';
        ctx.strokeRect(x, y, width, height);
    }
}

const switchCamera = () => {
    facingMode.value = facingMode.value === 'environment' ? 'user' : 'environment';
};
</script>

<template>
    <qrcode-stream
        :constraints="{ facingMode }" 
        @detect="onDetect"
        :formats="selectedBarcodeFormats"
        :track="paintBoundingBox" 
    />
</template>
```

---

## 🎨 Design System Variables

### Colors
```scss
// Pegadaian color palette (prefix: --g-kit-)
--g-kit-white
--g-kit-black-80
--g-kit-broccoli-80
// Add more as defined in design system
```

### Typography
```scss
// Font sizes
--g-kit-font-size-kappa
--g-kit-font-size-sigma

// Font weights
--g-kit-font-weight-bold
```

### Usage Example
```scss
.title {
    color: var(--g-kit-black-80);
    font-size: var(--g-kit-font-size-kappa);
    font-weight: var(--g-kit-font-weight-bold);
}
```

---

## 📝 Code Comments

### Commenting Style
```javascript
// Minimal comments - code should be self-explanatory

// ✅ Good: Comment explains WHY, not WHAT
// Watch for changes in modelValue prop
watch(() => props.modelValue, (newVal) => {
    // ...
});

// ❌ Bad: Comment repeats what code does
// Set isOpen to true
isOpen.value = true;

// ✅ Good: Comment for complex logic
// Format number with space delimiter every 4 digits
const formatNumber = (number) => {
    if (!number) return '';
    let cleanNumber = number.replace(/\D/g, '');
    return cleanNumber.replace(/(\d{4})(?=(\d))/g, '$1 ');
};
```

---

## 🔍 Testing & Debugging

### Console Logging
```javascript
// Development logging
function onDetect(detectedCodes) {
    console.log(detectedCodes); // Log untuk debugging
    modelValue.value = detectedCodes.map((code) => code.rawValue)[0];
}
```

### Error Handling
```javascript
// Graceful error handling
const loadData = async () => {
    try {
        const data = await fetchData();
        items.value = data;
    } catch (error) {
        console.error('Failed to load data:', error);
        // Handle error appropriately
    }
};
```

---

## 🚀 Integration dengan AI

### Tips untuk AI
1. **Follow the patterns**: Gunakan patterns yang sudah ada di codebase
2. **Consistent naming**: Ikuti naming conventions (camelCase untuk JS, kebab-case untuk CSS)
3. **Component composition**: Reuse existing components, buat components baru jika diperlukan
4. **Props definition**: Selalu definisikan props dengan clear structure
5. **Styling**: Gunakan CSS variables dan SCSS nesting
6. **Bootstrap Vue Next**: Gunakan components dari bootstrap-vue-next (BModal, BSpinner, etc.)
7. **Vue 3 Composition API**: Selalu gunakan `<script setup>` syntax
8. **No Options API**: Jangan gunakan Options API (export default with data, methods, computed)

### AI Code Generation Checklist
- [ ] Gunakan `<script setup>` syntax
- [ ] Import Vue functions dari 'vue'
- [ ] Props menggunakan `defineProps()`
- [ ] V-model menggunakan `defineModel()`
- [ ] Reactive variables menggunakan `ref()`
- [ ] Derived state menggunakan `computed()`
- [ ] Event handlers menggunakan arrow functions atau regular functions
- [ ] Template menggunakan proper kebab-case untuk components
- [ ] Styling menggunakan `<style lang="scss">` tanpa scoped
- [ ] CSS menggunakan variables dengan prefix `--g-kit-*`
- [ ] Class names menggunakan kebab-case
- [ ] Import paths menggunakan relative paths

---

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/)
- [Bootstrap Vue Next Documentation](https://bootstrap-vue-next.github.io/bootstrap-vue-next/)
- [Vue QR Code Reader](https://gruhn.github.io/vue-qrcode-reader/)

---

## 🤝 Contributing

Saat berkontribusi atau membuat component baru:
1. Ikuti semua patterns dan conventions dalam guide ini
2. Test component secara menyeluruh
3. Pastikan responsive design
4. Dokumentasikan props dan events yang tersedia
5. Buat story di Storybook untuk component baru

---

**Last Updated**: January 2026
**Version**: 0.1.13-5
