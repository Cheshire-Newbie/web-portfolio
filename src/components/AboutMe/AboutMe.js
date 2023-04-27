export default {
  name: "AboutMe",
  data: () => ({

    PresentationElement: false,
    titleElement: true,
    textElements: true,
    textOneElement: false,
    textTwoElement: false,
  }),

  mounted() {
    this.PresentationText()
  },

  methods: {

    PresentationText() {
        this.PresentationElement = true
      setTimeout(() => {
        this.PresentationElement = false
      }, 4000);
      setTimeout(() => {
        this.textOneElement = true
      }, 7000);
      setTimeout(() => {
        this.textTwoElement = true
      }, 8000);
    }
  }
};