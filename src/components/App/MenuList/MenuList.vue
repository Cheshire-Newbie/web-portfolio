<template>
  <v-expand-x-transition>
    <div class="menuList secondary" v-if="show">
      <div class="linkText secondaryAccent tertiary--text">
        <v-btn depressed color="secondaryAccent" to="/about_me">About me</v-btn>
        <v-btn depressed color="secondaryAccent" to="/road_map">Road Map</v-btn>
        <v-btn depressed color="secondaryAccent" to="/projects">Projects</v-btn>
        <v-btn depressed color="secondaryAccent" to="/hire_me">Hire me!</v-btn>
        <div class="iconHome">
        <v-btn depressed icon to="/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <div class="languageBar">
        <v-btn depressed icon>
          <img width="30px" height="30px" :src="italyFlag"/>
        </v-btn>
        <v-btn depressed icon>
          <img width="30px" height="30px" :src="polandFlag"/>
        </v-btn>
        <v-btn depressed icon>
          <img width="30px" height="30px" :src="ukFlag"/>
        </v-btn>
      </div>
      </div>
      </div>
    </div>
  </v-expand-x-transition>
</template>

<script src="./MenuList.js"/>
<style src="./MenuList.css"/>