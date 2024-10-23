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
        async loadProject() {
                const response = await fetch('https://api-sbw-plc.sbw.media/Project');
                const data = await response.json();
                this.Project = data.resources;
            },
        ProjectSelect(){
            this.selectedProject = this.Project.find(Project => Project.id === this.ProjectId);
        
         },
    },
    mounted() {
        this.ProjectId = JSON.parse(localStorage.getItem('selectedProject'));
    },
}).mount('#app');