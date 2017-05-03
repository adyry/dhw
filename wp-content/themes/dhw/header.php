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
	<body <?php body_class(); ?>

		<div class="wrapper">
			<header class="header clear" role="banner">
					<div class="header__logo">
						<!-- <a href="<?php echo home_url(); ?>" class="header__logo"> -->
							<img src="<?php header_image(); ?>"
								height="<?php echo get_custom_header()->height; ?>"
								width="<?php echo get_custom_header()->width; ?>" alt="" />
						<!-- </a> -->
					</div>
					<div class="header__text-and-menu">
						<div class="header__text">
							<a class="header__home" href="<?php echo home_url(); ?>">
						       <?php bloginfo('name'); ?>
						    </a>
							<span class="header__description">
							  <?php bloginfo('description'); ?>
					  		</span>
						</div>
						<div class="header__menu-placeholder">

							<ul class="header__menu" role="navigation">
								<li class="header__fixed-logo">
									<img src="<?php header_image(); ?>"
										height="40px"
										width="40px" alt="" />
								</li>
								<?php html5blank_nav(); ?>
							</ul>
						</div>
					</div>
			</header>

	<div class="main-aside-wrapper">
