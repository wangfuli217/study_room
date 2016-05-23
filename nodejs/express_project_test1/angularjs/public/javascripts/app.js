
(function() {

var app = angular.module("store", []);

app.controller('testControl', function() {
    this.product = gem;
});

var gem = {
    name1: "myProduct",
    value1: 1000
}


app.controller('UserCtrl', ['$scope', function ($scope) {
    $scope.user = {};
    $scope.user.details = {
        "username" : "Todd Motto",
        "id" : "89101112"
    };
}]);    


app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    }

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    }
})

})();
