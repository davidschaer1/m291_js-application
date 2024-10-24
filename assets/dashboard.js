const app = Vue.createApp({
    data() {
        return {
            studentId: 0,
            dashboardData: [],
            usersSorted: []
        }
    },
    methods: {
        async loadDashboard() {
            const response = await fetch('https://api-sbw-plc.sbw.media/Timesheetview');
            const data = await response.json();
            this.dashboardData = data.resources;
            // Sort the data from newest to oldest (assuming there is a 'date' property)
            this.dashboardData.sort(this.compare);
        },
        compare(a, b) {
            // Assuming the 'date' field in your data is in a comparable format (like ISO 8601)
            return new Date(b.datum) - new Date(a.datum);  // Sort from newest to oldest
        }
    },
    mounted() {
        this.studentId = JSON.parse(localStorage.getItem('selectedStudent'));
        this.loadDashboard();
    },

}).mount('#app');
