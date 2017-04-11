var MyApp;
(function (MyApp) {
    class ConfigMaterial {
        constructor($mdIconProvider, $mdThemingProvider) {
            this.$mdIconProvider = $mdIconProvider;
            this.$mdThemingProvider = $mdThemingProvider;
            $mdIconProvider
                .defaultIconSet('./assets/icons/svg/avatars.svg', 128)
                .icon('google_plus', './assets/icons/svg/google_plus.svg', 512)
                .icon('hangouts', './assets/icons/svg/hangouts.svg', 512)
                .icon('twitter', './assets/icons/svg/twitter.svg', 512)
                .icon('phone', './assets/icons/svg/phone.svg', 512)
                .icon('menu', './assets/icons/svg/menu.svg', 24);
            $mdThemingProvider.theme('default')
                .primaryPalette('yellow')
                .accentPalette('blue');
        }
    }
    MyApp.ConfigMaterial = ConfigMaterial;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=configMaterial.js.map