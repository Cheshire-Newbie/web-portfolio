const flagIT = require("@/assets/italy.png")
const flagPL = require("@/assets/poland.png")
const flagUK = require("@/assets/united-kingdom.png")

export default {
  name: "Home",

  props: {
    finished: Promise,
  },

  data: () => ({
    titleElement: false,
    nameElement: false,
    specialistElement: false,
    InvitationElement: false,

    italyFlag: flagIT,
    polandFlag: flagPL,
    ukFlag: flagUK,
  }),

  mounted() {
    this.TransitionText()
  },

  methods: {
    
    async TransitionText() {
      await this.finished
      setTimeout(() => {
        this.titleElement = true
      }, 4000);
      setTimeout(() => {
        this.nameElement = true
      }, 6000);
      setTimeout(() => {
        this.specialistElement = true
      }, 8000);
      setTimeout(() => {
        this.InvitationElement = true
      }, 10000);
    }
  }
};