import Cat from "./Cat/Cat.vue";
import GameArcher from "./GameArcher/GameArcher.vue";
import ProjectOverview from "./ProjectOverview/ProjectOverview.vue";
import Sorting from "./Sorting/Sorting.vue";
import Dictionary from "./Dictionary/Dictionary.vue";

export default {

  components: {
    ProjectOverview,
  },
  name: "Projects",
  data: () => ({
    
    projects: [
      {component:Cat},{component:GameArcher}, {component:Sorting}, {component:Dictionary},
    ]

  }),

  methods: {
  }
};