const app = Vue.createApp({
    data() {
        return {
            Projects: [],
            worked: {
                ProjectID: 0,
                StudentID: 0,
                Date:"0000-00-00",
                Minutes: 0,
            }
        }
    },
    methods: {
        async loadProjects() {
            const response = await fetch('https://api-sbw-plc.sbw.media/Project');
            const data = await response.json();
            this.Projects = data.resources;
        },
        ProjectSelect() {
            localStorage.setItem('selectedProject', JSON.stringify(this.ProjectId));
        },
        async submitData() {
            const url = 'https://api-sbw-plc.sbw.media/Timesheet';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.worked)
            });

            if (response.ok) {
                console.log('Success:', response.status);
                localStorage.setItem('hoursWorked', JSON.stringify(this.hoursWorked));
                window.location.href = '/dashboard.html';
            } else {
                console.error('Error:', response.status);
            }
        }
    },
    mounted() {
        this.worked.StudentID = JSON.parse(localStorage.getItem('selectedStudent'));
        // this.ProjectId = JSON.parse(localStorage.getItem('selectedProject')) || ;
        this.loadProjects();
    }
}).mount('#app');
