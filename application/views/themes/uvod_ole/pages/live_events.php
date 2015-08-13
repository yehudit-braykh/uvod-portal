<?php date_default_timezone_set('Jamaica'); ?>
<!--<script type="text/javascript" src="<?php //echo common_asset_url();                ?>pdk/tpPdk.js"></script>-->
<script type="text/javascript" src="<?php echo common_asset_url(); ?>js/flipclock/flipclock.min.js"></script>
<link rel="stylesheet" href="<?php echo common_asset_url(); ?>js/flipclock/flipclock.css">
<link rel="stylesheet" href="<?php echo asset_url(); ?>css/my_carousel.css">
<link rel="stylesheet" type="text/css" href="<?php echo asset_url(); ?>css/temp.css" />
<script type='text/javascript' src="<?php echo common_asset_url(); ?>js/wurfl.js"></script>
​<script type="text/javascript" src="<?php echo common_asset_url(); ?>js/jwplayer/jwplayer.js" ></script>
<script>jwplayer.key = "BFr/jM6cxDTO5jdihqzp0fQ3Advd0Q8Fp6FUqw==";</script>

<script type="text/javascript">

<?php echo 'base_url = "' . base_url() . '";'; ?>


    $('.carousel[data-type="multi"] .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $(document).ready(function () {
        $('.carousel-item').on('click', function (event) {
            event.preventDefault();
            product_id = $(this).attr('product-id');
            $.ajax({
                url: base_url + 'index.php/live_events/get_event',
                type: 'POST',
                data: 'product_id=' + product_id,
                beforeSend: function () {
                    $('#event-template').css('height','450px');
                    $('#event-template').html('<div id="event-loading" class="col-md-12">Loading....</div>');
                   
                },
                success: function (data) {
                    $('#event-template').html(data);
                }
            })
        })
    })



</script>



<div id="event-template">
<?php $this->load->view(views_url() . 'templates/event-detail'); ?>
</div>


<div class="carousel-container">

    <?php
    if (isset($events->content) && sizeof($events->content) > 0) {
        ?>
        <div class="col-md-12 carousel-title"><h3>Scheduled Events</h3></div>
        <!--<div class="col-md-6">-->
        <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3000" id="myCarousel">
            <div class="carousel-inner">
                <?php
                $data = $events->content;
                for ($i = 0; $i < sizeof($data); $i++) {
                    if ($data[$i]->live_now) {
                        $event_item_overlay = '<div class="event_item_overlay_live">LIVE NOW</div>';
                    } else {
                        $event_item_overlay = '<div class="event_item_overlay_date">' . date('d-m H:i', ($data[$i]->event_date / 1000)) . ' hs</div>';
                    }
                    ?>
                    <div class="item active carousel-item-content">
                        <a class="carousel-item" href="#" product-id='<?php echo $data[$i]->id; ?>'>
                            <div class="col-md-2">
                                <?php echo $event_item_overlay; ?>
                                <img src="<?php echo $data[$i]->image; ?>" class="img-responsive">
                                <span class="item-carousel-title"><?php echo $data[$i]->name;?></span>
                            </div>
                        </a>
                    </div>
                    <?php
                }
                ?>
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
        </div>
        <!--</div>-->


    </div>


    <?php
}
?>