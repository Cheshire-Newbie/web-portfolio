import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
    name: "GameArcher",

    data: () => ({
        showDialog: false,
        valid: false,
        nameField: "",
        passwordField: "",
        show1: false,
        loadingSaveUser: false,
        currentAlertResolve: null,

        alertColor: "info",
        showAlert: false,
        alertText: "",

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
        }
    }
}