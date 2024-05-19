<script setup>
/* eslint-disable */
import { ref, defineEmits, defineOptions, defineModel, defineProps, computed } from 'vue'
import Button from '../Button/Button.vue'
import { BModal, BOffcanvas } from 'bootstrap-vue-next'

defineOptions({ name: 'InputCamera', inheritAttrs: false })

const fileSourceChooserDialog = ref(false)
const cameraDialog = ref(false)
const video = ref()
const fileInput = ref()
const snappedCameraPict = ref()
const imgElement = ref()
const cameraIsReady = ref(false)
const shownOffcanvas = ref(false)

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
  uniqueKey: {},
  imagePlaceholder: {
    type: String,
    default: 'idcard'
  },
  useBottomSheet: {
    type: Boolean,
    default: false
  }
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
  if (!props.useBottomSheet) fileSourceChooserDialog.value = false
  if (props.useBottomSheet) shownOffcanvas.value = false
  startCamera()
}

const handleSourceGalleryClick = () => {
  fileInput.value.click()
  if (!props.useBottomSheet) fileSourceChooserDialog.value = false
  if (props.useBottomSheet) shownOffcanvas.value = false
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

const fileSourceChooserDialogClick = () => {
  if (!props.useBottomSheet) fileSourceChooserDialog.value = true
  if (props.useBottomSheet) shownOffcanvas.value = true
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
      <div
        v-if="!fileSrc"
        @click="fileSourceChooserDialogClick"
        class="custom-file-upload__box-input"
        :id="`${$attrs.id}_openDialogChooser`"
      >
        <span class="custom-file-upload__box-input-icon">
          <img
            v-if="props.imagePlaceholder === 'idcard'"
            src="../../assets/images/ico-image-upload.svg"
            alt="Upload Icon"
          />
          <img
            v-else
            src="../../assets/images/image-add.svg"
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
        class="custom-file-upload__box-preview d-block bg-red"
        id="box-preview-image"
      >
        <img
          ref="imgElement"
          :src="fileSrc"
          alt="Captured Image"
          class="imgCaptured"
          :id="`${$attrs.id}_img`"
        />
        <img 
        @click="handleRemoveFileClick"
        v-if="fileSrc"
        :id="`${$attrs.id}_removeFile`"
        class="close-img" src="../../assets/icon/cross.svg" />
      </div>
    </div>
    <div class="error-text mt-2" v-if="props.error">
      {{ props.error }}
    </div>
  </div>

  <BOffcanvas
    v-model="shownOffcanvas"
    placement="bottom"
    bodyScrolling="true"
  >
    <template #title>{{ props.title }}</template>
    <ul class="list-group list-group-flush px-3">
      <li
        style="height: 56px;"
        @click="handleSourceGalleryClick"
        class="list-group-item d-flex justify-content-between align-items-center"
        :id="`${$attrs.id}_file`"
      >
        Galeri
        <span>
          <img
            src="../../assets/images/icon-galeri.svg"
            alt="Upload Icon"
            height="24px"
            width="24px"
          />
        </span>
      </li>
      <li
        style="height: 56px;"
        @click="handleSourceCameraClick"
        class="list-group-item d-flex justify-content-between align-items-center"
        :id="`${$attrs.id}_camera`"
      >
        Kamera
        <span>
          <img
            src="../../assets/images/camera-outline.svg"
            alt="Kamera Icon"
            height="24px"
            width="24px"
          />
        </span>
      </li>
    </ul>
  </BOffcanvas>
  <BModal
    v-if="!props.useBottomSheet"
    v-model="fileSourceChooserDialog"
    size="sm"
    hide-header
    ok-only
    no-stacking
    hide-footer
    centered
  >
    <div class="d-flex justify-content-center flex-column cameraInput">
      <ul class="list-group list-group-flush" style="margin-top: 16px;">
        <li
          style="height: 56px"
          @click="handleSourceGalleryClick"
          class="list-group-item d-flex justify-content-between align-items-center"
          :id="`${$attrs.id}_file`"
        >
          Galeri
          <img
            src="../../assets/images/icon-galeri.svg"
            alt="Upload Icon"
            height="24px"
            width="24px"
          />
        </li>
        <li
          style="height: 56px"
          @click="handleSourceCameraClick"
          class="list-group-item d-flex justify-content-between align-items-center"
          :id="`${$attrs.id}_camera`"
        >
          Kamera
          <img
            src="../../assets/images/camera-outline.svg"
            alt="Kamera Icon"
            height="24px"
            width="24px"
          />
        </li>
      </ul>
    </div>
  </BModal>

  <BOffcanvas
    class="filechooser-mobile"
    v-if="props.useBottomSheet"
    v-model="fileSourceChooserDialog"
    placement="bottom"
    noCloseOnBackdrop
  >
    <template #title>
      <h3 class="filechooser-mobile__title">
        {{ props.bottomSheetTitle }}
      </h3>
    </template>
    <div class="d-flex justify-content-center flex-column">
      <ul class="list-group list-group-flush" style="margin-top: 16px">
        <li
          style="height: 56px"
          @click="handleSourceGalleryClick"
          class="w-100 list-group-item d-flex justify-content-between px-3 align-items-center"
          :id="`${$attrs.id}_file`"
        >
          <p>Galeri</p>
          <img
            src="../../assets/images/icon-galeri.svg"
            alt="Upload Icon"
            height="24px"
            width="24px"
            class="w-auto"
          />
        </li>
        <li
          style="height: 56px"
          @click="handleSourceCameraClick"
          class="w-100 list-group-item d-flex justify-content-between px-3 align-items-center"
          :id="`${$attrs.id}_camera`"
        >
          <p>Kamera</p>
          <img
            src="../../assets/images/camera-outline.svg"
            alt="Kamera Icon"
            height="24px"
            width="24px"
            class="w-auto"
          />
        </li>
      </ul>
    </div>
  </BOffcanvas>

  <BModal
    @update:model-value="handleCameraDialogValueChange"
    v-model="cameraDialog"
    class="inputCamera"
    title="Ambil Foto"
    centered
  >
  <video class="video" v-if="!snappedCameraPict" ref="video" autoplay></video>
  <div v-else>
    <img :src="snappedCameraPict" alt="Captured Image" />
    </div>
    <div v-if="props.useBottomSheet" class="card card-ktp"></div>
    <img
      @click="handleCameraSnap"
      src="../../assets/icon/shutter-button.svg"
      alt="Take Image"
      width="64px"
      height="64px"
      v-if="!snappedCameraPict"
      :disabled="!cameraIsReady"
      :id="`${$attrs.id}_cameraSnap`"
      :class="[props.useBottomSheet ? 'shutter-btn--mobile' : 'shutter-btn']"
    />
    <template v-else>
      <div class="flex">
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
        </div>
      </template>
  </BModal>
</template>

<style lang="scss">
.filechooser-mobile {
  .offcanvas-body {
    min-height: unset !important;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  &__title {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
}
</style>

<style lang="scss">
.inputCamera {
  .modal {
    width: unset;
    height: unset;
  }

  .video {
    position: relative;
  }

  .shutter-btn {
    position: absolute !important;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 64px !important;
    height: 64px !important;
  }

  .shutter-btn--mobile {
    position: absolute !important;
    bottom: 5rem !important;
    left: 50% !important;
    transform: translateX(-50%);
    width: 64px !important;
    height: 64px !important;
    top: unset !important;
  }

  .modal-body {
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      border-radius: 12px;
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
  z-index: 0;
  position: relative !important;
  width: auto !important;

  .close-img {
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
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
  z-index: 1;
  background: url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935ZM6.86279 6.86279C7.10973 6.61586 7.50106 6.60133 7.76498 6.81921L7.81291 6.86279L10.2771 9.32701L12.7413 6.86279L12.7893 6.81921C13.0532 6.60133 13.4445 6.61586 13.6915 6.86279C13.9538 7.12516 13.9538 7.55054 13.6915 7.81291L11.2272 10.2771L13.6915 12.7413C13.9538 13.0037 13.9538 13.4291 13.6915 13.6915C13.4445 13.9384 13.0532 13.9529 12.7893 13.735L12.7413 13.6915L10.2771 11.2272L7.8129 13.6915L7.76498 13.735C7.50105 13.9529 7.10972 13.9384 6.86278 13.6915C6.60042 13.4291 6.60042 13.0037 6.86278 12.7413L9.32701 10.2771L6.86279 7.81291C6.60042 7.55054 6.60042 7.12516 6.86279 6.86279Z' fill='%2358585B'/%3e%3c/svg%3e");
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-position:  center;
}
li:hover {
  cursor: pointer;
}

@media (max-width: 890px) {
  .modal-body {
    height: 100vh !important;
  }

  .cameraInput,
  .inputCamera {
    .list-group {
      display: block;
    }

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
        top: 0;
        left: 0;
      }

      .card-ktp {
        display: block;
        padding: 1rem;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        position: fixed;
        bottom: 40px;

        background-color: transparent;

        height: 230px;
        width: 80%;
        bottom: 40%;
        left: 10%;
        opacity: 0.5;
        border: 2px dashed var(--g-kit-lime-50);
        border-radius: 6px;
        right: 0;
        box-shadow: 100px 100px 100px 100px rgba(1, 1, 1, 1), 100px 100px 100px 0px rgba(1, 1, 1, 1);
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
          width: -webkit-fill-available;
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
