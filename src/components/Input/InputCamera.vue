<template>
    <div class="custom-file-upload">
        <b-button-close @click="remove" v-if="capturedImage || imgFile" type="button" :class="{ 'd-block remove-button btn-close': capturedImage || imgFile }" />
        <div class="custom-file-upload__box-input" v-if="capturedImage || imgFile === null">
            <span class="custom-file-upload__box-input-icon">
                <img src="../../assets/images/ico-image-upload.svg" alt="" :class="{ hide: capturedImage || imgFile }" />
            </span>
            <input @change="handleFileChange" @click="modal = !modal" label="Launch" id="gallery-photo-add"
                class="custom-file-upload__box-input-file" ref="fileInput" multiple accept="image/*" required />
        </div>
        <div class="custom-file-upload__box-preview d-block" id="box-preview-image" v-if="capturedImage || imgFile">
            <img v-if="capturedImage || imgFile" :src="capturedImage || imgFile" alt="Captured Image" class="imgCaptured" />
        </div>
    </div>

    <BModal v-if="imgFile === null" v-model="modal" size="sm" :title="label || 'Upload Foto KTP'" ok-only no-stacking hide-footer>
        <div class="d-flex justify-content-center flex-column">
            <Button @click="openFilePicker" class="mb-2" type="primary" label="Pilih File" />
            <input type="file" ref="fileInput" style="display: none" @change="imgFileChange" />
            <Button @click="modal2 = !modal2" type="primary" label="Kamera" />
        </div>
    </BModal>

    <BModal v-model="modal2" class="inputCamera" title="Ambil Foto">
        <video ref="video" :style="{ display: videoDisplay }" autoplay></video>
        <img v-if="capturedImage" :src="capturedImage" alt="Captured Image" />
        <div class="flex">
            <Button @click="captureImage" class="me-2 mb-2" type="primary" label="Ambil Gambar" v-if="capturedImage === null" />
            <Button @click="retryCapture" class="me-2 mb-2" type="neutral" label="Ambil Ulang Foto" v-if="capturedImage" />
            <Button @click="modalClose" class="me-2 mb-2" type="primary" label="Gunakan Foto" v-if="capturedImage" />
        </div>
    </BModal>
</template>

<script setup>
    import { ref } from 'vue';

    const modal = ref(false);
    const fileInput = ref(null);

    const modal2 = ref(false);
    const modalClose = () => {
        modal.value = false;
        modal2.value = false;
    };
</script>

<script>
    import Button from '../Button/Button.vue';

    export default {
        components: {
            Button,
        },
        props: {
            label: {
                type: String
            }
        },
        data() {
            return {
                videoStream: null,
                videoDisplay: 'block',
                capturedImage: null,
                uploadedFilePath: null,
                previewImage: null,
                imgFile: null,
                file: null,
            };
        },
        methods: {
            openFilePicker() {
                this.$refs.fileInput.click();
            },

            imgFileChange(event) {
                const file = event.target.files[0];
                if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.imgFile = reader.result;
                    const imgName = this.generateFileName();
                    this.$emit('generateFileName', imgName);
                    this.$emit("imgFile", this.imgFile);
                };
                reader.readAsDataURL(file);
                }
            },

            // Addon
            imagesPreview1() {
                const input = this.$refs.fileInput;
                const files = input.files;

                if (files && files[0]) {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                        this.previewImage = e.target.result;
                    };

                    reader.readAsDataURL(files[0]);
                }
            },
            handleFileChange() {
                this.previewImage = null;

                if (this.files && this.files[0]) {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                        this.capturedImage = e.target.result;
                    };

                    reader.readAsDataURL(this.files[0]);
                }
            },
            async startCamera() {
                try {
                    const constraints = {
                        video: true
                    };
                    const stream = await navigator.mediaDevices.getUserMedia(constraints);
                    this.$refs.video.srcObject = stream;
                    this.videoStream = stream;
                } catch (error) {
                    console.error('Error accessing camera:', error);
                }
            },
            captureImage() {
                const canvas = document.createElement('canvas');
                canvas.width = this.$refs.video.videoWidth;
                canvas.height = this.$refs.video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(this.$refs.video, 0, 0, canvas.width, canvas.height);

                this.capturedImage = canvas.toDataURL('image/jpeg');
                this.videoDisplay = 'none';

                const fileName = this.generateFileName();
                this.$emit('generateFileName', fileName);
                this.$emit("capturedImage", this.capturedImage);
            },
            retryCapture() {
                this.capturedImage = null;
                this.videoDisplay = 'block';
            },
            generateFileName() {
                const date = new Date();
                const dateString = date.toISOString().replace(/[-:.]/g, '');
                return `captured_image_${dateString.slice(0, 16)}.jpg`;
            },
            remove() {
                this.capturedImage = null;
                this.imgFile = null;
                this.videoDisplay = 'block';
            },
        },
        mounted() {
            this.startCamera();
        },
        watch: {
            file: {
                handler(newFile) {
                    if (!newFile) {
                        this.previewImage = null;
                    }
                },
                immediate: true,
            },
            previewImage(newPreviewImage) {
                if (newPreviewImage) {
                    this.$emit("input", null);
                }
            },
        },
    };
</script>

<style lang="scss">
    .inputCamera {

        .modal {
            width: unset;
            height: unset;
        }

        .modal-body {
            img,
            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: relative;
            }

            .flex {
                margin-top: 1rem;
                display: flex;
                justify-content: center;

                .btn {
                    width: -webkit-fill-available;
                }
            }
        }

        .modal-footer {
            display: none;
        }
    }

    body.modal-open {
        overflow: overlay !important;
        height: 100vh;
    }

    .hide {
        opacity: 0;
    }

    .custom-file-upload__box-preview {
        z-index: 1;
    }

    .imgCaptured {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }

    .remove-button {
        position: absolute;
        top: 4px;
        right: 4px;
        background-color: #ae1e22 !important;
        color: white !important;
        border: none;
        border-radius: 50% !important;
        cursor: pointer;
        font-weight: bold;
        opacity: 1 !important;
        z-index: auto;
    }

    @media (max-width:576px) {
        .inputCamera {
            .modal-fullscreen {
                width: 100vw;
            }
    
            .modal {
                width: fit-content;
                height: fit-content;
                margin: 0px;
            }
    
            .modal-body {
                padding: 0px;
    
                img,
                video {
                    width: 100vw;
                    height: 100vh;
                    object-fit: cover;
                    position: fixed;
                }
    
                .flex {
                    padding: 1rem;
                    justify-content: center;
                    flex-direction: column;
                    width: 100%;
                    position: fixed;
                    bottom: 40px;
                    .btn {
                        width: 100%;
                    }
                }
            }
    
            .modal-header,
            .modal-footer {
                display: none;
            }
        }
    }
</style>