jQuery(document).ready(( $ ) => {
    menu_docker('header__menu');
    menu_drop();
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

menu_drop = () => {
    const top_li = $('.header__menu > li.menu-item-has-children').click((event) => {
        $('.sub-menu').show();
        $('.header__menu').toggleClass('header__menu--active');
    })
    const hide = $('.header__menu--active').click(() => {
        
    })
}
