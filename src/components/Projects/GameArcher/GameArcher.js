import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
    name: "GameArcher",

    data: () => ({
        showDialog: false,
        finished: false,
        valid: false,
        nameField: "",
        passwordField: "",
        show1: false,
        loadingSaveUser: false,
        currentAlertResolve: null,
        alertColor: "info",
        showAlert: false,
        alertText: "",
        positions: [
            { top: "80%", left: "10%" }, { top: "50%", left: "80%" }, { top: "25%", left: "30%" }, { top: null, left: null }
        ],
        bush: document.querySelector(".bush"),
        boar: {
            div: null,
            width: 192,
            height: 192,
            spriteWidth: 960,
            spriteHeight: 576,
            currentX: 0,
            currentY: 0,
            state: 0,
            framesCount: 3,
            frame: 0,
            states: [],
        },
        icon: [
            "mdi-language-html5", "mdi-language-css3", "mdi-language-javascript"
        ],
        title: "",
        technologies: "Built using HTML, CSS, JS",
        description: "",
        image: require("@/assets/boaranteprime.png"),
        githubSrc: "https://github.com/Cheshire-Newbie/web-portfolio/tree/main/src/components/Projects/GameArcher",


        nameRules: [
            (nameValue) => {
                if (nameValue !== "") return true
                else return "Name is required"
            },
            (nameValue) => {
                if (nameValue.length <= 8) return true
                else return "Name must be less than 8 characters"
            },

        ],

        passRules: [
            (passValue) => {
                if (passValue !== "") return true
                else return "Password is required"
            },
            (passValue) => {
                if (passValue.length <= 10) return true
                else return "Name must be less than 10 characters"
            },

        ]
    }),

    mounted() {
        this.boar.states = this.initializeStates(this.boar)
        this.gameAnimation()
        this.boarGo(0)
    },

    methods: {

        async saveUser() {
            this.loadingSaveUser = true
            const docRef = doc(this.$db, "users", this.nameField)
            const userDocument = await getDoc(docRef)
            // to potrzebne do wyswietlania obiektow z bazy danych
            // console.log(userDocument.data().name)
            //zrob okno wyskakujace z info ze jestes zalogowany, plus przycisk dla logowania
            if (!userDocument.exists()) {
                await setDoc(docRef, {
                    name: this.nameField,
                    password: this.passwordField
                })
                this.displayAlert("success", `Witaj ${this.nameField}! Zarejestrowal*s sie poprawnie!`)
            }
            else this.displayAlert("warning", "uzytkownik o takiej nazwie juz istnieje")
            this.loadingSaveUser = false
        },

        async loginUser() {
            const docRef = doc(this.$db, "users", this.nameField)
            const userDocument = await getDoc(docRef)
            if (userDocument.data() && userDocument.data().password === this.passwordField) {
                this.displayAlert("success", `Hello gamer ${userDocument.data().name}!`)
            }
            else if (!userDocument.data()) {
                this.displayAlert("info", "You must register before starting the game.")
            }
            else if (userDocument.data().password !== this.passwordField) {
                this.displayAlert("error", "You password is not correct.")
            }
        },

        displayAlert(color, text) {
            if (this.currentAlertResolve) this.currentAlertResolve()
            this.alertColor = color;
            this.alertText = text;
            this.showAlert = true;
            let alertClosed = false;
            let alertResolve
            let alertPromise = new Promise((resolve) => {
                alertResolve = resolve;
                this.currentAlertResolve = alertResolve;
                setTimeout(() => {
                    if (!alertClosed) {
                        alertClosed = true;
                        alertResolve()
                    }
                }, 5000);
            })

            alertPromise.then(() => {
                this.showAlert = false;
                alertClosed = true;
                this.currentAlertResolve = null
            })
        },

        initializeStates(imgObj) {
            let x = 0
            let y = 0
            let frames = []
            let states = []
            //tak dlugo, az x NIE(to nasz wykrzyknik poczatkowy) bedzie max x a y NIE bedzie max y, powtarzaj, a jak warunek bedzie spelniony, zakoncz
            while (y !== imgObj.spriteHeight) {
                if (frames.length === imgObj.framesCount) {
                    states.push(frames)
                    frames = []
                }
                frames.push(`${-x}px ${-y}px`)
                x += imgObj.width
                if (x === imgObj.spriteWidth) {
                    x = 0
                    y += imgObj.height
                }
            }
            //ponowne puszowanie poza whilem frames do state wynika z tego, ze frames zawsze sa pushowane po rozpoczeciu kolejnego state
            //nie rozpoczynajac 4 state, ktory w dziku jest ostatnimi 3 pustymi kratkami, wyskakuje blad i ich nie rozpoznaje
            states.push(frames)
            return states
        },

        animateBoar() {
            if (this.boar.div) {
                //do zmiennej FRAME przypisujemy element, ktory wyszukujemy w nastepujacy sposob:
                //z listy states ktora znajduje sie wewnatrz boar poprzez wykorzystanie wartosci zmiennej state by okreslic konkretny punkt w tej liscie (state jest naszym indexem)
                //this.boar.states[this.boar.state]
                //ten element w states nazywa Frames
                //i by okreslic konkretna wartosc w liscie frames ktora jest lista wewnatrz states, wykorzystujemy wartosc zmiennej frame (ktora jest indeksem)
                //    imgObj  lista     zmienna wykorzystana jako index dla states      zmienna wykorzystana jako index dla frames(lista wewnatrz states)
                //  this.boar.states         [this.boar.state]                                                [this.boar.frame]
                let frames = this.boar.states[this.boar.state]   //do zmiennej frames przypisujemy element listy states o indexie this.boar.state
                let frame = frames[this.boar.frame]             //do zmiennej frame przypisujemy element listy frames o indexie this.boar.frame
                //do okreslonej w frame pozycji dostawiamy konkretny fragment obrazka w background
                this.boar.div.style.backgroundPosition = frame
                //jesli nie ma smierci dzika i smierc dzika sie nie skonczyla to rob to co zawsze
                if (!(this.boar.state === 3 && this.boar.frame === (this.boar.framesCount - 1))) {
                    //do pola frame, ktore jest indexem dla listy frames okreslajaca pozycje, przypisujemy nastepujace rownanie:
                    //reszta z dzielenia obecnego index +1 (czyli kolejny index) / przez dlugosc listy (czyli ilementow w sobie zawiera) frames (jesli sa 3 elementy, to lista jest dlugo 3)
                    //modulo jest uzyteczne przy wyliczaniu sekwencji liczby ktora ma sie liczyc w mieskonczonosc, ale ktora ma powracac w momencie konca cyklu do swojego poczatku 
                    this.boar.frame = (this.boar.frame + 1) % frames.length
                }
                // do this.boar.div przypisujemy elelemt html o klasie (.) boar
            } else this.boar.div = document.querySelector(".boar")
        },

        boarGo(position) {
            if (this.boar.div) {
                if (position !== 0 && position !== this.positions.length - 1) {
                    this.boar.div.classList.toggle("boarRotate")
                } else
                    this.boar.div.classList.remove("boarRotate")

                this.boar.state = 2
                this.boar.frame = 0
                let top = this.positions[position].top
                let left = this.positions[position].left
                if (top) {
                    this.boar.div.style.top = `calc(${top} - ${this.boar.height}px)`
                    this.boar.div.style.left = left
                } else {
                    this.boar.div.style.top = null
                    this.boar.div.style.left = null
                    this.boar.div.style.opacity = 0
                }
                let newPosition = (position + 1) % this.positions.length
                setTimeout(() => {
                    this.boar.div.style.opacity = 1
                    this.boar.state = 0
                    this.boar.frame = 0
                }, 2000);
                setTimeout(() => {
                    this.boarGo(newPosition)
                }, 6000);
                setTimeout(() => {
                    this.boar.state = 1
                    this.boar.frame = 0
                }, 4000);
            } else setTimeout(() =>
                this.boarGo(position), 6000)
            //nadanie obrotu przy zmianie pozycji
        },
        // funkcja niepotrzebna, bo robie v-forem
        // bushPosition(position) {
        //     if (this.bush) {
        //         let top = this.positions[position].top
        //         let left = this.positions[position].left
        //         if (top) {
        //             this.bush.style.top = `calc(${top} - ${left}px)`
        //             this.bush.style.left = left
        //         } 
        //     }
        // },

        gameAnimation() {
            this.animateBoar()
            setTimeout(() => {
                window.requestAnimationFrame(this.gameAnimation)
            }, 200);
        }
    }
}