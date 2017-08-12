'use strict';

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

jQuery(document).ready(function ($) {
    var menu = menu_docker('header__menu');
    var constrainMenuPlaceholder = widthConstrain('header__menu-placeholder', 'header__menu');
    if (location.pathname.split("/")[2]) {
        //change to 1 on deploy to live
        $('ul.header__menu > li > a[href*="/' + location.pathname.split("/")[2] + '"]').parent().addClass('current-menu-item');
    }
    if (location.pathname.split("/")[2] == 'blog') {//change to 1 on deploy to live

    }
});

function onYouTubeIframeAPIReady() {
    var overlays = Array.from(document.getElementsByClassName('youtube-player-overlay'));
    var containers = Array.from(document.getElementsByClassName('youtube-player-overlay__player'));
    var placeholders = Array.from(document.getElementsByClassName('vidarch__thumbnail-figure'));
    var player = [];
    containers.map(function (item, i) {
        player.push(new YT.Player(item));
        placeholders[i].addEventListener("click", function () {
            overlays[i].className += ' youtube-player-overlay--active';
            player[i].playVideo();
        });
        overlays[i].addEventListener("click", function () {
            player[i].pauseVideo();
            overlays[i].className = 'youtube-player-overlay';
        });
    });
}

var menu_docker = function menu_docker(cssClassName) {
    var docked = cssClassName + '--fixed';
    var $nav = $('.' + cssClassName);
    var offset = $nav.offset()['top'];
    var $window = $(window);
    if ($window.scrollTop() > offset) {
        $nav.addClass(docked);
    } else {
        $nav.removeClass(docked);
    }
    $window.scroll(function () {
        if ($window.scrollTop() > offset) {
            $nav.addClass(docked);
        } else {
            $nav.removeClass(docked);
        }
    });
};

var widthConstrain = function widthConstrain(parent, child) {
    if ($(window).outerWidth() >= 768) {
        var width = $('.' + child).width();
        $('.' + parent).width(width);
        $('.header__text').css('padding-left', width);
    }
    $(window).resize(function () {
        if ($(window).outerWidth() >= 768) {
            var _width = $('.' + child).width();
            $('.' + parent).width(_width);
            $('.header__text').css('padding-left', _width);
        } else {
            $('.header__text').css('padding-left', 0);
        }
    });
};
//# sourceMappingURL=scripts.js.map
