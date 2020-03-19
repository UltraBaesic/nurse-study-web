<template>
  <main>
      <section>

      </section>
      <section>
          <div class="card pa-5 card-style" style="width: 60rem;">
              <div class="card-body">
                <div class="card-title">
                  <p>New Question</p>
                </div>
                <div>
                    <p class="option-header">Question</p>
                    <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="2" max-rows="2"></b-form-textarea>
                </div>
                <div>
                    <p class="option-header mt-5">Options</p>
                </div>
                <div class="row">
                    <div class="options col-6 mb-4">
                        <span>A.</span>
                        <b-form-textarea id="textarea" v-model="text" placeholder="First Option..." rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4">
                            <input class="form-check-input " type="radio" name="correctAnswer" id="option1" value="A" >
                            <label class="form-check-label " for="option1">
                              Correct Answer
                            </label>
                        </div>
                        
                    </div>
                    <div class="options col-6 mb-4">
                        <span>B.</span>
                        <b-form-textarea id="textarea" v-model="text" placeholder="Second Option..." rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4">
                            <input class="form-check-input" type="radio" name="correctAnswer" id="option2" value="B" >
                            <label class="form-check-label" for="option2">
                              Correct Answer
                            </label>
                        </div>
                        
                    </div>
                    <div class="options col-6 mb-4">
                        <span>C.</span>
                        <b-form-textarea id="textarea" v-model="text" placeholder="Third Option..." rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4">
                            <input class="form-check-input" type="radio" name="correctAnswer" id="option3" value="C" >
                            <label class="form-check-label" for="option3">
                              Correct Answer
                            </label>
                        </div>
                        
                    </div>
                    <div class="options col-6 mb-4">
                        <span>D.</span>
                        <b-form-textarea id="textarea" v-model="text" placeholder="Forth Option..." rows="2" max-rows="2"></b-form-textarea>
                        <div class="ml-4">
                            <input class="form-check-input" type="radio" name="correctAnswer" id="option4" value="D" checked>
                            <label class="form-check-label" for="option4">
                              Correct Answer
                            </label>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Add Question</button>
              </div>
          </div>
      </section>

      <section>
          <div>
              <div>
                  <p>Set Questions</p>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
                  <div class="ans">
                      <p>Answer:  A </p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
                  <div class="ans">
                      <p>Answer:  A </p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
                  <div class="ans">
                      <p>Answer:  A </p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
                  <div class="ans">
                      <p>Answer:  A </p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
              </div>
              <div class="questions pb-4">
                  <div class="question">
                      <p>1.   What is the name of the president of the united states of America?</p>
                  </div>
                  <div class="options">
                      <p>A. President Olusegun Obasanjo</p>
                      <p>B. President Barrack Obama</p>
                      <p>C. President Donald Trump</p>
                      <p>D. President Hillary Clinton</p>
                  </div>
              </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit Questions</button>
      </section>
  </main>
</template>

<script>
export default {

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
    color: #04809A;
    font-weight: 600;
}
.option-header{
    font-weight: 600;
    margin-bottom: 5px !important;
}
</style>