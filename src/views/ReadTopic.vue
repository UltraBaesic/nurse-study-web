<template>
  <main id="dashbaord-home">
    <section >
        <div class="card card-style"  v-for="values in showArticle" :key="values._id">
            <div class="card-body">
                <div class="class-header">
                    <h3 class="mb-4">
                        {{values.title}}
                    </h3>
                    <div class="controls">
                        <div class="edit mr-5" >
                            <p style="font-size: 12px; color: #048464">
                                <i class="fas fa-pen"></i>
                                Edit
                            </p>
                        </div>
                        <div class="delete">
                            <p style="font-size: 12px; color: red">
                                <i class="fas fa-trash"></i>
                                Delete
                            </p>
                        </div>
                    </div>
                </div>
                <div class="topic-story" v-html="values.content">
                    {{values.content}}
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
computed: {
    // to get the article details using getters
    showArticle(){
        let topicname = this.$route.params.topicname
        let answ = [this.$store.getters.getArticleInfo.find((sectionArticle) => sectionArticle.title == topicname )]
        console.log(answ)
        return answ
    }
  }
}
</script>

<style scoped>

.card-style{
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
  padding: 30px;
  margin-bottom: 30px;
}
.topic-story{
    color: black !important;
}
.class-header{
    display: flex;
    justify-content: space-between;
}
.controls{
    display: flex;
}
</style>