'use strict';

var Utils = Utils || {};

Utils.utils = {

    token: "",
    ngDialog: null,
    ignoreConnectionError: false,
    $location: null,

    isBlankString: function (str) {
        return (!str || /^\s*$/.test(str));
    },

    _isLocalHost : function($location) {

        if($location) {
            var host = $location.host();

            console.info('host: ' + host);

            if(host.indexOf('localhost') == 0) {
                return true;
            }

        }

        return false;

    },

    clearAll: function (obj) {

        if (obj.constructor === Array) {
            while (obj.length > 0) {
                obj.pop();
            }
        } else {

            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    delete obj[prop];
                }
            }

        }
    }

    , shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        //return array;
    }


    , closeConnectionProblemModal: function ($scope) {
        if (this.ngDialog && this.showConnectionProblemModalInstance) {
            this.ngDialog.close(this.showConnectionProblemModalInstance.id);
        }
    }

    , showConnectionProblemModal: function ($scope) {

        if (this.ngDialog) {
            if (this.showConnectionProblemModalInstance) {
                this.ngDialog.close(this.showConnectionProblemModalInstance.id);
            }
            this.showConnectionProblemModalInstance = this.ngDialog.open({
                template: '<div style="text-align: center" ng-click="closeThisDialog()"><h1>連接出現問題</h1> <h2>請檢查連接，然後重試.</h2>' +
                '<button class="btn btn-lg btn-block btn-primary">關閉</button></div>',
                plain: true
                , overlay: true
                , closeByDocument: true
                , closeByEscape: true
                , showClose: true
                //template: 'modal/connection_problem_modal.html'
                , controller: ['$scope', function ($scope) {
                }]
            });
        }
    }


    , registerCloseDialogOnRouteChange: function ($scope, ngDialog) {
        $scope.$on('$routeChangeStart', function (event, newUrl, oldUrl) {

            if (ngDialog) {
                ngDialog.closeAll();

            }
        });
    }

    , setTimeout: function ($timeout, scope, fn, delay) {
        var promise = $timeout(fn, delay);
        var deregister = scope.$on('$destroy', function () {
            $timeout.cancel(promise);
        });
        promise.then(deregister);

        return promise;
    }


    , isNumberAndLength: function (value, len) {
        if (!value) {
            return false;
        }

        var str = value.toString();
        var allDigits = /^\d+$/.test(str);
        if (!allDigits) {
            return false;
        }

        return str.length == len;

    }
    , isEmptyString: function (str) {
        return str == null || str.trim().length == 0;
    }

    , showDateMmDd: function (date) {
        if (date) {
            return (date.getMonth() + 1) + "-" + date.getDate();
        } else {
            return "N/A date!";
        }
    }

    , showDate: function (date) {
        if (date) {
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        } else {
            return "N/A date!";
        }
    }
    , showTime: function (date) {
        if (date) {

            var hh = date.getHours();
            if (hh < 10) {
                hh = "0" + hh;
            }

            var mm = date.getMinutes();
            if (mm < 10) {
                mm = "0" + mm;
            }
            return hh + ":" + mm;
        }

        return "N/A ";
    }

    , showDateTime: function (date) {
        return this.showDate(date) + " " + this.showTime(date);
    }

    , handleNetworkError: function (growl, err, status, headers_fn, config) {



        var msg = status + ": ";

        if (status <= 0) {
            msg += "網絡連接出現問題. "
        }

        if (status == 401) {  // Unauthorized

            msg += "Authorization Failed";
        }

        if(status == 404) {
            msg += "Not found";
        }
        if(status == 403) {
            msg += "Forbidden Access!";
        }


        growl.error(msg, {ttl: 3000});
        console.error("status: " + status + ", err: " + JSON.stringify(err));
    }
    ,

    handleGenericMessage: function (growl, msg, status) {
        if (msg == null) {
            return false;
        }

        var ok = ( 200 <= status < 300);

        var showMessage = function (txt) {
            if (growl != null) {
                if (ok) {
                    growl.info(txt, {ttl: 1000});
                } else {
                    growl.error(txt, {ttl: 3000});
                }
            } else {
                if (ok) {
                    console.info(txt);
                } else {
                    console.error(txt);
                }

            }
        };

        // close if any;
        this.closeConnectionProblemModal();

        if (ok) {
            if (!Utils.utils.isEmptyString(msg.message))
                showMessage(msg.message);

            if (!Utils.utils.isEmptyString(msg.debug_msg))
                showMessage(msg.debug_msg);

        } else {

            if ("LOGIN" == msg.status) {
                return;
            }

            var txt = "操作失敗: ";
            if (!Utils.utils.isEmptyString(msg.message)) {
                txt += msg.message;
            }
            if (!Utils.utils.isEmptyString(msg.debug_msg)) {
                txt += msg.debug_msg;
            }

            showMessage(txt);
        }


        return ok;
    }


}
;

