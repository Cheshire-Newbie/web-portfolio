<template>
  <div>
    <v-btn depressed color="secondaryAccent" @click="onShowDialog"
      >Try it live</v-btn
    >
    <v-dialog fullscreen v-model="showDialog">
      <v-card class="primaryCard"
        color="primary"
        
        style="overflow-x: hidden;"
        width="100%"
        height="100vh"
      >
      <Hamburger class="hamburgerIndex" @showEvent="menuIndex" />
        <v-card-title ref="title" style="flex-grow: 0; flex-shrink: 0">{{ title }}</v-card-title>
        <v-card-subtitle ref="subtitle" style="flex-grow: 0; flex-shrink: 0">{{ description }}</v-card-subtitle>

        <v-card-text ref="containerDictionary" :style="containerHeight" tile color="background" class="containerDictionary">
          <v-card class="dictionaryField large pa-3">
            <div class="textField">
              <v-card width="50%" min-width="300px" class="ma-3 mt-0">
                <v-combobox
                  v-model="selectedTerm"
                  label="Enter the term you seek!"
                  color="black"
                  outlined
                  clearable
                  hide-details
                  sigle-line
                  dense
                  background-color="secondaryAccent"
                  :hide-no-data="false"
                  :items="terms"
                  item-text="term"
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        No results matching "<strong>{{ search }}</strong
                        >". Press <kbd>ADD</kbd> to create a new one
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                </v-combobox>
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

          <div class="indexDictionary large overflow-auto">
            <v-card
              class="termIndex"
              color="primary"
              @click="selectedTerm = indexTerm, menuIndex()"
              v-for="indexTerm of terms"
              :key="indexTerm.term"
            >
              {{ indexTerm.term }}
            </v-card>
          </div>
        </v-card-text>
        <v-card-actions ref="actions" style="flex-grow: 0; flex-shrink: 0" class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false" color="secondaryAccent"
            >Exit</v-btn
          >
        </v-card-actions>

        <!-- tutaj jest dialog z opcja dodawania do bazy danych wpisow -->
        <v-dialog width="70%" v-model="addDictionary">
          <v-card color="primary" class="d-flex flex-column">
            <v-form v-model="valid">
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
            </v-form>
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