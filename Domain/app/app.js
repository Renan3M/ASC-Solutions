// This app file will list all of our modules and dependences, so I may instantiate they all together with no conflicts.

angular.module('common', []);
angular.module('class', ['common']);
angular.module('exams', ['class']); // TODO: classService is required for examCtrl, latter i'll set getStudents method to another service that uses 'common' module. 
