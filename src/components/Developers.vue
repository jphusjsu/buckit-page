<template>
  <div class="container-size">
    <p class="display-3 white--text" style="margin-bottom: 50px">Who's behind BuckIt!?</p>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <h1>Michael Hyun</h1>
          <img class="picture" src="@/assets/profile/william.jpg"/>
          <p>Software Engineering, SJSU</p>
        </div>
        <div class="back">
          <h1>back</h1>
          <!-- back content -->
        </div>
      </div>
    </div>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <h1>William (Jie Peng) Hu</h1>
          <img class="picture" src="@/assets/profile/william.jpg"/>
          <p>Software Engineering, SJSU</p>
        </div>
        <div class="back">
          <h1>back</h1>
          <!-- back content -->
        </div>
      </div>
    </div>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <h1>Samnang Sok</h1>
          <img class="picture" src="@/assets/profile/william.jpg"/>
          <p>Software Engineering, SJSU</p>
        </div>
        <div class="back">
          <h1>back</h1>
          <!-- back content -->
        </div>
      </div>
    </div>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <h1>Josh Ventocilla</h1>
          <img class="picture" src="@/assets/profile/william.jpg"/>
          <p>Software Engineering, SJSU</p>
        </div>
        <div class="back">
          <h1>back</h1>
          <!-- back content -->
        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<style scoped>
  .container-size {
    margin-top: 100px;
  }
  .picture {
    height: 250px;
    width: 250px;
  }
  /* Source: https://davidwalsh.name/css-flip; */
  /* entire container, keeps perspective */
  .flip-container {
    margin-right: 30px;
    display: inline-block;
    color: white;
    perspective: 1000px;
  }
  /* flip the pane when hovered */
  .flip-container:hover .flipper, .flip-container.hover .flipper {
    transform: rotateY(180deg);
  }
  .flip-container, .front, .back {
    width: 300px;
    height: 320px;
  }
  /* flip speed goes here */
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  /* hide back of pane during swap */
  .front, .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: gray;
  }
  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }
  /* back, initially hidden pane */
  .back {
    transform: rotateY(180deg);
  }
</style>
