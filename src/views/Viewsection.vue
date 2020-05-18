<template>
  <main>
    <div v-if="this.$store.state.Sections.section.data.length === 0">
      <div class="d-flex justify-content-center align-items-center loader">
        <Circle8 />
      </div>
    </div>
    <div else>
      <section class="header">
          <router-link to="/sections">
              <p class="back">
                  <i class="fas fa-angle-double-left"></i>
                  Back to Sections
              </p>
          </router-link>
          <div> 
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Premium</option>
                <option value="1">Free</option>
              </select>
          </div>
      </section>

      <section class="about-section">
          <div class="row">
              <div class="col-3" v-for="section in showSection.data" :key="section._id">
                  <div class="card card-style">
                    <img v-if="section.image_link != null " :src="section.image_link" class="card-img-top" alt="...">
                    <img v-else src="https://carrington.edu/wp-content/uploads/2015/01/pharmacy-pills.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h6 class="card-title"> {{ section.title }} </h6>
                      <p class="card-text "> {{ section.description }} </p>
                    </div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="card card-style">
                    <div class="card-body">
                      <h6 class="card-title">Statistics</h6>
                      <div class="statistic">
                          <Progress
                            class="pb-4"
                            :width="Number(75)"
                            :background="`#04809A`"
                           >
                           <p>Users that have started this Section</p>
                           </Progress>

                           <Progress
                            class="pb-4"
                            :width="Number(5)"
                            :background="`#04809A`"
                           >
                           <p>Users that have completed this Section</p>
                           </Progress>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      <section class="topics">
          <div>
              <Tabs cache-lifetime="0.0000010" class="tabs">
                  <Tab  name="Articles">
                    <div class="d-flex justify-content-end mb-2 add-btn">
                      <b-button @click="addSection()" variant="info">Add Article</b-button>
                    </div>
                    <div class="row">
                        <div class="col-4" v-for="articles in showSectionArticles.data" :key="articles._id">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <div @click="readArticle(articles.title)">
                                  <h5 class="card-title"> {{articles.title}}</h5>
                                  <p class="card-text" >{{articles.content  | truncate(80)}}</p>
                                </div>
                             
                                <div class="d-flex mt-3" style="display: flex; justify-content: space-between !important; color: #F8A24C">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open"></i> 0 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <!-- <p class= "mr-4" style="font-size: 12px; cursor: pointer; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p> -->
                                    <p class= "" style="font-size: 12px; cursor: pointer; color: #9A2804; margin-bottom: 0px !important;" @click="deleteArticle(articles._id)">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div> 
                    </div>
                  </Tab>
                  <Tab name="Videos">
                    <div class="d-flex justify-content-end mb-2 add-btn">
                      <b-button @click="addVideo()" variant="info">Add Video</b-button>
                    </div>
                    <div class="row">
                        <div class="col-4" v-for="videos in showSectionVideo[0]" :key="videos._id">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="https://drive.google.com/file/d/1T1vqS1nBGO-ZkE7hqbLS6CAz3a_SSLGC" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">{{videos.title}}</h6>
                            </div>
                          </div>
                        </div>
                    </div>
                  </Tab>
                  <Tab name="Audios">
                    <div class="d-flex justify-content-end mb-2 add-btn">
                      <b-button @click="addAudio()" variant="info">Add Audio</b-button>
                    </div>
                    <div class="row">
                      <div v-for="i in 1" :key="i" class="col-4">
                          <div class="card audio-card card-style">
                            <div class="card-body">
                              <h6 class="card-title" style="margin-bottom: 0px !important; font-size: 14px;">Things to do when going treating contaminable infections</h6>
                            </div>
                            <audio controls  style="width: 344px;"> 
                              <!-- <source src="horse.ogg" type="audio/ogg"> -->
                              <source src="../assets/vid/greatful.mp3" type="audio/mpeg">
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        </div>
                    </div>
                  </Tab>
                  <Tab name="Questions">
                    <div class="d-flex justify-content-end mb-2 add-btn">
                      <b-button @click="addQuestions()" variant="info">Add Questions</b-button>
                    </div>
                    <div class="row">
                      <div class="col-6" v-for="(questions, i) in showSectionQuestions.data " :key="questions._id" :i="i">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions px-1">
                                <div class="question">
                                    <h6>Question {{ ++i }}</h6>
                                    <p>{{ questions.question }}</p>
                                </div>
                                <div class="options">
                                    <p>A. {{ questions.options.A }}</p>
                                    <p>B. {{ questions.options.B }}</p>
                                    <p>C. {{ questions.options.C }}</p>
                                    <p>D. {{ questions.options.D }}</p>
                                </div>
                                <div class="answer d-flex justify-content-between">
                                  Answer: {{ questions.correct_option }}
                                   <div class="d-flex justify-content-end">
                                  <!-- <p class= "mr-4" style="font-size: 12px; color: #04809A;">
                                    <i class="fas fa-pen"></i>
                                    Edit
                                  </p> -->
                                  <p @click="deleteQuestion(questions._id)" class= "mr-3" style="font-size: 12px; color:#9A2804; cursor:pointer" >
                                    <i class="fas fa-trash"></i>
                                    Delete
                                  </p>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </Tab>
              </Tabs>
          </div>
      </section>
  </div>
  </main>
</template>

<script>
import {Tabs, Tab} from 'vue-tabs-component';
import Progress from '../components/Progress.vue';
import { Circle8 } from 'vue-loading-spinner'

export default {
    data(){
      return{
        i: 1, 
      }
    },
    components: {
        Tabs,
        Tab,
        Progress,
        Circle8
    },
    beforeMount(){
      this.showSection
    },

    computed: {
        //show the deatils of theselected section
        showSection() {
          return this.$store.state.Sections.section
        },

        //get all the articles under the section
        showSectionArticles() {
          return this.$store.state.Sections.sectionArticles
        },

        //get all the questions under the section
        showSectionQuestions() {
          return this.$store.state.Sections.sectionQuestions
        },

        //filter and get all the audios in the state.sectionMedia
        showSectionAudio() {
          this.$store.state.Sections.sectionMedia
            let audioResult = [this.$store.getters.getSectionAudio.filter((Audios) => Audios.title == "audio" )]
            return audioResult
        },

        //filter and get all the audios in the state.sectionMedia
        showSectionVideo() {
          this.$store.state.Sections.sectionMedia
            let videoResult = [this.$store.getters.getSectionVideo.filter((Videos) => Videos.type == "video" )]
            return videoResult
        }
    },
    methods: {
        // ...mapActions(['getSectionArticles']),
        addSection(){
          this.$router.push('/sections/sectioname/addsection')
        },
        addVideo(){
          this.$router.push('/sections/sectioname/addsvideo')
        },
        addAudio(){
          this.$router.push('/sections/sectioname/addaudio')
        },
        addQuestions(){
          this.$router.push('/sections/sectioname/quiz')
        },
        readArticle(title){
          this.$router.push(`/sections/sectioname/${title}`)
        },
        deleteArticle(id){
          this.$confirm("Are you sure you want to delete this Article?")
          .then(() => {
              this.$store.dispatch('deleteArticle', id)
              this.$router.go()
            });
        },
        deleteQuestion(id){
          this.$confirm("Are you sure you want to delete this Question?")
          .then(() => {
              this.$store.dispatch('deleteQuestion', id)
              this.$router.go()
            });
            
        },
      }
    }
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
}
.header a:hover{
  text-decoration-line: none !important;
}
.tab{
    display: flex;
}
.tabs-component-tabs{
    list-style-type: none;
    display:flex;
    padding: 0px;
    justify-content: space-between;
    width: 27%
}
.tabs-component-tab-a{
    color: #9F9F9F;

}
.tabs-component-tab-a:hover{
    color: #04809A;
}
.tabs-component-tabs .is-active a {
    color: #04809A !important;
    text-decoration-line: inherit;
}
li{
    color: #9F9F9F;
}
.card-style{
      border: none;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
      margin-bottom: 1rem;
      color: #202020;
      cursor: pointer;
    }
.card-style:hover{
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1 );
  
}
.card-style h5{
    color: #292929;
    }
.card-style img{
    height: 90px;
}
.card-style p{
    font-size: 12px;

    }
.topics{
    margin-top: 1.08rem ;
}
.quiz-det{
  display: flex;
  justify-content: space-between !important;
}
.tabs-component-tab{
  padding-right: 50px;
}
.add-btn{
  position: absolute;
  top: 350px;
  right: 20px;
}
.back{
  cursor: pointer;
}
.back:hover{
  color: #04809A ;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
}
.audio-card audio
{
-webkit-transition:all 0.5s linear;
background-color: #F1F3F4;
-moz-transition:all 0.5s linear;
-o-transition:all 0.5s linear;
transition:all 0.5s linear;
-moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
-webkit-box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.1 );
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
-moz-border-radius:7px 7px 7px 7px ;
-webkit-border-radius:7px 7px 7px 7px ;
border-radius:7px 7px 7px 7px ;
}
</style>