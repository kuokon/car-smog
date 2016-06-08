'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    //'angular-growl',
    'ui.bootstrap'
    //, 'chieffancypants.loadingBar'

]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/404'});
}]);

//app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
//    cfpLoadingBarProvider.latencyThreshold = 10;
//}]);
//


app.run(["$rootScope", "$location", "$window",
    function ($rootScope, $location, $window) {

        console.info("App starts!!");
    }]);


app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app.html',
        reloadOnSearch: false,
        controller: 'AppController'
    });
});


app.controller('AppController', ['$rootScope', '$scope', '$routeParams', '$window', '$location', '$http',

    function ($rootScope, $scope, $routeParams, $window, $location, $http) {

        $scope.form = {};
        $scope.form.carType = 1;    // carType: 1 :car   2: motorcycle
        $scope.form.license = "M";
        $scope.form.signature = "譚生";
        $scope.form.location = "澳門宋玉生廣場 (近 宋玉生公園)";

        $scope.locations = [
            {id: "塔石廣場", address: "澳門肥利喇亞美打大馬路 (近 塔石廣場)"}
            , {id: "何賢公園", address: "澳門羅理基博士大馬路 (近 何賢公園)"}
            , {id: "宋玉生公園", address: "澳門宋玉生廣場 (近 宋玉生公園)"}
            , {id: "西灣大橋", address: "澳門西灣大橋 "}
            , {id: "奧林匹克", address: "澳門奧林匹克大馬路 (近 奧林匹克 游泳館)"}
        ];


        var dateStr = null;
        var dateTimeStr = null;


        $scope.makeEmailLink = function () {

            var newLine = '%0D%0A';

            var bodyTxt = '敬啟者：'
                + newLine + newLine +
                '   本人 投訴 ' + $scope.getCarType() + '(' + $scope.getLicense() + ') 在路上行走時排出很多黑煙.'
                + newLine
                + '        時間: ' + $scope.getDateTime() + newLine
                + '        地點: ' + $scope.getLocation()

                + newLine + newLine
                + ' 為澳門空氣質量著想, 請強制 該車輛 檢查 排氣. ' + newLine

                + newLine + newLine + newLine
                + '謝謝.'
                + newLine + ' 市民, 譚生' + newLine + ' ' + $scope.getDate();


            bodyTxt.replace('\n', '%0D%0A');

            var subjectTxt = '投訴 ' + $scope.getCarType() + ' 煙霧 (' + $scope.getLicense() + ')';

            var res = 'mailto:info@dsat.gov.mo?subject=' + subjectTxt + '&body=' + bodyTxt;

            return res;

        };

        function parseLicense(license) {

            var alpha = license.replace(/[^A-Za-z]/g, '');
            var number = license.replace(/\D/g, '');

            var firstTwo = '';
            if (alpha) {
                if (alpha.length > 1) {
                    firstTwo = alpha.slice(-2);
                } else {
                    firstTwo =  alpha;
                }
            }
            firstTwo = firstTwo.toUpperCase();

            var lastPart = '..-..';

            var res = firstTwo + ' ' + number;
            if(isCar()) {
                if (number && number.length > 3) {
                    number = number.slice(-4);
                    lastPart = number.substring(0, 2) + '-' + number.slice(-2);
                }
                res = firstTwo + ' ' + lastPart;
            }


            return res;


        }

        function isCar() {
            return $scope.form.carType == 1
        }

        $scope.getLicense = function () {

            return parseLicense($scope.form.license);
            //return 'MF-12-24';
        };

        $scope.getLocation = function () {

            //return parseLicense($scope.form.license);
            //return 'MF-12-24';
            return $scope.form.location;
        };

        $scope.getCarType = function () {

            var res = $scope.form.carType == 1 ? '汽車' : '電單車';
            return res;
        };

        $scope.getDate = function () {

            if (!dateStr) {
                var date = new Date();
                dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            }

            return dateStr;

        };

        $scope.getDateTime = function () {

            if (!dateTimeStr) {
                var d = new Date();

                dateTimeStr = (d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2)
                + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));

            }

            return dateTimeStr;

        }

    }


])
;



