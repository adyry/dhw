<?php get_header(); ?>
	<main class="main-aside-wrapper__main" role="main">
		<section>
			<h1><?php _e( 'Categories for ', 'html5blank' ); single_cat_title(); ?></h1>
			<?php get_template_part('loop'); ?>
			<?php get_template_part('pagination'); ?>
		</section>
	</main>

<?php get_footer(); ?>
