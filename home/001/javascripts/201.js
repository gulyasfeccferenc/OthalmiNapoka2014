(function(){
  "use strict";
	var LastFm;
	LastFm  = (function(){
		function LastFm(){}

		LastFm.search = function(query, callback){
			return $.ajax({
				type: 'GET',
				datatype: 'json',
				url: 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + query + '&api_key=6d4d930f6d9b2a8ea62e7d45001da5b7&format=json',
				success: callback,
				crossDomain: true
			});
		};

		LastFm.artistInfo = function(artist, callback){
			return $.ajax({
				type: 'GET',
				datatype: 'json',
				url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=6d4d930f6d9b2a8ea62e7d45001da5b7&format=json',
				success: callback,
				crossDomain: true
			});
		};

		return LastFm;
	})();

	window.LastFm = LastFm;
}).call(this);
/*var lastfm = new LastFM({
    apiKey  : '6d4d930f6d9b2a8ea62e7d45001da5b7',
    apiSecret: '43a5baf35d42555a68655b65c831cb58'
    });*/
