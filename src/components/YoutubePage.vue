<template>
  <div class="main-container">
    <v-container text-xs-center white--text>
      <p class="slogan-size">BuckIt demo hosted in Youtube</p>
      <youtube video-id="HfTy2VMQdkY" player-width=300></youtube>
    </v-container>
  </div>
</template>

<style scoped>
  .slogan-size {
    font-size: 70px;
    margin-bottom: 10px
  }
  .main-container {
    background-color: #F57C00;
    width: 100%;
    height: 770px;
  }
  /* iphone 6,7,8 */
  @media (max-width: 600px) and (max-height: 680px) {
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px;
    }
    .main-container {
      height: 670px;
    }
  }
  /* iphone 6,7,8 PLUS */
  @media (min-height: 681px) and (max-height: 750px) {
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px
    }
    .main-container {
      height: 650px;
    }
  }
  /* iphone X */
  @media (min-height: 751px) and (max-height: 820px) {
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px;
    }
    .main-container {
      height: 720px;
    }
  }
</style>
