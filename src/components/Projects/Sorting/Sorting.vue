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
        min-height="100%"
      >
        <v-card-title>{{title}}</v-card-title>
          <v-card-text>{{description}}</v-card-text>
        <v-card width="50%" min-width="200px" class="ma-3 mt-0">
          <v-text-field
            v-model="dlugosc"
            label="Please enter a value for the sort number"
            color="black"
            background-color="secondaryAccent"
            outlined
            clearable
            hide-details
            sigle-line
            dense
          />
        </v-card>
        <v-card tile color="background" class="containerSorting" width="100%">
          <div class="oneSortDiv">
            <v-btn
              depressed
              color="secondaryAccent"
              @click="Randomise"
              :disabled="disabledBtn"
              :loading="randomiseRunning"
              >Randomise</v-btn
            >
            <!-- <div>{{ unsortedArray }}</div> -->
            <transition-group name="columns" class="graph" tag="div">
              <div
                v-for="(number, index) of unsortedArray"
                :key="'unsorted' + index"
                class="column"
                :style="
                  'height: ' +
                  100 * (number / dlugosc) +
                  '%;' +
                  'width: ' +
                  90 * (1 / dlugosc) +
                  '%;'
                "
              >
                <div class="numberClass">{{ number }}</div>
              </div>
            </transition-group>
          </div>
          <div class="oneSortDiv">
            <v-btn
              depressed
              color="secondaryAccent"
              @click="Sort"
              :loading="sortRunning"
              >Sort</v-btn
            >
            <!-- <div>{{ sortedArray }}</div> -->
            <transition-group name="columns" class="graph" tag="div">
              <div
                v-for="(number, index) of sortedArray"
                :key="'sorted' + index"
                class="column"
                :style="
                  'height: ' +
                  100 * (number / dlugosc) +
                  '%;' +
                  'width: ' +
                  90 * (1 / dlugosc) +
                  '%;'
                "
              >
                <div class="numberClass">{{ number }}</div>
              </div>
            </transition-group>
          </div>
        </v-card>
        <v-card-actions class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false" color="secondaryAccent"
            >Exit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Sorting.js"/>
<style src="./Sorting.css"/>