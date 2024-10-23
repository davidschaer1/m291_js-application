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
      studentSelect() {
          this.selectedStudent = this.students.find(student => student.id === this.studentId);
          localStorage.setItem('selectedStudent', JSON.stringify(this.studentId));
      },
  },
  mounted() {
      this.loadStudents();
  },
}).mount('#app');