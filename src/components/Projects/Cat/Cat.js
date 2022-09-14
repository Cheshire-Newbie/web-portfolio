// const obrazek1 = require("@/assets/nakliknijmnie.png")
const obrazek2 = require("@/assets/catfly.gif")

export default {
  name: "Cat",
  data: () => ({

    //       catSurprise: obrazek1,
    catSurprise: obrazek2,
    isButton: true,

  }),

  methods: {

    emitCatToParent() {
      this.$emit("emitCat")
      this.isButton = !this.isButton
      //         if(this.catSurprise !== obrazek1)
      //         this.catSurprise = obrazek1
      //         else this.catSurprise = obrazek2
    }
  }
};