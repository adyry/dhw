jQuery(document).ready(( $ ) => {
    menu_docker('header__menu');
    // menu_drop();
});

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


// function showmenu() {
//     $(this).children('ul').show()
// }
//
// function hidemenu() {
//     // setTimeout(() => {
//         $('ul.sub-menu').hide()
//     // }, 3000);
// }
//
// menu_drop = () => {
//     $('.menu-item-has-children').click(showmenu).hover(showmenu);
//     $('.header__menu').mouseleave(hidemenu)
// }
