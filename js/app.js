(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var cutil = require('clam/core/util');
// var $ = require('jquery');
// var module = require('./clam_module/module');

// cutil.createPrototypes(module);
// The latitude and longitude of your business / place
$('header').css({ opacity: 0});      
$('header').each(function(index){        
        var $this = $(this);        
        $this.delay(index * 120)
                    .animate({opacity: 1}, 700);
});

 $('#header').on('click', function() {
   $('#programok').slideToggle(1000);
   return false;
 });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiZnJvbnRfc3JjXFxzY3JpcHRzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLy8gdmFyIGN1dGlsID0gcmVxdWlyZSgnY2xhbS9jb3JlL3V0aWwnKTtcbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vLyB2YXIgbW9kdWxlID0gcmVxdWlyZSgnLi9jbGFtX21vZHVsZS9tb2R1bGUnKTtcblxuLy8gY3V0aWwuY3JlYXRlUHJvdG90eXBlcyhtb2R1bGUpO1xuLy8gVGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgeW91ciBidXNpbmVzcyAvIHBsYWNlXG4kKCdoZWFkZXInKS5jc3MoeyBvcGFjaXR5OiAwfSk7ICAgICAgXG4kKCdoZWFkZXInKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXsgICAgICAgIFxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpOyAgICAgICAgXG4gICAgICAgICR0aGlzLmRlbGF5KGluZGV4ICogMTIwKVxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7b3BhY2l0eTogMX0sIDcwMCk7XG59KTtcblxuICQoJyNoZWFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICQoJyNwcm9ncmFtb2snKS5zbGlkZVRvZ2dsZSgxMDAwKTtcbiAgIHJldHVybiBmYWxzZTtcbiB9KTtcblxuJChmdW5jdGlvbigpIHtcbiAgJCgnYVtocmVmKj0jXTpub3QoW2hyZWY9I10pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7Il19
