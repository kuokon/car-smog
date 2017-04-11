var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages', 'md.data.table'])
        .controller('mainController', MyApp.MainController)
        .service('myService', MyApp.MyService)
        .config(MyApp.ConfigMaterial);
})(MyApp || (MyApp = {}));
console.log('by tko');
//# sourceMappingURL=index.main.js.map