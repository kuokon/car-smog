module MyApp {

    angular.module('MyApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages'])
        .controller('mainController', MainController)
        .service('myService', MyService)
        .config(ConfigMaterial);


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () {
                console.log('Service Worker Registered');
            });
    } else {
        console.log('No Service Worker ....');
    }

}

console.log('by tko');
