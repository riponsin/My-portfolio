$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 20){
            $('.scrol-up-btn').addClass("show");
        }else{
            $('.scrol-up-btn').removeClass("show");
        }
    });
      // slide up script
    $('.scrol-up-btn').click(function(){
         $('html').animate({scrollTop:0})
    });
    // toggle manu/nevber script
    $('.manu-btn').click(function(){
    $('.navbar .manu').toggleClass("active");
    $('.manu-btn i').toggleClass("active");
    })
    // typed animation script
    var typed = new Typed(".typing",{
        strings:["YouTuber","Webdevloper", "Blogger", "Designer", "Freelancer"],
        typespeed:100,
        backSpeed:150,
        loop:true
    });
    var typed = new Typed(".typing-2",{
        strings:["YouTuber","Webdevloper", "Blogger", "Designer", "Freelancer"],
        typespeed:100,
        backSpeed:150,
        loop:true
    });
    // owl carousel script
    $(".owl-carousel").owlCarousel({
      margin:20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        1000: {
          items: 2,
          nav: false
        },
        1100: {
          items: 3,
          nav:false
        }
      }
      });
});