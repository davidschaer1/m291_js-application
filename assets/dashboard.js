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
            // Sort the data from newest to oldest using 'datum' field
            this.dashboardData.sort(this.compare);
        },
        compare(a, b) {
            // Sort by 'datum' field, assuming it's a valid date string
            return new Date(b.datum) - new Date(a.datum);  // Newest to oldest
        }
    },
    mounted() {
        this.studentId = JSON.parse(localStorage.getItem('selectedStudent'));
        this.loadDashboard();
    },

}).mount('#app');
