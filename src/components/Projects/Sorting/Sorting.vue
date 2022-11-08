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
        <v-card-title>Sorting</v-card-title>
        <v-card-text>opis sortingu</v-card-text>
        <v-card tile color="background" class="containerSorting">
            <v-btn depressed color="secondaryAccent" @click="Randomise">Randomise</v-btn>
            {{unsortedArray}}
          <v-btn depressed color="secondaryAccent" @click="SortZbysiowy">Sort</v-btn>
          {{sortedArray}}
        </v-card>
        <v-card-actions class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false">Exit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Sorting.js"/>
<style src="./Sorting.css"/>