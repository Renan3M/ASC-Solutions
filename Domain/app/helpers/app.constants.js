angular
    .module('common')
    .constant('constants', {
        base: '',
        methods: {
            get: 'GET',
            post: 'POST',
            delete: 'DELETE',
            put: 'PUT'
        },
        api: { // TODO: Don't forget to change to 'api/adress' when I create my own API Library
            class: {
                delete: '/Classes/{id}',
                get: '/Classes/GetStudents', 
                getById: '/Classes/{id}',
                save: '/Classes/{id}',
                update: '/Classes/UpdateClasses'
            },
            exams: {
                delete: '/Exams/{id}',
                get: '/Exams',
                getById: '/Exams/{id}',
                save: '/Exams/{id}',
                update: '/Exams/Update'
            }
        },
        routes: { // Further I will use it, but for now cshtml will do the work
            class: { label: 'Classes', path: '/class', view: '/app/components/classes/index.html', controller: 'classCtrl' },
            exams: { label: 'Exams', path: '/exams', view: '/app/components/exams/index.html', controller: 'examsCtrl' }

        }
    });