import Cat from "./Cat/Cat.vue";
import GameArcher from "./GameArcher/GameArcher.vue";
import ProjectOverview from "./ProjectOverview/ProjectOverview.vue";
import Sorting from "./Sorting/Sorting.vue";
import Dictionary from "./Dictionary/Dictionary.vue";

export default {

  mounted() { console.log(this.projects) },

  components: {
    ProjectOverview,
  },
  name: "Projects",
  data: () => ({
    
    projects: [
      {component:Cat},{component:GameArcher}, {component:Sorting}, {component:Dictionary},
    ],

  }),

  computed: {
    finishedProjects() {
        return this.projects.filter(project => project.component.data().finished)
    },
    unfinishedProjects() {
        return this.projects.filter(project => !project.component.data().finished)
    }
},

  methods: {
  }
};