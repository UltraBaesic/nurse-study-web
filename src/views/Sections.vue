<template>
  <main id="sections">
    <section class="page-name" v-if="showSection.length === 0">
      <div class="d-flex header">
        <div>
            <h6>Topics</h6>
            <p>{{ timestamp | todaysDate }}</p>
        </div>
      </div> 
      <div class="d-flex justify-content-center align-item-center" style="margin-top: 100px;">
        <div class="text-center">
          <img src="../assets/img/product.png" style="height: 5rem; margin-bottom: 20px;">
          <p style="color: #9F9F9F; font-size: 12px;">You don't have any Topic added yet,<br/> click on button to Start</p>
          <button style="background-color: #04809A;  border: none;" class="btn btn-primary" type="submit">Add Topic</button>
        </div>
      </div>
    </section>

    <div v-else>
      <section class="page-name">
          <div class="d-flex header">
            <div>
                <h6>Topics</h6>
                <p>{{ timestamp | todaysDate }}</p>
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
                <div class="fields mt-7">
                  <span class="">Name of Section</span>
                  <b-form-input v-model="sectionName" id="input-small" class="py-3" size="sm" placeholder=""></b-form-input>
                </div>
                <div class="fields mt-7">
                  <span class="mt-3">Short description of Section</span>
                  <b-form-textarea id="textarea" v-model="sectionDesc" placeholder="" rows="2" max-rows="2"></b-form-textarea>
                </div>
                <div class="fields mt-7">
                  <span class="mt-3">Attach an Image</span>
                  <b-form-file v-model="sectionImg" ref="file-input" accept="image/*" class="mb-2"></b-form-file>
                </div>
              </div>
              <div class="modal-button">
                <b-button class="mt-2 mr-3" variant="info">Submit</b-button>
                <b-button class="mt-2" variant="info">Cancel</b-button>
              </div>
            </b-modal>
          </div>
      </section>
      <section class="main-section">
        <!-- <div class="main-body">
            <div class="row .mx-lg-n5 ">
              <div class="col-3" v-for="i in 12" :key="i">
                  <div class="card card-style mb-3" @click="showSectionInfo(section.section_name, section.section_id )">
                    <img src="https://carrington.edu/wp-content/uploads/2015/01/pharmacy-pills.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h6 class="card-title">Phamacology</h6>
                      <p class="card-text ">Pharmacology is the branch of pharmaceutical sciences which is concerned with the study of drug or medication action</p>
                    </div>
                  </div>
              </div>     
            </div>
        </div> -->

          <div class="main-body">
              <div class="row .mx-lg-n5 ">
                <div class="col-3" v-for="section in showSection" :key="section._id">
                    <div class="card card-style mb-3" @click="showSectionInfo(section.title, section._id )">
                      <img v-if="section_image != null " :src="section.section_image" class="card-img-top" alt="...">
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

export default {
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
  ...mapActions(['getAllSections', 'submitSection']),
  showSectionInfo(title, id){
      this.$store.dispatch( 'loadSectionsInfo', id )
      this.$router.push( {path: `/sections/${title}`} )
    },
    getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                }
  },
   created() {
                setInterval(this.getNow, 1000);
            },

  // handleSubmit(event) {
  //   event.preventDefault()
  //   let {
  //       sectionName,
  //       sectionDesc,
  //       sectionImg
  //   } = this.sectionInfo
    
  //   this.submitSection(this.sectionInfo)
  //   .then(() => {
  //     this.clearFields()
  //   })
  // },

  // clearFields() {
  //     this.sectionName = "",
  //     this.sectionDesc = "",
  //     this.sectionImg = ""
  // },
  // },

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
</style>
