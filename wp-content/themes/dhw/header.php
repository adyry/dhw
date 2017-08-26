<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<body <?php body_class(); ?>>
		<header class="header clear" role="banner">
			<div class="header__logo">
				<a href="<?php echo home_url(); ?>" class="header__logo">
					<img src="<?php header_image(); ?>"
						height="<?php echo get_custom_header()->height; ?>"
						width="<?php echo get_custom_header()->width; ?>" alt="" />
				</a>
			</div>
			<div class="header__text-and-desc">
				<div class="header__text">
					<a class="header__home" href="<?php echo home_url(); ?>">
				       <?php bloginfo('name'); ?>
				   	</a>
					<span class="header__description">
					  <?php bloginfo('description'); ?>
			  		</span>
				</div>
			</div>
		</header>
	<div class="main-aside-wrapper">

		<nav class="menu__placeholder">
            <div class="trigger">
                <button class="trigger__icon"><span></span></button>
            </div>
			<ul class="menu" role="navigation">
				<?php html5blank_nav(); ?>
                <li class="menu-item menu-item-type-post_type_archive menu-item-search-click menu__level-0">
                    <a href="#/">Search</a>
                    <div class="search__overlay">
                        <div class="search__wrapper">
                            <form class="search" method="get" action="<?php echo home_url(); ?>" role="search">
                                <input class="search-input" type="search" name="s" placeholder="<?php _e( 'To search, type and hit enter.', 'html5blank' ); ?>">
                                <button class="search-submit" type="submit" role="button"><?php _e( 'Search', 'html5blank' ); ?></button>
                            </form>
                            <div class="search__close">
                                X
                            </div>
                        </div>
                    </div>
                </li>

			</ul>
		</nav>
