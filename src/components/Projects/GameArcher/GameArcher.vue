<template>
  <div>
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
        <v-card-text>To jest gra, gdzie ubijasz dzicza rasa </v-card-text>
        <v-card
          tile
          color="background"
          class="d-flex flex-grow-1 flexContainer"
        >
          <v-card color="secondary" class="gameSidebar">
            <v-form class="flexForm" v-model="valid">
              <div>
                <v-text-field
                  dense
                  v-model="nameField"
                  label="Your name"
                  :rules="nameRules"
                  required
                >
                </v-text-field>
              </div>
              <div>
                <v-text-field
                  dense
                  v-model="passwordField"
                  label="Your password"
                  :rules="passRules"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
              </div>
              <div style="width: 100%; gap: 10px">
                <v-btn
                  depressed
                  color="secondaryAccent"
                  :disabled="!valid"
                  @click="saveUser"
                  :loading="loadingSaveUser"
                  >SAVE</v-btn
                >
                <v-btn depressed color="secondaryAccent" @click="loginUser"
                  >LOGIN</v-btn
                >
              </div>
            </v-form>
            <div class="iconDiv">
              <v-icon x-large>mdi-pause-circle-outline</v-icon>
              <v-icon x-large>mdi-play-circle-outline</v-icon>
            </div>
          </v-card>
          <v-card color="secondary" class="gameWindow">
            <div class="boar"></div>
            <div 
            class="bush"
            v-for="(position, index) of positions.filter(p => p.top)"
            :key="`bush` + index"
            :style="`top: calc(${position.top} - 192px); left: ${position.left}`">
            </div>

            <!-- komentarz do click = jak wywolujesz wydarzenie to wlacz odpowiedni state dzika i kazdorazowo zeruj index klatek (frame) -->
            <!-- wszystkie przyciski zakomentowane bo nam do chuja niepotrzebne tutaj, beda w credits 
            <v-btn @click="boar.state=0, boar.frame=0">stanie</v-btn>
            <v-btn @click="boar.state=1, boar.frame=0">prychanie</v-btn>
            <v-btn @click="boar.state=2, boar.frame=0">bieg</v-btn>
            <v-btn @click="boar.state=3, boar.frame=0">smierc</v-btn>
            <v-btn @click="boar.state=4, boar.frame=0">reset</v-btn> -->
          </v-card>
        </v-card>
        <v-card-actions class="d-flex justify-end align-center">
          <v-btn @click="showDialog = false">Exit</v-btn>
        </v-card-actions>
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

<script src="./GameArcher.js"/>
<style src="./GameArcher.css"/>