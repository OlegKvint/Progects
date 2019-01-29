<!-- Объявление переменной для карты -->
<?php $map = JString::trim($this->renderPosition('map'));?>
<!-- Заголовок страницы (по умолчанию берется из заголовка материала) -->
<?php if ($this->checkPosition('title')) : ?>
    <h1 class="title"><?php echo $this->renderPosition('title'); ?></h1>
<?php endif; ?>
<!-- / Заголовок страницы -->
<!-- Основная информация сверху с изображением и свойствами справа в виде таблички -->
<div class="clearfix top-info">
    <?php if ($this->checkPosition('gallery')) : ?>
        <div class="full-gallery">
            <?php echo $this->renderPosition('gallery'); ?>
        </div>
    <?php endif; ?>
    <div class="features">
        <?php if ($this->checkPosition('properties')) : ?>
            <div class="price-flat clearfix">
                <?php echo $this->renderPosition('price'); ?>
            </div>
            <ul class="properties">
               <?php echo $this->renderPosition('properties', array('style'=>'list')); ?>
            </ul>
            <div class="favourite">
                <?php echo $this->renderPosition('favourite'); ?>
            </div>
        <?php endif; ?>
    </div>
</div>
<div class="clear clr"></div>
<!-- / Основная информация сверху →
<!-- Вкладки -->
<div id="tabs">  
    <!-- Шапка вкладок (можете поменять заголовки здесь на свои) -->
    <ul>
        <li><a href="/<?php echo JUri::getInstance()->toString();?>#tab-overview">Overview</a></li>
        <li><a href="/<?php echo JUri::getInstance()->toString();?>#tab-agent">Listing Agent</a></li>
        <?php if ($map) : ?><li><a href="/<?php echo JUri::getInstance()->toString();?>#tab-location">Location</a></li><?php endif; ?>
        <li><a href="/<?php echo JUri::getInstance()->toString();?>#tab-comments">Comments</a></li>
    </ul>
    <!-- Вкладка с описанием объекта недвиждимости и похожими на него объектами -->
    <div id="tab-overview">
        <div class="full-info-realty">
            <?php if ($this->checkPosition('text')) : ?>
                <div class="text-property description-block">
                    <h3>Description</h3>
                    <?php echo $this->renderPosition('text'); ?>
                </div>
            <?php endif; ?>
            <?php if ($this->checkPosition('related')) : ?>
                <h3>More Similar Properties</h3>
                <div class="related-property">
                    <?php echo $this->renderPosition('related'); ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="clear clr"></div>
    </div>
    <!-- Вкладка с информацией о продавце (риэлторе) -->
    <div id="tab-agent">
        <div class="agent-description description-block">
            <?php echo $this->renderPosition('agent'); ?>
        </div>
    </div>
    <!-- Вкладка с Google картой -->
    <?php if ($map) : ?>
        <div id="tab-location">
            <?php echo $this->renderPosition('map'); ?>
        </div>
    <?php endif; ?>
    <div id="tab-comments">
        <div class="comments-property">
            <?php echo $this->renderPosition('comments'); ?>
        </div>
    </div>
</div>
<!-- / Вкладки -->
<!-- Подключение скриптов -->
<?php $this->app->jbassets->jQueryUi(); ?>
<script>
jQuery(function($) {
    $('#tabs').JBZooTabs({
        onTabShow: function (index) {
            var map = $('.googlemaps > div:first');
            if (map.length) {
                map.data('Googlemaps').refresh();
            }
        }
    });    
    
});
</script>
<!-- /Подключение скриптов -->
