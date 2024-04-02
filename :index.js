/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(5);


    /***/ }),
    
    /***/ 5:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
    
    barba.hooks.beforeLeave(function (data) {
    
        $(".topmenuWrap").removeClass("is-show");
    
        $(".only-index-logo, .only-index-hamburger").removeClass("is-show");
    });
    
    barba.hooks.afterLeave(function (data) {
    
        window.scroll(0, 0);
    
        $(window).off("scroll");
    
        $(data.current.container).contents().remove();
    });
    
    barba.hooks.afterEnter(function (data) {
    
        basic_init();
    
        $(".topmenuWrap").addClass("is-show");
    
        $(".only-index-logo, .only-index-hamburger").addClass("is-show");
    
        if (device == 'mobile') {
    
            $(window).on("scroll", function () {
    
                if ($(this).scrollTop() > 100) {
    
                    $(".topmenuWrap").addClass("is-small");
                } else {
    
                    $(".topmenuWrap").removeClass("is-small");
                }
            });
        } else if (data.next.namespace == 'news' || data.next.namespace == 'news-detail' || data.next.namespace == 'about' || data.next.namespace == 'progress' || data.next.namespace == 'csr' || data.next.namespace == 'csr-detail' || data.next.namespace == 'contact') {
    
            $(window).on("scroll", function () {
    
                if ($(this).scrollTop() > 100) {
    
                    $(".topmenuWrap").addClass("is-small");
                } else {
    
                    $(".topmenuWrap").removeClass("is-small");
                }
            });
        }
    });
    
    barba.init({
    
        transitions: [{
    
            from: {
    
                namespace: ['index']
    
            },
    
            to: {
    
                namespace: ['project-detail']
    
            },
    
            sync: true,
    
            before: function before(data) {
    
                _ryder.lockWheel = true;
            },
            leave: function leave(data) {
    
                var done = this.async();
    
                if ($(data.trigger).hasClass("skiptrans")) {
    
                    var _scale = 1;
    
                    $("body").addClass("index-forward");
                } else {
    
                    $("body").addClass("index-backward");
    
                    var _scale = _ryder._scale;
                }
    
                TweenMax.fromTo(".projectDetailList li", 1, {
    
                    scale: _scale,
    
                    top: _ryder._h / 2 - _ryder.bgChildHeight / 2
    
                }, {
    
                    // delay: 0.2,
    
                    ease: Power2.easeInOut,
    
                    scale: 1,
    
                    top: 0,
    
                    height: '100%',
    
                    transformOrigin: _ryder._w / 2 + "px " + _ryder.bgChildHeight / 2 + "px"
    
                });
    
                _ryder.transOut(done);
            },
            after: function after(data) {
    
                _ryder.lockWheel = false;
            }
        }, {
            appear: function appear(data) {
    
                $("#preloadWrap").delay(500).fadeOut(600);
            },
            leave: function leave(data) {
    
                if (data.current.namespace == 'project-detail' && data.next.namespace == 'index') {
    
                    $("#preloadWrap").css("background-color", "#000");
                } else {
    
                    $("#preloadWrap").css("background-color", "#f2f2f2");
                }
    
                var done = this.async();
    
                $("#preloadWrap").fadeIn(600, done);
            },
            beforeEnter: function beforeEnter(data) {},
            enter: function enter(data) {
    
                var done = this.async();
    
                done();
    
                $("#preloadWrap").fadeOut(600);
    
                $(".newsDetailWrap .back a").attr("href", data.current.url.href);
    
                $(".csrDetailWrap .back a").attr("href", data.current.url.href);
            }
        }],
    
        views: [{
    
            namespace: 'project-detail',
    
            afterEnter: function afterEnter(data) {
    
                $("body").addClass("is-index");
    
                $(".topmenuWrap").addClass("is-white");
    
                $(".pd-back-area").addClass("is-show");
    
                $(".pd-article-trigger").addClass("is-show");
    
                $(".pd-more-trigger").addClass("is-show");
    
                $(".pd-progress").addClass("is-show");
    
                $(".pd-pages").addClass("is-show");
    
                $('.projectDetailList').on('init beforeChange', function (event, slick, currentSlide, nextSlide) {
    
                    var i = (nextSlide ? nextSlide : 0) + 1;
    
                    $("#now").text(i);
    
                    $("#total").text(slick.slideCount);
    
                    TweenMax.to('.pd-progress .bar', 1, {
    
                        height: 100 / slick.slideCount * i + "%"
    
                    });
    
                    if (nextSlide != undefined) {
    
                        if (nextSlide == 1) {
    
                            $(".projectDetailList").addClass("is-blur");
    
                            $(".pd-article-trigger").addClass("is-open");
    
                            $(".pd-fancyWrap").stop(true).fadeIn(500);
    
                            $('.projectDetailList').slick('slickPause');
                        } else {
    
                            $(".projectDetailList").removeClass("is-blur");
    
                            $(".pd-article-trigger").removeClass("is-open");
    
                            $(".pd-fancyWrap").stop(true).fadeOut(500);
    
                            $('.projectDetailList').slick('slickPlay');
                        }
                    }
                }).slick({
    
                    fade: true,
    
                    dots: false,
    
                    infinite: true,
    
                    speed: 1200,
    
                    arrows: false,
    
                    focusOnSelect: false,
    
                    autoplay: true,
    
                    autoplaySpeed: 1000
    
                }).on('mousewheel', function (e) {
    
                    e.preventDefault();
    
                    if (e.deltaY < 0) {
    
                        $(this).slick('slickNext');
                    } else {
    
                        $(this).slick('slickPrev');
                    }
                });
    
                $('.projectDetailList').swipe({
    
                    swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
    
                        if (direction == 'up') {
    
                            $('.projectDetailList').slick('slickNext');
                        } else if (direction == 'down') {
    
                            $('.projectDetailList').slick('slickPrev');
                        }
                    }
    
                });
    
                $(".pd-article-trigger").on("click", function () {
    
                    $(".projectDetailList").toggleClass("is-blur");
    
                    $(".pd-article-trigger").toggleClass("is-open");
    
                    $(".pd-fancyWrap").stop(true).fadeToggle(500);
    
                    if ($(".projectDetailList").hasClass("is-blur")) {
    
                        $('.projectDetailList').slick('slickPause');
                    } else {
    
                        $('.projectDetailList').slick('slickPlay');
                    }
                });
    
                // plus
    
                $(".projectDetailList li").addClass("show-plus");
    
                // 靽格迤��𧢲�毺��㺿撠箏站
    
                $(".projectDetailList li").css({
    
                    height: '100%'
    
                });
            },
            afterLeave: function afterLeave(data) {
    
                $("body").removeClass("is-index");
    
                $('.projectDetailList').slick('unslick');
            }
        }, {
    
            namespace: 'index',
    
            afterEnter: function afterEnter(data) {
    
                $("body").addClass("is-index");
    
                $(".topmenuWrap").addClass("is-white is-index");
    
                var _go = data.next.url.query.go;
    
                var _skip = _go != undefined ? true : false;
    
                window._ryder = new RyderAwesome(_skip, _go).init();
    
                new RyderCursor($(".ryder-cursor")).init();
            },
            afterLeave: function afterLeave(data) {
    
                $("body").removeClass("is-index");
    
                _ryder.destroy();
            }
        }, {
    
            namespace: 'about',
    
            afterEnter: function afterEnter(data) {
    
                $("video")[0].play();
    
                $(".topmenuWrap").addClass("is-white");
    
                var $el = $(".slogan-area .text");
    
                var _html = '';
    
                var _arr = [].concat(_toConsumableArray($el.text()));
    
                for (var _i2 = 0; _i2 < _arr.length; _i2++) {
                    var e = _arr[_i2];
    
                    _html += "<i>" + e + "</i>";
                }
    
                $el.html(_html);
    
                var _i = $("i", $el).toArray();
    
                _i.sort(function () {
    
                    return 0.5 - Math.random();
                });
    
                TweenMax.staggerTo(_i, 1, {
    
                    opacity: 1,
    
                    delay: 1,
    
                    onUpdate: function onUpdate() {
    
                        $(this.target).css({
    
                            'filter': "blur(" + (10 - this.progress() * 10) + "px)"
    
                        });
                    }
    
                }, 0.066);
    
                TweenMax.delayedCall(4, function () {
    
                    $(".about-videoWrap .slogan-area").addClass("is-hide");
                });
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'news',
    
            afterEnter: function afterEnter(data) {
    
                TweenMax.staggerTo($(".newsList section"), 1, {
    
                    y: 0,
    
                    opacity: 1
    
                }, 0.2);
    
                // more
    
                $(".mobile-news-loadmore").on("click", function () {
                    var _this = this;
    
                    var _next = $(this).data("page") + 1;
    
                    if ($(this).data("events") == undefined) {
    
                        //var _url = "news_data.php"
                        var _url = "https://www.greatbuilding.com.tw/more-news-data";
                    } else {
    
                        var _url = "events_data.php";
                    }
    
                    $.ajax({
    
                        data: {
    
                            page: _next,
    
                            search: $(this).data("search")
    
                        },
    
                        url: _url,
    
                        type: "GET",
    
                        success: function success(res) {
    
                            $(res).appendTo($(".newsList"));
    
                            TweenMax.staggerTo($(".newsList section").slice($(_this).data("page") * 3), 1, {
    
                                y: 0,
    
                                opacity: 1
    
                            }, 0.1);
    
                            $(_this).data("page", _next);
    
                            if (_next == $(_this).data("total")) {
    
                                $(_this).fadeOut(500);
                            }
                        }
    
                    });
                });
    
                $('#searchSubmit').on("click", function () {
    
                    $(".searchForm").submit();
                });
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'news-detail',
    
            afterEnter: function afterEnter(data) {
    
                $('.ryder-nd-slider-list').slick({
    
                    dots: false,
    
                    infinite: true,
    
                    speed: 500,
    
                    arrows: false,
    
                    focusOnSelect: false,
    
                    swipeToSlide: true,
    
                    touchThreshold: 10,
    
                    variableWidth: true,
    
                    easing: 'easeInOutCubic'
    
                });
    
                $(".topmenuWrap").addClass("is-forcesmall");
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'csr',
    
            afterEnter: function afterEnter(data) {
    
                TweenMax.staggerTo($(".csrList li"), 1, {
    
                    y: 0,
    
                    opacity: 1
    
                }, 0.1);
    
                $(".mobile-news-loadmore").on("click", function () {
                    var _this2 = this;
    
                    var _next = $(this).data("page") + 1;
    
                    $.ajax({
    
                        data: {
    
                            page: _next
    
                        },
    
                        url: "csr_data.php",
    
                        type: "GET",
    
                        success: function success(res) {
    
                            $(res).appendTo($(".csrList"));
    
                            TweenMax.staggerTo($(".csrList li").slice($(_this2).data("page") * 6), 1, {
    
                                y: 0,
    
                                opacity: 1
    
                            }, 0.1);
    
                            $(_this2).data("page", _next);
    
                            if (_next == $(_this2).data("total")) {
    
                                $(_this2).fadeOut(500);
                            }
                        }
    
                    });
                });
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'project-all',
    
            afterEnter: function afterEnter(data) {
    
                TweenMax.staggerTo($(".projectList li"), 1, {
    
                    delay: 0.5,
    
                    y: 0,
    
                    opacity: 1
    
                }, 0.1);
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'project-new',
    
            afterEnter: function afterEnter(data) {
    
                $(".ryder-imageComparison").twentytwenty({
    
                    no_overlay: true,
    
                    move_slider_on_hover: false,
    
                    move_with_handle_only: false,
    
                    click_to_move: true
    
                });
    
                $(".submit").on("click", function () {
    
                    if ($(".contactForm").valid() == true) {
    
                        var answer = confirm("�函Ⅱ隤滩����枂�冽�憛怠神��鞈��𠰴�𠬍��");
    
                        if (answer) {
    
                            grecaptcha.execute();
                        }
                    }
                });
    
                $(".contactForm").validate({
    
                    ignore: [],
    
                    rules: {
    
                        name: {
    
                            required: true
    
                        },
    
                        phone: {
    
                            required: true
    
                        },
    
                        message: {
    
                            required: true
    
                        }
    
                    },
    
                    messages: {
    
                        name: {
    
                            required: "敹�憛急�雿�"
    
                        },
    
                        phone: {
    
                            required: "敹�憛急�雿�"
    
                        },
    
                        message: {
    
                            required: "敹�憛急�雿�"
    
                        }
    
                    },
    
                    errorPlacement: function errorPlacement(label, element) {
    
                        label.addClass('contact-form-error');
    
                        label.insertAfter(element);
                    },
    
                    wrapper: 'div'
    
                });
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'progress',
    
            afterEnter: function afterEnter(data) {
    
                $('.building ').slick({
                    dots: false,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    infinite: true,
                    speed: 500,
                    arrows: false,
                    focusOnSelect: false,
                    swipeToSlide: true,  // �坔�𧢲�霈𦽳lidesToScroll憭望���璅���
                    touchThreshold: 10,
                    easing: 'easeInOutCubic'
                });
    
                // $(".building li").eq(0).addClass("is-show");
    
                // TweenMax.delayedCall(2, function () {
    
                // 	$(".building li").eq(0).removeClass("is-show");
    
                // 	$(".building li").eq(1).addClass("is-show");
                // });
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'business',
    
            afterEnter: function afterEnter(data) {
    
                // $(".topmenuWrap").addClass("is-white")
    
    
                if (device == 'desktop') {
    
                    $(".business-trigger-left").on("mouseenter", function () {
    
                        $(".ryder-swipe-area").addClass("is-left");
    
                        $(".goodbox").addClass("is-hide");
                    }).on("mouseleave", function () {
    
                        $(".ryder-swipe-area").removeClass("is-left");
    
                        $(".goodbox").removeClass("is-hide");
                    });
    
                    $(".business-trigger-right").on("mouseenter", function () {
    
                        $(".ryder-swipe-area").addClass("is-right");
    
                        $(".leren").addClass("is-hide");
                    }).on("mouseleave", function () {
    
                        $(".ryder-swipe-area").removeClass("is-right");
    
                        $(".leren").removeClass("is-hide");
                    });
                } else {
    
                    $(".businessWrap a").on("click", function (e) {
    
                        if ($(".goodbox").hasClass("is-hide")) {
    
                            e.preventDefault();
                        }
                    });
    
                    $(".business-trigger-left").on("mousedown", function () {
    
                        $(".ryder-swipe-area").addClass("is-left");
    
                        $(".goodbox").addClass("is-hide");
    
                        $(".ryder-swipe-area").removeClass("is-right");
    
                        $(".leren").removeClass("is-hide");
                    });
    
                    $(".business-trigger-right").on("mousedown", function () {
    
                        $(".ryder-swipe-area").addClass("is-right");
    
                        $(".leren").addClass("is-hide");
    
                        $(".ryder-swipe-area").removeClass("is-left");
    
                        $(".goodbox").removeClass("is-hide");
                    });
    
                    $(".ryder-swipe-area").on("mousedown", function () {
    
                        $(".ryder-swipe-area").removeClass("is-right");
    
                        $(".leren").removeClass("is-hide");
    
                        $(".ryder-swipe-area").removeClass("is-left");
    
                        $(".goodbox").removeClass("is-hide");
                    });
                }
            },
            afterLeave: function afterLeave(data) {}
        }, {
    
            namespace: 'contact',
    
            afterEnter: function afterEnter(data) {
    
                $(".submit").on("click", function () {
    
                    if ($(".contactForm").valid() == true) {
    
                        var answer = confirm("�函Ⅱ隤滩����枂�冽�憛怠神��鞈��𠰴�𠬍��");
    
                        if (answer) {
    
                            grecaptcha.execute();
                        }
                    }
                });
    
                $(".contactForm").validate({
    
                    ignore: [],
    
                    rules: {
    
                        name: {
    
                            required: true
    
                        },
    
                        phone: {
    
                            required: true
    
                        },
    
                        message: {
    
                            required: true
    
                        },
    
                        reputation: {
    
                            required: true
    
                        },
    
                        type: {
    
                            required: true
    
                        }
    
                    },
    
                    messages: {
    
                        name: {
    
                            required: "敹�憛急�雿�"
    
                        },
    
                        phone: {
    
                            required: "敹�憛急�雿�"
    
                        },
    
                        message: {
    
                            required: "敹�憛急�雿�"
    
                        },
    
                        reputation: {
    
                            required: "敹�憛急�雿�"
    
                        },
    
                        type: {
    
                            required: "敹�憛急�雿�"
    
                        }
    
                    },
    
                    errorPlacement: function errorPlacement(label, element) {
    
                        label.addClass('contact-form-error');
    
                        label.insertAfter(element);
                    },
    
                    wrapper: 'div'
    
                });
    
                $("#reputation").on("change", function () {
    
                    $(".for-reputation-slide").slideDown(600);
    
                    $(".for-reputation-hide").slideUp(600);
    
                    // if (this.checked) {
    
                    // 	$(".for-reputation-slide").slideDown(600)
    
                    // 	$(".for-reputation-hide").slideUp(600)
    
                    // }else{
    
                    // 	$(".for-reputation-slide").slideUp(600)
    
                    // 	$(".for-reputation-hide").slideDown(600)
    
                    // }
                });
            },
            afterLeave: function afterLeave(data) {}
        }]
    
    });
    
    function basic_init() {
    
        window.onSubmit = function () {
    
            var url = window.location.pathname;
    
            var filename = url.substring(url.lastIndexOf('/') + 1);
    
            // console.log(url)
    
            // console.log(filename)
    
    
            if (filename.indexOf("contact") != -1) {
    
                $.ajax({
    
                    type: "POST",
    
                    url: "./contactMail.php",
    
                    data: $(".contactForm").serialize(),
    
                    beforeSend: function beforeSend() {},
    
                    success: function success(data) {
    
                        grecaptcha.reset();
    
                        $(".contactForm").slideUp(1000, function () {
    
                            var _div = $("<div>").addClass("contactFinish").html("�蠘�脲�函�靘�靽∴���穃�穃����睃翰��噼��具��<br>Thanks for your message, and we'll contact you as soon as possible.");
    
                            $(".contactForm").html(_div).fadeIn(1000);
                        });
                    }
    
                });
            }
    
            if (filename.indexOf("project_new_teaser") != -1) {
    
                $.ajax({
    
                    type: "POST",
    
                    url: "./contactMail.php",
    
                    data: $(".contactForm").serialize(),
    
                    beforeSend: function beforeSend() {},
    
                    success: function success(data) {
    
                        grecaptcha.reset();
    
                        $(".contactForm").slideUp(1000, function () {
    
                            var _div = $("<div>").addClass("contactFinish").html("�蠘�脲�函�靘�靽∴���穃�穃����睃翰��噼��具��<br>Thanks for your message, and we'll contact you as soon as possible.");
    
                            $(".contactForm").html(_div).fadeIn(1000);
                        });
                    }
    
                });
            }
        };
    
        $(document).bind("contextmenu", function (event) {
    
            return false;
        });
    
        $(window).on("resize", function () {
    
            if ($(this).width() > 1024) {
    
                window.device = 'desktop';
            } else {
    
                window.device = 'mobile';
            }
        }).trigger("resize");
    
        var wow = new WOW({
    
            callback: function callback(el) {}
    
        }).init();
    
        // mobile fancy
    
        $(".ryderp-close").on("click", function () {
    
            $.fancybox.close();
        });
    
        $(".ryderp-square").on("click", function () {
    
            $(".ryderp-square").fadeOut(300);
    
            $(".ryderp-square-four").fadeIn(300);
    
            $(".ryderp-pdThumbList").addClass("is-show");
        });
    
        $(".ryderp-square-four").on("click", function () {
    
            $(".ryderp-square").fadeIn(300);
    
            $(".ryderp-square-four").fadeOut(300);
    
            $(".ryderp-pdThumbList").removeClass("is-show");
        });
    
        $(".ryderp-pdThumbList li").on("click", function () {
    
            $(".ryderp-square-four").trigger("click");
    
            $.fancybox.getInstance('jumpTo', $(this).index());
        });
    
        if (device == 'mobile') {
    
            $('[data-ryder-fancy]').attr("data-fancybox", "images");
    
            $('[data-fancybox]').fancybox({
    
                loop: true,
    
                arrows: false,
    
                infobar: false,
    
                toolbar: false,
    
                hash: false,
    
                touch: {
    
                    vertical: true, // Allow to drag content vertically
    
                    momentum: false // Continue movement after releasing mouse/touch when panning
    
                },
    
                beforeShow: function beforeShow() {
    
                    $(".ryderp-close, .ryderp-square").fadeIn(300);
                },
    
                beforeClose: function beforeClose() {
    
                    $(".ryderp-close, .ryderp-square, .ryderp-square-four").fadeOut(300);
    
                    $(".ryderp-pdThumbList").removeClass("is-show");
    
                    var _current = $.fancybox.getInstance().current.index;
    
                    if (_current > 0) {
    
                        _current++;
                    }
    
                    $('.projectDetailList').slick('slickGoTo', _current);
                }
    
            });
        }
    
        TweenLite.ticker.addEventListener("tick", ryderParallax);
    
        function ryderParallax() {
    
            var _ratio = Math.min(1, window.scrollY / window.innerHeight);
    
            $("[data-parallax]").each(function (i, el) {
    
                $(el).css({
    
                    top: _ratio * el.dataset.parallax + 'px'
    
                });
            });
        }
    
        // detect menu color
    
        TweenLite.ticker.addEventListener("tick", ryderDetectMenu);
    
        function ryderDetectMenu() {
    
            var _check = $("[data-black]").length;
    
            if (_check < 1) {
    
                TweenLite.ticker.removeEventListener("tick", ryderDetectMenu);
    
                return false;
            }
    
            var _t = $("[data-black]").offset().top;
    
            var _scrollTop = $(window).scrollTop();
    
            var _bk = _scrollTop - _t;
    
            if (_bk > -60) {
    
                $(".topmenuWrap").addClass("force-black");
            } else {
    
                $(".topmenuWrap").removeClass("force-black");
            }
        }
    
        $(".topmenuWrap .menu, .hamburger, .only-index-hamburger").on("click", function () {
    
            $(".topmenu-fixWrap").fadeIn(500);
    
            TweenMax.staggerTo($(".topmenu-fixList >li"), 1, {
    
                x: 0,
    
                opacity: 1
    
            }, 0.1);
        });
    
        $(".topmenu-fixWrap .close").on("click", function () {
    
            TweenMax.staggerTo($(".topmenu-fixList >li"), 1, {
    
                x: -100,
    
                opacity: 0
    
            }, 0.1);
    
            $(".topmenu-fixWrap").delay(500).fadeOut(500);
        });
    
        $(window).on("scroll", function () {
    
            if ($(this).scrollTop() > 300) {
    
                $(".backtotop").fadeIn(600);
            } else {
    
                $(".backtotop").fadeOut(600);
            }
        });
    
        $(".backtotop").on("click", function () {
    
            $("html,body").animate({ scrollTop: 0 }, 1000);
        });
    }
    
    function RyderAwesome(_skip, _go) {
    
        var getUrlString = location.href;
    
        var url = new URL(getUrlString);
    
        var _now = url.searchParams.get('go');
    
        this.$trigger = $(".index-title .trigger");
    
        this.$bg = $(".index-bg");
    
        this.$bgChild = $(".index-bg li");
    
        this._len = this.$bgChild.length;
    
        this._w = $(window).width();
    
        this._h = $(window).height();
    
        this.bgChildHeight = device == 'desktop' ? this._h : this._h * 0.33;
    
        this._margin = device == 'desktop' ? 0 : 110;
    
        this._scale = device == 'desktop' ? 0.5 : 0.7;
    
        if (_now > 0) {
    
            this._current = _go ? parseInt(_go) - 1 : 1;
        } else if ($(".index-bg").data("kore") > 0) {
    
            this._current = $(".index-bg").data("kore") - 1;
        } else {
    
            this._current = _go ? parseInt(_go) - 1 : 1;
        }
    
        this._last = this._current;
    
        this.changing = false;
    
        this.opening = false;
    
        this.firstWheel = true;
    
        this.lockWheel = false;
    
        this.fuckyou = true;
    
        this.skip = _skip;
    
        this.$prev = $(".index-progress .top");
    
        this.$next = $(".index-progress .bot");
    
        this.$title = $(".index-title");
    
        this.$build = $(".index-build");
    
        this.$buildChild = $(".index-build li");
    
        this.$year = $(".index-buildingname");
    
        this.$yearChild = $(".index-buildingname li");
    
        this.$progress = $(".index-progress");
    
        this.$beforescene = $(".beforescene");
    
        this.$beforesceneChild = $(".beforescene li");
    
        this.$beforesceneProgress = $(".beforescene-progress");
    
        this.$beforesceneProgressBar = $(".beforescene-progress .bar");
    
        this.firstScene = false;
    
        this.init = function () {
            var _this3 = this;
    
            var _time = 1;
    
            var _tl = new TimelineMax({
    
                paused: true,
    
                delay: 1,
    
                onComplete: function onComplete() {
    
                    TweenMax.to(_this3.$beforesceneProgress, _time, {
    
                        opacity: 0
    
                    });
    
                    TweenMax.to(_this3.$beforescene, _time, {
    
                        opacity: 0,
    
                        onComplete: function onComplete() {
    
                            _this3.firstScene = true;
    
                            if ($(".fancyWrap").size() > 0) {
    
                                $.fancybox.open({
    
                                    src: '.fancyWrap',
    
                                    type: 'inline',
    
                                    opts: {
    
                                        smallBtn: false,
    
                                        trapFocus: false,
    
                                        toolbar: false, 
    
                                        touch: false
    
                                    }
    
                                });
                            } else {
    
                                _this3.$title.addClass("is-show");
    
                                _this3.$beforescene.hide();
    
                                _this3.firstScene = true;
                            }
                        }
    
                    });
                }
    
            });
    
            // ���拳
    
            $(".fancy-close").on("click", function () {
    
                $.fancybox.close();
    
                setTimeout(function () {
    
                    $(".index-title").addClass("is-show");
    
                    $(".beforescene").hide();
                }, 500);
            });
    
            _tl.to(this.$beforesceneChild.eq(0), _time, {
    
                opacity: 1
    
            }).to(this.$beforesceneChild.eq(0), 1, {
    
                opacity: 0
    
            }).to(this.$beforesceneChild.eq(1), _time, {
    
                opacity: 1
    
            }, _time);
    
            _tl.to(this.$beforesceneProgressBar, _time * 2 + 1, {
    
                width: '100%',
    
                ease: Power3.easeInOut
    
            }, 0);
    
            if (this.$bg.data("come") == 1) {
    
                _tl.play();
            } else {
    
                this.$beforescene.hide();
    
                this.firstScene = true;
    
                if (this.skip) {
    
                    this.firstWheel = false;
    
                    this.open();
                } else {
    
                    this.$title.addClass("is-show");
                }
            }
    
            this.$bg.css({
    
                top: -this._h * this._current
    
            });
    
            this.$trigger.on("click", function () {
    
                _this3.open();
            });
    
            $(window).on('mousewheel', function (e) {
    
                if (_this3.lockWheel) {
    
                    return false;
                }
    
                if (!_this3.changing && _this3.opening) {
    
                    if (e.deltaY < 0) {
    
                        if (_this3._current < _this3._len - 1) {
    
                            _this3._current += 1;
    
                            _this3.change();
                        }
                    } else {
    
                        if (_this3._current > 0) {
    
                            _this3._current += -1;
    
                            _this3.change();
                        }
                    }
                } else if (_this3.firstWheel && _this3.firstScene) {
    
                    _this3.firstWheel = false;
    
                    _this3.open();
                }
            });
    
            $(window).swipe({
    
                swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
    
                    if (_this3.lockWheel) {
    
                        return false;
                    }
    
                    if (!_this3.changing && _this3.opening) {
    
                        if (direction == 'up') {
    
                            if (_this3._current < _this3._len - 1) {
    
                                _this3._current += 1;
    
                                _this3.change();
                            }
                        } else {
    
                            if (_this3._current > 0) {
    
                                _this3._current += -1;
    
                                _this3.change();
                            }
                        }
                    } else if (_this3.firstWheel && _this3.firstScene) {
    
                        _this3.firstWheel = false;
    
                        _this3.open();
                    }
                }
    
            });
    
            $(window).on("resize", function () {
    
                _this3.resize();
            });
    
            this.$prev.on("click", function () {
    
                if (!_this3.changing && _this3.opening) {
    
                    if (_this3._current > 0) {
    
                        _this3._current += -1;
    
                        _this3.change();
                    }
                } else if (_this3.firstWheel) {
    
                    _this3.firstWheel = false;
    
                    _this3.open();
                }
            });
    
            this.$next.on("click", function () {
    
                if (!_this3.changing && _this3.opening) {
    
                    if (_this3._current < _this3._len - 1) {
    
                        _this3._current += 1;
    
                        _this3.change();
                    }
                } else if (_this3.firstWheel) {
    
                    _this3.firstWheel = false;
    
                    _this3.open();
                }
            });
    
            this.$bgChild.on("click", ".blockbox", function (e) {
    
                if (!_this3.changing && _this3.opening && _this3._current != $(e.delegateTarget).index()) {
    
                    _this3._current = $(e.delegateTarget).index();
    
                    _this3.change();
                }
            });
    
            this.$progress.find("#index-now").text(this._current + 1);
    
            this.$progress.find("#index-total").text(this._len);
    
            TweenMax.to(this.$progress.find(".shadowbar"), 1, {
    
                height: 100 / this._len * (this._current + 1) + "%"
    
            });
    
            return this;
        };
    
        this.resize = function () {
    
            this._w = $(window).width();
    
            this._h = $(window).height();
    
            this.bgChildHeight = device == 'desktop' ? this._h : this._h * 0.33;
    
            if (this.opening) {
    
                this.$bg.css({
    
                    top: -this._current * ((this.bgChildHeight + this._margin) * this._scale) - this.bgChildHeight * (1 - this._scale) / 2 + (this._h - this.bgChildHeight * this._scale) / 2
    
                });
            } else {
    
                this.$bg.css({
    
                    top: -this._h * this._current
    
                });
            }
        };
    
        this.open = function () {
            var _this4 = this;
    
            if ($("main").data("barba-namespace") == 'index') {
    
                // topmenu zindex
    
                $(".topmenuWrap").css("z-index", 0);
            }
    
            TweenMax.delayedCall(0.5, function () {
    
                if (device == 'desktop') {
    
                    TweenMax.to(_this4.$bg, 1.5, {
    
                        scale: _this4._scale,
    
                        top: -_this4._current * ((_this4.bgChildHeight + _this4._margin) * _this4._scale) - _this4.bgChildHeight * (1 - _this4._scale) / 2 + (_this4._h - _this4.bgChildHeight * _this4._scale) / 2,
    
                        ease: Power3.easeInOut
    
                    });
                } else {
    
                    TweenMax.to(_this4.$bg, 1, {
    
                        scale: _this4._scale,
    
                        height: '33%',
    
                        top: -_this4._current * ((_this4.bgChildHeight + _this4._margin) * _this4._scale) - _this4.bgChildHeight * (1 - _this4._scale) / 2 + (_this4._h - _this4.bgChildHeight * _this4._scale) / 2,
    
                        ease: Power3.easeInOut
    
                    });
    
                    TweenMax.to(_this4.$bgChild, .5, {
    
                        delay: .5,
    
                        marginBottom: 110
    
                    });
                }
            });
    
            TweenMax.delayedCall(2, function () {
    
                _this4.opening = true;
    
                _this4.$bg.addClass("is-in");
    
                _this4.$bgChild.eq(_this4._current).addClass("is-clickable");
            });
    
            TweenMax.to('.spotlight', 2, {
    
                opacity: 0
    
            });
    
            // bg
    
            TweenMax.to(this.$bgChild.not(":eq(" + this._current + ")"), 1, {
    
                delay: .5,
    
                scale: .6,
    
                opacity: .5,
    
                ease: Power2.easeInOut
    
            });
    
            // title
    
            this.$title.addClass("is-hide");
    
            // build
    
            TweenMax.delayedCall(1, function () {
    
                _this4.$buildChild.eq(_this4._current).addClass("current");
            });
    
            // year
    
            var tl_year = new TimelineMax({
    
                paused: true
    
            });
    
            tl_year.add([TweenMax.to(this.$yearChild.eq(this._current).find(".year i"), 3, {
    
                opacity: 1
    
            }), TweenMax.to(this.$yearChild.eq(this._current).find(".year i:nth-child(odd)"), 1, {
    
                delay: 1,
    
                y: 0
    
            }), TweenMax.to(this.$yearChild.eq(this._current).find(".year i:nth-child(even)"), 1, {
    
                delay: 1.12,
    
                y: 0
    
            }), TweenMax.to(this.$yearChild.eq(this._current).find(".title-area"), 1, {
    
                delay: 2,
    
                y: 0,
    
                opacity: 1
    
            })]);
    
            if (this.$yearChild.eq(this._current).data("hide") != 1) {
    
                tl_year.play();
            }
    
            // gotoall
    
            $(".index-gotoall").addClass("is-show");
        };
    
        this.change = function () {
            var _this5 = this;
    
            this.changing = true;
    
            this.$progress.find("#index-now").text(this._current + 1);
    
            TweenMax.to(this.$progress.find(".shadowbar"), 1, {
    
                height: 100 / this._len * (this._current + 1) + "%"
    
            });
    
            // bg
    
            TweenMax.to(this.$bg, 1, {
    
                top: -this._current * ((this.bgChildHeight + this._margin) * this._scale) - this.bgChildHeight * (1 - this._scale) / 2 + (this._h - this.bgChildHeight * this._scale) / 2,
    
                ease: Power2.easeInOut
    
            });
    
            this.$bgChild.eq(this._last).removeClass("is-clickable");
    
            TweenMax.to(this.$bgChild.eq(this._last), 1, {
    
                scale: .6,
    
                opacity: .5,
    
                ease: Power2.easeInOut
    
            });
    
            TweenMax.to(this.$bgChild.eq(this._current), 1, {
    
                scale: 1,
    
                opacity: 1,
    
                ease: Power2.easeInOut
    
            });
    
            TweenMax.delayedCall(2, function () {
    
                _this5.$bgChild.eq(_this5._current).addClass("is-clickable");
            });
    
            // build
    
            this.$buildChild.eq(this._current).addClass("current").siblings().removeClass("current");
    
            // year
    
            var tl_year = new TimelineMax({
    
                paused: true
    
            });
    
            this.$yearChild.eq(this._current).data("hide");
    
            if (this.$yearChild.eq(this._current).data("hide") == 0) {
    
                TweenMax.set(this.$yearChild.eq(this._last).find(".year i").eq(0), {
    
                    y: 0
    
                });
    
                TweenMax.set(this.$yearChild.eq(this._last).find(".year i").eq(1), {
    
                    y: 0
    
                });
    
                TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(0), 1, {
    
                    opacity: 0
    
                });
    
                TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(1), 1, {
    
                    opacity: 0
    
                });
    
                this.fuckyou = true;
            }
    
            if (this.$yearChild.eq(this._current).data("hide") == 1) {
    
                TweenMax.set(this.$yearChild.eq(this._last).find(".year i").eq(0), {
    
                    y: 0
    
                });
    
                TweenMax.set(this.$yearChild.eq(this._last).find(".year i").eq(1), {
    
                    y: 0
    
                });
    
                TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(0), 1, {
    
                    opacity: 0
    
                });
    
                TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(1), 1, {
    
                    opacity: 0
    
                });
    
                this.fuckyou = true;
            } else {
    
                if (this.fuckyou) {
    
                    this.fuckyou = false;
    
                    TweenMax.set(this.$yearChild.eq(this._current).find(".year i").eq(0), {
    
                        y: 0
    
                    });
    
                    TweenMax.set(this.$yearChild.eq(this._current).find(".year i").eq(1), {
    
                        y: 0
    
                    });
    
                    TweenMax.to(this.$yearChild.eq(this._current).find(".year i").eq(0), 1, {
    
                        opacity: 1
    
                    });
    
                    TweenMax.to(this.$yearChild.eq(this._current).find(".year i").eq(1), 1, {
    
                        opacity: 1
    
                    });
                }
            }
    
            tl_year.add([TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(-1), .5, {
    
                delay: .3,
    
                y: -40,
    
                opacity: 0
    
            }), TweenMax.set(this.$yearChild.eq(this._current).find(".year i").eq(-1), {
    
                y: 40,
    
                opacity: 0
    
            }), TweenMax.to(this.$yearChild.eq(this._current).find(".year i").eq(-1), .5, {
    
                delay: .5,
    
                y: 0,
    
                opacity: 1
    
            }), TweenMax.to(this.$yearChild.eq(this._last).find(".title-area"), .5, {
    
                y: -30,
    
                opacity: 0
    
            }), TweenMax.set(this.$yearChild.eq(this._current).find(".title-area"), {
    
                y: 30,
    
                opacity: 0
    
            }), TweenMax.to(this.$yearChild.eq(this._current).find(".title-area"), .5, {
    
                delay: .5,
    
                y: 0,
    
                opacity: 1
    
            })]);
    
            var _ten_1 = $("i", this.$yearChild.eq(this._current)).eq(-2).text();
    
            var _ten_2 = $("i", this.$yearChild.eq(this._last)).eq(-2).text();
    
            if (_ten_1 != _ten_2) {
    
                tl_year.add([TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(-2), .5, {
    
                    delay: .5,
    
                    y: -40,
    
                    opacity: 0
    
                }), TweenMax.set(this.$yearChild.eq(this._current).find(".year i").eq(-2), {
    
                    y: 40,
    
                    opacity: 0
    
                }), TweenMax.to(this.$yearChild.eq(this._current).find(".year i").eq(-2), .5, {
    
                    delay: .7,
    
                    y: 0,
    
                    opacity: 1
    
                })], 0);
            }else{
                TweenMax.set(this.$yearChild.eq(this._last).find(".year i").eq(-2), {
                    y: 0,
                })
    
                TweenMax.to(this.$yearChild.eq(this._last).find(".year i").eq(-2), 1, {
                    opacity: 0,
                })
    
                TweenMax.set(this.$yearChild.eq(this._current).find(".year i").eq(-2), {
                    y: 0,
                })
    
                TweenMax.to(this.$yearChild.eq(this._current).find(".year i").eq(-2), 1, {
                    opacity: 1,
                })
            }
    
            tl_year.play();
    
            TweenMax.delayedCall(1, function () {
    
                _this5.changing = false;
    
                _this5._last = _this5._current;
            });
        };
    
        this.transOut = function (done) {
    
            TweenMax.to('.spotlight', 2, {
    
                opacity: 0
    
            });
    
            TweenMax.to('.ryder-cursor', 1, {
    
                scale: 0,
    
                ease: Power2.easeOut
    
            });
    
            // bg
    
            TweenMax.to(this.$bgChild.eq(this._current - 1), 1, {
    
                scale: .5,
    
                y: -this._h / 2,
    
                ease: Power2.easeInOut
    
            });
    
            TweenMax.to(this.$bgChild.eq(this._current + 1), 1, {
    
                scale: .5,
    
                y: this._h / 2,
    
                ease: Power2.easeInOut
    
            });
    
            // title
    
            this.$title.addClass("is-hide");
    
            // build
    
            this.$buildChild.eq(this._current).removeClass("current");
    
            // year
    
            this.$year.addClass("is-allout");
    
            // progress bar
    
            $(".index-progress").addClass("is-hide");
    
            // gotoall
    
            $(".index-gotoall").addClass("is-hide");
    
            TweenMax.delayedCall(2, function () {
    
                $("body").removeClass("index-forward index-backward");
    
                done();
            });
        };
    
        this.destroy = function () {
    
            this.$bg.remove();
    
            this.$title.remove();
    
            this.$build.remove();
    
            this.$year.remove();
    
            this.$progress.remove();
    
            this.$beforescene.remove();
    
            $(window).swipe("destroy");
    
            $(".topmenuWrap").css("z-index", 49);
        };
    }
    
    function RyderCursor(el) {
    
        this.$el = el;
    
        this.x = 0;
    
        this.y = 0;
    
        this.mouseX = 0;
    
        this.mouseY = 0;
    
        this.radians = 0;
    
        this.easing = 0.1;
    
        this._mousedown = false;
    
        this.$circle = $(".circle", el);
    
        this.$arrowTop = $(".arrow-top", el);
    
        this.$arrowBot = $(".arrow-bot", el);
    
        this.init = function () {
            var _this6 = this;
    
            $(".spotlight").fadeIn(500);
    
            TweenMax.ticker.addEventListener("tick", this.update.bind(this));
    
            $(window).on("mousemove", function (e) {
    
                _this6.mouseX = e.clientX;
    
                _this6.mouseY = e.clientY;
            }).on("mousedown", function (e) {
    
                _this6._mousedown = true;
            }).on("mouseup", function (e) {
    
                _this6._mousedown = false;
            });
        };
    
        this.update = function () {
    
            var dx = this.mouseX - this.x;
    
            this.x += dx * this.easing;
    
            var dy = this.mouseY - this.y;
    
            this.y += dy * this.easing;
    
            var speedX = Math.abs(this.mouseX - this.x);
    
            var speedY = Math.abs(this.mouseY - this.y);
    
            var speed = Math.sqrt(speedX * speedX + speedY * speedY) * -1;
    
            if (speed > -1) {
    
                speed = 0;
            }
    
            var scale = speed / 500 + 1;
    
            if (scale < 0.2) {
    
                scale = 0.2;
            }
    
            var angle = Math.atan2(this.mouseX - this.x, -(this.mouseY - this.y)) * (180 / Math.PI);
    
            TweenMax.to(this.$el, .1, {
    
                x: this.x - this.$el.width() / 2,
    
                y: this.y - this.$el.height() / 2
    
            });
    
            TweenMax.set(this.$circle, {
    
                rotation: angle
    
            });
    
            // cursor arrow
    
            if (this._mousedown) {
    
                // TweenMax.to(this.$circle, 1, {
    
                // 	scaleX: 0.5,
    
                // 	scaleY: 0.5,
    
                // })
    
    
                // TweenMax.to(this.$arrowTop, 1, {
    
                // 	y: 0,
    
                // 	opacity: 1,
    
                // })
    
    
                // TweenMax.to(this.$arrowBot, 1, {
    
                // 	y: 0,
    
                // 	opacity: 1,
    
                // })
    
    
            } else {
    
                TweenMax.to(this.$circle, .5, {
    
                    scaleX: scale,
    
                    scaleY: 1
    
                });
    
                TweenMax.to(this.$arrowTop, 1, {
    
                    y: 50,
    
                    opacity: 0
    
                });
    
                TweenMax.to(this.$arrowBot, 1, {
    
                    y: -50,
    
                    opacity: 0
    
                });
            }
    
            TweenMax.to(".spotlight", 2, {
    
                backgroundImage: "radial-gradient(50% 50% at " + this.mouseX / window.innerWidth * 100 + "% " + this.mouseY / window.innerHeight * 100 + "%, transparent 0, rgba(0, 0, 0, 0.3) 400px)"
    
            });
        };
    }
    
    /***/ })
    
    /******/ });