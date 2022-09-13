const app = Vue.createApp({
  data() {
    return {
      name: '',
      data: '',
      inputValue: ''
    }
  },
  methods: {
    setValue() {
      this.inputValue = this.data;
    },
    setData(event) {
      this.data = event.target.value;
    },
    setName(event) {
      this.name = event.target.value;
    },
    showAlert() {
      alert('Alert!Alert!Alert!');
    }
  }
});

app.mount('#assignment');