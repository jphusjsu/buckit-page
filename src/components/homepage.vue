<template>
  <div>
    <v-container text-xs-center white--text>
      <p class="slogan-size">{{ slogan }}</p>
    </v-container>
    <div>
      <img class="img-icons" src="@/assets/icons/placeholder.png"/>
      <img class="img-icons" src="@/assets/icons/plus.png"/>
      <img class="img-icons" src="@/assets/icons/checked.png"/>
    </div>
    <v-carousel :interval=20000 class="carousel-size">
      <v-carousel-item v-for="(item, i) in contents" :key="i">
         <v-flex sm md12>
            <v-card class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row wrap justify-center>
                  <v-flex sm2 md6 lg4>
                    <div>
                      <div class="carousel-text">{{ item.headline }}</div>
                      <br>
                      <v-card-text class="text-xs-left carousel-text-sm">
                        {{ item.content }}<br><br>
                        {{ item.pt1 }}<br>
                        {{ item.pt2 }}<br>
                        {{ item.pt3 }}
                      </v-card-text>
                    </div>
                  </v-flex>
                  <v-flex md5 lg4 class="hidden-sm-and-down">
                    <v-card-media
                      :src="getImage(item.srcs)"
                      height="380px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
      </v-carousel-item>
    </v-carousel>
    <v-layout white--text>
      <v-flex>
        <p id="promotion-text">Coming soon . . . <img src="@/assets/app-resource/appStoreLogo.png" id="appleLogo"></p>
      </v-flex>
    </v-layout>
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
          srcs: 'createBucketShort.gif'
        },
        {
          headline: 'Activity Feature',
          content: 'Activities are the heart of our app. Locals can add any activity to our database and they are ready to be shared to the World to see',
          pt1: '- Create an activity',
          pt2: '- Add an activity to your Buckets!',
          pt3: '- Mark an activity \'Completed\' as you go',
          srcs: 'createActivityShort.gif'
        },
        {
          headline: 'Comments/Voting Feature',
          content: 'Any activity can be commented by any user as \'Tips\' and it can be upvoted as your favorite!',
          pt1: '- See/Add comments of an activity',
          pt2: '- Make \'Favorite\' an activity',
          pt3: '',
          srcs: 'commentAndLikeShort.gif'
        },
        {
          headline: 'Mapping Feature',
          content: 'Wish to see what\'s around you? Use the map view instead',
          pt1: '- Activities around your current location',
          pt2: '- Zoom in/out to explore activities in a bigger radius',
          pt3: '- View details of an activity from the map',
          srcs: 'useMapsShort.gif'
        }
      ]
    }
  },
  methods: {
    getImage (img) {
      return require('../assets/app-resource/' + img)
    }
  }
}
</script>

<style scoped>
  .slogan-size {
    font-size: 70px;
    margin-bottom: 0;
  }
  .carousel-text {
    font-size: 45px;
  }
  .carousel-text-sm {
    font-size: 25px;
  }
  .img-icons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 20px;
    height: 65px;
    width: 65px;
    padding: 12px 12px 12px 12px;
    border-radius: 50%;
    background-color: white;
  }
  #promotion-text {
    padding: 20px 0 30px 0;
    font-size: 50px;
  }
  #appleLogo {
    height: 70px;
    width: 280px;
  }
  @media (max-width: 600px) {
    .slogan-size {
      font-size: 45px;
      margin-bottom: 10px
    }
    .carousel-size {
      height: 350px;
      margin-bottom: 10px;
    }
    .carousel-text {
      font-size: 35px;
    }
    .carousel-text-sm {
      text-align: left;
      font-size: 15px;
    }
    .img-icons {
      margin: 0 12px 12px 12px;
    }
    #promotion-text {
      padding: 0px 0 30px 0;
      font-size: 30px;
    }
    #appleLogo {
      height: 70px;
      width: 280px;
    }
  }
</style>
