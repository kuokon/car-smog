var MyApp;
(function (MyApp) {
    class MyService {
        constructor($q, $http) {
            this.$q = $q;
            this.$http = $http;
        }
        // private handleError(error: any): Promise<any> {
        handleError(error) {
            console.error('An error occurred', error); // for demo purposes only
            //return 'a';
            //return Promise.reject(error.message || error);
            // return Promise.reject(error.message || error);
        }
    }
    MyService.$inject = ['$q', '$http'];
    MyApp.MyService = MyService;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=myService.js.map