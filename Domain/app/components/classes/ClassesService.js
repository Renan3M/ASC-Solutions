angular.module('class').
    service('classService', ['serviceFactory', 'constants', function (serviceFactory, constants) {
        let api = constants.api.class;
 
        var service = serviceFactory.createService(constants.base, api);
        
        return service;
    return;
}]);