const flagIT = require("@/assets/italy.png")
const flagPL = require("@/assets/poland.png")
const flagUK = require("@/assets/united-kingdom.png")


export default {
    name: 'MenuList',

    props: {
        show: Boolean,
    },

    data: () => ({

        italyFlag: flagIT,
        polandFlag: flagPL,
        ukFlag: flagUK,
    }),
}