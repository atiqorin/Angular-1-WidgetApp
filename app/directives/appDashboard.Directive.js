angular.module('app').directive('appDashboard', [function () {
    return {
        scope: {
        },
        template: '<dev-dashboard></dev-dashboard>',
        link: function (scope) {
            scope.widgets = [
                {
                    sizeX: 3,
                    sizeY: 3,
                    row: 0,
                    col: 0
                },
                {
                    sizeX: 2,
                    sizeY: 4,
                    row: 0,
                    col: 5
                }
            ];
        }
    }
}]);