angular.module('class').
    service('classService', ['serviceFactory', 'constants','$http', function (serviceFactory, constants, $http) {
        let api = constants.api.class;
 
        var service = serviceFactory.createService(constants.base, api);

        service.update = function (data) {
            return this.run(function () {
                return $http.post(constants.base + api.update, data);
            });
        }

        return service;
    return;
}]);