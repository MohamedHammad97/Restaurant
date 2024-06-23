let { top: chefSection } = $("#chefs").offset()
$(window).scroll(function () {
    let windowOffset = $(window).scrollTop()
    if (windowOffset > chefSection -50) {
        $("#navBar .container").css("padding", "0 50px")
        $("#backToTop").fadeIn(1000)
    } else {
        $("#navBar .container").css("padding", "0 12px")
        $("#backToTop").fadeOut(1000)
    }
})

$("#backToTop").click(function () {
    $("html,body").animate({scrollTop:0},100)
})

$(document).ready(function () {
    $(".loader").fadeOut(1000,function () {
        $("#loading").fadeOut(1000,function () {
            $("body").css("overflow","auto")
        })
    })
})

let darkMode = document.getElementById("darkMode")
darkMode.addEventListener("click", function () {
    document.body.classList.toggle("darkTheme")
    if (document.body.classList.contains("darkTheme")) {
        document.querySelector(".icofont-moon").classList.add("d-none");
        document.querySelector(".icofont-sun").classList.replace("d-none","d-block");
    }else {
        document.querySelector(".icofont-moon").classList.replace("d-none","d-block");
        document.querySelector(".icofont-sun").classList.replace("d-block", "d-none");

    }
})

