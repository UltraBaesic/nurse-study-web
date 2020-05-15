<template>
  <main id="sections">
    <div class="page-name" v-if="this.$store.state.Sections.allSections.length === 0">
      <div class="d-flex justify-content-center align-items-center loader">
        <Circle8 />
        <!-- <div class="text-center">
          <img src="../assets/img/product.png" style="height: 5rem; margin-bottom: 20px;">
          <p style="color: #9F9F9F; font-size: 12px;">You don't have any Topic added yet,<br/> click on button to Start</p>
          <button style="background-color: #04809A;  border: none;" class="btn btn-primary" type="submit">Add Topic</button>
        </div> -->
      </div>
    </div>

    <div v-else>
      <!-- <div class="text-center">
          <img src="../assets/img/product.png" style="height: 5rem; margin-bottom: 20px;">
          <p style="color: #9F9F9F; font-size: 12px;">You don't have any Topic added yet,<br/> click on button to Start</p>
          <button style="background-color: #04809A;  border: none;" class="btn btn-primary" type="submit">Add Topic</button>
        </div> -->
      <section class="page-name">
          <div class="d-flex header">
            <div>
                <h6>Topics</h6>
            </div>          
            <div class=" d-flex justify-content-end">
              <div class="right-page-name d-flex ">
                <div>
                    <p class="pt-3 pr-1">Sort By: </p>
                </div>
                <select class="custom-select mr-3" id="inputGroupSelect01">
                    <option selected>All</option>
                    <option value="1">Date</option>
                    <option value="2">Alphab</option>
                    <option value="3">Three</option>
                </select>
                <div>
                  <b-button v-b-modal.my-modal>Add New</b-button>
                </div>      
              </div>
            </div>   
          </div>
          <div>
            <!-- The modal -->
            <b-modal id="my-modal" hide-footer title="Create New Section">
              <div class="pa-3">
                <div class="fields pt-1">
                  <span class="">Name of Section</span><br/>
                  <input v-model="sectionName" id="input-small" class="py-2" size="sm" placeholder="">
                </div>
                <div class="fields pt-2">
                  <span class="mt-3">Short description of Section</span><br/>
                  <input id="textarea" v-model="sectionDesc" placeholder="" class="py-2">
                </div>
                <div class="fields pt-2">
                  <span class="mt-3">Attach an Image</span><br/>
                  <input id="textarea" v-model="sectionImg" placeholder="" class="py-2">
                </div>
              </div>
              <div class="modal-button">
                <b-button class="mt-2 mr-3" @click="handleSubmit" variant="info">Submit</b-button>
              </div>
            </b-modal>
          </div>
      </section>
      <section class="main-section" v-if="this.showSection">

          <div class="main-body">
              <div class="row .mx-lg-n5 mt-5">
                <div class="col-3" v-for="section in showSection" :key="section._id">
                    <div class="card card-style mb-3" @click="showSectionInfo(section.title, section._id )">
                      <img v-if="section.image_link != null " :src="section.image_link" class="card-img-top" alt="...">
                      <img v-else src="https://carrington.edu/wp-content/uploads/2015/01/pharmacy-pills.jpg" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h6 class="card-title">{{section.title}}</h6>
                        <p class="card-text ">{{section.description | truncate(80)}}.</p>
                      </div>
                    </div>
                </div>     
              </div>
          </div>
      </section>
    </div>
   </main>
</template>

<script>

import { mapActions } from 'vuex'
import { Circle8 } from 'vue-loading-spinner'

export default {
  components: {
    Circle8
  },
data(){
  return {
    sectionName: '',
    sectionDesc: '',
    sectionImg: '', 
    AllSection: [], 
    userSections: null,
    timestamp: ""
  }
},
methods: {
  ...mapActions([
    'getAllSections',
    'submitSection',
    'loadSectionsInfo',
    'getSectionArticles',
    'getSectionQuestions',
    'getSectionMedia'
    ]),
  showSectionInfo(title, id){
      this.loadSectionsInfo(id)
      this.getSectionArticles(id)
      this.getSectionQuestions(id)
      this.getSectionMedia(id)
      this.$router.push( {path: `/sections/${title}`} )
    },

  handleSubmit(event) {
    event.preventDefault()
    let payload = {
        "title" : this.sectionName,
        "description" : this.sectionDesc,
        "image_link" : this.sectionImg
    }
    this.submitSection( payload)
    .then(() => {
      this.clearFields()
    })
  },

  clearFields() {
    this.sectionName = "",
    this.sectionDesc = "",
    this.sectionImg = ""
  },
  },
  created(){
    setInterval(this.getNow, 1000);
  },
updated(){
    this.$store.commit('setSections')
  },

computed: {
    showSection() {
      return this.$store.state.Sections.allSections
    }
  },
  async mounted() {
    await this.getAllSections();
  }
} 
</script>

<style>

.loader {
  padding: 15rem;
}
 .header{
     display: flex;
     justify-content: space-between;
   }   
  .page-name h6{
    font-weight: 700;
    color: #292929;
  }
  .page-name p{
    font-weight: 500;
    color: #9F9F9F;
    font-size: 12px;
    margin-top: -8px;
  }
  .card-style{
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
  }
  .card-style p{
    font-size: 12px;
    color: #9F9F9F;
  }
  .card-style h5{
    color: #292929;
  }
    .card-style img{
      height: 120px;
      object-fit: cover;
      margin: 0 auto;
    }
    .right-page-name p{
         color: #292929;
         font-size: 14px;
    }
    .right-page-name select{
        width: 102px;
    }
    .fields input{
      width: 100%;
    }
</style>
