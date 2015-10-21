<div id="fb-root"></div>
<script>

    //_gaq.push(['_trackEvent', 'Registration', 'Login Information']);
    country_code = '';

    $(document).ready(function () {

        $.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?", {
        }).done(function (result) {
            country_code = result['geoplugin_countryCode'];

        }).error(function (result) {
            country_code = 'US';
        });

//HANDLERS
        $('#btn_sign_up').on('click', function (event) {
            event.preventDefault();

            $(this).hide();
            $('#registration_preloader').html('Sending data...');
            $('#registration_preloader').show();

            $.ajax({
                url: "<?php echo base_url(); ?>index.php/account/register_step1_ssl",
                type: 'POST',
                dataType: 'json',
                data: $('#loginform').serialize() + '&country=' + country_code
            }).done(function (data) {

                if (data.message == 'ok') {
                    window.location.href = "<?php echo base_url(); ?>index.php/account/register_complete";

                } else {
                    $('#registration_preloader').hide();
                    $('#btn_sign_up').show();
                    TweenLite.fromTo("#info", 1, {alpha: 0}, {alpha: 1, onComplete: function () {
                            TweenLite.to("#info", 1, {delay: 6, alpha: 0});
                        }});
                    $("#info").html("* " + data.message);

                }
            });

        });

        $('#signup_fb_btn').on('click', function (event) {
            event.preventDefault();
            registerWithFacebook();
        });
    });

    window.fbAsyncInit = function () {

        FB.init({
            appId: '<?php echo FACEBOOK_APP_ID; ?>',
            cookie: true, // This is important, it's not enabled by default
            version: 'v2.2'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));




    function registerWithFacebook() {

        FB.login(function (response) {
            if (response.authResponse) {

                checkLoginState()
            } else {
                show_info('You must accept the permissions to register with Facebook');
            }
        },
                {
                    scope: 'email,public_profile'
                });
        return false;
    }

    function checkLoginState() {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    }

    function statusChangeCallback(response) {

        if (response.status === 'connected') {
            $('#fb_registration_preloader').html('Sending data...');
            $('#fb_registration_preloader').css('display', 'block');
            TweenLite.fromTo("#signup_fb_btn", 1, {alpha: 1}, {alpha: 0, onComplete: function () {

                }});


            $.ajax({
                url: "<?php echo base_url(); ?>index.php/account/register_by_facebook",
                type: 'POST',
                dataType: 'json',
                data: 'country=' + country_code,
            }).done(function (data) {

                if (data.status == 'ok') {
                    window.location.href = "<?php echo base_url(); ?>index.php/account/register_complete";

                } else {

                    $('#fb_registration_preloader').css('display', 'none');
                    TweenLite.fromTo("#signup_fb_btn", 1, {alpha: 0}, {alpha: 1, onComplete: function () {


                        }});

                    $("#fb_info").html("* " + data.message);
                    TweenLite.fromTo("#fb_info", 1, {alpha: 0}, {alpha: 1, onComplete: function () {

                        }});

                }
            });
        } else if (response.status === 'not_authorized') {
            registerWithFacebook();

        } else {

        }
    }

    function show_info(data) {
        $("#fb_info").html("* " + data);
        TweenLite.fromTo("#fb_info", 1, {alpha: 0}, {alpha: 1});
    }
</script>


<!-- content -->
<div class="container-fluid form_cont">
        
            <form method="post" id="loginform">
                <div class="form_title">Create your account</div>
                <ol>
                    <li> 
                        <div id="info" class="form_info"></div>
                    </li>

                    <li>

                        <input id="full_name" name="full_name" placeholder="Full Name" class="text"/>
                    </li>
                    <li>

                        <input id="email" name="email" placeholder="Email address" class="text" />
                    </li>

                    <li>

                        <input id="password" name="password" placeholder="Password" class="text" type="password" />
                    </li>


                    <li class="buttons">
                        <button id="btn_sign_up" class="send common_btn">REGISTER</button>
                        <div id="registration_preloader"></div>
                        <div class="clr"></div>
                    </li>                    
                </ol>
                <div class="or_separator">or</div>
                <div id="fb_container">

                    <div id="fb_registration_preloader"></div>
                    <button id="signup_fb_btn"></button>

                    <div id="fb_info" class="form_info"></div>
                </div>
            </form>

            <!--            <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
                        </fb:login-button>-->

</div>
<!-- /content -->