export default {
    name: "Sorting",
    data: () => ({
        showDialog: false,
        unsortedArray: [],
        sortedArray: [],
        dlugosc: null,
        randomiseRunning: false,
        icon: [
            "mdi-language-html5", "mdi-language-css3", "mdi-language-javascript"
          ],
          title: "Sorting",
          technologies: "Built using HTML, CSS, JS",
          description: "Neatly animated implementation of selection sorting algorithm. Sorted data is random assortment of integers between 0 and chosen value.",
          image: require("@/assets/sortanteprime.png"),
          githubSrc: "https://github.com/Cheshire-Newbie/web-portfolio/tree/main/src/components/Projects/Sorting",
    }),

    methods: {

        async Randomise() {
            // ustawiam wartosc zmiennej na true, by disabled przycisk
            this.randomiseRunning = true
            // tworze promisa, ktorego celem jest odliczanie czasu dodawania nowych elementow (kazdy pojawia sie w 50ms, ale my bierzemy 100 jako margines bledu i mnoze ich przez 
            // dlugosc listy unsorted +1, a na koniec dodaje czas trwania tranzycji [secunda = 1000 ms])
            const popPromise = new Promise((resolve) => {
                setTimeout(resolve, (100 * (this.unsortedArray.length+1) + 1000))
            })
            // jesli dlugosc unsortedarray jest wieksza niz 0 to usuwamy ostatni element z listy, czejakac by to zrobic okreslony czas w new Promise
            while (this.unsortedArray.length > 0) {
                this.unsortedArray.pop()
                await new Promise((resolve) => {
                    setTimeout(resolve, 50)
                })
            }
            // jesli dlugosc sortedarray jest wieksza niz 0 to usuwamy ostatni element z listy, czejakac by to zrobic okreslony czas w new Promise
            while (this.sortedArray.length > 0) {
                this.sortedArray.pop()
                await new Promise((resolve) => {
                    setTimeout(resolve, 50)
                })
            }
            // czekamy na wykonanie promisa popPromise
            await popPromise
            // do tmpArray jest przypisana tablica losowych liczb o okrlesnonej przez zmienna dlugosc dlugosci
            let tmpArray = this.getRandomArray(this.dlugosc)
            // tworze promisa, ktorego celem jest odliczanie czasu dodawania nowych elementow (kazdy pojawia sie w 50ms, wiec mnoze ich przez ich 
            // ilosc i dodaje czas trwania tranzycji [secunda = 1000 ms])
            const pushPromise = new Promise((resolve) => {
                setTimeout(resolve, (50 * (this.dlugosc+1) + 1000))
            })

            for (let number of tmpArray) {
                this.unsortedArray.push(number)
                await new Promise((resolve) => {
                    setTimeout(resolve, 50)
                })
            }
            await pushPromise
            console.log((50 * (this.dlugosc+1) + 1000))
            this.randomiseRunning = false
        },

        async Sort() {
            this.sortedArray = []
            let i
            let p = this.dlugosc
            let tmpArray = [...this.unsortedArray]
            // jesli dlugosc listy jest wieksza od 0, to....
            while (tmpArray.length > 0) {
                for (let index in tmpArray) {
                    // to nadaje naszej zmiennej number wartosc poprzez wykorzystanie wartosci danego indexu listy
                    let number = tmpArray[index]
                    if (p > number) {
                        // jesli p jest wieksze od number, to wtedy nadpisujemy nowe p i zapisujemy sobie index
                        p = number
                        i = index
                    }
                }
                // zapisz wartosc w nowej liscie 
                this.sortedArray.push(p)
                await new Promise((resolve) => {
                    setTimeout(resolve, 50)
                })
                // skasuj ze starej listy
                tmpArray.splice(i, 1)
                p = this.dlugosc
            }
        },

        getRandomArray(dlugosc) {
            return Array.from({ length: dlugosc }, () => Math.floor(Math.random() * dlugosc))
        }


    }
};