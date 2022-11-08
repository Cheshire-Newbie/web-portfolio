import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        options: {
            customProperties: true,
        },
        themes: {
            dark: {
                background:"#212121",
                primary:"#424242",
                primaryAccent:"#424242",
                secondary:"#616161",
                secondaryAccent:"#455A64",
                tertiary:"#E0E0E0",
            },

            light: {
                background:"#F5F5F5",
                primary:"#BDBDBD",
                primaryAccent:"#757575",
                secondary:"#E0E0E0",
                secondaryAccent:"#B0BEC5",
                tertiary:"#424242",
            },
        }
    }
});



// lightmode
// #F5F5F5 bacground*
// #BDBDBD menu-bar*
// #757575 border-botton*
// #E0E0E0 menu-list*
// #B0BEC5 menu-list-effect*
//  #424242 hamburger / text
//  rgba(121, 121, 121, 0.473); hamburger-hover

// darkmode
// #212121 bacground *
// #424242 menu-bar/ borderbotton*
// #616161 menu-list*
// #455A64 menu-list-effect*
// #E0E0E0 hamburger / text*
// rgba(255, 255, 255, 0.253) hamburger-hover
