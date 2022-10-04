<template>
  <div class="bubuTest">
    <v-btn depressed color="secondaryAccent" @click="showDialog = true"
      >No! Click me!</v-btn
    >
    <v-dialog fullscreen v-model="showDialog">
      <v-card
        color="primary"
        class="d-flex flex-column"
        width="100%"
        height="100%"
      >
        <v-card-title>Archer Game</v-card-title>
        <v-card-text>To jest gra, gdzie ubijasz krolicza rasa </v-card-text>
        <v-card
          tile
          color="background"
          class="d-flex flex-grow-1 flexContainer"
        >
          <v-card color="secondary" class="gameSidebar"></v-card>
          <v-card color="secondary" class="gameWindow"></v-card>
        </v-card>
        <v-card-actions class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false">Exit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./GameArcher.js"/>
<style src="./GameArcher.css"/>