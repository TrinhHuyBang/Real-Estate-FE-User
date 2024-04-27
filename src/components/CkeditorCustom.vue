<template>
    <ckeditor :editor="editor" :config="editorConfig" v-model="editorData" ></ckeditor>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import uploader from '../utils/functions'
export default {
    props: ['value'],
    setup() {
        
    },
    data() {
        return {
            editorData: this.value,
            editor: ClassicEditor,
            editorConfig: {
                extraPlugins: [uploader],
                placeholder: "Thêm mô tả về dự án ở đây .....",
            },
        }
    },
    watch: {
        editorData(newValue) {
            this.$emit('input', newValue);
        }
    }
}
</script>

<style>

</style>