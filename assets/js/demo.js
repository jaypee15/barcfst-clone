$(document).ready(function () {
    mobileNav();

    $('.mblMenu').click(function (e) {
        if ($("#sidebar").hasClass('active')) {
            $(".mblMenu").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>');
            $("#sidebar").removeClass("active animated bounceInDown");
            $('body').removeClass("overflow");
            disable_overlay();
        } else {
            $("#sidebar").removeClass("active animated bounceInDown").addClass("active animated bounceInDown");
            $(".mblMenu").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>');
            $("span.global-overlay").remove(); // remove first!
            $('body').append('<span class="global-overlay" style="background: #f8f8f8;"></span>');
            $('body').addClass("overflow");
        }
    });

});

function goSlide(a, b) {
    var c, upSlide;
    if ($("#" + a).length > 0) {
        c = $("#" + a);
    } else if ($("." + a).length > 0) {
        c = $("." + a);
    } else {
        return false;
    }
    if (b) {
        upSlide = c.offset().top - b;
    } else {
        upSlide = c.offset().top;
    }
    $("html, body").animate({
        scrollTop: upSlide
    }, 'slow', function () {
    });
    return false;
}

function backTop() {
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
}

function mobileNav() {
    $('.gw-nav > li > a').click(function () {
        var gw_nav = $('.gw-nav');
        gw_nav.find('li').removeClass('active');
        $('.gw-nav > li > ul > li').removeClass('active');

        var checkElement = $(this).parent();
        var ulDom = checkElement.find('.gw-submenu')[0];

        if (ulDom == undefined) {
            checkElement.addClass('active');
            $('.gw-nav').find('li').find('ul:visible').slideUp();
            return;
        }
        if (ulDom.style.display != 'block') {
            gw_nav.find('li').find('ul:visible').slideUp();
            gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
            gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
            checkElement.removeClass('init-arrow-down');
            checkElement.removeClass('arrow-down');
            checkElement.addClass('arrow-up');
            checkElement.addClass('active');
            checkElement.find('ul').slideDown(300);
        } else {
            checkElement.removeClass('init-arrow-up');
            checkElement.removeClass('arrow-up');
            checkElement.removeClass('active');
            checkElement.addClass('arrow-down');
            checkElement.find('ul').slideUp(300);

        }
    });
    $('.gw-nav > li > ul > li > a').click(function () {
        $(this).parent().parent().parent().removeClass('active');
        $('.gw-nav > li > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.menu-open-button').click(function (){
        $('.mobile-account').toggleClass('open');
    });

};

function enable_overlay() {
    jQuery("span.global-overlay").remove(); // remove first!
    jQuery('body').append('<span class="global-overlay"></span>');
}

function disable_overlay() {
    jQuery("span.global-overlay").remove();
}

