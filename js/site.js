//Kye Gorosave
//November 9th 2023
//JavaScript container interactivity help from https://codepen.io/Errec/pen/JKppYz?editors=1000
//ART101 Fall 2023 Wes Modes


$(document).ready(function(){
	$('a[href^="#container-2"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  

    
$('a[href^="#container-4"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
  
});