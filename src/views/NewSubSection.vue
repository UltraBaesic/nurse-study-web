<template>
  <main class="new-sub-section">
      <section class="mb-4">
          <div>
              <p style="font-size: 16px;">
                  <i class="fas fa-angle-double-left"></i>
                  Back
              </p>
          </div>
          <div class="pagetitle">
              <h6>
                  Add Topic to section
              </h6>
          </div>
      </section>
      <section>
          <div class="uplaod-option mb-3">
              <span>Add Video</span>
              <b-form-file v-model="file" accept="video/*" ref="file-input" class="mb-2"></b-form-file>
          </div>
          <div class="uplaod-option mb-3">
              <span>Add Audio</span>
              <b-form-file v-model="file" accept="audio/*" ref="file-input" class="mb-2"></b-form-file>
          </div>
          <div class="upload-option mb-3">
              <span>Add Article</span>
              <editor
                 api-key="774tkv0y3q4mghhaagtmxn76g9sbq9yfzy320a0gkwd4v0cr"
                 :init="{
                   height: 500,
                   menubar: false,
                   plugins: [
                     'advlist autolink lists link image charmap print preview anchor',
                     'searchreplace visualblocks code fullscreen',
                     'insertdatetime media table paste code help wordcount'
                   ],
                   toolbar_mode: 'floating',
                   toolbar:
                     'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help'
                 }"
               />
         </div>
      </section>
  </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

 export default {
   name: 'app',
   components: {
     'editor': Editor
   }
 }
</script>

<style>
.pagetitle h6{
      font-weight: 700;
      color: #292929;
    }
</style>