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
                  v-model="selectedTerm.term"
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
              <v-btn depressed color="secondaryAccent" @click="checkTerm"
                >check</v-btn
              >
              <v-btn
                depressed
                color="secondaryAccent"
                @click="addDictionary = true"
                >ADD</v-btn
              >
            </div>
            <div class="answerField">
              <div class="definition" v-if="selectedTerm.definition !== ''">
                {{ selectedTerm.definition }}
              </div>
              <!-- jeśli jest zaznaczony jakiś termin i nie ma on pustego pola wpisanego w definition i/lub w example, to pokaż definition i/lub example -->
              <div class="example" v-if="selectedTerm.definition !== ''">
                {{ selectedTerm.example }}
              </div>
            </div>
          </v-card>
          <div class="indexDictionary">
            <v-card
              @click="selectedTerm = indexTerm"
              v-for="indexTerm of terms"
              :key="indexTerm.term"
            >
              {{ indexTerm.term }}
            </v-card>
          </div>
        </v-card>
        <v-card-actions class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false" color="secondaryAccent"
            >Exit</v-btn
          >
        </v-card-actions>

        <!-- tutaj jest dialog z opcja dodawania do bazy danych wpisow -->
        <v-dialog width="70%" v-model="addDictionary">
          <v-card color="primary" height="60vh" class="d-flex flex-column">
            <div class="answerField">
              <v-text-field
                v-model="addTerm.term"
                :rules="termRules"
                required
                clearable
                rows="1"
                no-resize
                color="black"
                label="Write the term here!"
                class="term"
              ></v-text-field>
              <v-textarea
                v-model="addTerm.definition"
                :rules="termRules"
                required
                clearable
                rows="7"
                no-resize
                color="black"
                label="Write the definition here!"
                class="definition"
              ></v-textarea>
              <v-textarea
                v-model="addTerm.example"
                :rules="termRules"
                required
                clearable
                rows="2"
                no-resize
                color="black"
                label="Give an example!"
                class="example"
              ></v-textarea>
            </div>
            <div class="btnField">
              <v-card-actions>
                <v-btn
                  color="secondaryAccent"
                  :disabled="!valid"
                  @click="saveTerm"
                  >Save</v-btn
                >
                <v-btn @click="addDictionary = false" color="secondaryAccent"
                  >Exit</v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-dialog>

        <!-- titaj jest kod od alertu -->
        <v-alert
          class="alert"
          shaped
          dark
          :color="alertColor"
          v-model="showAlert"
          @click="
            () => {
              if (currentAlertResolve) currentAlertResolve();
            }
          "
          transition="slide-x-reverse-transition"
        >
          {{ alertText }}
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Dictionary.js"/>
<style src="./Dictionary.css"/>