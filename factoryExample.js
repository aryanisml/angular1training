(function () {
    'use strict';

    angular.module('myApp')
       .factory('coreCommitteeFactory', funccoreCommitteeFactory);

    funccoreCommitteeFactory.$inject = ['$http'];

    function funccoreCommitteeFactory($http) {

        var service = {};
        service.getMemberList = getMemberList;
        return service;

        function getMemberList() {
            var contactList = [
   { id: 0, name: 'Mr.Swapnil Kamble', email: 'swapnilkamble@live.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "8", flatNo: "302", mobileNo: "9768719367/ 7506073922", imgProfile: "../../img/FinalImage.jpg" },
   { id: 1, name: 'Mr.Anuj Kumar', email: 'anujkumar_hrl@rediffmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "2", flatNo: "303", mobileNo: "9320178853", imgProfile: "../../img/AnujKumar.jpg" },
            ];
            return contactList;

            
        }

    }
})();