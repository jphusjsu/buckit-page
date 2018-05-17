<template>
  <div>
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
    <br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { src: 'senior_projectmeng.jpg' },
        { src: 'senior_project.jpg' },
        { src: 'senior_project-2.jpg' },
        { src: 'senior_project-3.jpg' },
        { src: 'senior_project-4.jpg' }
      ]
    }
  },
  methods: {
    getImage (img) {
      return require('../assets/gallery/' + img)
    }
  }
}
</script>

<style scoped>
  .slogan-size {
    font-size: 70px;
    margin-bottom: 10px
  }
  .image-size {
    height: 650px;
  }
  @media (max-width: 600px) {
    .image-size {
      height: 300px;
    }
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px
    }
    .carousel-size {
      height: 325px;
    }
  }
</style>
