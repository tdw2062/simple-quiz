const app = Vue.createApp({
  data() {
    return {
      selectedAnswer: "",
      questions: [
        {
          question:
            "Rolex is a company that specializes in what type of product?",
          answers: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
          correctAnswer: "b",
        },
        {
          question: "When did Facebook launch?",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question:
            "Albert Einstein had trouble in mathematics when he was in school",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
      ],
    };
  },
  methods: {
    answered(event) {
      this.selectedAnswer = event.target.value;
      console.log(this.selectedAnswer);
    },
  },
});

app.mount("#app");
