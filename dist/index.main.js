var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages'])
        .controller('mainController', MyApp.MainController)
        .service('myService', MyApp.MyService)
        .config(MyApp.ConfigMaterial);
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () {
            console.log('Service Worker Registered');
        });
    }
    else {
        console.log('No Service Worker ....');
    }
})(MyApp || (MyApp = {}));
console.log('by tko');
//# sourceMappingURL=index.main.js.map