angular.module('devMenu').directive('devMenu', function () {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/devMenu/devMenuTemplate.html',
        controller: 'devMenuController',
        link: function (scope, el, attr) {

        }
    };
});