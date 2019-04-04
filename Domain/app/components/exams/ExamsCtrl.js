angular.module('exams').
    controller('examCtrl', ['$scope', 'examService', 'classService', function ($scope, examService, classService) {
        $scope.data = {
            students: [],
            grades: []
        };

        let service = examService;

        function GetData() {
            classService.get().then(function (results) {
                $scope.data.students = results;
            });
        }
        
        $scope.finishSchoolYear = function () {
            $scope.data.students.forEach((x) => {
                doExams(x);
            });

            service.update($scope.data.grades);

            findWinner();
        }

        GetData();

        function doExams(student) {
            let p1, p2, p3;
            let media;
            let studentGrade = {};
            p1 = p2 = p3 = 0.0;

            studentGrade.studentId = student.Id;
            studentGrade.studentName = student.Name;

            studentGrade.firstGrade = p1 = generateGrade();
            studentGrade.secondGrade = p2 = round(generateGrade(), 1); //0.8
            studentGrade.thirdGrade = p3 = round(generateGrade(), 1); //0.6

            media = (p1 + (p2 * 1.2) + (p3 * 1.4)) / (1 + 1.2 + 1.4);
            studentGrade.finalGrade = round(evaluateGrades(media, studentGrade, true), 1);

            $scope.data.grades.push(studentGrade);
        }

        // TODO: Work this code
        function findWinner() {
            let fGrades = [];
            let champions = [];

            $scope.data.grades.forEach((x) => {
                fGrades.push(x.finalGrade);
            });

            fGrades = fGrades.sort(function (a, b) { return a - b; });

            let bestGrades = [
                fGrades[fGrades.length - 1],
                fGrades[fGrades.length - 2],
                fGrades[fGrades.length - 3],
                fGrades[fGrades.length - 4],
                fGrades[fGrades.length - 5],
            ];
            $scope.data.grades.forEach((x) => {
                if (x.finalGrade == bestGrades[0]) champions[0] = { name: x.studentName, grade: x.finalGrade };
                else if (x.finalGrade == bestGrades[1]) champions[1] = { name: x.studentName, grade: x.finalGrade };
                else if (x.finalGrade == bestGrades[2]) champions[2] = { name: x.studentName, grade: x.finalGrade };
                else if (x.finalGrade == bestGrades[3]) champions[3] = { name: x.studentName, grade: x.finalGrade };
                else if (x.finalGrade == bestGrades[4]) champions[4] = { name: x.studentName, grade: x.finalGrade };
            });
            $scope.championsString = "Os melhores colocados foram";
            for (i = 0; i < champions.length; i++) {
                $scope.championsString += " " + champions[i].name + ", com a nota " + champions[i].grade + ",";
            }
            $scope.championsString += ".";

            console.log($scope.championsString);

        }

        // Getting back to .1 decimals after messing with percentage 
        function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
        }

        function evaluateGrades(media, studentGrade, canDoRec) {
            let pr = 0.0;

            if (media > 6) { studentGrade.approved = true; }

            else if (media <= 6 && media >= 4 && canDoRec) {
                studentGrade.recGrade = pr = generateGrade();
                media = (pr + media) / 2;
                evaluateGrades(media, studentGrade, false);
            }

            else { studentGrade.approved = false; }

            return media;
        }

        function generateGrade() {
            let precision = 10;
            return Math.floor((Math.random()) * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
        }
    }])