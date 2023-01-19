<template>
  <!-- to jest glowny div -->
  <div class="project">
    <!-- to jest div od obrazka z presentacja projektu -->
    <div class="preview">
      <img :src="presentationProject.data().image" />
      <!-- <img src="@/assets/catanteprime.png" /> -->
    </div>
    <div class="gradient" />
    <!-- to jest drugi div z rzeczami -->
    <div class="information">
      <!-- tu jest div z opisem i tytulem -->
      <div class="description">
        <div d-flex>
          <v-icon
            v-for="(icon, index) of presentationProject.data().icon"
            :key="'icon' + index"
            >{{ icon }}</v-icon
          >
        </div>
        <!-- <div>icon</div> -->
        <div class="title">{{ presentationProject.data().title }}</div>
        <!-- <h1>tytul blablablabla</h1> -->
        <div class="technologies">
          {{ presentationProject.data().technologies }}
        </div>
        <!-- <h3>Built using HTML, CSS, JS <br> -->
        <div class="description">
          {{ presentationProject.data().description }}
        </div>
        <!-- opis jak funkcjonuje i jak zostal napisany  oj cudowny, fantastyczny, uroczy, latajacy, kolorowy kot</h3> -->
      </div>
      <!-- to jest div od przyciskow komponentu i githuba -->
      <div class="actions">
        <!-- to jest przycisk od komponentow -->
        <component :is="presentationProject" />
        <v-btn depressed color="secondaryAccent"
          ><v-icon>mdi-source-repository</v-icon>Source</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script src="./ProjectOverview.js"/>
<style src="./ProjectOverview.css"/>