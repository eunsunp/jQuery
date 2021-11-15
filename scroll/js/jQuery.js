$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    $('.img-area img').css({
        width: (100 +scroll/20) + "%"
    })
})