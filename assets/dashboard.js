const app = Vue.createApp({
    data() {
        return {
            studentId: 0,
            dashboardData: [],
        }
    },
    mounted() {
        this.studentId = JSON.parse(localStorage.getItem('selectedStudent'));
        
    },
}).mount('#app');