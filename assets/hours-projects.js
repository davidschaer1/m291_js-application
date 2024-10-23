const app = Vue.createApp({
    data() {
        return {
            selectedProject: '',
            hoursWorked: 0,
            dashboardData: [],
            studentId: 0
        }
    },
    methods: {
        submitData() {
            const selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));
            const dashboardEntry = {
                studentName: selectedStudent.fullname,
                project: this.selectedProject,
                hoursWorked: this.hoursWorked,
                coach: selectedStudent.coach,
            };
            this.dashboardData.push(dashboardEntry);
            localStorage.setItem('dashboardData', JSON.stringify(this.dashboardData));
        },
    },
    mounted() {
        this.studentId = JSON.parse(localStorage.getItem('selectedStudent'));
    }
}).mount('#app');