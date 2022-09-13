export default {
    name: "Hamburger",

    methods: {
        emitShowEventToParent(e) {
            this.$emit("showEvent", e )
        }
    }
  };