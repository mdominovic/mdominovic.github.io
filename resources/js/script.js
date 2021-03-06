$(document).ready(function (){
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } 
        else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '100px'    
    });
    
    
    /* Scroll on buttons INDEX*/
    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-map').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-map').offset().top}, 1000);
    });
    
    /* Scroll on buttons MENU */
    $('.js--scroll-to-sweet').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-sweet').offset().top}, 1000);
    });
    $('.js--scroll-to-savoury').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-savoury').offset().top}, 1000);
    });
    $('.js--scroll-to-beverages').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-beverages').offset().top}, 1000);
    });
    
    
    /*Navigation scroll */
    
    $(function() {
  		$('a[href*="#"]:not([href="#"])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html, body').animate({
	         		 scrollTop: target.offset().top
	        		}, 1000);
	        		return false;
	      		}
   			}
 		});
	});
    
   
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile nav */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
    
    /* MAP */
    
    var map = new GMaps({
      div: '.map',
      lat: 45.5565785,
      lng: 18.6824537,
      zoom: 17
    });
    
    map.addMarker({
      lat: 45.5565785,
      lng: 18.6824537,
      title: 'Cinkos',
      infoWindow: {
          content: '<p>Mr.Cinkos Base</p>'
        }
    });
    
    
    
});