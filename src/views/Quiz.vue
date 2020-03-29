<template>
  <main>
      <section>
          <div>
              <p style="font-size: 16px;">
                  <i class="fas fa-angle-double-left"></i>
                  Back
              </p>
          </div>
          <div class="card-title" style="color: #04809A">
            <p>Add New Question</p>
          </div>
      </section>
      <section>
          <div class="card pa-3 card-style" style="width: 50rem;">
              <div class="card-body pa-3">
                <div>
                    <p class="option-header">Question</p>
                    <b-form-textarea id="textarea" v-model="text" placeholder="Enter the question" rows="3" max-rows="3"></b-form-textarea>
                </div>
                <div>
                    <p class="option-header mt-4">Options</p>
                </div>
                <div class="row">
                    <div class="options col-6 mb-4">
                        <!-- <span>A.</span> -->
                        <b-form-textarea id="textarea" v-model="text" placeholder="A" rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4 mt-1 la-radio">
                            <input class="form-check-input " type="radio" name="correctAnswer" id="option1" value="A" >
                            <label class="form-check-label " for="option1">
                              Correct Answer
                            </label>
                            <div class="check"></div>
                        </div>
                        
                    </div>
                    <div class="options col-6 mb-4">
                        <!-- <span>B.</span> -->
                        <b-form-textarea id="textarea" v-model="text" placeholder="B" rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4 mt-1 la-radio">
                            <input class="form-check-input" type="radio" name="correctAnswer" id="option2" value="B" >
                            <label class="form-check-label" for="option2">
                              Correct Answer
                            </label>
                            <div class="check"></div>
                        </div>
                        
                    </div>
                    <div class="options col-6 mb-4">
                        <!-- <span>C.</span> -->
                        <b-form-textarea id="textarea" v-model="text" placeholder="C" rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4 mt-1 la-radio">
                            <input class="form-check-input" type="radio" name="correctAnswer" id="option3" value="C" >
                            <label class="form-check-label" for="option3">
                              Correct Answer
                            </label>
                            <div class="check"></div>
                        </div>
                        
                    </div>
                    <div class="options col-6 mb-4">
                        <!-- <span>D.</span> -->
                        <b-form-textarea id="textarea" v-model="text" placeholder="D" rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4  mt-1 la-radio">
                            <input class="form-check-input" type="radio" name="correctAnswer" id="option4" value="D" checked>
                            <label class="form-check-label" for="option4">
                              Correct Answer
                            </label>
                            <div class="check"></div>
                        </div>
                    </div>
                </div>
                <button style="background-color: #04809A;  border: none;" class="btn btn-primary" type="submit">Add Question</button>
              </div>
          </div>
      </section>
  </main>
</template>

<script>
export default {
data (){
  return {
    addedQuestions: [],
    newQuestion: {
      "question": "",
      "options": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
      },
      correctAnswer: "", 
    }
  }
}
}
</script>

<style scoped>
/* .options{
    display:flex;
} */
.card-style{
      border: none;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
      /* background-color: #F6FAFB; */
}
.card-body{
    padding: 2.5rem !important;
}
.card-title p{
    /* color: #04809A; */
    font-weight: 600;
    margin-bottom: 5px !important;
}
.option-header{
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5px !important;
}
.la-radio input[type=radio]{
     position: absolute;
  visibility: hidden;
}
.la-radio label{
  display: block;
  position: relative;
  /* font-weight: 300; */
  font-size: 14px;
  /* padding: 25px 25px 25px 80px; */
  margin: 10px auto;
  height: 20px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s linear;
}
textarea.form-control{
  font-size: 14px

}
.la-radio:hover label{
	color: rgb(4,128,154,0.7);
}
.la-radio .check{
  display: block;
  position: absolute;
  border: 2px solid #292929;
  border-radius: 100%;
  height: 13px;
  width: 13px;
  top: 69px;
  left: 17px;
  z-index: 5;
  transition: border .25s linear;
  -webkit-transition: border .25s linear;
}
.la-radio:hover .check {
  border: 2px solid rgb(4,128,154,0.7);
}
.la-radio .check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 7px;
  width: 7px;
  top: 1px;
  left: 1px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}
input[type=radio]:checked ~ .check {
  border: 2px solid  #04809A;
}
input[type=radio]:checked ~ .check::before{
  background:  #04809A;
}

input[type=radio]:checked ~ label{
  color:  #04809A;
}
</style>