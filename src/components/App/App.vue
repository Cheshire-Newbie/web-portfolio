<template>
  <v-app id="container" class="background">
    <v-app-bar absolute class="menu-bar primary" app>
      <div class="iconHome">
        <v-btn depressed icon to="/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
      <div class="menuBarButtons">
        <v-btn icon large @click="dayMode">
          <v-icon>{{ lightBulbIcon }}</v-icon>
        </v-btn>
        <Hamburger @showEvent="menuStart" />
      </div>
    </v-app-bar>
    <v-main>
      <MenuList app :show="showMenuList" @close="menuStart" />
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script src="./App.js"/>
<style src="./App.css"/>
