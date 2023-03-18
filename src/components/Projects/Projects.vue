<template>
  <div class="projects">
    <div class="myPersonalText"></div>
    <div>
      <v-card-title>Project Completed</v-card-title>
      <ProjectOverview
        v-for="(project, index) of finishedProjects"
        :key="'project' + index"
        :presentationProject="project.component"
      />
    </div>
    <div>
      <v-card-title>Project in Progress</v-card-title>
      <ProjectOverview
        v-for="(project, index) of unfinishedProjects"
        :key="'project' + index"
        :presentationProject="project.component"
      />
    </div>
  </div>
</template>

<script src="./Projects.js"/>
<style src="./Projects.css"/>
