export default {
    name: "GameArcher",

    data: () => ({
        showDialog: false,
        valid: false,
        nameField: "",

        nameRules: [
            (nameValue) => {
                if (nameValue !== "") return true
                else return "Name is required"
            },
            (nameValue) => {
                if (nameValue.length <= 8) return true
                else return "Name must be less than 8 characters"
            },

        ]
    }),

    methods: {

    
    }


};