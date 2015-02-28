(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var cutil = require('clam/core/util');
// var $ = require('jquery');
// var module = require('./clam_module/module');

// cutil.createPrototypes(module);
// The latitude and longitude of your business / place
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(0,0),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.HYBRID 
    };
    var map = new google.maps.Map(document.getElementById("map"), 
        mapProp);
    google.maps.event.addDomListener(window, 'load', initialize);
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiZnJvbnRfc3JjXFxzY3JpcHRzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0Jztcbi8vIHZhciBjdXRpbCA9IHJlcXVpcmUoJ2NsYW0vY29yZS91dGlsJyk7XG4vLyB2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gdmFyIG1vZHVsZSA9IHJlcXVpcmUoJy4vY2xhbV9tb2R1bGUvbW9kdWxlJyk7XG5cbi8vIGN1dGlsLmNyZWF0ZVByb3RvdHlwZXMobW9kdWxlKTtcbi8vIFRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHlvdXIgYnVzaW5lc3MgLyBwbGFjZVxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICB2YXIgbWFwUHJvcCA9IHtcbiAgICAgICAgY2VudGVyOm5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwwKSxcbiAgICAgICAgem9vbTogNyxcbiAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuSFlCUklEIFxuICAgIH07XG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIFxuICAgICAgICBtYXBQcm9wKTtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XG59Il19
