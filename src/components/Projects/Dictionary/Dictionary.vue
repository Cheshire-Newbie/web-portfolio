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
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card tile color="background" class="containerDictionary">
          <v-card class="dictionaryField pa-3">
            <div class="textField">
              <v-card width="50%" min-width="200px" class="ma-3 mt-0">
                <v-text-field
                  v-model="dlugosc"
                  label="Enter the term you seek!"
                  color="black"
                  background-color="secondaryAccent"
                  outlined
                  clearable
                  hide-details
                  sigle-line
                  dense
                />
              </v-card>
              <v-btn depressed color="secondaryAccent" @click="Randomise"
                >check</v-btn
              >
            </div>
            <div class="answerField">
              <div class="definition">definiion</div>
              <div class="example">example</div>
            </div>
          </v-card>
          <div class="indexDictionary"></div>
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

<script src="./Dictionary.js"/>
<style src="./Dictionary.css"/>