<script setup>
import { ref, defineEmits, defineOptions, defineModel } from 'vue'
import Button from '@/components/Button/Button.vue';

defineOptions({ name: 'InputCamera', inheritAttrs: false })

const fileSourceChooserDialog = ref(false)
const cameraDialog = ref(false)
const video = ref()
const fileInput = ref()
const snappedCameraPict = ref()

// const props = defineProps(['imgCompressThreshold'])
const emit = defineEmits(['fileDropped', 'fileRemoved'])
const fileSrc = defineModel()

const handleSourceCameraClick = () => {
    cameraDialog.value = true
    fileSourceChooserDialog.value = false
    startCamera()
}

const handleSourceGalleryClick = () => {
    fileInput.value.click();
    fileSourceChooserDialog.value = false
}

const handleRemoveFileClick = () => {
    fileSrc.value = ''
    emit('fileRemoved')
}

const handleCameraSnap = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.value.videoWidth;
    canvas.height = video.value.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video.value, 0, 0, canvas.width, canvas.height);
    stopCamera()
    snappedCameraPict.value =  canvas.toDataURL('image/jpeg');
}

const handleCameraChosen = () => {
    emit('fileDropped')
}

const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.value.srcObject = stream
}

const stopCamera = async () => {
    const stream = video.value.srcObject;
    if(stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.value.srcObject = null;
    }
}

const handleCameraDialogValueChange = (isShowing) => {
    if(!isShowing) stopCamera()
}

const handleFilePicked = (event) => {
    const file = event.target.files[0];
    if(!file) return
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        fileSrc.value = reader.result;
    };
}

const handleRetakePhotoClick = () => {
    snappedCameraPict.value = ''
    startCamera()
}
</script>

<template>
    <div class="custom-file-upload">
        <b-button-close @click="handleRemoveFileClick" v-if="fileSrc" type="button" class="d-block remove-button btn-close" />
        <div v-if="!fileSrc" @click="fileSourceChooserDialog = true" class="custom-file-upload__box-input" >
            <span class="custom-file-upload__box-input-icon">
                <img src="../../assets/images/ico-image-upload.svg" alt="Upload Icon" />
            </span>
            <input type="file" ref="fileInput" style="display: none" @change="handleFilePicked" />
        </div>
        <div v-else class="custom-file-upload__box-preview d-block" id="box-preview-image">
            <img :src="fileSrc" alt="Captured Image" class="imgCaptured" />
        </div>
    </div>

    <BModal v-model="fileSourceChooserDialog" size="sm" title="Upload Foto KTP" ok-only no-stacking hide-footer>
        <div class="d-flex justify-content-center flex-column">
            <Button @click="handleSourceGalleryClick" class="mb-2" type="primary" label="Pilih File" />
            <Button @click="handleSourceCameraClick" type="primary" label="Kamera" />
        </div>
    </BModal>

    <BModal @update:model-value="handleCameraDialogValueChange" v-model="cameraDialog" class="inputCamera" title="Ambil Foto">
        <video v-if="!snappedCameraPict" ref="video" autoplay></video>
        <img v-else :src="snappedCameraPict" alt="Captured Image" />
        <div class="flex">
            <Button @click="handleCameraSnap" class="me-2 mb-2" type="primary" label="Ambil Gambar" v-if="!snappedCameraPict" />
            <template v-else>
                <Button @click="handleRetakePhotoClick" class="me-2 mb-2" type="neutral" label="Ambil Ulang Foto"  />
                <Button @click="handleCameraChosen" class="me-2 mb-2" type="primary" label="Gunakan Foto"  />
            </template>
        </div>
    </BModal>
</template>

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