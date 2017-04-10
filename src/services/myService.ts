module MyApp {


    export class MyService {

        static $inject = ['$q', '$http'];

        $http: ng.IHttpService;


        constructor(private $q: ng.IQService, $http: ng.IHttpService) {
            this.$http = $http;
        }


        // private handleError(error: any): Promise<any> {
        private handleError(error: any) {
            console.error('An error occurred', error); // for demo purposes only
            //return 'a';
            //return Promise.reject(error.message || error);
            // return Promise.reject(error.message || error);
        }


    }

}