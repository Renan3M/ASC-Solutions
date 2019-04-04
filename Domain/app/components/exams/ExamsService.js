    angular.module('exams').
        service('examService', ['serviceFactory', 'constants','$http', function (serviceFactory, constants, $http) {
            let api = constants.api.exams;

            var service = serviceFactory.createService(constants.base, api);

            service.update = function (data) {
                return this.run(function () {
                    return $http.post(constants.base + api.update, data);
                });
            }

            return service;
    }]);
