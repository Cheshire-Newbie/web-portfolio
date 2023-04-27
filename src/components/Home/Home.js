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
    BottonElement: false,

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
      }, 3000);
      setTimeout(() => {
        this.nameElement = true
      }, 5000);
      setTimeout(() => {
        this.specialistElement = true
      }, 7000);
      setTimeout(() => {
        this.InvitationElement = true
      }, 9000);
      setTimeout(() => {
        this.BottonElement = true
      }, 11000);
    }
  }
};