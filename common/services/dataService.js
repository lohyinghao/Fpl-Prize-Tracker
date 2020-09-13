(function () {
  'use strict';

  angular.module('common.services').factory('dataService', dataService);

  dataService.$inject = ['$resource', 'playerService'];
  function dataService($resource, playerService, $http) {
    function callPlayerUrl(playerId) {
      return $resource(playerService.getPlayerUrl(playerId), null, null, {
        stripTrailingSlashes: false,
      });
    }

    function callGWUrl(playerId) {
      //console.log(playerService.getPlayersGWUrl(playerId));
      return $resource(playerService.getPlayersGWUrl(playerId), null, null, {
        stripTrailingSlashes: false,
      });
    }

    return {
      callPlayerUrl: callPlayerUrl,
      callGWUrl: callGWUrl,
    };
  }
})();
