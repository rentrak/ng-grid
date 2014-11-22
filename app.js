'use strict';

angular.module('uiGridDemo', ['ui.grid'])
    .controller('DemoCtrl', function($scope) {
        $scope.gridOptions = {
            enableHorizontalScrollbar: false,
            enableVerticalScrollbar: false,
            data: [
                {
                    "name": "Ethel Price",
                    "gender": "female",
                    "company": "Enersol"
                },
                {
                    "name": "Claudine Neal",
                    "gender": "female",
                    "company": "Sealoud"
                },
                {
                    "name": "Beryl Rice",
                    "gender": "female",
                    "company": "Velity"
                },
                {
                    "name": "Wilder Gonzales",
                    "gender": "male",
                    "company": "Geekko"
                }
            ]
        };
    });