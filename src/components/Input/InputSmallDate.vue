<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="group-input">
        <label v-if="title" :for="id" class="form-label" :class="{ 'hide': !title }">
            {{ title }}
            <img v-if="icon && iconLabel" :src="iconLabel || '../../assets/images/world.svg'" />
        </label>
        <div class="input-group custom-input-group-icon">
            <div class="input-group-icon">
                <img v-if="icon" :src="icon || '../../assets/images/world.svg'" :class="{ 'hide': !icon }" />
            </div>
            <input type="date" :class="['form-control', classes]" :id="id" :aria-label="id" :aria-describedby="id"
                :disabled="disabled" :required="required"
                :placeholder="['Pilih ' + (title || placeholder || '').toLowerCase()]" @input="handleInput" />
        </div>
        <div :class="{ 'error-text': localError, 'mt-1': localError }" v-if="localError">
            Masukkan {{ (title || '').toLowerCase() }}
        </div>
    </div>
</template>

<script>
    import {
        computed,
        ref,
        watch
    } from "vue";

    export default {
        name: "InputSmallDate",
        props: {
            title: {
                type: String,
                default: "date",
            },
            iconLabel: {
                type: String,
                default: null,
            },
            icon: {
                type: String,
                default: null,
            },
            iconRight: {
                type: String,
                default: null,
            },
            placeholder: {
                type: String,
                default: "placeholder . . .",
            },
            value: {
                type: String,
                default: "",
            },
            required: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            error: {
                type: Boolean,
                default: false,
            },
            errorMessage: {
                type: String,
                default: "",
            },
            type: {
                type: String,
                default: "text",
            },
            id: {
                type: String,
                default: "inputField",
            },
        },
        setup(props, {
            emit
        }) {
            const classes = computed(() => ({
                'is-invalids': props.error || (props.required && !props.value),
            }));

            const localError = ref(false);

            watch(
                () => props.value,
                (newVal) => {
                    if (props.required) {
                        localError.value = newVal.trim() === "";
                    }
                }
            );

            const handleInput = (event) => {
                localError.value = props.required && event.target.value.trim() === "";
                emit("input", event.target.value);
            };

            return {
                classes,
                localError,
                handleInput,
            };
        },
    };
</script>

<style scoped>
/* Gaya untuk tampilan kalender */
.input-group input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* Membalikkan warna ikon */
  cursor: pointer;
}

/* Gaya untuk kalender datepicker (hanya berfungsi di Chrome dan Safari) */
.input-group input[type="date"]::-webkit-calendar-picker-popup {
  position: absolute;
  transform: translateY(100%);
  max-height: 200px;
  width: 100%;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}

/* Gaya untuk judul bulan dan tahun pada kalender */
.input-group input[type="date"]::-webkit-calendar-picker-indicator {
    font-family: NunitoSans-SemiBold;
    font-size: 1.5rem;
    line-height: var(--g-kit-line-height-sigma);
    font-weight: var(--g-kit-font-weight-normal);
    color: #ff0000;
}

/* Gaya untuk hari dalam kalender */
.input-group input[type="date"]::-webkit-calendar-picker-popup-button {
  color: #333;
}

/* Gaya untuk hari yang dipilih */
.input-group input[type="date"]::-webkit-calendar-picker-popup-button[aria-selected="true"] {
  background-color: #e96666;
  color: white;
}

/* Gaya untuk tombol navigasi kalender */
.input-group input[type="date"]::-webkit-calendar-picker-popup-button[aria-controls="month-spinner"], 
.input-group input[type="date"]::-webkit-calendar-picker-popup-button[aria-controls="year-spinner"] {
  color: #333;
}

/* Gaya untuk tombol navigasi kalender yang dihover */
.input-group input[type="date"]::-webkit-calendar-picker-popup-button:hover {
  background-color: #f2f2f2;
}
</style>
