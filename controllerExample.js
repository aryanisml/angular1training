(function(){
'use strict';
angular.module('myApp',[])
.controller('myController', funcmyController);

funcmyController.$inject=['$scope','coreCommitteeFactory'];

function funcmyController($scope,coreCommitteeFactory){

$scope.person={
firstname:'swapnil',
lastname:'kamble'
}

$scope.showName=function(){

$scope.mylist=coreCommitteeFactory.getMemberList();

return $scope.person.firstname + " " +$scope.person.lastname;

}


}





})();