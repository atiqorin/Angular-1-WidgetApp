angular.module('app').config(['$routeProvider', function ($routeProvider) {

    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<app-dashboard></app-dashboard>'
            }
        },
        {
            url: '/locations',
            config: {
                template: '<app-locations></app-locations>'
            }
        },
        {
            url: '/guides',
            config: {
                template: '<app-guides></app-guides>'
            }
        }
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });

}]);