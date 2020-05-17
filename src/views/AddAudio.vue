<template>
  <main class="new-sub-section">
      <section class="mb-4">
          <div>
              <p class="back" @click="$router.go(-1)" style="font-size: 16px;">
                  <i class="fas fa-angle-double-left"></i>
                  Back
              </p>
          </div>
          <div class="pagetitle">
              <h6>
                  Add Audio to section
              </h6>
          </div>
      </section>
      <section>
          <div class="uplaod-option mb-3">
              <div class="card card-style">
                <div class="card-body">
                    <div class="uplaod-option mb-3">
                        <div class="form-group mb-4">
                            <label for="title"> Audio Title</label>
                            <input type="text" class="form-control" id="title" placeholder="Lecture Title">
                        </div>
                        <b-form-file v-model="file" accept="audio/*" ref="file-input" class="mb-2"></b-form-file>
                    </div>
                    <div class="uplaod-option mb-3">
                        <button style="background-color: #04809A; border: none;" class="btn btn-primary" type="submit">Add Audio</button>
                    </div>
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
.back:hover{
  color: #04809A ;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
}
</style>