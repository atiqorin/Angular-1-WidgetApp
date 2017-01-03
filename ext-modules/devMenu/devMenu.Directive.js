angular.module('devMenu').directive('devMenu', ['$timeout',function ($timeout) {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/devMenu/devMenuTemplate.html',
        controller: 'devMenuController',
        link: function (scope, el, attr) {
            var item = el.find('.dev-selectable-item:first');
            $timeout(function () {
                item.trigger('click');
            });
        }
    };
}]);