<template>
  <main id="dashbaord-home">
    <section class="page-name">
      <h6>Dashboard</h6>
      <p>Tuesday,June 14,2020</p>
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
                    <h6 class="card-subtitle mb-2 ">Number Of Sections</h6>
                    <p class="card-text stat-value">21</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-book-open" style="color:#04809A"></i></h5>
                    <h6 class="card-subtitle mb-2 ">Number Of Topics</h6>
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
                      <i class="fas fa-question-circle" style="color:#04809A"></i>
                    </h5>
                    <h6 class="card-subtitle mb-2">Income</h6>
                    <p class="card-text stat-value">345,980.67</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-users" style="color:#04809A"></i></h5>
                    <h6 class="card-subtitle mb-2" >Number Of Users</h6>
                  <p class="card-text stat-value">248</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-style">
              <div class="card-body recent-activity">
                <h6 class="card-subtitle mb-2">Recent Activity</h6>
                <p class="card-text">You added corona virus to a section</p>
                <p class="card-text">You added corona virus to a section</p>
                <p class="card-text">You added corona virus to a section</p>
                <p class="card-text">You added corona virus to a section</p>
                <p class="card-text">You added corona virus to a section</p>
                <p class="card-text">You added corona virus to a section</p>
                <p class="card-text">You added corona virus to a section</p>
              </div>
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
</style>