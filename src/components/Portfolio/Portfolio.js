import RoadMap from './RoadMap.vue'

export default {

    components: {
        RoadMap,
      },

    name: "Portfolio",

    data: () => ({

        menuList: false,
        lightBulbIcon: "mdi-weather-night",
        RoadMap: true,

    }),

    methods: {
        menuStart() {
            if (!this.menuList) {
                this.menuList = !this.menuList;
                setTimeout(() => {
                    const menuListElement = document.querySelector(".menuList");
                    menuListElement.classList.toggle("active");
                }, 500);
            } else {
                const menuListElement = document.querySelector(".menuList");
                menuListElement.classList.toggle("active");
                setTimeout(() => {
                    this.menuList = !this.menuList;
                }, 500);
            }
            const hamburgerElement = document.querySelector(".hamburger");
            hamburgerElement.classList.toggle("active");


        },

        dayMode() {
            const containerElement = document.getElementById( "container");
            containerElement.classList.toggle("daymode")
            if (this.lightBulbIcon !== "mdi-weather-night") 
                this.lightBulbIcon="mdi-weather-night"
            else this.lightBulbIcon="mdi-white-balance-sunny"
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
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