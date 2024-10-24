const app = Vue.createApp({
    data() {
        return {
            students: [],
            studentId: null
        }
    },
    methods: {
        async loadStudents() {
            const response = await fetch('https://api-sbw-plc.sbw.media/Student?year=2022');
            const data = await response.json();
            this.students = data.resources;
        },
        studentSelect() {
            localStorage.setItem('selectedStudent', JSON.stringify(this.studentId));
        },
        saveData() {
            window.location.href = '/hours-projects.html';
        }
    },
    mounted() {
      this.studentId = JSON.parse(localStorage.getItem('selectedStudent')) || null;
      this.loadStudents();
    }
  }).mount('#app');
  