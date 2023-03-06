function menu() {
    const topMenu = document.querySelector(".top-menu");
    const middleMenu = document.querySelector(".middle-menu");
    const bottomMenu = document.querySelector(".bottom-menu");
    const nameLogo = document.querySelector(".name-logo");
    const navSlide = document.querySelector(".nav-menu-slide");
    

    bottomMenu.classList.toggle("cross");
    middleMenu.classList.toggle("cross");
    topMenu.classList.toggle("cross");
    navSlide.classList.toggle("swipe");

    nameLogo.classList.toggle("hidden");

}

$(document).ready(function() {
    var geometry = $(".geometry");

    geometry.on("mousemove", function(t) {
        var e = -($(window).innerWidth() - 2 - t.pageX) / 60, 
            n = -($(window).innerHeight() - 2 - t.pageY) / 30;
        
           geometry.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg) translate(-50%, -50%); -webkit-transform rotateY(" + e + "deg) rotateX(" + n + "deg) translate(-50%, -50%); -moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg) translate(-50%, -50%)");
     })

    $(window).on("scroll", function() {
        
        if ($(window).scrollTop() > 850) {
            $(".name-logo").css("color", "#FFE9BF");
           
        } else {
            $(".name-logo").css("color", "#D48D22");
        }
    })



})

