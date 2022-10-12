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
            if (!userDocument.exists()) {
                await setDoc(docRef, {
                    name: this.nameField,
                    password: this.passwordField
                })
            }
            else window.alert("uzytkownik o takiej nazwie juz istnieje")
            this.loadingSaveUser = false
        }

    }


};