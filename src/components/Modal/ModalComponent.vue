<script setup>
import { defineOptions, defineProps, defineModel } from 'vue'
import { BModal } from 'bootstrap-vue-next'

defineOptions({ name: 'ModalComponent' })

const props = defineProps(['title'])

const model = defineModel()
</script>

<template>
  <div>
    <BModal v-model="model" :title="props.title">
      <template #modal-header="{ close }">
        <Button class="btn btn-outline-danger" @click="close()"
          >Close Modal</Button
        >
      </template>

      <template #default="{}">
        <slot name="body"></slot>
      </template>

      <template v-slot:footer="{ hide }">
        <slot name="footer" :hide="hide"></slot>
      </template>
    </BModal>
  </div>
</template>
