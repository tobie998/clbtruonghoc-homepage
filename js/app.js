//Owl carousel
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

$(".owl-3").owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    dots: true
})

//Next and prev button
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

//Tab in course-service page
const main = document.querySelector(".cs-right-main-content");
const btns = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".cs-single-item");

console.log(main);
console.log(btns);

main.addEventListener('click', function(e) {
    console.log(e.target);
    const id = e.target.dataset.id;   //return id of element has data-* property (data-id).
    console.log(id);
    if (id) {
        //add active-btn class when clicking on button
        btns.forEach(function (btn) {
            btn.classList.remove("active-btn");
            e.target.classList.add("active-btn");   //e.target return an element.
        })
        //remove active class from item.
        items.forEach(function (item) {
            item.classList.remove("active-item");
        })
        //add active-item to item when clicking button
        const element = document.getElementById(id);
        console.log(element);
        element.classList.add("active-item");
    }
})

//register button
const register = document.querySelector(".cs-register-btn");

register.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    console.log(id);
    if(id) {
        //remove active-btn from all btn.
        btns.forEach(function (btn) {
            btn.classList.remove("active-btn");
        })
        
        //add active-btn to current on-click btn
        const lastChild = btns[btns.length - 1];
        console.log(lastChild);
        lastChild.classList.add("active-btn");

        //remove active-item from all items
        items.forEach(function (item) {
            item.classList.remove("active-item");
        })

        //add actice-item to item when clicking button
        const element = document.getElementById(id);
        console.log(element);
        element.classList.add("active-item");    
    }
})