<template>
  <div>
    <v-toolbar color="grey darken-4" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title class="white--text">BuckIt!</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link to="/LearnMore">
          <v-btn flat>Learn More</v-btn>
        </router-link>
         <router-link to="/Gallery">
          <v-btn flat>Gallery</v-btn>
        </router-link>
        <router-link to="/Developers">
          <v-btn flat>Developers</v-btn>
        </router-link>
      </div>
      <div class="hidden-md-and-up">
        <v-layout wrap style="height: 150px;">
          <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            height="200px"
          >
            <v-list class="pa-1">
              <v-list-tile avatar to="/">
                <v-list-tile-avatar>
                  <img src="@/assets/icons/buckit_icon.png" >
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>BuckIt!</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <!-- List items below -->
            <v-list class="pt-0" dense>
              <v-divider></v-divider>
              <v-list-tile v-for="item in items" :key="item.title" :to="item.linkTo">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-layout>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Learn More', icon: 'info', linkTo: 'LearnMore' },
        { title: 'Gallery', icon: 'photo_library', linkTo: 'Gallery' },
        { title: 'Developers', icon: 'people', linkTo: 'Developers' }
      ]
    }
  }
}
</script>
