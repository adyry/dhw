'use strict';

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

var breakpoint = 768;

jQuery(document).ready(function ($) {
    var menu = menu_docker('header__menu');
    var initSearch = searchPopup();
    if (location.pathname.split("/")[2]) {
        //change to 1 on deploy to live
        $('ul.header__menu > li > a[href*="/' + location.pathname.split("/")[2] + '"]').parent().addClass('current-menu-item');
    }
    if (location.pathname.split("/")[2] == 'blog') {//change to 1 on deploy to live

    }
    var $touchMenu = $('.menu-item-185 > a');
    $touchMenu.on('touchstart', function (e) {
        e.preventDefault();
        $touchMenu.siblings('ul').css({
            visibility: 'visible',
            opacity: 1
        });
    });
});

var menu_docker = function menu_docker(cssClassName) {
    var docked = cssClassName + '--fixed';
    var $nav = $('.' + cssClassName);
    var offset = $nav.offset()['top'];
    var $window = $(window);

    if ($window.scrollTop() > offset && $(window).outerWidth() > breakpoint) {
        $nav.addClass(docked);
    } else {
        $nav.removeClass(docked);
    }
    $window.scroll(function () {
        if ($window.scrollTop() > offset && $(window).outerWidth() > breakpoint) {
            $nav.addClass(docked);
        } else {
            $nav.removeClass(docked);
        }
    });
};

var searchPopup = function searchPopup() {
    $('.menu-item-search-click').click(function () {
        $('.search__overlay').css('display', 'flex');
        $('.search__wrapper .search-input').focus();
    });
    $('.search__overlay, .search__close').click(function (e) {
        e.stopPropagation();
        $('.search__overlay').css('display', 'none');
    });
    $('form.search').click(function (e) {
        e.stopPropagation();
    });
};
//# sourceMappingURL=scripts.js.map
