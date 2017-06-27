var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

jQuery(document).ready(function( $ ) {
    menu_docker('header__menu');
});

function onYouTubeIframeAPIReady() {
    const overlays = Array.from(document.getElementsByClassName('youtube-player-overlay'));
    const containers = Array.from(document.getElementsByClassName('youtube-player-overlay__player'));
    const placeholders = Array.from(document.getElementsByClassName('vidarch__thumbnail-figure'));
    const player = [];
    containers.map((item, i) => {
        player.push(new YT.Player(item));
        console.log(player);
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


menu_docker = (cssClassName) => {
    const docked = cssClassName+'--fixed'
    const nav = $('.'+cssClassName);
    const offset = nav.offset()['top'];

    $(window).scroll(() => {
        if ($(this).scrollTop() > offset) {
            nav.addClass(docked);
            $('.header__fixed-logo').show();
        } else {
            nav.removeClass(docked);
            $('.header__fixed-logo').hide();
        }
    });
}
