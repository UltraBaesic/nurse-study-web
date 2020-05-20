<template>
    <main class="new-sub-section">
        <section class="mb-4">
            <div>
                <p class="back" @click="$router.go(-1)" style="font-size: 16px; cursor:pointer;">
                    <i class="fas fa-angle-double-left"></i>
                    Back
                </p>
            </div>
            <div class="pagetitle">
                <h6>
                    Edit Article
                </h6>
            </div>
        </section>
        <section>
            <div class="card  upload-option mb-3 card-style">
                <div class="card-body" v-for="article in showArticle " :key="article._id">
                    <div class="form-group mb-3 mt-3">
                        <label for="Topic">Topic</label>
                        <input type="text" v-model="article.title" class="form-control" id="Topic" aria-describedby="textHelp">
                        <small id="textHelp" class="form-text text-muted">Keep it short and Simple</small>
                    </div>

                    <label for="Story">Content</label>
                    <editor
                    id="Story"
                    v-model="article.content"
                    style="border: none;"
                        api-key="774tkv0y3q4mghhaagtmxn76g9sbq9yfzy320a0gkwd4v0cr"
                        :init="{
                        height: 600,
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
                        <button 
                        :disabled="buttonenable" 
                        @click="editArticle" 
                        style="background-color: #04809A; padding: 10px; margin-bottom: 18px;" 
                        class="btn btn-primary" 
                        type="submit">
                            Edit Article
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
    components: {
        'editor': Editor
    },
    computed: {
        // to get the article details using getters
        showArticle(){
            let topicname = this.$route.params.topicname
            let answ = [this.$store.getters.getArticleInfo.find((sectionArticle) => sectionArticle.title == topicname )]
            console.log(answ)
            return answ
        },
        buttonenable(){
            let isDisabled = true
            if(this.title == "" || this.content == ""){
            isDisabled = true
            }else{
            isDisabled = false
            }
            console.log(isDisabled)
            return isDisabled
        }
    },
    methods: {
        editArticle(e) {
            e.preventDefault()
            let payload = {
                "id": this.showArticle[0]._id,
                "title" : this.showArticle[0].title,
                "content" : this.showArticle[0].content,
                "category" : this.showArticle[0].category,
            }
            console.log(payload)
            this.$store.dispatch('editArticle', payload)
            .then(() => {
            this.$alert("This Article has been Edited");
            })
        },
    },
}
</script>

<style scoped>
  .pagetitle h6{
        font-weight: 700;
        color: #292929;
      }
    .card-style{
        border: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
        /* background-color: #F6FAFB; */
  }
  .back:hover{
    color: #04809A ;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
  }
  input{
    width: 50%;
  }
  button:disabled,
  button[disabled]{
    background-color: rgb(223, 223, 223) !Important;
    border-color: rgb(223, 223, 223);
  }
</style>