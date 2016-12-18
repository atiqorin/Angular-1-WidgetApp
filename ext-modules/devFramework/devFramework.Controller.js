angular.module("devFramework").controller("devFrameworkController",
    ['$scope', '$rootScope', '$window', '$timeout',
        function ($scope, $rootScope, $window, $timeout) {

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;

            $scope.$on('dev-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
                checkWidth();
                broadcastMenuState();
            });

            $($window).on('resize.devFramework', function () {
                $scope.$apply(function () {
                    checkWidth();
                    broadcastMenuState();
                });
            });
            $scope.$on("$destroy", function () {
                $($window).off("resize.devFramework"); // remove the handler added earlier
            });

            var checkWidth = function () {
                var width = Math.max($($window).width(), $window.innerWidth);
                $scope.isMenuVisible = (width >= 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            $scope.menuButtonClicked = function () {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
                $timeout( function() {
                     $scope.$apply();
                });
            };

            var broadcastMenuState = function () {
                $rootScope.$broadcast('dev-menu-show',
                    {
                        show: $scope.isMenuVisible
                    });
            };

            $timeout(function () {
                checkWidth();
            }, 0);
        }
    ]);