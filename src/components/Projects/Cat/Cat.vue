<template>
  <div class="cat" @click="emitCatToParent">
    <!-- <img :src="catSurprise"/> -->
    <v-btn depressed color="secondaryAccent" v-if="isButton">Click me!</v-btn>
    <img v-else :src="catSurprise" />
  </div>
</template>

<script src="./Cat.js"/>
<style src="./Cat.css"/>
