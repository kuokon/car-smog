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
            this.form = {
                carType: "汽車",
                license: "MC",
                signature: "譚生",
                location: "澳門宋玉生廣場 (近 宋玉生公園)",
            };
            this.carTypes = ["汽車", "電單車", "的士", "旅遊巴士", "貨車", "巴士"];
            this.locations = [
                { id: "塔石廣場", address: "澳門肥利喇亞美打大馬路 (近 塔石廣場)" },
                { id: "何賢公園", address: "澳門羅理基博士大馬路 (近 何賢公園)" },
                { id: "宋玉生公園", address: "澳門宋玉生廣場 (近 宋玉生公園)" },
                { id: "西灣大橋", address: "澳門西灣大橋 " },
                { id: "奧林匹克", address: "澳門奧林匹克大馬路 (近 奧林匹克 游泳館)" },
                { id: "水坑尾 麥當勞", address: "水坑尾街 (近 麥當勞)" },
                { id: "高士德 培正", address: "澳門高士德大馬路 (近 培正中學)" },
                { id: "觀音堂", address: "美副將大馬路 (近 觀音堂)" },
                { id: "關閘", address: "馬場北大馬路 (近 關閘)" },
                { id: "媽閣", address: "河邊新街 (近 媽閣)" },
                { id: "水塘", address: "友誼大馬路 (近 水塘)" },
                { id: "友誼大橋", address: "友誼大橋" },
                { id: "機場", address: "偉龍馬路 (近 機場)" },
                { id: "威尼斯人", address: "路氹連貫公路 (近 威尼斯人)" }
            ];
            this.dateStr = null;
            this.message = 'Hello World';
            this.makeEmailLink = function () {
                var newLine = '%0D%0A';
                var bodyTxt = '敬啟者：'
                    + newLine + newLine +
                    '   本人 投訴 ' + this.getCarType() + '(' + this.getLicense() + ') 在路上行走時排出很多黑煙.'
                    + newLine
                    + '        時間: ' + this.getDateTime() + newLine
                    + '        地點: ' + this.getLocation()
                    + newLine + newLine
                    + ' 為澳門空氣質量 及 市民健康 著想, 請強制 該車輛 檢查 排氣. ' + newLine
                    + newLine + newLine + newLine
                    + '謝謝.'
                    + newLine + ' 市民, 譚生' + newLine + ' ' + this.getDate();
                bodyTxt.replace('\n', '%0D%0A');
                var subjectTxt = '投訴 ' + this.getCarType() + ' 煙霧 (' + this.getLicense() + ')';
                var res = 'mailto:info@dsat.gov.mo?subject=' + subjectTxt + '&body=' + bodyTxt;
                window.location.href = res;
            };
            this.getLicense = function () {
                return this.parseLicense(this.form.license);
                //return 'MF-12-24';
            };
            this.getLocation = function () {
                //return parseLicense(form.license);
                //return 'MF-12-24';
                return this.form.location;
            };
            this.getCarType = function () {
                return this.form.carType;
                //var res = form.carType == 1 ? '汽車' : '電單車';
                //return res;
            };
            this.getDate = function () {
                if (!this.dateStr) {
                    var date = new Date();
                    this.dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                }
                return this.dateStr;
            };
            this.getDateTime = function () {
                var dateTimeStr = null;
                var d = new Date();
                dateTimeStr = (d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2)
                    + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
                return dateTimeStr;
            };
            var self = this;
        }
        parseLicense(license) {
            var alpha = license.replace(/[^A-Za-z]/g, '');
            var number = license.replace(/\D/g, '');
            var firstTwo = '';
            if (alpha) {
                if (alpha.length > 1) {
                    firstTwo = alpha.slice(-2);
                }
                else {
                    firstTwo = alpha;
                }
            }
            firstTwo = firstTwo.toUpperCase();
            var lastPart = '..-..';
            var res = firstTwo + ' ' + number;
            if (this.isCar()) {
                if (number && number.length > 3) {
                    number = number.slice(-4);
                    lastPart = number.substring(0, 2) + '-' + number.slice(-2);
                }
                res = firstTwo + ' ' + lastPart;
            }
            return res;
        }
        isCar() {
            return this.form.carType != "電單車";
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