<?require("fun/fconfig.php");?>
<!DOCTYPE html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <?require("top1.php");?>    
    <meta name="author" content="" />
    
    <meta name="Resource-type" content="" />
    <!-- <meta property="og:image" content="https://www.zyed.com.tw/VITRUVIUS/img/1200x630.png"> -->
    <!-- css -->
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <!-- <link rel="stylesheet" type="text/css" href="css/slick.css" /> -->
	<link rel="stylesheet" type="text/css" href="css/fullpage.css" />
    <!-- <link rel="stylesheet" type="text/css" href="css/slick-theme.css" /> -->
    <link rel="stylesheet" type="text/css" href="css/aboutus.css" />
    <!-- js -->
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <script type="text/javascript" src="js/fullpage.js"></script>
    <script type="text/javascript" src="js/examples.js"></script>
    
    <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
    <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js"></script>

</head>

<body>
  <?require("top.php");?>
    
  <div id="fullpage">
        <div class="section" id="section0">
            <div class="aboutus_visual">
                <div style="padding:41.67% 0 0 0;position:relative;">
                    <iframe src="https://player.vimeo.com/video/931640437?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&muted=1&quality=1080p" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="明筑建設"></iframe>
                </div><script src="https://player.vimeo.com/api/player.js"></script>
                <!-- <div style="padding:56.25% 0 0 0;position:relative;">
                    <iframe src="https://player.vimeo.com/video/1091093931?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&muted=1&quality=1080p" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="明築建設"></iframe>
                </div><script src="https://player.vimeo.com/api/player.js"></script> -->
            </div>
        </div>
        <div class="section" id="section1">
            <div class="aboutus_organize">
                <div class="organize_group">
                    <div class="project wow fadeInLeft" data-wow-duration="2s"">
                        <img class="pc project-image project-image-one" src="img/aboutus_organize1.png" alt="">
                        <img class="mob project-image project-image-one" src="img/aboutus_organize1_mob.png" alt="">
                    </div>
                </div>
                <div class="organize_branch">
                    <div class="project wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1s">
                        <img class="pc project-image project-image-two" src="img/aboutus_organize2.png" alt="">
                        <img class="mob project-image project-image-two" src="img/aboutus_organize2_mob.png" alt="">
                    </div>
                    <div class="project wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1.5s">
                        <img class="pc project-image project-image-two" src="img/aboutus_organize3.png" alt="">
                        <img class="mob project-image project-image-two" src="img/aboutus_organize3_mob.png" alt="">
                    </div>
                    <div class="project wow fadeInLeft" data-wow-duration="2s" data-wow-delay="2s">
                        <img class="pc project-image project-image-two" src="img/aboutus_organize4.png" alt="">
                        <img class="mob project-image project-image-two" src="img/aboutus_organize4_mob.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="section2">
            <div class="aboutus_teamsphoto project-left">
                <div class="container">
                    <div class="photo"></div>
                </div>
            </div>
        </div>
        <div class="section" id="section3">
            <div class="aboutus_team project-left">
                <div class="container">
                    <ul>
                        <li class="box">
                            <img class="pc" src="img/aboutus_team_photo1.png" alt="">
                            <img class="mob" src="img/aboutus_team_photo1_mob.png" alt="">
                            <div class="overlay"></div>
                        </li>
                        <li class="box">
                            <img class="pc" src="img/aboutus_team_photo2.png" alt="">
                            <img class="mob" src="img/aboutus_team_photo2_mob.png" alt="">
                            <div class="overlay"></div>
                        </li>
                        <li class="box">
                            <img class="pc" src="img/aboutus_team_photo3.png" alt="">
                            <img class="mob" src="img/aboutus_team_photo3_mob.png" alt="">
                            <div class="overlay"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <footer id="footer"></footer>
</body>

<script>

    $(document).ready(function () {

        new WOW().init();

        $('#footer').load('page/footer.html');


        //aboutus_team
        var controller = new ScrollMagic.Controller();
        $(".aboutus_team").each(function () {

            var picOverlay = $(this).find(".overlay");
            var animateIn = new TimelineMax();

            animateIn
                .fromTo(picOverlay, 5,
                    { skewX: 0, scale: 1.5 },
                    { skewX: 0, xPercent: 100, transformOrigin: "0% 100%", ease: Power4.easeOut },
                    "-=1")

            var scene = new ScrollMagic.Scene({
                triggerElement: this,
            })

                // .addIndicators()
                .setTween(animateIn).addTo(controller);

        });


    });



    var tnav = new TimelineMax({ paused: true });

    tnav.to("#header", 0.1, {
        height: "100vh"
    });

    tnav.to(".menu-overlay", 0.5, {
        opacity: 1,
        ease: Power4.easeInOut
    });

    /*tnav.to(".topmenu-fixWrap", 0.5, {
        height: "100vh",
        ease: Power4.easeInOut
    });*/

    tnav.staggerFrom(".menu .topmenu-fixList li", 2, {
        x: -40,
        opacity: 0,
        ease: Power2.easeOut
    }, 0.1);

    tnav.reverse();

    $(document).on("click", ".menu-btn", function () {
        tnav.reversed(!tnav.reversed());
    });

    $(".open").click(function () {
        $(this).hide();
        $(".close").delay(500).show();
        $("#header").css("z-index", "10");
        $("h1").hide();
    });

    $(".close").click(function () {
        var self = this
        setTimeout(function () {
            $(self).hide();
            $(".open").show();
            $("h1").show();
        }, 1400);
        // $("#header").css("z-index","0");
    });

    
    // var myFullpage = new fullpage('#fullpage', {
    //     anchors: ['01', '02', '03', '04'],
    //     sectionsColor: ['#fff', '#fff', '#fff', '#f2f2f2'],
    //     navigation: false,
    //     verticalCentered: true,
    //     scrollBar: true,
    //     autoScrolling: true
    // });





</script>



</html>