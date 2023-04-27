<template>
  <div class="containerHome">
    <transition name="slide-left">
      <h2 v-if="titleElement" class="homeMessage invertedMargins">
        Hi, my name is
      </h2>
    </transition>
    <transition name="slide-right">
      <h1 v-if="nameElement" class="homeMessage">Marta Barbieri.</h1>
    </transition>
    <transition name="slide-left">
      <h2 v-if="specialistElement" class="homeMessage">
        I'm learning about web design and development.
      </h2>
    </transition>
    <transition name="slide-right">
      <h2 v-if="InvitationElement" class="homeMessage">
        This is my playground and sandbox <br />
        Keep your boots on, select your language and come in!
      </h2>
    </transition>
    <transition name="slide-bottom">
    <div v-if="BottonElement" class="languageBar">
      <v-btn depressed icon to="/about_me">
        <img width="40px" height="40px" :src="italyFlag" />
      </v-btn>
      <v-btn depressed icon to="/about_me">
        <img width="40px" height="40px" :src="polandFlag" />
      </v-btn>
      <v-btn depressed icon to="/about_me">
        <img width="40px" height="40px" :src="ukFlag" />
      </v-btn>
    </div>
    </transition>
  </div>
</template>

<script src="./Home.js"/>
<style src="./Home.css"/>