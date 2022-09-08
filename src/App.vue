<template>
  <v-app id="container" class="background">
    <!-- <div class="center">
        {{content}}
        {{pusta}}
    </div> -->
    <div class="menu-bar primary" app>
      <div class="hamburger" @click="menuStart">
        <div class="opacityMode tertiary" />
        <span class="tertiary"></span>
      </div>
      <v-btn icon large class="switchButton" @click="dayMode">
        <v-icon>{{ lightBulbIcon }}</v-icon>
      </v-btn>
    </div>
    <v-expand-x-transition>
      <div class="menuList secondary" v-if="menuList">
        <div class="linkText secondaryAccent tertiary--text">
          <v-btn depressed color="secondaryAccent" to="/about_me">About me</v-btn>
         <v-btn depressed color="secondaryAccent" to="/road_map">Road Map</v-btn>
          <v-btn depressed color="secondaryAccent" to="/about_me">Projects</v-btn>
          <v-btn depressed color="secondaryAccent" to="/road_map">Hire me!</v-btn>
        </div>
      </div>
    </v-expand-x-transition>

    <router-view> </router-view>
  </v-app>
</template>

<script src="./App.js"/>
<style src="./App.css"/>
