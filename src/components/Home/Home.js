const flagIT = require("@/assets/italy.png")
const flagPL = require("@/assets/poland.png")
const flagUK = require("@/assets/united-kingdom.png")

export default {
  name: "Home",
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

    TransitionText() {
      if(!this.titleElement) {
        setTimeout(() => {
          this.titleElement = true
        }, 6000);
        setTimeout(() => {
          this.nameElement = true
        }, 8000);
        setTimeout(() => {
          this.specialistElement = true
        }, 10000);
        setTimeout(() => {
          this.InvitationElement = true
        }, 13000)
      }
    }
  }
};