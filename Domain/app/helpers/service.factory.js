angular
    .module('common')
    .factory('serviceFactory', ServiceFactory);

ServiceFactory.$inject = ['$q', '$http', '$log'];

function ServiceFactory($q, $http, $log) {
    return {
        createService: createService
    };

    function createService(base, endpoint) {
        return {
            run: run,
            get: get,
            getById: getById,
            save: save,
            delete: remove
        };

        function run(action) {
            var deferred = $q.defer();

            action().then(
                function (response) {
                    deferred.resolve(response ? response.data : response);
                }, function (error) {
                    $log.error(error);
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function get() {
            return run(function () {
                return $http.get(base + endpoint.get);
            });
        }

        function getById(id) {
            return run(function () {
                return $http.get(base + endpoint.getById.replace('{id}', id));
            });
        }

        function save(id, data) {
            return run(function () {
                return $http.post(base + endpoint.save.replace('{id}', id), data);
            });
        }

        function remove(id) {
            return run(function () {
                return $http.delete(base + endpoint.delete.replace('{id}', id));
            });
        }
    }
}