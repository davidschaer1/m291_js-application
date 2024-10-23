const app = Vue.createApp({
    data() {
        return {
            dashboardData: [],
        }
    },
    methods: {
        async loadDashboard() {
            const response = await fetch('https://api-sbw-plc.sbw.media/Timesheetview');
            const data = await response.json();
            this.dashboardData = data.resources;
        },
    },
    mounted() {
        this.studentId = JSON.parse(localStorage.getItem('selectedStudent'));
        this.loadDashboard();
        
    },

}).mount('#app');