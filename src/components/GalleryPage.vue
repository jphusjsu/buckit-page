<template>
  <div>
    <br><br>
    <v-carousel style="height:100%">
      <v-carousel-item v-for="(item,i) in items" :key="i">
        <!-- <img class="photo-sizing" :src="getImage(item.src)"> -->
        <v-flex>
          <v-card-media
          :src="getImage(item.src)"
          height="650px"
          contain
          ></v-card-media>
        </v-flex>
      </v-carousel-item>
    </v-carousel>
    <br><br><br>
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
