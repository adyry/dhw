<?php
function get_string_between($string, $start, $end){
	$string = ' ' . $string;
	$ini = strpos($string, $start);
	if ($ini == 0) return '';
	$ini += strlen($start);
	$len = strpos($string, $end, $ini) - $ini;
	return substr($string, $ini, $len);
}

if (have_posts()): while (have_posts()) : the_post(); ?>
	<?php $fullstring = get_field('youtube_url') . '&';
	$parsed = get_string_between($fullstring, '?v=', '&');	?>
	<!-- article -->
	<article id="post-<?php the_ID(); ?>" <?php post_class("vidarch__post"); ?> >
		<div class="vidarch__vid-wrapper">
			<div class="vidarch__thumbnail-wrap">
				<figure class="vidarch__thumbnail-figure" title="<?php the_title(); ?>">
					<?php if ( has_post_thumbnail()) : ?>
							<?php the_post_thumbnail('full',array('class' => "vidarch__thumbnail")); ?>
					<?php else: ?>
						<img src="https://img.youtube.com/vi/<?php echo $parsed ?>/maxresdefault.jpg" class="vidarch__thumbnail">
					<?php endif; ?>
					<figure class="vidarch__play-icon"></figure>
				</figure>
			</div>
			<div class="vidarch__title-and-text-wrap">
				<div class="vidarch__title-and-text">
					<h2 class="vidarch__title">
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
					</h2>
					<span class="vidarch__description">
						<?php echo get_field('description'); ?>
					</span>
				</div>
				<div class="vidarch__meta">
					<span class="date"><?php the_time('j F Y'); ?>,</span>
					<span class="author"> <?php the_author_posts_link(); ?>.</span><br />
					<span class="comments"><?php if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave comment', 'html5blank' ), __( '1 Comment', 'html5blank' ), __( '% Comments', 'html5blank' )); ?></span>
					<?php edit_post_link(); ?>
				</div>
			</div>
		</div>
		<div class="youtube-player-overlay">
		    <div class="youtube-player-overlay__video">
				<div class="youtube-player-overlay__video-aspecter">
		        	<iframe id="youtube-player" class="youtube-player-overlay__player" src="https://www.youtube.com/embed/<?php echo $parsed ?>?enablejsapi=1"  width="100%" height="100%" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
				<!-- <div class="youtube-player-overlay__description">
					<?php // echo get_field('description'); ?>
				</div> -->
		        <div class="youtube-player-overlay__close">
		            x
		        </div>
		    </div>
		</div>
	</article>
	<!-- /article -->

<?php endwhile; ?>

<?php else: ?>

	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>
