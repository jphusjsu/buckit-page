<template>
  <div class="container-size">
    <p class="display-3 white--text" style="margin-bottom: 50px">Who's behind BuckIt!?</p>
    <div v-for="(content, i) in profileContents" :key="i" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <h1>{{ content.name }}</h1>
          <img class="picture" :src="getImage(content.pictureURL)"/>
          <p>Software Engineering, SJSU</p>
        </div>
        <div class="back">
          <h1 style="text-align: center">Biography</h1>
          <h3>Contribution:</h3>
          <p>{{ content.contribution }}</p>
          <h3>Fun Fact:</h3>
          <p>{{ content.funFact }}</p>
          <!-- back content -->
          <div class="cardFooter">
            <h4>Connect with {{ content.name }}</h4>
            <a :href="content.linkedInURL" target="_blank"><img :src="getImage(content.linkedInLogo)"/></a>
            <a :href="content.gitHubURL" target="_blank"><img :src="getImage(content.gitHubLogo)"/></a>
          </div>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profileContents: [
        {
          name: 'William Hu',
          pictureURL: 'william.jpg',
          contribution: 'William is a full-stack developer. He contributed with the Mapping components of BuckIt!',
          funFact: 'He was born and raised in Venezuela a.k.a. LatinAsian',
          linkedInLogo: 'linkedin-logo.svg',
          linkedInURL: 'https://www.linkedin.com/in/william-jp-hu',
          gitHubLogo: 'github-logo.svg',
          gitHubURL: 'https://github.com/jphusjsu'
        },
        {
          name: 'Michael Hyun',
          pictureURL: 'michael.jpeg',
          contribution: '',
          funFact: '',
          linkedInLogo: 'linkedin-logo.svg',
          linkedInURL: 'https://www.linkedin.com/in/michael-hyun/',
          gitHubLogo: 'github-logo.svg',
          gitHubURL: 'https://github.com/michaelhyun'
        },
        {
          name: 'Samnang Sok',
          pictureURL: 'samnang.jpg',
          contribution: '',
          funFact: '',
          linkedInLogo: 'linkedin-logo.svg',
          linkedInURL: 'https://www.linkedin.com',
          gitHubLogo: 'github-logo.svg',
          gitHubURL: 'https://github.com/samnangsok-se'
        },
        {
          name: 'Josh Ventocilla',
          pictureURL: 'logo.png',
          contribution: '',
          funFact: '',
          linkedInLogo: 'linkedin-logo.svg',
          linkedInURL: 'https://www.linkedin.com',
          gitHubLogo: 'github-logo.svg',
          gitHubURL: 'https://github.com/j0mbajuice'
        }
      ]
    }
  },
  methods: {
    getImage (img) {
      return require('../assets/profile/' + img)
    }
  }
}
</script>
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
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    transform: rotateY(180deg);
  }
  .cardFooter {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .cardFooter img {
    display: inline;
    width: 32px;
    height: 32px;
  }
</style>
