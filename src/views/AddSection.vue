<template>
  <main class="new-sub-section">
      <section class="mb-4">
          <div>
              <p @click="goBack()" style="font-size: 16px; cursor:pointer;">
                  <i class="fas fa-angle-double-left"></i>
                  Back
              </p>
          </div>
          <div class="pagetitle">
              <h6>
                  Add Article
              </h6>
          </div>
      </section>
      <section>
          <div class=" card upload-option mb-3 card-style">
            <div class="card-body">
              <div class="form-group mb-5 mt-3">
                <label for="Topic">Topic</label>
                <input type="text" v-model="title" class="form-control" id="Topic" aria-describedby="textHelp">
                <small id="textHelp" class="form-text text-muted">Keep it short and Simple</small>
              </div>

               <label for="Story">Content</label>
              <editor
              id="Story"
              v-model="content"
              style="border: none;"
                 api-key="774tkv0y3q4mghhaagtmxn76g9sbq9yfzy320a0gkwd4v0cr"
                 :init="{
                   height: 1000,
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

               <div class="mt-4">
                <button @click="createNewArticle" style="background-color: #04809A; padding: 10px; margin-bottom: 18px;" class="btn btn-primary" type="submit">Submit Article</button>
              </div>
            </div>
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
   },
   data(){
     return{
       title:"",
       content: "",
       category: "Introduction",
     }
   },
  //  computed:{
  //    ID(){
  //      return this.$store.getters.getSectionId
  //    }
  //  },
   methods: {
      createNewArticle(event) {
        event.preventDefault()
        let payload = {
            "title" : this.title,
            "content" : this.content,
            "category" : this.category,
        }
        
        console.log(payload)
        this.$store.dispatch('newArticle', payload)
      },
   },
 }
</script>

<style>
.pagetitle h6{
      font-weight: 700;
      color: #292929;
    }
  .card-style{
      border: none;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
      /* background-color: #F6FAFB; */
}
</style>