import MenuList from "./MenuList/MenuList.vue";
import Hamburger from "./Hamburger/Hamburger.vue";

export default {

    components: {
        MenuList,
        Hamburger,
    },

    name: "App",

    data: () => ({

        showMenuList: false,
        lightBulbIcon: "mdi-weather-night",
    }),

    methods: {
        menuStart(e) {
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
            console.log(e)
        },

        dayMode() {
            if (this.lightBulbIcon !== "mdi-weather-night")
                this.lightBulbIcon = "mdi-weather-night"
            else this.lightBulbIcon = "mdi-white-balance-sunny"
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