<template>
  <v-expand-x-transition>
    <div class="menuList secondary" v-if="show">
      <div class="linkText secondaryAccent tertiary--text">
        <v-btn depressed color="secondaryAccent" to="/about_me" @click="$emit('close')">About me</v-btn>
        <v-btn depressed color="secondaryAccent" to="/road_map" @click="$emit('close')">Road Map</v-btn>
        <v-btn depressed color="secondaryAccent" to="/projects" @click="$emit('close')">Projects</v-btn>
        <v-btn depressed color="secondaryAccent" to="/hire_me" @click="$emit('close')">Hire me!</v-btn>
        
      </div>
    </div>
  </v-expand-x-transition>
</template>

<script src="./MenuList.js"/>
<style src="./MenuList.css"/>