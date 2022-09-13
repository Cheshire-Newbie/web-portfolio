<template>
  <v-app id="container" class="background">
    <div class="menu-bar primary" app>
      <div class="menuBarButtons">
      <v-btn icon large @click="dayMode">
        <v-icon>{{ lightBulbIcon }}</v-icon>
      </v-btn>
      <Hamburger @showEvent="menuStart"/>
      </div>
    </div>
    <MenuList :show="showMenuList"/>

    <router-view> </router-view>
  </v-app>
</template>

<script src="./App.js"/>
<style src="./App.css"/>
