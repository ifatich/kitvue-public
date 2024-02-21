<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="date-range-picker">
            <InputSmallDate v-model="internalStartDate" title="Dari" placeholder="DD / MM / YYYY"
                @update:modelValue="updateStartDate" />
            <InputSmallDate v-model="internalEndDate" title="Hingga" placeholder="DD / MM / YYYY"
                @update:modelValue="updateEndDate" />
        </div>
        <div v-if="endDateError" class="error-text mt-1">{{ endDateError }}</div>
    </div>
</template>

<script setup>
    import InputSmallDate from './InputSmallDate.vue';
    import {
        ref
    } from 'vue';

    const internalStartDate = ref(null);
    const internalEndDate = ref(null);
    const endDateError = ref(null);

    const updateStartDate = (value) => {
        internalStartDate.value = value;
        validateEndDate();
    };

    const updateEndDate = (value) => {
        internalEndDate.value = value;
        validateEndDate();
    };

    const validateEndDate = () => {
        if (internalStartDate.value && internalEndDate.value && internalStartDate.value > internalEndDate.value) {
            endDateError.value = "Tanggal akhir harus lebih besar dari tanggal awal";
        } else {
            endDateError.value = null;
        }
    };
</script>
<style scoped>
    .form-label {
        display: none;
    }

    .date-range-picker {
        display: flex;
        gap: 16px;
    }
</style>