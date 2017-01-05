angular.module('app').directive('appDashboard', [function () {
    return {
        scope: {
        },
        template: '<dev-dashboard></dev-dashboard>',
        link: function (scope) {

            scope.title = 'My awesome Dashboard';

            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: true,
                swapping: false
            };

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