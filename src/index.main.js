var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages', 'md.data.table'])
        .controller('mainController', MainController)
        .service('myService', MyService)
        .config(ConfigMaterial);
})(MyApp || (MyApp = {}));
console.log('by tko');
