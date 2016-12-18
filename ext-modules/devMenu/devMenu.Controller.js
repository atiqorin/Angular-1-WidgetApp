angular.module('devMenu').controller('devMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            $scope.showMenu = true;

            this.getActiveElement = function () {
                return $scope.activeElement;
            };

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
                $rootScope.$broadcast('dev-menu-item-selected-event',
                    { route: route });
            };

            $scope.$on('dev-menu-show', function (evt, data) {
                $scope.showMenu = data.show;
            });
        }
    ]);