const app = Vue.createApp({
    data() {
      return {
        studentId: 0,
        students: [],
      }
    },
    methods: {
      async loadStudents() {
        const response = await fetch('https://api-sbw-plc.sbw.media/Student?year=2022');
        const data = await response.json();
        this.students = data.resources;
      },
     
    },
    mounted() {
      this.loadStudents();
    },
  }).mount('#app');