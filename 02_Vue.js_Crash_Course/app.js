const app = Vue.createApp({
  /* template: "<h1>hello {{ firstName }}</h1>", */
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "John@doe.jd",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});
app.mount("#app");
