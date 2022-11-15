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
          <div>
            <v-btn depressed color="secondaryAccent" @click="Randomise" :disabled="randomiseRunning" :loading="randomiseRunning"
              >Randomise</v-btn
            >
            <!-- <div>{{ unsortedArray }}</div> -->
              <transition-group name="columns" class="graph" tag="div">
              <div
                v-for="(number, index) of unsortedArray"
                :key="'unsorted' + index"
                class="column"
                :style="
                  'height: ' + 100 * (number / dlugosc) + '%;' +
                  'width: ' + 90 * ( 1 / dlugosc) + '%;'
                "
              ></div>
              </transition-group>
            </div>
          <div>
            <v-btn depressed color="secondaryAccent" @click="Sort">Sort</v-btn>
             <!-- <div>{{ sortedArray }}</div> -->
              <transition-group name="columns" class="graph" tag="div">
              <div
                v-for="(number, index) of sortedArray"
                :key="'sorted' + index"
                class="column"
                :style="
                'height: ' + 100 * (number / dlugosc) + '%;' +
                  'width: ' + 90 * ( 1 / dlugosc) + '%;'"
              ></div>
              </transition-group>
          </div>
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