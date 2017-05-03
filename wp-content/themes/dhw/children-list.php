<?php /* Template Name: Modern House To Sell */ get_header();

$child_pages = new WP_Query(array(
    'post_type'      => 'page', // set the post type to page
    'posts_per_page' => 10, // number of posts (pages) to show
    'post_parent'    => get_the_ID(), // enter the post ID of the parent page
    'no_found_rows'  => true, // no pagination necessary so improve efficiency of loop
));
?>

<main role="main" class="main-aside-wrapper__main">
	<!-- section -->
	<section>
		<h1><?php the_title(); ?></h1>
    	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
    		<!-- article -->
    		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    		<?php the_content(); ?>
    			<?php comments_template('', true); // Remove if you don't want comments?>
    			<br class="clear">
    			<?php edit_post_link(); ?>
    		</article>
    		<!-- /article -->
    	<?php endwhile; ?>
    	<?php else: ?>
    		<!-- article -->
    		<article>
    			<h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>
    		</article>
    		<!-- /article -->
    	<?php endif; ?>
    </section>
    <!-- /section -->
    <?php if ($child_pages->have_posts()) :?>
        <section>
            <?php while ($child_pages->have_posts()) : $child_pages->the_post(); ?>

        	<article id="post-<?php the_ID(); ?>" <?php post_class('subpage-tile'); ?> >

        		<?php if (has_post_thumbnail()) : ?>
                    <div class="subpage-tile__image">
                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
            				<?php the_post_thumbnail(); ?>
            			</a>
                    </div>
                    <div class="subpage-tile__content">
                		<h2>
                			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
                		</h2>

                		<?php html5wp_excerpt('html5wp_index');?>
                        <?php the_meta(); ?>

                    </div>
                <?php else : ?>
                    <h2>Nie dodano miniatury</h2>
                    <?php html5wp_excerpt('html5wp_index'); ?>
                <?php endif; ?>
                <?php edit_post_link(); ?>
        	</article>

            <?php endwhile; ?>
        </section>
    <?php endif;
    wp_reset_postdata(); ?>
</main>
<?php get_footer(); ?>
