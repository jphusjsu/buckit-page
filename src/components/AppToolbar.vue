<template>
  <div>
    <v-toolbar color="grey darken-4" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title class="white--text">BuckIt!</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div>
        <v-toolbar-items class="hidden-sm-and-down">
          <router-link to="/LearnMore">
            <v-btn flat>Learn More</v-btn>
          </router-link>
          <router-link to="/Developers">
            <v-btn flat>Developers</v-btn>
          </router-link>
        </v-toolbar-items>
      </div>
    </v-toolbar>
  </div>
</template>
