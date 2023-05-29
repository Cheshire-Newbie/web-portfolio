<template>
  <div class="containerHireMe" color="background">
    <div class="windowContact">
      <div class="iconField">
        <div class="adress">
          <div class="iconAdress">
            <v-icon>mdi-map-marker</v-icon>
          </div>
          <h3 class="textAdress">Adress:</h3>
          <div>via Nino Bixio 4</div>
          <div>Guastalla (RE) Italy</div>
        </div>
        <div class="phone">
          <div class="iconPhone">
            <v-icon>mdi-phone-in-talk</v-icon>
          </div>
          <h3 class="textPhone">Phone:</h3>
          <div>+39 3898599292</div>
        </div>
        <div class="email">
          <div class="iconEmail">
            <v-icon>mdi-send-variant-outline</v-icon>
          </div>
          <h3 class="textEmail">Email:</h3>
          <div>barbierimarta93@gmail.com</div>
        </div>
        <div class="website">
          <div class="iconWebsite">
            <v-icon>mdi-github</v-icon>
          </div>
          <h3 class="textWebsite">Github:</h3>
          <div>https://github.com/Cheshire-Newbie/web-portfolio</div>
        </div>
      </div>
      <div class="contactPole">
        <div class="avatar"></div>
        <div class="pa-3 contactUs">
          <v-text-field
            required
            clearable
            no-resize
            color="black"
            label="Write the email here!"
            v-model="email"
          >
          </v-text-field>
          <v-text-field
            required
            clearable
            no-resize
            color="black"
            label="Write the subject here!"
            v-model="subject"
          >
          </v-text-field>
          <v-textarea
            required
            clearable
            rows="5"
            no-resize
            color="black"
            label="Write Your message here!"
            v-model="message"
          >
          </v-textarea>
          <div class="btnField">
          <v-btn depressed color="secondaryAccent" @click="sendEmail"
            >SEND</v-btn
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./HireMe.js"/>
<style src="./HireMe.css"/>