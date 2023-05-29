
export default {
  name: "HireMe",

  data: () => ({
    email: "",
    subject: "",
    message: "",
  }),

  methods: {
    sendEmail() {
      const email = `mailto:barbierimarta93@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
      const linkElement = document.createElement("a")
      linkElement.href = email
      linkElement.click()
    },

    changeImage() {
      
    },
  }
}