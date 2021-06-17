$(".owl-1").owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    items:1
})

$(".owl-2").owlCarousel({
    loop:true,
    items:1,
    margin:10,
    dots:false
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();

    //next btn
    $('.owl-next').click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
    })

    $('.owl-prev').click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
    })
})