<template>
  <main id="dashbaord-home">
    <section class="page-name">
      <h6>Dashboard</h6>
      <p>{{timestamp | todaysDate}}</p>
    </section>

    <section class="main-body">
      <div class="statistics-card">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-book-medical" style="color:#04809A"></i>
                    </h5>
                    <h6 class="card-subtitle mb-2 ">Number Of Topics</h6>
                    <p class="card-text stat-value">{{ showSection.length }}</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-book-open" style="color:#F8A24C"></i></h5>
                    <h6 class="card-subtitle mb-2 ">Number Of Documents</h6>
                  <p class="card-text stat-value">123</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-question-circle" style="color:#3AC29C"></i>
                    </h5>
                    <h6 class="card-subtitle mb-2">Income</h6>
                    <p class="card-text stat-value">345,980.67</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-users" style="color:#F36386"></i></h5>
                    <h6 class="card-subtitle mb-2" >Number Of Users</h6>
                  <p class="card-text stat-value">{{ Users.length }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-style">
              <div class="card-body recent-activity">
                <h6 class="card-subtitle mb-2">Recent Activity</h6>
                <div class="activities">
                  <ul>
                    <li>
                        <div class="new d-flex justify-content-between">
                            <p>You added a new Section: Corona Virus</p>
                            <p class="date">13 mins. ago</p>
                        </div>
                    </li>
                    <li>
                        <div class="new d-flex justify-content-between">
                          <p>Blocked a User: adewale@gmail.com</p>
                          <p class="date">yesterday</p>
                        </div>
                    </li>
                    <li>
                        <div class="new d-flex justify-content-between">
                            <p>BAdded a new video under section: Blood</p>
                            <p class="date">2 days ago</p>
                        </div>
                    </li>
                    <li>
                        <div class="new d-flex justify-content-between">
                            <p>Added 5 new questions</p>
                            <p class="date">3 days ago</p>
                        </div>
                    </li>
                    <li>
                        <div class="new d-flex justify-content-between">
                            <p>Deleted a Video from Section: Bone Injury</p>
                            <p class="date">3 days ago</p>
                        </div>
                    </li>
                    
                  </ul>
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
// import { mapActions } from 'vuex'

export default {
  methods: {
  // ...mapActions([
  //   'getAllSections',
  //   'getAllUsers',
  //   ]),
  },
  computed:{
    showSection() {
      return this.$store.state.Sections.allSections
    },
    Users() {
        return this.$store.state.Users.allUsers
        },
  },
  // async mounted() {
  //       await this.getAllUsers()
  //   }
}
</script>

<style scoped>
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
.stat-value{
  font-size: 22px;
  font-weight: 500;
  /* color: #707070; */
}
.recent-activity h6{
  font-weight: 600;
  margin-top: 5px;
  padding-bottom: 15px;
}
.recent-activity p{
  font-size: 14px;
}
.new .date{
  font-size: 12px;
  color: #9f9f9f
}
.activities ul{
  padding-left: 20px;
  /* list-style: none; */
}
</style>
