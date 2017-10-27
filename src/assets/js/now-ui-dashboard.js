/*!

 =========================================================
 * now-ui-dashboard - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-dashboard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard/blob/master/LICENSE.md)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;

var seq = 0, delays = 80, durations = 500;
var seq2 = 0, delays2 = 80, durations2 = 500;

$(document).ready(function(){
    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    // Activate Popovers and set color for popovers
    $('[data-toggle="popover"]').each(function(){
        color_class = $(this).data('color');
        $(this).popover({
            template: '<div class="popover '+ color_class +' " role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        });
    });

    // check if there is an image set for the sidebar's background
    nowuiDashboard.checkSidebarImage();

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

    if($('.navbar[color-on-scroll]').length != 0){
        nowuiDashboard.checkScrollForTransparentNavbar();
        $(window).on('scroll', nowuiDashboard.checkScrollForTransparentNavbar)
    }

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Activate bootstrapSwitch
    $('.bootstrap-switch').each(function(){
        $this = $(this);
        data_on_label = $this.data('on-label') || '';
        data_off_label = $this.data('off-label') || '';

        $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        });
    });

    if( $(window).width() < 992 ){
        nowuiDashboard.initRightMenu();
    }

    if ($(window).width() >= 992){
        big_image = $('.page-header-image[data-parallax="true"]');

        $(window).on('scroll', nowuiDashboardDemo.checkScrollForParallax);
    }
});

$(window).resize(function(){
    if( $(window).width() < 992 ){
        nowuiDashboard.initRightMenu();
    }

    // reset the seq for charts drawing animations
    seq = seq2 = 0;
});

nowuiDashboard = {
    misc:{
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function() {
            if($(document).scrollTop() > scroll_distance ) {
                if(transparent) {
                    transparent = false;
                    $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.navbar[color-on-scroll]').addClass('navbar-transparent');
                }
            }
    }, 17),

    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        }
    },

    initRightMenu: function(){
        if(!toggle_initialized){
            $toggle = $('.navbar-minimize');

            $toggle.click(function (){
                if(nowuiDashboard.misc.navbar_menu_visible == 1) {
                    $('html').removeClass('nav-open');
                   nowuiDashboard.misc.navbar_menu_visible = 0;
                    setTimeout(function(){
                       $toggle.removeClass('toggled');
                       $('#bodyClick').remove();
                   }, 550);

                } else {

                   setTimeout(function(){
                       $toggle.addClass('toggled');
                   }, 580);

                   $navbar = $(this).parent('.navbar-translate').siblings('.navbar-collapse');
                   background_image = $navbar.data('nav-image');
                   if(background_image != undefined){
                      $navbar.css('background',"url('" + background_image + "')")
                             .removeAttr('data-nav-image')
                             .css('background-size',"cover")
                             .addClass('has-image');
                   }

                   div = '<div id="bodyClick"></div>';
                   $(div).appendTo('body').click(function() {
                       $('html').removeClass('nav-open');
                       nowuiDashboard.misc.navbar_menu_visible = 0;
                        setTimeout(function(){
                           $toggle.removeClass('toggled');
                           $('#bodyClick').remove();
                        }, 550);
                   });

                  $('html').addClass('nav-open');
                   nowuiDashboard.misc.navbar_menu_visible = 1;

                }
            });
            toggle_initialized = true;
        }
    },

    startAnimationForLineChart: function(chart){

        chart.on('draw', function(data) {
          if(data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'ease'
                  }
                });
            }
        });

        seq = 0;
    },
    startAnimationForBarChart: function(chart){

        chart.on('draw', function(data) {
          if(data.type === 'bar'){
              seq2++;
              data.element.animate({
                opacity: {
                  begin: seq2 * delays2,
                  dur: durations2,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
        });

        seq2 = 0;
    }
}


var big_image;

// Javascript just for Demo purpose, remove it from your project
nowuiDashboardDemo = {
    checkScrollForParallax: debounce(function(){
        var current_scroll = $(this).scrollTop();

        oVal = ($(window).scrollTop() / 3);
        big_image.css({
            'transform':'translate3d(0,' + oVal +'px,0)',
            '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
            '-ms-transform':'translate3d(0,' + oVal +'px,0)',
            '-o-transform':'translate3d(0,' + oVal +'px,0)'
        });

    }, 6)

}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
