<?php /* Template Name: Homepage */ get_header(); ?>

<?php get_header(); ?>

	<main class="main-aside-wrapper__main" role="main">
		<article class="homepage-tile">
			<h1><?php the_title(); ?></h1>
			<?php
			the_post();

			the_content();
			?>
		</article>
		<?php get_template_part('loop-homepage'); ?>
		<?php get_template_part('pagination'); ?>
	</main>

<?php get_footer(); ?>
