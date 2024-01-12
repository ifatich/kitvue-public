<template>
    <div class="home p-5">
        <div class="container">
            <div class="row">

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h5>Button</h5>
                            <p class="mb-0"><code>&lt;Button type="primary" size="md" label="Button"&gt;</code></p>
                        </div>
                        <div class="card-body">
                            <Button class="me-2 mb-2" type="primary" size="md" label="Button Primary" />
                            <Button class="me-2 mb-2" type="secondary" size="md" label="Button Seccondary" />
                            <Button class="me-2 mb-2" type="neutral" size="md" label="Button Neutral" />
                            <Button class="me-2 mb-2" type="tertiary" size="md" label="Button Tertiary" />
                            <Button class="me-2 mb-2" type="link" size="md" label="Button Link" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h5>Button</h5>
                            <p class="mb-0"><code>&lt;Alert color="primary" label="md" &gt;</code></p>
                        </div>
                        <div class="card-body">
                            <Alert color="success" label="Lorem ipsum dolor sit amet" />
                            <Alert color="info" label="Lorem ipsum dolor sit amet" />
                            <Alert color="warning" label="Lorem ipsum dolor sit amet" />
                            <Alert color="link" label="Lorem ipsum dolor sit amet" />
                            <Alert color="danger" label="Lorem ipsum dolor sit amet" />

                            <AlertVarian />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h5>Button</h5>
                            <p class="mb-0"><code>&lt;Button type="primary" size="md" label="Button"&gt;</code></p>
                        </div>
                        <div class="card-body">


                            <InputSmallText title="Test Judul" 
                                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" 
                                iconLabel="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" 
                                iconRight="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" 
                                required="" />
                            <InputNominal title="Nominal" required=""/>
                            <InputPersen title="Persentase DP" required=""/>
                            <InputTextArea />

                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5>Button</h5>
                                    <p class="mb-0"><code>&lt;Button type="primary" size="md" label="Button"&gt;</code></p>
                                </div>
                                <div class="card-body">
                                    <Breadcrumb :items="['Beranda 1', 'Produk 2', 'Layanan Jasa 3', 'Safe Deposit Box 4']" />
                                </div>
                            </div>
                        </div>
        
                        <div class="col-lg-12 mt-4">
                            <div class="card">
                                <div class="card-header">
                                    <h5>Button</h5>
                                    <p class="mb-0"><code>&lt;Button type="primary" size="md" label="Button"&gt;</code></p>
                                </div>
                                <div class="card-body">
                                    <AddAmount />
                                </div>
                            </div>
                        </div>
        
                        <div class="col-lg-12 mt-4">
                            <div class="card">
                                <div class="card-header">
                                    <h5>Button</h5>
                                    <p class="mb-0"><code>&lt;Button type="primary" size="md" label="Button"&gt;</code></p>
                                </div>
                                <div class="card-body">
                                    <Dropdown />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                

            </div>
        </div>
    </div>
</template>

<script>
    import Button from './Button/Button.vue';
    import Alert from './Alert/AlertVarian.vue';
    import AlertVarian from './Alert/Alert.vue';
    import Breadcrumb from './Breadcrumb/Breadcrumb.vue'

    import AddAmount from './AddAmount/AddAmountCounter.vue'
    import InputSmallText from './Input/InputSmallText.vue'
    import InputNominal from './Input/InputRupiah.vue'
    import InputPersen from './Input/InputPersen.vue'
    import InputTextArea from './Input/InputTextArea.vue'
    import Dropdown from './Dropdown/Dropdown.vue'

    export default {
        name: 'App',
        components: {
            Button,
            Alert,
            AlertVarian,
            Breadcrumb,
            AddAmount,
            InputSmallText,
            InputNominal,
            InputTextArea,
            InputPersen,
            Dropdown
        }
    }
</script>