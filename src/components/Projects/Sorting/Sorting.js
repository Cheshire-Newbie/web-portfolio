export default {
    name: "Sorting",
    data: () => ({
        showDialog: false,
        unsortedArray: [],
        sortedArray: [],
        dlugosc: 10,
    }),

    methods: {

        Randomise() {
            this.unsortedArray = this.getRandomArray(this.dlugosc)
            this.sortedArray = []
        },

        Sort() {
            let i
            let p = this.dlugosc
            // jesli dlugosc listy jest wieksza od 0, to....
            if (this.unsortedArray.length > 0) {
                for (let index in this.unsortedArray) {
                    // to nadaje naszej zmiennej number wartosc poprzez wykorzystanie wartosci danego indexu listy
                    let number = this.unsortedArray[index]
                    if (p > number) {
                        // jesli p jest wieksze od number, to wtedy nadpisujemy nowe p i zapisujemy sobie index
                        p = number
                        i = index
                    }
                }
                // zapisz wartosc w nowej liscie 
                this.sortedArray.push(p)
                // skasuj ze starej listy
                this.unsortedArray.splice(i, 1)
                // wykonaj metode jeszcze raz
                this.Sort()
            }
        },

        SortZbysiowy() {
            let i
            let p = this.dlugosc
            // jesli dlugosc listy jest wieksza od 0, to....
            while (this.unsortedArray.length > 0) {
                for (let index in this.unsortedArray) {
                    // to nadaje naszej zmiennej number wartosc poprzez wykorzystanie wartosci danego indexu listy
                    let number = this.unsortedArray[index]
                    if (p > number) {
                        // jesli p jest wieksze od number, to wtedy nadpisujemy nowe p i zapisujemy sobie index
                        p = number
                        i = index
                    }
                }
                // zapisz wartosc w nowej liscie 
                this.sortedArray.push(p)
                // skasuj ze starej listy
                this.unsortedArray.splice(i, 1)
                p = this.dlugosc
            }
        },

        getRandomArray(dlugosc) {
            return Array.from({ length: dlugosc }, () => Math.floor(Math.random() * dlugosc))
        }
    }
};