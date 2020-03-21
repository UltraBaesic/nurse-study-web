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
              <button class="btn btn-primary" type="submit">Submit Video</button>
          </div>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>