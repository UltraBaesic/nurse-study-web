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
                    <div class="form-group row">
                      <label for="number" class="col-sm-4 col-form-label" style="font-size: 14px;">Amount for Subscription</label>
                      <div class="col-sm-3">
                        <input type="number" class="form-control" id="number" style="font-size: 14px;" min="0" value="5000" step="100">
                      </div>
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
export default {

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
    .settings-header{
      text-decoration: none !important;
      color: #292929;
    }
    .settings-header:hover{
      text-decoration: none;
      color: rgb(4,128,154,0.7);
    }
</style>