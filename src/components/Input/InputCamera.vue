<script setup>
import { ref, defineEmits, defineOptions, defineModel, defineProps } from 'vue'
import Button from '../Button/Button.vue'
import { BModal } from 'bootstrap-vue-next'

defineOptions({ name: 'InputCamera', inheritAttrs: false })

const fileSourceChooserDialog = ref(false)
const cameraDialog = ref(false)
const video = ref()
const fileInput = ref()
const snappedCameraPict = ref()
const imgElement = ref()
const cameraIsReady = ref(false)

const props = defineProps({
    compressionMaxKb: {
        required: false,
        default: 1024
    },
    title: {
      type: String,
      default: 'Upload Foto'
    },
    error: {},
    uniqueKey: {}
})
const emit = defineEmits(['fileDropped', 'fileRemoved', 'errorPermission'])
const fileSrc = defineModel()

const generateRandomFileName = (length = 64, originalExtension = 'png') => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return `${Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('')}.${originalExtension}`
}

const handleSourceCameraClick = () => {
  cameraDialog.value = true
  fileSourceChooserDialog.value = false
  startCamera()
}

const handleSourceGalleryClick = () => {
  fileInput.value.click()
  fileSourceChooserDialog.value = false
}

const handleRemoveFileClick = () => {
  fileSrc.value = ''
  emit('fileRemoved', props.uniqueKey)
}

const handleCameraSnap = () => {
  const canvas = document.createElement('canvas')
  canvas.width = video.value.videoWidth
  canvas.height = video.value.videoHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(video.value, 0, 0, canvas.width, canvas.height)
  stopCamera()
  snappedCameraPict.value = canvas.toDataURL('image/jpeg')
}

const blobToDataUrl = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => resolve(event.target.result)
    reader.onerror = (error) => reject(error)

    reader.readAsDataURL(blob)
  })

const handleCameraChosen = async () => {
  fileSrc.value = snappedCameraPict.value
  const compressedImg = await compressImg(
    props.compressionMaxKb,
    snappedCameraPict.value
  )
  emit('fileDropped', compressedImg, props.uniqueKey)
  cameraDialog.value = false
  snappedCameraPict.value = ''
}

const startCamera = async () => {
  try {
    cameraIsReady.value = false
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.value.srcObject = stream
    cameraIsReady.value = true
  } catch (error) {
    emit('errorPermission', error)
    cameraIsReady.value = false
    cameraDialog.value = false
  }
}

const stopCamera = async () => {
  const stream = video.value.srcObject
  if (stream) {
    const tracks = stream.getTracks()
    tracks.forEach((track) => track.stop())
    video.value.srcObject = null
  }
}

const handleCameraDialogValueChange = (isShowing) => {
  if (!isShowing) stopCamera()
}

const handleFilePicked = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = async () => {
    fileSrc.value = reader.result
    const compressedImg = await compressImg(
      props.compressionMaxKb,
      reader.result
    )
    emit('fileDropped', compressedImg, props.uniqueKey)
  }
}

const handleRetakePhotoClick = () => {
  snappedCameraPict.value = ''
  startCamera()
}

const compressImg = (maxSize, dataUrl, quality = 0.7) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.src = dataUrl

    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0, image.width, image.height)

      canvas.toBlob(
        async function (blob) {
          if (blob.size / 1024 <= maxSize || quality <= 0.1) {
            const compressedImgFile = new File(
              [blob],
              generateRandomFileName(),
              {
                type: 'image/png'
              }
            )
            resolve(compressedImgFile)
          } else {
            const dataUrl = await blobToDataUrl(blob)
            compressImg(maxSize, dataUrl, quality - 0.1)
              .then(resolve)
              .catch(reject)
          }
        },
        'image/jpeg',
        quality
      )
    }
  })
</script>

<template>
  <div>
    <div class="custom-file-upload">
      <Button
        @click="handleRemoveFileClick"
        v-if="fileSrc"
        type="button"
        class="d-block remove-button btn-close"
        :id="`${$attrs.id}_removeFile`"
      />
      <div
        v-if="!fileSrc"
        @click="fileSourceChooserDialog = true"
        class="custom-file-upload__box-input"
        :id="`${$attrs.id}_openDialogChooser`"
      >
        <span class="custom-file-upload__box-input-icon">
          <img
            src="../../assets/images/ico-image-upload.svg"
            alt="Upload Icon"
          />
        </span>
        <input
          type="file"
          ref="fileInput"
          style="display: none"
          accept="image/*"
          @change="handleFilePicked"
          :id="$attrs.id"
        />
      </div>
      <div
        v-else
        class="custom-file-upload__box-preview d-block"
        id="box-preview-image"
      >
        <img
          ref="imgElement"
          :src="fileSrc"
          alt="Captured Image"
          class="imgCaptured"
          :id="`${$attrs.id}_img`"
        />
      </div>
    </div>
    <div class="error-text" v-if="props.error">
      {{ props.error }}
    </div>
  </div>

  <BModal
    v-model="fileSourceChooserDialog"
    size="sm"
    :title="title"
    ok-only
    no-stacking
    hide-footer
  >
    <div class="d-flex justify-content-center flex-column">
      <Button
        @click="handleSourceGalleryClick"
        class="mb-2"
        type="primary"
        label="Pilih File"
        :id="`${$attrs.id}_file`"
      />
      <Button
      :id="`${$attrs.id}_camera`"
      @click="handleSourceCameraClick" type="primary" label="Kamera" />
    </div>
  </BModal>

  <BModal
    @update:model-value="handleCameraDialogValueChange"
    v-model="cameraDialog"
    class="inputCamera"
    title="Ambil Foto"
  >
    <video v-if="!snappedCameraPict" ref="video" autoplay></video>
    <img v-else :src="snappedCameraPict" alt="Captured Image" />
    <div class="flex">
      <Button
        @click="handleCameraSnap"
        class="me-2 mb-2"
        type="primary"
        label="Ambil Gambar"
        v-if="!snappedCameraPict"
        :disabled="!cameraIsReady"
        :id="`${$attrs.id}_cameraSnap`"
      />
      <template v-else>
        <Button
          @click="handleRetakePhotoClick"
          class="me-2 mb-2"
          type="neutral"
          label="Ambil Ulang Foto"
        :id="`${$attrs.id}_cameraRetake`"
        />
        <Button
          @click="handleCameraChosen"
          class="me-2 mb-2"
          type="primary"
          label="Gunakan Foto"
          :id="`${$attrs.id}_cameraChoose`"
        />
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
  background-color: #58585b !important;
  color: white !important;
  border: none;
  border-radius: 50% !important;
  cursor: pointer;
  font-weight: bold;
  opacity: 1 !important;
  z-index: 10;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M9.31876 8.18384C9.00205 7.92238 8.53245 7.93981 8.23613 8.23613C7.92129 8.55097 7.92129 9.06143 8.23613 9.37627L11.1932 12.3333L8.23613 15.2904C7.92129 15.6052 7.92129 16.1157 8.23613 16.4305C8.53245 16.7269 9.00205 16.7443 9.31876 16.4828L9.37627 16.4305L12.3333 13.4735L15.2904 16.4305L15.3479 16.4828C15.6646 16.7443 16.1342 16.7269 16.4305 16.4305C16.7454 16.1157 16.7454 15.6052 16.4305 15.2904L13.4735 12.3333L16.4305 9.37627C16.7454 9.06143 16.7454 8.55097 16.4305 8.23613C16.1342 7.93981 15.6646 7.92238 15.3479 8.18384L15.2904 8.23613L12.3333 11.1932L9.37627 8.23613L9.31876 8.18384Z'/%3e%3c/svg%3e");
}

@media (max-width: 576px) {
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
