import Cat from "./Cat/Cat.vue";

export default {

  components: {
    Cat,
  },
  name: "Projects",
  data: () => ({
    catIsMoving: false,
  }),

  methods: {

    methodCat() {
      const catElement = document.querySelector(".cat");
      if (!this.catIsMoving)
        window.addEventListener("mousemove", this.mouseMoveHandler)
      else {
        window.removeEventListener("mousemove", this.mouseMoveHandler);
        catElement.style.left = `40px`;
        catElement.style.top = `80px`;
      }
      this.catIsMoving = !this.catIsMoving

    },

    mouseMoveHandler(e) {
      const catElement = document.querySelector(".cat");
      catElement.style.left = `${e.clientX}px`;
      catElement.style.top = `${e.clientY}px`;
    }
  }
};