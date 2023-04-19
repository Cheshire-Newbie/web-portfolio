<template>
  <v-app id="container">
    <v-app-bar
      absolute
      class="menu-bar"
     
      flat
      elevation="0"
      app
    >
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
    <transition name="logoBackground">
      <div v-if="logoBackElement" class="logoBack" />
    </transition> 
    <transition name="logo">
      <Logo @finished="hideLogo" class="center" v-if="logoElement"/>
    </transition>
    <v-main>
      <MenuList app :show="showMenuList" @close="menuStart" />
      <router-view :finished="finished"> </router-view>
    </v-main>
  </v-app>
</template>

<script src="./App.js"/>
<style src="./App.css"/>
