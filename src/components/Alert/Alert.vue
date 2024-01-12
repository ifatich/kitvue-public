<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Dismissible Alert!
        </b-alert>

        <b-alert v-model="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
            <b-progress :value="dismissCountDown"></b-progress>
        </b-alert>

        <b-button @click="dismissCountDown=true" variant="info" class="m-1">
            Show alert with count-down timer
        </b-button>
        <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
            Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
        </b-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        },
    }
</script>