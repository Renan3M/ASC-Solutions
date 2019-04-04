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

        $scope.class1 = []; $scope.class2 = []; $scope.class3 = [];

        for (i = 0; i < students.length; i++) {
            if (i < classSize) {
                students[i].Class = 1;
                $scope.class1.push(students[i]);
            }
            else if (classSize <= i && i < 40) {
                students[i].Class = 2;
                $scope.class2.push(students[i]);
            }
            else {
                students[i].Class = 3;
                $scope.class3.push(students[i]);
            }
        }
    }
    $scope.showTable = function (tableNum) {
        $scope.show = [false, false, false];
        $scope.show[tableNum] = true;
    }

    $scope.save = function () {
        service.save();
    }
}]);