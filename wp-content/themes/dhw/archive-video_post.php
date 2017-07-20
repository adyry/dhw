<?php get_header(); ?>

	<main class="main-aside-wrapper__main main-aside-wrapper__main--addcolors" role="main">
		<section class="vidarch">
			<h1 class="vidarch__archive-title"><?php _e( 'Video Archives', 'html5blank' ); ?></h1>
			<?php get_template_part('loop-vid'); ?>
			<?php get_template_part('pagination'); ?>
		</section>
	</main>

<?php get_footer(); ?>
