(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var cutil = require('clam/core/util');
// var $ = require('jquery');
// var module = require('./clam_module/module');

// cutil.createPrototypes(module);
// The latitude and longitude of your business / place
var position = [27.1959739, 78.02423269999997];
 
function showGoogleMaps() {
 
    var latLng = new google.maps.LatLng(position[0], position[1]);
 
    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };
 
    map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
 
    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}
 
google.maps.event.addDomListener(window, 'load', showGoogleMaps);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiZnJvbnRfc3JjXFxzY3JpcHRzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4vLyB2YXIgY3V0aWwgPSByZXF1aXJlKCdjbGFtL2NvcmUvdXRpbCcpO1xuLy8gdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHZhciBtb2R1bGUgPSByZXF1aXJlKCcuL2NsYW1fbW9kdWxlL21vZHVsZScpO1xuXG4vLyBjdXRpbC5jcmVhdGVQcm90b3R5cGVzKG1vZHVsZSk7XG4vLyBUaGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB5b3VyIGJ1c2luZXNzIC8gcGxhY2VcbnZhciBwb3NpdGlvbiA9IFsyNy4xOTU5NzM5LCA3OC4wMjQyMzI2OTk5OTk5N107XG4gXG5mdW5jdGlvbiBzaG93R29vZ2xlTWFwcygpIHtcbiBcbiAgICB2YXIgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pO1xuIFxuICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgICB6b29tOiAxNiwgLy8gaW5pdGlhbGl6ZSB6b29tIGxldmVsIC0gdGhlIG1heCB2YWx1ZSBpcyAyMVxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsIC8vIGhpZGUgdGhlIHllbGxvdyBTdHJlZXQgVmlldyBwZWdtYW5cbiAgICAgICAgc2NhbGVDb250cm9sOiB0cnVlLCAvLyBhbGxvdyB1c2VycyB0byB6b29tIHRoZSBHb29nbGUgTWFwXG4gICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICAgIGNlbnRlcjogbGF0TG5nXG4gICAgfTtcbiBcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSxcbiAgICAgICAgbWFwT3B0aW9ucyk7XG4gXG4gICAgLy8gU2hvdyB0aGUgZGVmYXVsdCByZWQgbWFya2VyIGF0IHRoZSBsb2NhdGlvblxuICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogbGF0TG5nLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUFxuICAgIH0pO1xufVxuIFxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIHNob3dHb29nbGVNYXBzKTsiXX0=
