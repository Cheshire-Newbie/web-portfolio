export default {
    name: "GameArcher",

    data: () => ({
        showDialog: false,
        valid: false,
        nameField: "",
        passwordField: "",
        show1: false,

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

    
    }


};