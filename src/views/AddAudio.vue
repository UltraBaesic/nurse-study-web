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
              <span>Add Audio</span>
              <b-form-file v-model="file" accept="audio/*" ref="file-input" class="mb-2"></b-form-file>
          </div>
          <div>
              <button class="btn btn-primary" type="submit">Submit Audio</button>
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