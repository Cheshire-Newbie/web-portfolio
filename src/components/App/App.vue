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
    <MenuList :show="showMenuList"/>

    <router-view> </router-view>
  </v-app>
</template>

<script src="./App.js"/>
<style src="./App.css"/>
