var MyApp;
(function (MyApp) {
    class MainController {
        constructor(myService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.myService = myService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.message = 'Hello World';
            var self = this;
        }
    }
    MainController.$inject = [
        'myService',
        '$mdSidenav',
        '$mdToast',
        '$mdDialog',
        '$mdMedia',
        '$mdBottomSheet'
    ];
    MyApp.MainController = MainController;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appController.js.map