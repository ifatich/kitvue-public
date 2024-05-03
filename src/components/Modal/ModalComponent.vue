<script setup>
import { defineOptions, defineProps, defineModel } from 'vue'
import { BModal, BButton } from 'bootstrap-vue-next'

defineOptions({ name: 'ModalComponent' })

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  persistent: {
    type: Boolean,
    default: true
  },
  centered: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()
</script>

<template>
  <div>
    <BModal v-model="model" :centered="props.centered" :title="props.title" :noCloseOnBackdrop="persistent" :noCloseOnEsc="persistent">
      <template #modal-header="{ close }">
        <BButton class="btn btn-outline-danger" @click="close()"
          >Close Modal</BButton>
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
