<template>
  <div>
    <v-btn depressed color="secondaryAccent" @click="showDialog = true"
      >Try it live</v-btn
    >
    <v-dialog fullscreen v-model="showDialog">
      <v-card
        color="primary"
        class="d-flex flex-column"
        width="100%"
        height="100%"
      >
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>{{description}}</v-card-text>
        <v-card
          tile
          color="background"
          class="catContainer"
        >
        <!-- <img src="@/assets/3042.jpg"/> -->
          <div class="cat" @click="methodCat">
            <v-btn depressed color="secondaryAccent" v-if="isButton"
              >Click me!</v-btn
            >
            <img v-else :src="catSurprise" />
          </div>
        </v-card>
        <v-card-actions class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false">Exit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Cat.js"/>
<style src="./Cat.css"/>
