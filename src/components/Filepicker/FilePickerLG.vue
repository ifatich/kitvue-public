<template>
    <div class="custom-file-upload" :class="{ 'fileName': fileName && !showPreview, 'hns': !showPreview }">
        <div class="custom-file-upload__box-input" :class="{ 'd-none': previewImage }">
            <span v-if="showPreview" class="custom-file-upload__box-input-icon">
                <img src="../../assets/images/ico-image-upload.svg" alt="" />
            </span>
            <span v-else class="custom-file-upload__box-input-icon">
                <img src="../../assets/icon/upload.svg" alt="" />
                <p class="mb-0 ms-2">Tarik file ke sini atau <b class="text-green">pilih dari perangkat</b></p>
            </span>
            
            <input type="file" id="gallery-photo-add" class="custom-file-upload__box-input-file" @change="handleFileChange" ref="file" multiple accept="image/*" required />
        </div>

        <div v-if="showPreview && previewImage" class="custom-file-upload__box-preview" id="box-preview-image" :class="{ 'd-block': previewImage }">
            <img @click="remove" v-if="previewImage || fileName" class="close-img" :class="{ 'd-block remove-button btn-close': previewImage || fileName }"  src="../../assets/icon/cross.svg" />
            <img class="drop-zoon__image" :src="previewImage" alt="Preview" />
        </div>
        <div v-else-if="fileName && !showPreview" class="custom-file-upload__file-name">
            <img @click="remove" v-if="previewImage || fileName" class="close-img" :class="{ 'd-block remove-button btn-close': previewImage || fileName }"  src="../../assets/icon/cross.svg" />
            <span>{{ fileName }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilePickerLG",
        props: {
            file: {
                type: [File, Object],
            },
            showPreview: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                previewImage: null,
                fileName: null,
            };
        },
        methods: {
            imagesPreview1() {
                const input = this.$refs.file;
                const files = input.files;

                if (files && files[0]) {
                    this.fileName = files[0].name;
                    if (this.showPreview) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            this.previewImage = e.target.result;
                            this.$emit("fileSelected", { fileName: this.fileName, previewImage: this.previewImage });
                        };
                        reader.readAsDataURL(files[0]);
                    } else {
                        this.$emit("fileSelected", { fileName: this.fileName });
                    }
                }
            },
            remove() {
                this.previewImage = null;
                this.fileName = null;
                this.$emit("input", null);
                this.$emit("fileSelected", null); // Emit null to indicate file removal
            },
            handleFileChange() {
                this.previewImage = null;
                this.fileName = null;
                this.imagesPreview1();
            },
        },
        watch: {
            file: {
                handler(newFile) {
                    if (!newFile) {
                        this.previewImage = null;
                        this.fileName = null;
                    }
                },
                immediate: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
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
            background: center;
        }
    }

    .custom-file-upload__file-name {
        padding: 10px;
        color: #333;
        font-size: var(--g-kit-font-size-sigma);
        font-weight: var(--g-kit-font-weight-bold);
    }

    .remove-button {
        position: absolute;
        top: 4px;
        right: 4px;
        background-color: #ae1e22;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-weight: bold;
        opacity: 1;
        z-index: 999;
    }

    .fileName {
        background-color: var(--g-kit-lime-10);
        border: 1px solid var(--g-kit-lime-50);
        height: auto;
        min-height: unset;

        .remove-button {
            top: auto;
            padding: 0px;
            width: 20px;
            height: 20px;
            background: center;
        }

        .custom-file-upload__box-input {
            display: none;
            &.custom-file-upload__box-input-icon {
                align-items: center;
            }
        }

        .custom-file-upload__file-name {
            width: -webkit-fill-available;
        }
    }
    
    .hns {
        .text-green {
            color: var(--g-kit-lime-50)
        }
    }
</style>