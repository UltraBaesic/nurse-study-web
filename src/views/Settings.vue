<template>
  <main class="new-sub-section">
      <section class="page-name">
        <div class="d-flex header">
          <div>
              <h6>Settings</h6>
              <p>{{timestamp | todaysDate}}</p>
          </div>
        </div> 
      </section>
      <section>
          <div class="settings">
             <div class="accordion" id="accordionExample">
              <div class="card card-style">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link settings-header" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Quiz Settings 
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <div>
                      <div class="form-group row">
                        <label for="number" class="col-sm-4 col-form-label" style="font-size: 14px;">Number of Questions user can answer in a Quiz</label>
                        <div class="col-sm-1">
                          <input type="number" class="form-control" id="number" style="font-size: 14px;" min="10" value="15"  max="60">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-style" >
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="btn btn-link settings-header collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Subscription Settings
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <p class="set-head">Plans</p>
                    <div class="set-info" v-for="plan in plans" :key="plan._id" >
                      <p>{{ plan.duration }} <span id="amount">&#8358;{{plan.amount}}</span> </p>
                      <h6  v-b-modal.edit-plan-modal>Edit</h6>
                      <!--Edit Modal -->
                      <b-modal id="edit-plan-modal" hide-footer title="Edit Plan">
                        <div class="pa-3" v-for="plan in plans" :key="plan._id">
                          <div class="fields pt-1">
                            <span class="">Amount</span><br/>
                            <input maxlength="50" v-model="plan.amount" id="input-small" class="py-2" size="sm" placeholder="(naira)">
                          </div>
                          <div class="fields pt-2">
                            <span class="mt-3">Duration</span><br/>
                            <input id="textarea" v-model="plan.duration" value="" placeholder="" class="py-2">
                          </div>
                        </div>
                        <div class="modal-button">
                          <b-button class="mt-2 mr-3" @click="editPlan(plan._id)" variant="info">Change</b-button>
                        </div>
                      </b-modal>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>        
      </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return{
      submitted: false
    }
  },
  methods:{
    ...mapActions([
        'getPlans',
        'editPlan'
        ]),
    editPlan() {
        let payload = {
          "id": this.plans[0]._id,
          "plan": this.plans[0].plan,
          "amount": this.plans[0].amount,
          "duration": this.plans[0].duration
        }
        this.submitted = true
        this.$store.dispatch('editPlan', payload)
        .then(() => {
          if(this.$store.state.Settings.edittedplan.data.message == "Subscription Updated"){
            this.submitted = false
            this.$bvModal.hide('edit-plan-modal')
            this.$alert("Payment Plan editted.");
          }else{
            this.$alert("Something went wrong try again");
          }
        })
    }
  },
  created(){
      this.getPlans();
    },
  computed: {
      plans() {
        console.log(this.$store.state.Settings.plans)
        return this.$store.state.Settings.plans
      },
  }
}
</script>

<style> 
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
    .card-header{
      background-color: #F6FAFF !important;
    }
    .card-header:hover{
      background-color: rgb(224, 237, 252) !important;
    }
    .settings-header{
      text-decoration: none !important;
      color: #292929;
    }
    .settings-header:hover{
      text-decoration: none;
      color: rgb(4,128,154,0.7);
    }
    .set-info{
      margin-left: 10px;
      display: inline-flex;
    }
    .set-head{
      margin-left: 10px;
      color: #9F9FB4;
      font-size: 14px;
      font-weight: 600;
    }
    #amount{
      margin-left: 40px;
      font-weight: 600;
    }
    .set-info h6{
      font-size:12px;
      font-weight: 600;
      color: #9A2804;
      background-color: #FFDDD4 ;
      text-align: center;
      width: 60px;
      margin-left: 40px;
      height: 23px;
      padding: 4px;
      border-radius: 10px;
      cursor: pointer;
    }
    .set-info h6:focus{
      outline: none;
      border: none;
    }
</style>