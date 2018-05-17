<template>
  <div class="main-container">
    <v-container text-xs-center white--text>
      <p class="slogan-size">We just had too much fun...</p>
    </v-container>
    <v-layout>
      <v-carousel class="carousel-size">
        <v-carousel-item v-for="(item,i) in items" :key="i">
          <v-flex>
            <img class="image-size" :src="getImage(item.src)">
           <!--  <v-card-media
            :src="getImage(item.src)"
            height="650px"
            contain
            ></v-card-media> -->
          </v-flex>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { src: 'gallery/senior_projectmeng.jpg' },
        { src: 'gallery/senior_project.jpg' },
        { src: 'gallery/senior_project-2.jpg' },
        { src: 'gallery/senior_project-3.jpg' },
        { src: 'gallery/senior_project-4.jpg' },
        { src: 'app-resource/login.gif' },
        { src: 'app-resource/createBucketShort.gif' },
        { src: 'app-resource/createActivityShort.gif' },
        { src: 'app-resource/commentAndLikeShort.gif' },
        { src: 'app-resource/useMapsShort.gif' }
      ]
    }
  },
  methods: {
    getImage (img) {
      return require('../assets/' + img)
    }
  }
}
</script>

<style scoped>
  .slogan-size {
    font-size: 70px;
    margin-bottom: 10px;
  }
  .image-size {
    height: 500px;
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
    .image-size {
      height: 300px;
    }
    .main-container {
      height: 610px;
    }
    .carousel-size {
      height: 325px;
    }
  }
  /* iphone 6,7,8 PLUS */
  @media (min-height: 681px) and (max-height: 750px) {
    .image-size {
      height: 300px;
    }
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px
    }
    .main-container {
      height: 650px;
    }
    .carousel-size {
      height: 325px;
    }
  }
  /* iphone X */
  @media (min-height: 751px) and (max-height: 820px) {
    .image-size {
      height: 300px;
    }
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px;
    }
    .main-container {
      height: 720px;
    }
    .carousel-size {
      height: 325px;
    }
  }
</style>
