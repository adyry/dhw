<?php if (is_active_sidebar('widget-area-2')): ?>
    <aside class="main-aside-wrapper__aside main-aside-wrapper__aside--fullwidth">
        <div class="sidebar_widget">
            <?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar('widget-area-2')) ?>
        </div>
    </aside>
<?php endif; ?>
