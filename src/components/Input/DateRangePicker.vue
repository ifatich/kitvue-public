<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="date-range-picker">
            <InputSmallDate
                v-model="startDate"
                title="Dari"
                placeholder="DD / MM / YYYY"
            />
            <InputSmallDate
                v-model="endDate"
                title="Hingga"
                placeholder="DD / MM / YYYY"
            />
        </div>
        <div v-if="errorValidation" class="error-text mt-1">{{ errorValidation }}</div>
    </div>
  </template>
  
  <script setup>
    import InputSmallDate from './InputSmallDate.vue';
    import {
        computed
    } from 'vue';
  
    const startDate = defineModel('startDate') // eslint-disable-line
    const endDate = defineModel('endDate') // eslint-disable-line
  
    const errorValidation = computed(() => {
        if (startDate.value && endDate.value && startDate.value > endDate.value) {
            return "Tanggal akhir harus lebih besar dari tanggal awal";
        } else {
            return null;
        }
    })
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