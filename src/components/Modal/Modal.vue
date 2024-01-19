<template>
    <div>
        <Button @click="openModal" type="primary" size="md" :label="btnValue" />

        <b-modal v-model="modalOpen" :title="title">
            <template #modal-header="{ close }">
                <Button class="btn btn-outline-danger" @click="close()">Close Modal</Button>
            </template>

            <template #default="{ }">
                <slot name="body"></slot>
            </template>

            <template v-slot:footer="{ hide }">
                <slot name="footer" :hide="hide"></slot>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import Button from '../Button/Button.vue';
    import { BModal } from 'bootstrap-vue-next';

    export default {
        name: 'ModalComponent',
        props: {
            title: {
                type: String,
                default: "test header"
            },
            btnValue: {
                type: String,
                default: "test header"
            }
        },
        components: {
            Button,
        },
        data() {
            return {
                modalOpen: false,
            };
        },
        methods: {
            openModal() {
                this.modalOpen = true;
            },
        },
    };
</script>