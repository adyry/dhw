const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

jQuery(document).ready(function( $ ) {
    const menu = menu_docker('header__menu');
    const constrainMenuPlaceholder = widthConstrain('header__menu-placeholder', 'header__menu');
    if (location.pathname.split("/")[2]) { //change to 1 on deploy to live
        $('ul.header__menu > li > a[href*="/' + location.pathname.split("/")[2] + '"]').parent().addClass('current-menu-item');
    }
    if (location.pathname.split("/")[2] == 'blog') { //change to 1 on deploy to live

    }
});

function onYouTubeIframeAPIReady() {
    const overlays = Array.from(document.getElementsByClassName('youtube-player-overlay'));
    const containers = Array.from(document.getElementsByClassName('youtube-player-overlay__player'));
    const placeholders = Array.from(document.getElementsByClassName('vidarch__thumbnail-figure'));
    const player = [];
    containers.map((item, i) => {
        player.push(new YT.Player(item));
        placeholders[i].addEventListener("click", () => {
            overlays[i].className += ' youtube-player-overlay--active';
            player[i].playVideo();
        });
        overlays[i].addEventListener("click", () => {
            player[i].pauseVideo();
            overlays[i].className = 'youtube-player-overlay';
        });
    });
}

const menu_docker = (cssClassName) => {
    const docked = cssClassName+'--fixed';
    const $nav = $('.'+cssClassName);
    const offset = $nav.offset()['top'];
    const $window = $(window);
    if ($window.scrollTop() > offset) {
        $nav.addClass(docked);
    } else {
        $nav.removeClass(docked);
    }
    $window.scroll(function() {
        if ($window.scrollTop() > offset) {
            $nav.addClass(docked);
        } else {
            $nav.removeClass(docked);

        }
    });
};

const widthConstrain = (parent, child) => {
    if ($(window).outerWidth() >= 768) {
        const width = $('.' + child).width();
        $('.' + parent).width(width);
        $('.header__text').css('padding-left', width)
    }
    $(window).resize(() => {
        if ($(window).outerWidth() >= 768) {
            const width = $('.' + child).width();
            $('.' + parent).width(width);
            $('.header__text').css('padding-left', width)
        } else {
            $('.header__text').css('padding-left', 0)
        }
    })
};
