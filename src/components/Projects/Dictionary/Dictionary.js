import { doc, setDoc, getDoc } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

export default {

    name: "Dictionary",
    data: () => ({

        showDialog: false,
        addDictionary: false,
        terms: [],
        selectedTerm: {
            term: "",
            definition: "",
            example: ""
        },
        addTerm: {
            term: "",
            definition: "",
            example: ""
        },

        valid: false,
        currentAlertResolve: null,
        alertColor: "info",
        showAlert: false,
        alertText: "",

        termRules: [
            (termValue) => {
                if (termValue !== "") return true
                else return "the term, his description and example is required"
            }
        ],


        icon: [
            "mdi-language-html5", "mdi-language-css3", "mdi-language-javascript"
        ],
        title: "Dictionary",
        technologies: "Built using HTML, CSS, JS",
        description: "Dictionary",
        // image: require("@/assets/catanteprime.png"),
        githubSrc: "",

    }),

    created() {
        this.reviewIndex()
    },

    methods: {

        reviewIndex() {
            const indexListener = onSnapshot(collection(this.$db, 'dictionary'), (querySnapshot) => {
                this.terms = querySnapshot.docs.map(doc => doc.data())
            })
            addEventListener('beforeunload', indexListener)
        },

        async checkTerm() {
            const docRef = doc(this.$db, "dictionary", this.selectedTerm.term)
            const dictionaryDocument = await getDoc(docRef)
            if (dictionaryDocument.exists()) {
                this.selectedTerm.definition = dictionaryDocument.data().definition
                this.selectedTerm.example = dictionaryDocument.data().example
            }
        },

        async saveTerm() {
            if(this.addTerm) {   
            const docRef = doc(this.$db, "dictionary", this.addTerm.term)
            const dictionaryDocument = await getDoc(docRef)
            if (!dictionaryDocument.exists()) {
                await setDoc(docRef, {
                    term: this.addTerm.term,
                    definition: this.addTerm.definition,
                    example: this.addTerm.example
                })
            }
            this.displayAlert("success", `Thank you! Your description of the term  ${this.addTerm.term} has been successfully added to our database!`)
            this.addDictionary = false
            this.addTerm.term = ""
                this.addTerm.definition = ""
                this.addTerm.example = ""
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
    }
};