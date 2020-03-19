<template>
  <main>
      <div>
          <p class="progress-bar-text">
              <slot></slot>
          </p>
          <div class="progress-bar-container">
              <p class="percen-tage">
                  {{ width }}%
              </p>
            <div class="progress-bar" :style="`background: ${background}; width: ${width}%`"></div>
          </div>
          
      </div>
  </main>
</template>

<script>
export default {
    props: {
        background: String,
        width: Number,
        
    }
}
</script>

<style>
.progress-bar-container{
    background-color: #A0E2F5;
    position: relative;
    border-radius: 9px;
    height: 7px;
}
.progress-bar{
    border-radius: 9px;
    height: 7px;
    position: absolute;
}
.percen-tage{
    position: absolute;
    top:-19px;
    right: 0;
}
</style>