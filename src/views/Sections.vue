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
                  <input maxlength="50" v-model="sectionName" id="input-small" class="py-2" size="sm" placeholder="" @keyup='charCount()'>
                  <span style="font-size: 12px; color: grey; float: right;">{{ sectionName.length }} /50</span>
                </div>
                <div class="fields pt-2">
                  <span class="mt-3">Short description of Section</span><br/>
                  <textarea rows="2" maxlength="150" id="textarea" v-model="sectionDesc" placeholder="" class="py-2" @keyup='charCount()'></textarea>
                  <span style="font-size: 12px; color: grey; float: right;">{{ sectionDescC }} /150</span>
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
                    <div class="card card-style mb-3">
                      <div @click="showSectionInfo(section.title, section._id )">
                          <img v-if="getFileExtension(section.image_link) === 'jpg' || getFileExtension(section.image_link) === 'png'" :src="section.image_link" class="card-img-top" alt="...">
                          <div v-else class="blank-img card-img-top"></div>
                          <div class="card-body">
                            <h6 class="card-title">{{section.title | truncate(20)}}</h6>
                            <p class="card-text ">{{section.description | truncate(50)}}.</p>
                          </div>
                      </div>
                      <div class="delete d-flex justify-content-end" @click="deleteSection(section._id)">
                        <p class= "" style="font-size: 12px; cursor: pointer; color: #9A2804; margin-right:20px;">
                          <i class="fas fa-trash"></i>
                        </p>
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
    timestamp: "",
    message: "",
    sectionNameC : 0,
    sectionDescC : 0,
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
      getFileExtension(filename) {
          return filename.split('.').pop();
      },
      // submit new section
      handleSubmit(event) {
          event.preventDefault()
          let payload = {
              "title" : this.sectionName,
              "description" : this.sectionDesc,
              "image_link" : this.sectionImg
          }
          this.submitSection( payload)
          .then(() => {
            if(this.$store.state.Sections.newsection.data.message == "Successfully created section"){
              this.message = this.$store.state.Sections.newsection.data.message
              this.clearFields()
              this.$bvModal.hide('my-modal')
              this.$router.go()
            }else{
              console.log(this.$store.state.Sections.newsection.data.message);
            }
          })
      },
      //clear input field after submit
      clearFields() {
        this.sectionName = "",
        this.sectionDesc = "",
        this.sectionImg = ""
      },

      // word count for input fields
       charCount(){
           this.sectionNameC = this.sectionName.length
           console.log(this.sectionNameC)
       },

      //to delete a section
      deleteSection(id){
        this.$confirm("Are you sure you want to delete this section? All documents under this section will be deleted too")
        .then(() => {
          this.$store.dispatch('deleteSection', id)
          setTimeout(() => this.$router.go(), 2000);
          this.$alert("Section Deleted");
          
          });
      }
  },
  created(){
    setInterval(this.getNow, 1000);
    this.getAllSections();
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
    await this.getAllSections()
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
#sections  .card-style{
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
    height: 228px;
  }
#sections  .card-style:hover{
    box-shadow: 2px 2px 12px rgba(139, 139, 139, 0.2);
    height: 229px;
  }
#sections  .card-style p{
    font-size: 12px;
    color: #9F9F9F;
  }
#sections .card-style h5{
    color: #292929;
  }
#sections   .card-style img{
      height: 120px;
      object-fit: cover;
      margin: 0 auto;
    }
#sections .delete{
  padding: 0px;
  margin-top: -25px !important;
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
    .fields textarea{
      width: 100%;
    }
    .blank-img{
      background: #e3e5e9;
      height: 120px;
    }
</style>
