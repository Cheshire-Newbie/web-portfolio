import { doc, setDoc, getDoc } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

export default {

    name: "Dictionary",
    data: () => ({

        showDialog: false,
        addDictionary: false,
        terms: [],
        selectedTerm : {
            term: "",
            definition: "",
            example: ""
          },

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
                console.log(this.terms)
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
            const docRef = doc(this.$db, "dictionary", this.selectedTerm.term)
            const dictionaryDocument = await getDoc(docRef)
            if (!dictionaryDocument.exists()) {
                await setDoc(docRef, {
                    term: this.selectedTerm.term,
                    definition: this.selectedTerm.definition,
                    example: this.selectedTerm.example
                })
            }
            this.addDictionary = false
        },
    }
};