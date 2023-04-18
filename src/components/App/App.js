import MenuList from "./MenuList/MenuList.vue";
import Hamburger from "./Hamburger/Hamburger.vue";
import { setTimeout } from "core-js";
import Logo from "../Logo/Logo.vue";

let finishedResolve
const finished = new Promise(resolve => finishedResolve = resolve)

export default {

    components: {
        MenuList,
        Hamburger,
        Logo,
    },

    name: "App",

    data: () => ({

        showMenuList: false,
        lightBulbIcon: "mdi-weather-night",
        logoBackElement: true,
        logoElement: true,
        finished
    }),

    created() {
        // tutaj ustawiam tryb dzienny i nocny zalezny od godziny
        // jesli godzina jest mniejsza od 8 i wieksza od 19 
        // to wtedy theme.dark jest true, jak nie, to false
        const t = new Date().getHours();
            this.$vuetify.theme.dark = t < 8 || t > 19
    },

    // W Vue.js computed properties pozwalają na tworzenie właściwości, które można użyć do modyfikowania, manipulowania
    //  i wyświetlania danych w komponentach w czytelny i wydajny sposób. Można ich użyć do obliczania i wyświetlania 
    //  wartości na podstawie wartości lub zestawu wartości w modelu danych 1.
    // Właściwości te automatycznie śledzą swoje zależności reaktywne. Vue jest świadomy tego, że 
    // obliczenie publishedBooksMessage zależy od author.books, więc zaktualizuje wszystkie powiązania zależne od 
    // publishedBooksMessage, gdy author.books się zmieni 
    computed: {
        routeName() {
            return this.$route.name
        }
    },
    // W Vue.js watch to właściwość, która pozwala na obserwowanie zmian w danych i wykonywanie odpowiednich działań w 
    // przypadku ich zmiany. Watcherzy są bardzo przydatne w przypadku potrzeby wykonywania jakichś działań po zmianie danych 
    // lub w przypadku potrzeby wykonywania jakichś działań przed zmianą danych
    watch: {
        routeName(newValue, oldValue) {
            if (newValue === "Home") {
                this.logoElement = true
                this.logoBackElement = true
            }
        }
    },

    methods: {
        menuStart() {
            if (!this.showMenuList) {
                this.showMenuList = !this.showMenuList;
                setTimeout(() => {
                    const menuListElement = document.querySelector(".menuList");
                    menuListElement.classList.toggle("active");
                }, 500);
            } else {
                const menuListElement = document.querySelector(".menuList");
                menuListElement.classList.toggle("active");
                setTimeout(() => {
                    this.showMenuList = !this.showMenuList;
                }, 500);
            }
            const hamburgerElement = document.querySelector(".hamburger");
            hamburgerElement.classList.toggle("active");
        },

        dayMode() {
            if (this.lightBulbIcon !== "mdi-weather-night")
                this.lightBulbIcon = "mdi-weather-night"
            else this.lightBulbIcon = "mdi-white-balance-sunny"
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },

        hideLogo() {
            this.logoElement = false
            this.logoBackElement = false
            finishedResolve()
        }
    },



    //     // funkcja anonimowa/lambda/funkcja strzalkowa
    //     // w pierwszych nawiasach bylyby argumenty, 
    //     // stralka mowi by to co znajduje na lewo uzyc w funkcji na prawo
    //     // klamry batman w nawiasach znaczy ze obiekt ten chcemy returnowac
    //     data: () => ({
    //         content: "to jest portfolio",
    //         pusta: "wcale nie jestem pusta!",
    //     }),

    //     // lifehook -> w cyklu zycia komponentu lifehooki sa momentami 
    //     // w ktorych mozemy wejsc w interacje z komponentem. lifehook created 
    //     // jest pierwszym momentem zaraz po stworzeniu komponentu
    //     created() {
    //         this.pusta = ""
    //     },

    //     // lifehook ktore odpowiada dzialania kiedy juz html istnieje 
    //     // i komponent zostal zamontowan
    //     mounted() {
    // this.pusta = "wcale nie"
    //     },


}