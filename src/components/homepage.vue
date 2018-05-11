<template>
  <div>
    <v-toolbar color="grey darken-4" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">BuckIt!</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>About Us</v-btn>
        <v-btn flat>Team</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <p id="slogan-style">{{ slogan }}</p>
      <div>
        <img class="img-icons" src="@/assets/placeholder.png"/>
        <img class="img-icons" src="@/assets/plus.png"/>
        <img class="img-icons" src="@/assets/checked.png"/>
      </div>
    </v-container>
    <v-carousel>
      <v-carousel-item v-for="(item, i) in contents" :key="i">
         <v-flex xs12>
            <v-card class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row wrap justify-center>
                  <v-flex xs4>
                    <div>
                      <div class="display-2">{{ item.headline }}</div>
                      <br>
                      <v-card-text class="headline" style="text-align: left;">
                        {{ item.content }}<br><br>
                        {{ item.pt1 }}<br>
                        {{ item.pt2 }}<br>
                        {{ item.pt3 }}
                      </v-card-text>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="getImage(item.srcs)"
                      height="420px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
      </v-carousel-item>
    </v-carousel>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slogan: 'Create. List. Do.',
      contents: [
        {
          headline: 'Login Feature',
          content: 'We offer multiple options for authentication, and we promise that your passwords are encrypted and protected',
          pt1: '- Authentication via email/password',
          pt2: '- Authentication via Gmail',
          pt3: '- Authentication via Facebook',
          srcs: 'login.gif'
        },
        {
          headline: 'Bucket Feature',
          content: 'Buckets are essential in our app: they provide the space where you can save all the activites that you wish to do some day.',
          pt1: '- Create, Edit, Delete Buckets',
          pt2: '- Add activities to any Buckets',
          pt3: '- Unlimited buckets',
          srcs: 'createBucket.gif'
        },
        {
          headline: 'Activity Feature',
          content: 'Activities are the heart of our app. Locals can add any activity to our database and they are ready to be shared to the World to see',
          pt1: '- Create an activity',
          pt2: '- Add an activity to your Buckets!',
          pt3: '- Mark an activity \'Completed\' as you go',
          srcs: 'createActivity.gif'
        },
        {
          headline: 'Comments/Voting Feature',
          content: 'Any activity can be commented by any user as \'Tips\' and it can be upvoted as your favorite!',
          pt1: '- See/Add comments of an activity',
          pt2: '- Make \'Favorite\' an activity',
          pt3: '',
          srcs: 'commentAndVote.gif'
        },
        {
          headline: 'Mapping Feature',
          content: 'Wish to see what\'s around you? Use the map view instead',
          pt1: '- Activities around your current location',
          pt2: '- Zoom in/out to explore activities in a bigger radius',
          pt3: '- View details of an activity from the map',
          srcs: 'useMaps.gif'
        }
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
  #slogan-style {
    margin-top: 50px;
    /*text-align: center;*/
    color: white;
    font-size: 50px;
  }
  .img-icons {
    margin-right: 50px;
    margin-left: 50px;
    height: 65px;
    width: 65px;
    padding: 12px 12px 12px 12px;
    border-radius: 50%;
    background-color: white;
  }
</style>

<!-- <script>
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script> -->
