<template>
  <div class="projects">
    <div class="myPersonalText"></div>
    <ProjectOverview v-for="(project, index) of projects" :key="'project'+index"
    :presentationProject="project.component"/>
  </div>
</template>

<script src="./Projects.js"/>
<style src="./Projects.css"/>
