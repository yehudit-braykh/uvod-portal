<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:tp="http://player.theplatform.com/" xml:lang="en" lang="en">
    <head>
        <title>UVOD Portal</title>
        <meta name="description" content="Challenging the future of TV">
        <meta name="keywords" content="website, business, store" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

                
        <link href="<?php echo asset_url(); ?>css/bootstrap.css" rel="stylesheet"/>

        <link rel="stylesheet" type="text/css" href="<?php echo asset_url(); ?>css/style.css" />

        <!-- Javascript files -->
        <script type="text/javascript" src="//code.jquery.com/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="<?php echo common_asset_url(); ?>js/bootstrap.min.js"></script>

        <script>
            $(function () {
                $('.header_logo').on('click', function (event) {
                    window.location.href = '<?php echo base_url(); ?>';
                });
                $('.foot_logo').on('click', function (event) {
                    window.location.href = '<?php echo base_url(); ?>';
                });
            });
        </script>
</head>

<body>

<div class="container container_full">

    <div class="maincontainer">


        <div class="header_fs css_version_full">

            <div class="nav_top">
                <div class="header_logo">
                    <a href="#">La Selección México</a>
                </div>
            </div>

            <div class="nav_bottom">
                <ul class="menu_fs">
                    <li class="menu_item_fs"> 
                        <a href="#">
                        <span>Link #1</span>
                        </a>
                    </li>
                    <li class="menu_item_fs dropdown_fs"> 
                        <a href="#">
                        <span>Link #2</span>
                        </a>

                        <ul class="menu_fs">
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #a</span>
                                </a>
                            </li>
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #b</span>
                                </a>
                            </li>
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #c</span>
                                </a>
                            </li>
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #d</span>
                                </a>
                            </li>
                        </ul>

                    </li>
                    <li class="menu_item_fs"> 
                        <a href="#">
                        <span>Link #3</span>
                        </a>
                    </li>

                </ul>

            </div>

        </div>


        <div class="header_fs css_version_mobile">


            <nav id="cssmenumobile" class="navbar navbar-default navbar-fixed-top" role="navigation"> 
                <div class="container-fluid"> 
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header"> 
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> 
                            <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> 
                        </button> 
                        <a class="navbar-brand" href="http://laseleccion.com.mx/"><img src="http://laseleccionmx.cdnfsn.com/img/logo_mx.png" width="157" height="30"></a>
                    </div> 
                     <!-- Collect the nav links, forms, and other content for toggling --> 
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> 
                        <ul class="nav navbar-nav menu_fs"> 
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #1</span>
                                </a>
                            </li>
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #2</span>
                                </a>
                            </li>
                            <li class="menu_item_fs"> 
                                <a href="#">
                                <span>Link #3</span>
                                </a>
                            </li>
                        </ul> 
                    </div>
                    <!-- /.navbar-collapse --> 
                </div>
                <!-- /.container-fluid --> 
            </nav>
        </div>