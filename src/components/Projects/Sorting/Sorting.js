export default {
    name: "Sorting",
    data: () => ({
        showDialog: false,
        unsortedArray: [],
        sortedArray: [],
    }),

    methods: {

        Randomise() {
            this.unsortedArray = this.getRandomArray(10)
            this.sortedArray = []
        },

        Sort() {

        },

        getRandomArray(dlugosc) {
            return Array.from({length: dlugosc}, ()=> Math.floor(Math.random()*dlugosc))
          }
    }
  };