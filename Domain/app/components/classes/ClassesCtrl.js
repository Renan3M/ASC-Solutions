angular.module('class').
    controller('classCtrl', ['$scope','classService', function ($scope, classService) {
       $scope.show = [true, false, false];
       let service = classService;

        service.get().then(function (results) {
            $scope.students = results;
            $scope.shuffleClasses();
        });               
       
    $scope.shuffleClasses = function () {
        createClasses(shuffle($scope.students));
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    function createClasses(students) {
        const classSize = 20;

        $scope.class1 = students.slice(classSize * 0, classSize * 1);
        $scope.class2 = students.slice(classSize * 1, classSize * 2);
        $scope.class3 = students.slice(classSize * 2, classSize * 3);
    }

    $scope.showTable = function (tableNum) {
        $scope.show = [false, false, false];
        $scope.show[tableNum] = true;
    }

    $scope.save = function () {
        service.update($scope.students);
    }
}]);