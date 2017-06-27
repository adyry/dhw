jQuery(document).ready(function( $ ) {
    menu_docker('header__menu');

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

// window.onYouTubeIframeAPIReady = function() {
//     const overlays = Array.from(document.getElementsByClassName('youtube-player-overlay'));
//     const containers = Array.from(document.getElementsByClassName('videoplay'));
//     const placeholders = Array.from(document.getElementsByClassName('vidarch__thumbnail-wrap'));
//     const player = [];
//     containers.map((item, i) => {
//         player.push(new YT.Player(item), {
//             height: '360',
//             width: '640',
//             videoId: 'M7lc1UVf-VE',
//      });
//         console.log(player);
//         placeholders[i].addEventListener("click", () => {
//             overlays[i].className += ' youtube-player-overlay--active';
//             player[i].playVideo();
//         });
//         overlays[i].addEventListener("click", () => {
//             player[i].pauseVideo();
//             overlays[i].className = 'youtube-player-overlay';
//         });
//     });
// }


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


//
// // 2. This code loads the IFrame Player API code asynchronously.
//       var tag = document.createElement('script');
//
//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '360',
//           width: '640',
//           videoId: 'M7lc1UVf-VE',
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }
//
//       // 4. The API will call this function when the video player is ready.
//       function onPlayerReady(event) {
//         event.target.playVideo();
//       }
//
//       // 5. The API calls this function when the player's state changes.
//       //    The function indicates that when playing a video (state=1),
//       //    the player should play for six seconds and then stop.
//       var done = false;
//       function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//           setTimeout(stopVideo, 6000);
//           done = true;
//         }
//       }
//       function stopVideo() {
//         player.stopVideo();
//       }
