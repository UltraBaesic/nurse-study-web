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
                  Add Video to section
              </h6>
          </div>
      </section>
      <section>
          <div class="card card-style">
              <div class="card-body">
                <div class="uplaod-option mb-3">
                    <div class="form-group mb-4">
                        <label for="title"> Video Title</label>
                        <input type="text" class="form-control" id="title" placeholder="Lecture Title">
                    </div>
                    <b-form-file v-model="file" accept="video/*" ref="file-input" class="mb-2"></b-form-file>
                </div>
                <div class="uplaod-option mb-3">
                    <button style="background-color: #04809A; border: none;" class="btn btn-primary" type="submit">Add Video</button>
                </div>
              </div>
          </div>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>
 .card-style{
      border: none;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
      /* background-color: #F6FAFB; */
}
</style>