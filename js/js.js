$( ".of-copy .of-btn-toggle" ).on('click',function() {
  $( ".of-footer-menu" ).slideToggle( "" );
});
$( ".of-additional-btn" ).on('click',function() {
  $( ".of-additional-make" ).toggleClass( "add-additional-make" );
});
$( ".btn-user-menu" ).on('click',function() {
  $( ".user-menu" ).toggleClass( "active-user-menu" );
});
$( ".mo-dots" ).on('click',function() {
  $( ".more-options" ).toggleClass( "active-more-options" );
});
$( ".of-article-metas .meta-like .icon-heart" ).on('click',function() {
  $( ".of-article-metas .meta-like .icon-heart" ).toggleClass( "article-like" );
});
$( ".comment-footer .icon-heart" ).on('click',function() {
  $( ".comment-footer .icon-heart" ).toggleClass( "article-like" );
});
$( ".meta-comments .icon-comments" ).on('click',function() {
  $( ".of-article-comments" ).toggleClass( "article-of-article-comments" );
});



$( ".hide-bio-btn" ).on('click',function() {
  $( ".hide-bio-btn" ).toggleClass( "show-bio" );
  
  $( ".of-user-status" ).slideToggle();
});

/*
$('.swiper-wrapper').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    items:1,
    touchDrag:true,
    autoHeight:false,
    autoplay:true,
});


$('.xof-recommended-users-content').owlCarousel({
    items: 5,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    margin: 0,
    nav: false
});
*/


$(".nav-bars" ).on('click',function() {
  $( ".wrapper-menu" ).toggleClass( "active-menu-wrapper" );
});
$(".header-menu .of-close-menu,.of-drawer" ).on('click',function() {
  $(".wrapper-menu" ).removeClass( "active-menu-wrapper" );
});



$(".nav-search-btn .btn-search" ).on('click',function() {
  $( ".nav-search-btn" ).toggleClass( "active-search" );
});
$(".close-search" ).on('click',function() {
  $( ".nav-search-btn" ).removeClass( "active-search" );
});


$(".btn-make-post" ).on('click',function() {
  $( ".wrapper-panel-make-post" ).toggleClass( "active-panel-make-post" );
});
$(".of-drawer-pmp, .of-panel-cancel" ).on('click',function() {
  $( ".wrapper-panel-make-post" ).removeClass( "active-panel-make-post" );
});

$(".of-wrapper-block-content" ).on('click',function() {
  $( ".wrapper-suscribed-modal" ).toggleClass( "active-suscribed-modal" );
});
$(".of-drawer-pmp, .wrapper-suscribed-modal .btn-cancel" ).on('click',function() {
  $( ".wrapper-suscribed-modal" ).removeClass( "active-suscribed-modal" );
});



$(".login .of-form .of-btn" ).on('click',function() {
  $( ".login .wrap-of-forms" ).addClass( "active-disable-inputs" );
});