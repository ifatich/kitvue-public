<template>
    <div class="custom-file-upload">
        <button @click="remove" v-if="previewImage" :class="{ 'd-block remove-button': previewImage }">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="curentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.97814 6.27576C7.50308 5.88357 6.79868 5.90971 6.3542 6.3542C5.88193 6.82646 5.88193 7.59215 6.3542 8.06441L10.7898 12.5L6.3542 16.9356C5.88193 17.4079 5.88193 18.1735 6.3542 18.6458C6.79868 19.0903 7.50308 19.1164 7.97814 18.7242L8.06441 18.6458L12.5 14.2102L16.9356 18.6458L17.0219 18.7242C17.4969 19.1164 18.2013 19.0903 18.6458 18.6458C19.1181 18.1735 19.1181 17.4079 18.6458 16.9356L14.2102 12.5L18.6458 8.06441C19.1181 7.59215 19.1181 6.82646 18.6458 6.3542C18.2013 5.90971 17.4969 5.88357 17.0219 6.27576L16.9356 6.3542L12.5 10.7898L8.06441 6.3542L7.97814 6.27576Z"
                    fill="#fff" />
            </svg>
        </button>
        <div class="custom-file-upload__box-input">
            <span class="custom-file-upload__box-input-icon">
                <img src="../../assets/images/ico-image-upload.svg" alt="" :class="{ hide: previewImage }" />
            </span>
            <input type="file" id="gallery-photo-add" class="custom-file-upload__box-input-file"
                @change="handleFileChange" ref="file" multiple accept="image/*" required />
        </div>
        <div class="custom-file-upload__box-preview" id="box-preview-image" v-if="previewImage"
            :class="{ 'd-block': previewImage }">
            <img class="drop-zoon__image" :src="previewImage" alt="Preview" />
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
        },
        data() {
            return {
                previewImage: null,
            };
        },
        methods: {
            imagesPreview1() {
                const input = this.$refs.file;
                const files = input.files;

                if (files && files[0]) {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                        this.previewImage = e.target.result;
                    };

                    reader.readAsDataURL(files[0]);
                }
            },
            filesize(size) {
                var i = Math.floor(Math.log(size) / Math.log(1024));
                return (
                    (size / Math.pow(1024, i)).toFixed(2) * 1 +
                    " " + ["B", "kB", "MB", "GB", "TB"][i]
                );
            },
            browse() {
                this.$refs.file.click();
            },
            change(e) {
                this.$emit("input", e.target.files[0]);
            },
            remove() {
                this.previewImage = null;
                this.$emit("input", null);
            },
            handleFileChange() {
                this.previewImage = null;
                this.imagesPreview1();
            },
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

<style scoped>
    .hide {
        opacity: 0;
    }

    .remove-button {
        position: absolute;
        top: 4px;
        right: 4px;
        background-color: #ae1e22;
        color: white;
        border: none;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        font-weight: bold;
    }
</style>