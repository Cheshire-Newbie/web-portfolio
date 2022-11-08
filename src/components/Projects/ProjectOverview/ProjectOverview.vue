<template>
  <!-- to jest glowny div -->
  <div class="project">
    <!-- to jest div od ikony -->
    <div class="preview">
      <img src="@/assets/catanteprime.png" />
    </div>
    <div class="gradient"/>
    <!-- to jest drugi div z rzeczami -->
    <div class="information">
      <!-- tu jest div z opisem i tytulem -->
      <div class="description">
        <div>icon</div>
        <h1>tytul blablablabla</h1>
        <h3>Built using HTML, CSS, JS <br>
        opis jak funkcjonuje i jak zostal napisany  oj cudowny, fantastyczny, uroczy, latajacy, kolorowy kot</h3>
      </div>
      <!-- to jest div od przyciskow komponentu i githuba -->
      <div class="actions">
        <!-- to jest przycisk od komponentow -->
        <component :is="presentationProject" />
        <v-btn depressed color="secondaryAccent">Test</v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./ProjectOverview.js"/>
<style src="./ProjectOverview.css"/>