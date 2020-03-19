<template>
  <div>
      <section class="header">
          <div>
              <p>
                  <i class="fas fa-angle-double-left"></i>
                  Back to Sections
              </p>
          </div>
          <div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Premium</option>
                <option value="1">Free</option>
              </select>
          </div>
      </section>

      <section class="about-section">
          <div class="row">
              <div class="col-3">
                  <div class="card card-style">
                    <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h6 class="card-title">Pharmacology</h6>
                      <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <Tab name="Articles">
                    <div class="row">
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open"></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open" ></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open" ></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open"></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open" ></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open"></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open"></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #048464; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open"></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
                                      <i class="fas fa-trash"></i>
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card card-style">
                              <div class="card-body card-styling">
                                <h5 class="card-title">Taking Blood Samples</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="d-flex" style="display: flex; justify-content: space-between !important;">
                                  <p style="margin-bottom: 0px !important;">
                                    <i class="fas fa-book-open" ></i> 124 Reads
                                  </p>
                                  <div class="d-flex justify-content-end">
                                    <p class= "mr-4" style="font-size: 12px; color: #04809A; margin-bottom: 0px !important;">
                                      <i class="fas fa-pen"></i>
                                      Edit
                                    </p>
                                    <p class= "" style="font-size: 12px; color: #9A2804; margin-bottom: 0px !important;">
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
                    <div class="row">
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card card-style">
                            <video height="195" controls>
                              <source src="../assets/vid/152 Creating text along a circle.mp4" type="video/mp4">
                              <source src="movie.ogg" type="video/ogg">
                              Your browser does not support the video tag.
                            </video>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                    </div>
                  </Tab>
                  <Tab name="Audios">
                    <div class="row">
                      <div class="col-4">
                          <div class="card card-style">
                            <audio controls> 
                              <source src="horse.ogg" type="audio/ogg">
                              <source src="horse.mp3" type="audio/mpeg">
                              Your browser does not support the audio element.
                            </audio>
                            <div class="card-body card-styling">
                              <h6 class="card-title">Lecture on how to draw a circle</h6>
                            </div>
                          </div>
                        </div>
                    </div>
                  </Tab>
                  <Tab name="Quiz">
                    <div class=" row quiz-stats">
                      <div class="quiz-det ml-3">
                        <div class="d-flex justify-content-end">
                          <p class= "mr-4" style="font-size: 12px; color: #04809A;">
                            <i class="fas fa-pen"></i>
                            Edit Quiz
                          </p>
                          <p class= "mr-3" style="font-size: 12px; color: red">
                            <i class="fas fa-trash"></i>
                            Delete Quiz
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 1</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 2</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 3</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 4</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 5</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 6</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 7</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 8</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 9</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-style">
                            <div class="card-body card-styling">
                              <div class="questions pb-4">
                                <div class="question">
                                    <h6>Question 1</h6>
                                    <p> What is the name of the president of the united states of America?</p>
                                </div>
                                <div class="options">
                                    <p>A. President Olusegun Obasanjo</p>
                                    <p>B. President Barrack Obama</p>
                                    <p>C. President Donald Trump</p>
                                    <p>D. President Hillary Clinton</p>
                                </div>
                                <div class="answer">
                                  Answer: c
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
</template>

<script>
import {Tabs, Tab} from 'vue-tabs-component';
import Progress from '../components/Progress.vue';

export default {
    components: {
        Tabs,
        Tab,
        Progress
    }
}
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
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
</style>