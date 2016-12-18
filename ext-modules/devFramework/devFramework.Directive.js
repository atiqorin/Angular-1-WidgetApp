angular.module("devFramework").directive("devFramework", function () {
    return {
        transclude: false,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "devFrameworkController",
        templateUrl: "ext-modules/devFramework/devFrameworkTemplate.html"
        
    };
});