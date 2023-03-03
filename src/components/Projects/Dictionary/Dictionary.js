import { doc, setDoc, getDoc } from "firebase/firestore";

export default {

    name: "Dictionary",
    data: () => ({

        showDialog: false,
        addDictionary: false,
        term: "",
        definition: "",
        example: "",
        showDefinition: false,
        showExample: false,

        icon: [
            "mdi-language-html5", "mdi-language-css3", "mdi-language-javascript"
        ],
        title: "Dictionary",
        technologies: "Built using HTML, CSS, JS",
        description: "Dictionary",
        // image: require("@/assets/catanteprime.png"),
        githubSrc: "",

    }),

    methods: {

        async checkTerm() {
            const docRef = doc(this.$db, "dictionary", this.term)
            const dictionaryDocument = await getDoc(docRef)
            console.log(this.term)
            if (dictionaryDocument.exists()) {
                this.showDefinition = true
                this.showExample = true
                this.definition = dictionaryDocument.data().definition
                this.example = dictionaryDocument.data().example
                console.log("dziala")
            } else console.log("nie dziala")
        },

        async saveTerm() {
            const docRef = doc(this.$db, "dictionary", this.term)
            const dictionaryDocument = await getDoc(docRef)
            if(!dictionaryDocument.exists()) {
                await setDoc(docRef, {
                    term: this.term,
                    definition: this.definition,
                    example: this.example
                })
                console.log(this.term)
            }
        },
    }
};