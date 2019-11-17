(function() {
  'use strict';

  angular.module('common.services').factory('playerService', playerService);

  playerService.$inject = [];
  function playerService() {
    function getPlayersId() {
      var playersList = ['234005', '1282707', '2283332', '52203'];
      return playersList;
    }

    function getPlayersGWUrl(playerId) {
      let corsUrl = '/api/';
      let combined_link = `https://fantasy.premierleague.com/api/entry/${playerId}/history/`;
      return corsUrl.concat(combined_link);
    }

    function getPlayerUrl(playerId) {
      let corsUrl = '/api/';
      let combined_link = `https://fantasy.premierleague.com/api/entry/${playerId}/`;
      return corsUrl.concat(combined_link);
    }

    return {
      getPlayersId: getPlayersId,
      getPlayersGWUrl: getPlayersGWUrl,
      getPlayerUrl: getPlayerUrl
    };
  }
})();
